#!/bin/bash

# Default directory and mode
SEARCH_DIR="."
HISTORY_FILE="$HOME/.drawio-compare-history"
SOLO_MODE=false
INPUT_FILES=()
OUTPUT_FILE=""
DEFAULT_OUTPUT_DIR="/tmp/drawio-parser"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --dir)
            SEARCH_DIR="$2"
            shift 2
            ;;
        --solo)
            SOLO_MODE=true
            shift
            ;;
        --input)
            if [ ${#INPUT_FILES[@]} -ge 2 ]; then
                gum log --level error "Maximum 2 input files allowed"
                exit 1
            fi
            INPUT_FILES+=("$2")
            shift 2
            ;;
        --out)
            OUTPUT_FILE="$2"
            shift 2
            ;;
        -h|--help)
            gum log --level info "Usage: $0 [--dir DIRECTORY] [--solo] [--input FILE] [--out FILE]"
            gum log --level info "  --dir DIRECTORY    Directory to search for files (default: current directory)"
            gum log --level info "  --solo             Parse single file instead of comparing two files"
            gum log --level info "  --input FILE       Specify input file (can be used twice, max 2 files)"
            gum log --level info "  --out FILE         Save diff output to file"
            gum log --level info "  -h, --help         Show this help message"
            exit 0
            ;;
        *)
            gum log --level error "Unknown option: $1"
            gum log --level info "Use --help for usage information"
            exit 1
            ;;
    esac
done

# Check if directory exists
if [ ! -d "$SEARCH_DIR" ]; then
    gum log --level error "Directory '$SEARCH_DIR' does not exist"
    exit 1
fi

# Check if required tools are installed
command -v gum >/dev/null 2>&1 || { echo "ERROR: gum is required but not installed. Install with: go install github.com/charmbracelet/gum@latest"; exit 1; }
command -v curl >/dev/null 2>&1 || { gum log --level error "curl is required but not installed"; exit 1; }
command -v jq >/dev/null 2>&1 || { gum log --level error "jq is required but not installed"; exit 1; }

# Create default output directory
mkdir -p "$DEFAULT_OUTPUT_DIR"

# Set API endpoint (adjust if needed)
API_URL="http://localhost:8080/api/v1"

# Resolve input files if specified
if [ ${#INPUT_FILES[@]} -gt 0 ]; then
    RESOLVED_FILES=()
    for file in "${INPUT_FILES[@]}"; do
        if [[ "$file" == /* ]]; then
            # Absolute path
            if [ ! -f "$file" ]; then
                gum log --level error "File not found: $file"
                exit 1
            fi
            RESOLVED_FILES+=("$file")
        else
            # Relative path, search in SEARCH_DIR
            found_file=$(find "$SEARCH_DIR" -name "$file" -type f | head -1)
            if [ -z "$found_file" ]; then
                gum log --level error "File not found in $SEARCH_DIR: $file"
                exit 1
            fi
            RESOLVED_FILES+=("$found_file")
        fi
    done
    
    # Override file selection
    if [ ${#RESOLVED_FILES[@]} -eq 1 ]; then
        SOLO_MODE=true
        FILE1="${RESOLVED_FILES[0]}"
    elif [ ${#RESOLVED_FILES[@]} -eq 2 ]; then
        SOLO_MODE=false
        FILE1="${RESOLVED_FILES[0]}"
        FILE2="${RESOLVED_FILES[1]}"
    fi
    
    gum log --level info "Using specified input files"
fi

# Interactive file selection if no input files specified
if [ ${#INPUT_FILES[@]} -eq 0 ]; then
    if [ "$SOLO_MODE" = true ]; then
        gum log --level info "Starting single file parsing"
    else
        gum log --level info "Starting file comparison"
    fi
    gum log --level info "Searching in: $SEARCH_DIR"

    # Get all .drawio, .xml, and .png files in specified directory and subdirectories
    FILES=$(find "$SEARCH_DIR" -name "*.drawio" -o -name "*.xml" -o -name "*.drawio.xml" -o -name "*.png" -o -name "*.drawio.png" | sort)

    if [ -z "$FILES" ]; then
        gum log --level error "No .drawio, .xml, or .png files found in directory: $SEARCH_DIR"
        exit 1
    fi

    # Load history if exists
    HISTORY_FILES=""
    if [ -f "$HISTORY_FILE" ]; then
        HISTORY_FILES=$(cat "$HISTORY_FILE" | grep "^$SEARCH_DIR" | head -10 | cut -d: -f2-)
    fi

    # Combine history and current files
    if [ -n "$HISTORY_FILES" ]; then
        ALL_FILES=$(printf "%s\n%s" "$HISTORY_FILES" "$FILES" | awk '!seen[$0]++')
    else
        ALL_FILES="$FILES"
    fi

    if [ "$SOLO_MODE" = true ]; then
        # Solo mode - select only one file
        gum log --level info "Select file to parse"
        FILE1=$(echo "$ALL_FILES" | gum filter --placeholder="Type to search for file...")
        if [ -z "$FILE1" ]; then
            gum log --level error "No file selected"
            exit 1
        fi
        
        # Add to history
        echo "$SEARCH_DIR:$FILE1" >> "$HISTORY_FILE"
        
        # Keep only last 20 entries in history
        tail -20 "$HISTORY_FILE" > "${HISTORY_FILE}.tmp" && mv "${HISTORY_FILE}.tmp" "$HISTORY_FILE"
        
        gum log --level info "Parsing file: $FILE1"
    else
        # Comparison mode - select two files
        gum log --level info "Select first file"
        FILE1=$(echo "$ALL_FILES" | gum filter --placeholder="Type to search for first file...")
        if [ -z "$FILE1" ]; then
            gum log --level error "No file selected"
            exit 1
        fi

        # Add to history
        echo "$SEARCH_DIR:$FILE1" >> "$HISTORY_FILE"

        # Select second file (excluding the first one)
        gum log --level info "Select second file" 
        REMAINING_FILES=$(echo "$ALL_FILES" | grep -v "^$FILE1$")
        FILE2=$(echo "$REMAINING_FILES" | gum filter --placeholder="Type to search for second file...")
        if [ -z "$FILE2" ]; then
            gum log --level error "No second file selected"
            exit 1
        fi

        # Add to history
        echo "$SEARCH_DIR:$FILE2" >> "$HISTORY_FILE"

        # Keep only last 20 entries in history
        tail -20 "$HISTORY_FILE" > "${HISTORY_FILE}.tmp" && mv "${HISTORY_FILE}.tmp" "$HISTORY_FILE"

        gum log --level info "Comparing files:"
        gum log --level info "  File 1: $FILE1"
        gum log --level info "  File 2: $FILE2"
    fi
else
    gum log --level info "Using specified input files:"
    if [ "$SOLO_MODE" = true ]; then
        gum log --level info "  File: $FILE1"
    else
        gum log --level info "  File 1: $FILE1"
        gum log --level info "  File 2: $FILE2"
    fi
fi

# Display summary of changes from comparison result
display_comparison_summary() {
    local comparison_json="$1"
    
    # Extract counts using jq
    local elements_added=$(echo "$comparison_json" | jq -r '.summary.elements.added // 0')
    local elements_removed=$(echo "$comparison_json" | jq -r '.summary.elements.removed // 0')
    local elements_modified=$(echo "$comparison_json" | jq -r '.summary.elements.modified // 0')
    local elements_unchanged=$(echo "$comparison_json" | jq -r '.summary.elements.unchanged // 0')
    
    local relationships_added=$(echo "$comparison_json" | jq -r '.summary.relationships.added // 0')
    local relationships_removed=$(echo "$comparison_json" | jq -r '.summary.relationships.removed // 0')
    local relationships_modified=$(echo "$comparison_json" | jq -r '.summary.relationships.modified // 0')
    local relationships_unchanged=$(echo "$comparison_json" | jq -r '.summary.relationships.unchanged // 0')
    
    echo
    gum style --foreground 212 --bold "COMPARISON SUMMARY"
    
    # Create formatted table data for elements
    local elements_summary="Elements,$elements_added,$elements_removed,$elements_modified,$elements_unchanged"
    local relationships_summary="Relationships,$relationships_added,$relationships_removed,$relationships_modified,$relationships_unchanged"
    
    # Display as table using gum
    {
        echo "Type,Added,Removed,Modified,Unchanged"
        echo "$elements_summary"
        echo "$relationships_summary"
    } | column -t -s','
    
    echo
    
    # Show detailed changes if any exist
    if [ "$elements_added" != "0" ] || [ "$elements_removed" != "0" ] || [ "$elements_modified" != "0" ] || [ "$relationships_added" != "0" ] || [ "$relationships_removed" != "0" ] || [ "$relationships_modified" != "0" ]; then
        gum style --foreground 214 --bold "DETAILED CHANGES:"
        echo
        
        # Show added elements
        if [ "$elements_added" != "0" ]; then
            gum style --foreground 10 "+ Added Elements:"
            echo "$comparison_json" | jq -r '.elements.added[]? | "  \(.name // .label // .id) (\(.type // "Unknown"))"' | \
                while read line; do gum style --foreground 10 "  + $line"; done
            echo
        fi
        
        # Show removed elements
        if [ "$elements_removed" != "0" ]; then
            gum style --foreground 9 "- Removed Elements:"
            echo "$comparison_json" | jq -r '.elements.removed[]? | "  \(.name // .label // .id) (\(.type // "Unknown"))"' | \
                while read line; do gum style --foreground 9 "  - $line"; done
            echo
        fi
        
        # Show modified elements
        if [ "$elements_modified" != "0" ]; then
            gum style --foreground 11 "~ Modified Elements:"
            echo "$comparison_json" | jq -r '.elements.modified[]? | "  \(.name) - \(.changes | keys | join(", ")) changed"' | \
                while read line; do gum style --foreground 11 "  ~ $line"; done
            echo
        fi
        
        # Show added relationships
        if [ "$relationships_added" != "0" ]; then
            gum style --foreground 10 "+ Added Relationships:"
            echo "$comparison_json" | jq -r '.relationships.added[]? | "  \(.source_name // .source) -> \(.target_name // .target)"' | \
                while read line; do gum style --foreground 10 "  + $line"; done
            echo
        fi
        
        # Show removed relationships
        if [ "$relationships_removed" != "0" ]; then
            gum style --foreground 9 "- Removed Relationships:"
            echo "$comparison_json" | jq -r '.relationships.removed[]? | "  \(.source_name // .source) -> \(.target_name // .target)"' | \
                while read line; do gum style --foreground 9 "  - $line"; done
            echo
        fi
        
        # Show modified relationships
        if [ "$relationships_modified" != "0" ]; then
            gum style --foreground 11 "~ Modified Relationships:"
            echo "$comparison_json" | jq -r '.relationships.modified[]? | "  \(.source_name // .source) -> \(.target_name // .target) - \(.changes | keys | join(", ")) changed"' | \
                while read line; do gum style --foreground 11 "  ~ $line"; done
            echo
        fi
    else
        gum style --foreground 2 --bold "No differences found between files"
        echo
    fi
}

# Parse single file for solo mode
parse_single_file() {
    local file="$1"
    
    gum log --level info "Parsing file: $(gum style --foreground 212 "$(basename "$file")")"
    
    # Determine endpoint based on file type
    local endpoint content_type file_type
    if [[ "$file" =~ \.(png|PNG)$ ]]; then
        endpoint="$API_URL/parse/png"
        content_type="application/octet-stream"
        file_type="PNG"
    elif head -c 10 "$file" | grep -q "%"; then
        endpoint="$API_URL/parse/paste"
        content_type="text/plain"
        file_type="Paste Data"
    else
        endpoint="$API_URL/parse/export"
        content_type="application/xml"
        file_type="XML Export"
    fi
    
    gum log --level debug "Detected file type: $file_type"
    gum log --level debug "Using endpoint: $endpoint"
    
    RESPONSE=$(curl -s -X POST "$endpoint" -H "Content-Type: $content_type" --data-binary "@$file")
    if [ $? -eq 0 ]; then
        local elem_count=$(echo "$RESPONSE" | jq '.elements | length' 2>/dev/null || echo "0")
        local rel_count=$(echo "$RESPONSE" | jq '.relationships | length' 2>/dev/null || echo "0")
        
        gum log --level info "Successfully parsed $(gum style --foreground 10 "$elem_count") elements and $(gum style --foreground 10 "$rel_count") relationships"
        
        # Save result
        local timestamp=$(date +"%Y%m%d_%H%M%S")
        local output_file="$DEFAULT_OUTPUT_DIR/parse_$(basename "$file" | sed 's/\.[^.]*$//')_${timestamp}.json"
        echo "$RESPONSE" | jq '.' > "$output_file"
        
        # Show formatted result using gum
        gum log --level info "Parsing results:"
        echo
        jq . < "$output_file"
        echo
        
        gum log --level info "Results saved to: $(gum style --foreground 212 "$output_file")"
        
        return 0
    else
        gum log --level error "Failed to parse file"
        # Get error details
        ERROR_DETAILS=$(curl -s -w "HTTP Status: %{http_code}\n" -X POST "$endpoint" -H "Content-Type: $content_type" --data-binary "@$file" 2>&1)
        gum log --level error "Response details:"
        echo "$ERROR_DETAILS" | gum format --type code
        return 1
    fi
}

if [ "$SOLO_MODE" = true ]; then
    # Solo mode - parse single file
    parse_single_file "$FILE1"
    exit $?
else
    # Comparison mode - use the new compare endpoint
    gum log --level info "Comparing files..."
    gum log --level info "  File 1: $(basename "$FILE1")"
    gum log --level info "  File 2: $(basename "$FILE2")"
    
    # Use compare endpoint with multipart upload via curl
    gum log --level debug "Sending request to: $API_URL/compare"
    COMPARISON_RESULT=$(curl -s -X POST "$API_URL/compare" -F "file1=@$FILE1" -F "file2=@$FILE2")
    HTTP_STATUS=$?
    
    if [ $HTTP_STATUS -eq 0 ]; then
        gum log --level info "Successfully compared files"
        
        # Display comparison summary with gum formatting
        display_comparison_summary "$COMPARISON_RESULT"
        
        # Generate output filename if not specified
        if [ -z "$OUTPUT_FILE" ]; then
            TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
            OUTPUT_FILE="$DEFAULT_OUTPUT_DIR/comparison_${TIMESTAMP}.json"
        fi
        
        # Save full comparison result as JSON with pretty formatting
        echo "$COMPARISON_RESULT" | jq '.' > "$OUTPUT_FILE"
        
        # Show formatted JSON using gum
        gum log --level info "Full comparison results:"
        echo
        jq . < "$OUTPUT_FILE"
        echo
        
        gum log --level info "Results saved to: $(gum style --foreground 212 "$OUTPUT_FILE")"
        gum log --level info "Comparison complete"
    else
        gum log --level error "Failed to compare files"
        # Get error details with curl
        gum log --level debug "Getting error details..."
        ERROR_DETAILS=$(curl -s -w "HTTP Status: %{http_code}\n" -X POST "$API_URL/compare" -F "file1=@$FILE1" -F "file2=@$FILE2" 2>&1)
        gum log --level error "Response details:"
        echo "$ERROR_DETAILS" | gum format --type code
        exit 1
    fi
fi
