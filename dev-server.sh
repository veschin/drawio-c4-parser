#!/bin/bash

# Development server with hot reload for both ClojureScript and Tailwind CSS

echo "Starting Draw.io Parser development environment..."

# Check if npm dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing npm dependencies..."
    npm install
fi

# Build CSS initially
echo "Building initial CSS..."
npm run css-build

# Start development servers
echo "Starting hot reload servers..."
echo "- Tailwind CSS will watch for changes and rebuild automatically"
echo "- Shadow-cljs will compile ClojureScript and provide hot reload"
echo "- Frontend will be available at http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all servers"

npm run dev