goog.provide('drawio_ui.storage');
drawio_ui.storage.storage_keys = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"diagrams","diagrams",7396602),"drawio-diagrams",new cljs.core.Keyword(null,"settings","settings",1556144875),"drawio-app-settings",new cljs.core.Keyword(null,"comparison-cache","comparison-cache",-1046628153),"drawio-comparison-cache"], null);
drawio_ui.storage.default_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-versions-per-diagram","max-versions-per-diagram",-1721569549),(50),new cljs.core.Keyword(null,"auto-cleanup-enabled","auto-cleanup-enabled",-345975193),true,new cljs.core.Keyword(null,"max-total-storage-mb","max-total-storage-mb",-1393270407),(50),new cljs.core.Keyword(null,"thumbnail-size","thumbnail-size",1408774436),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"height","height",1025178622),(150)], null)], null),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-comparison-view","default-comparison-view",-762664938),new cljs.core.Keyword(null,"side-by-side","side-by-side",898301870),new cljs.core.Keyword(null,"show-statistics","show-statistics",1958008289),true,new cljs.core.Keyword(null,"auto-save-editor","auto-save-editor",179745459),true], null)], null);
drawio_ui.storage.get_storage_item = (function drawio_ui$storage$get_storage_item(key){
var temp__5804__auto__ = localStorage.getItem(key);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data);
}catch (e23076){if((e23076 instanceof Error)){
var e = e23076;
console.warn(["Failed to parse localStorage item: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),e);

return null;
} else {
throw e23076;

}
}} else {
return null;
}
});
drawio_ui.storage.set_storage_item = (function drawio_ui$storage$set_storage_item(key,data){
try{localStorage.setItem(key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));

return true;
}catch (e23077){if((e23077 instanceof Error)){
var e = e23077;
console.error(["Failed to save to localStorage: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),e);

return false;
} else {
throw e23077;

}
}});
drawio_ui.storage.get_diagrams = (function drawio_ui$storage$get_diagrams(){
var or__5002__auto__ = drawio_ui.storage.get_storage_item(new cljs.core.Keyword(null,"diagrams","diagrams",7396602).cljs$core$IFn$_invoke$arity$1(drawio_ui.storage.storage_keys));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
drawio_ui.storage.get_settings = (function drawio_ui$storage$get_settings(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([drawio_ui.storage.default_settings,drawio_ui.storage.get_storage_item(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(drawio_ui.storage.storage_keys))], 0));
});
drawio_ui.storage.get_comparison_cache = (function drawio_ui$storage$get_comparison_cache(){
var or__5002__auto__ = drawio_ui.storage.get_storage_item(new cljs.core.Keyword(null,"comparison-cache","comparison-cache",-1046628153).cljs$core$IFn$_invoke$arity$1(drawio_ui.storage.storage_keys));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
drawio_ui.storage.save_diagrams = (function drawio_ui$storage$save_diagrams(diagrams){
return drawio_ui.storage.set_storage_item(new cljs.core.Keyword(null,"diagrams","diagrams",7396602).cljs$core$IFn$_invoke$arity$1(drawio_ui.storage.storage_keys),diagrams);
});
drawio_ui.storage.save_settings = (function drawio_ui$storage$save_settings(settings){
return drawio_ui.storage.set_storage_item(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(drawio_ui.storage.storage_keys),settings);
});
drawio_ui.storage.save_comparison_cache = (function drawio_ui$storage$save_comparison_cache(cache){
return drawio_ui.storage.set_storage_item(new cljs.core.Keyword(null,"comparison-cache","comparison-cache",-1046628153).cljs$core$IFn$_invoke$arity$1(drawio_ui.storage.storage_keys),cache);
});
drawio_ui.storage.generate_diagram_id = (function drawio_ui$storage$generate_diagram_id(){
return ["diagram-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((10000)))].join('');
});
drawio_ui.storage.generate_version_id = (function drawio_ui$storage$generate_version_id(){
return ["v-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).toISOString())].join('');
});
drawio_ui.storage.add_diagram = (function drawio_ui$storage$add_diagram(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23134 = arguments.length;
var i__5727__auto___23135 = (0);
while(true){
if((i__5727__auto___23135 < len__5726__auto___23134)){
args__5732__auto__.push((arguments[i__5727__auto___23135]));

var G__23136 = (i__5727__auto___23135 + (1));
i__5727__auto___23135 = G__23136;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return drawio_ui.storage.add_diagram.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(drawio_ui.storage.add_diagram.cljs$core$IFn$_invoke$arity$variadic = (function (name,xml_data,parsed_json,source_type,p__23093){
var map__23094 = p__23093;
var map__23094__$1 = cljs.core.__destructure_map(map__23094);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var diagrams = drawio_ui.storage.get_diagrams();
var diagram_id = drawio_ui.storage.generate_diagram_id();
var version_id = drawio_ui.storage.generate_version_id();
var timestamp = (new Date()).toISOString();
var version = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"version-id","version-id",1227701833),version_id,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"source-type","source-type",-237000407),source_type,new cljs.core.Keyword(null,"source-filename","source-filename",-439814700),filename,new cljs.core.Keyword(null,"raw-xml","raw-xml",-420038290),xml_data,new cljs.core.Keyword(null,"parsed-json","parsed-json",-388580442),parsed_json,new cljs.core.Keyword(null,"thumbnail-data","thumbnail-data",-924635553),null,new cljs.core.Keyword(null,"change-summary","change-summary",516184020),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_type,new cljs.core.Keyword(null,"upload","upload",-255769218)))?"Initial upload":"New version")], null);
var diagram = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"created-at","created-at",-89248644),timestamp,new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),timestamp,new cljs.core.Keyword(null,"tags","tags",1771418977),(function (){var or__5002__auto__ = tags;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5002__auto__ = description;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})()], null),new cljs.core.Keyword(null,"versions","versions",536521978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [version], null),new cljs.core.Keyword(null,"current-version","current-version",326454225),version_id], null);
var updated_diagrams = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(diagrams,diagram_id,diagram);
if(cljs.core.truth_(drawio_ui.storage.save_diagrams(updated_diagrams))){
return diagram_id;
} else {
return null;
}
}));

(drawio_ui.storage.add_diagram.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(drawio_ui.storage.add_diagram.cljs$lang$applyTo = (function (seq23086){
var G__23087 = cljs.core.first(seq23086);
var seq23086__$1 = cljs.core.next(seq23086);
var G__23088 = cljs.core.first(seq23086__$1);
var seq23086__$2 = cljs.core.next(seq23086__$1);
var G__23089 = cljs.core.first(seq23086__$2);
var seq23086__$3 = cljs.core.next(seq23086__$2);
var G__23092 = cljs.core.first(seq23086__$3);
var seq23086__$4 = cljs.core.next(seq23086__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23087,G__23088,G__23089,G__23092,seq23086__$4);
}));

drawio_ui.storage.add_version = (function drawio_ui$storage$add_version(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23137 = arguments.length;
var i__5727__auto___23138 = (0);
while(true){
if((i__5727__auto___23138 < len__5726__auto___23137)){
args__5732__auto__.push((arguments[i__5727__auto___23138]));

var G__23139 = (i__5727__auto___23138 + (1));
i__5727__auto___23138 = G__23139;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return drawio_ui.storage.add_version.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(drawio_ui.storage.add_version.cljs$core$IFn$_invoke$arity$variadic = (function (diagram_id,xml_data,parsed_json,source_type,p__23112){
var map__23114 = p__23112;
var map__23114__$1 = cljs.core.__destructure_map(map__23114);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23114__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var change_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23114__$1,new cljs.core.Keyword(null,"change-summary","change-summary",516184020));
var diagrams = drawio_ui.storage.get_diagrams();
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(diagrams,diagram_id);
if(cljs.core.truth_(temp__5804__auto__)){
var diagram = temp__5804__auto__;
var version_id = drawio_ui.storage.generate_version_id();
var timestamp = (new Date()).toISOString();
var version = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"version-id","version-id",1227701833),version_id,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"source-type","source-type",-237000407),source_type,new cljs.core.Keyword(null,"source-filename","source-filename",-439814700),filename,new cljs.core.Keyword(null,"raw-xml","raw-xml",-420038290),xml_data,new cljs.core.Keyword(null,"parsed-json","parsed-json",-388580442),parsed_json,new cljs.core.Keyword(null,"thumbnail-data","thumbnail-data",-924635553),null,new cljs.core.Keyword(null,"change-summary","change-summary",516184020),(function (){var or__5002__auto__ = change_summary;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Updated version";
}
})()], null);
var updated_versions = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"versions","versions",536521978).cljs$core$IFn$_invoke$arity$1(diagram),version);
var updated_diagram = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(diagram,new cljs.core.Keyword(null,"versions","versions",536521978),updated_versions),new cljs.core.Keyword(null,"current-version","current-version",326454225),version_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"last-modified","last-modified",1593411791)], null),timestamp);
var updated_diagrams = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(diagrams,diagram_id,updated_diagram);
if(cljs.core.truth_(drawio_ui.storage.save_diagrams(updated_diagrams))){
return version_id;
} else {
return null;
}
} else {
return null;
}
}));

(drawio_ui.storage.add_version.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(drawio_ui.storage.add_version.cljs$lang$applyTo = (function (seq23103){
var G__23105 = cljs.core.first(seq23103);
var seq23103__$1 = cljs.core.next(seq23103);
var G__23106 = cljs.core.first(seq23103__$1);
var seq23103__$2 = cljs.core.next(seq23103__$1);
var G__23107 = cljs.core.first(seq23103__$2);
var seq23103__$3 = cljs.core.next(seq23103__$2);
var G__23108 = cljs.core.first(seq23103__$3);
var seq23103__$4 = cljs.core.next(seq23103__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23105,G__23106,G__23107,G__23108,seq23103__$4);
}));

drawio_ui.storage.get_diagram = (function drawio_ui$storage$get_diagram(diagram_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(drawio_ui.storage.get_diagrams(),diagram_id);
});
drawio_ui.storage.get_version = (function drawio_ui$storage$get_version(diagram_id,version_id){
var temp__5804__auto__ = drawio_ui.storage.get_diagram(diagram_id);
if(cljs.core.truth_(temp__5804__auto__)){
var diagram = temp__5804__auto__;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23126_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(version_id,new cljs.core.Keyword(null,"version-id","version-id",1227701833).cljs$core$IFn$_invoke$arity$1(p1__23126_SHARP_));
}),new cljs.core.Keyword(null,"versions","versions",536521978).cljs$core$IFn$_invoke$arity$1(diagram)));
} else {
return null;
}
});
drawio_ui.storage.delete_diagram = (function drawio_ui$storage$delete_diagram(diagram_id){
var diagrams = drawio_ui.storage.get_diagrams();
var updated_diagrams = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(diagrams,diagram_id);
return drawio_ui.storage.save_diagrams(updated_diagrams);
});
drawio_ui.storage.cleanup_old_versions = (function drawio_ui$storage$cleanup_old_versions(diagram_id){
var settings = drawio_ui.storage.get_settings();
var max_versions = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"storage","storage",1867247511),new cljs.core.Keyword(null,"max-versions-per-diagram","max-versions-per-diagram",-1721569549)], null));
var diagrams = drawio_ui.storage.get_diagrams();
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(diagrams,diagram_id);
if(cljs.core.truth_(temp__5804__auto__)){
var diagram = temp__5804__auto__;
var versions = new cljs.core.Keyword(null,"versions","versions",536521978).cljs$core$IFn$_invoke$arity$1(diagram);
var sorted_versions = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(function (p1__23131_SHARP_,p2__23130_SHARP_){
return cljs.core.compare(p2__23130_SHARP_,p1__23131_SHARP_);
}),versions);
var kept_versions = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_versions,sorted_versions);
var updated_diagram = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(diagram,new cljs.core.Keyword(null,"versions","versions",536521978),kept_versions);
var updated_diagrams = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(diagrams,diagram_id,updated_diagram);
return drawio_ui.storage.save_diagrams(updated_diagrams);
} else {
return null;
}
});
drawio_ui.storage.get_storage_stats = (function drawio_ui$storage$get_storage_stats(){
var total_size = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23132_SHARP_){
return localStorage.getItem(p1__23132_SHARP_).length();
}),Object.keys(localStorage)));
var diagram_count = cljs.core.count(drawio_ui.storage.get_diagrams());
var version_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23133_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"versions","versions",536521978).cljs$core$IFn$_invoke$arity$1(p1__23133_SHARP_));
}),cljs.core.vals(drawio_ui.storage.get_diagrams())));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-size-bytes","total-size-bytes",-417091317),total_size,new cljs.core.Keyword(null,"total-size-mb","total-size-mb",1584500132),((total_size / (1024)) / (1024)),new cljs.core.Keyword(null,"diagram-count","diagram-count",-94324192),diagram_count,new cljs.core.Keyword(null,"version-count","version-count",1530440022),version_count], null);
});
drawio_ui.storage.init_BANG_ = (function drawio_ui$storage$init_BANG_(){
if(cljs.core.truth_(drawio_ui.storage.get_storage_item(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(drawio_ui.storage.storage_keys)))){
} else {
drawio_ui.storage.save_settings(drawio_ui.storage.default_settings);
}

var stats = drawio_ui.storage.get_storage_stats();
return console.log("Storage initialized:",cljs.core.clj__GT_js(stats));
});

//# sourceMappingURL=drawio_ui.storage.js.map
