goog.provide('drawio_ui.core');
if((typeof drawio_ui !== 'undefined') && (typeof drawio_ui.core !== 'undefined') && (typeof drawio_ui.core.current_route !== 'undefined')){
} else {
drawio_ui.core.current_route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"route-params","route-params",2111411055),cljs.core.PersistentArrayMap.EMPTY], null));
}
drawio_ui.core.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"home","home",-74557309),"upload",new cljs.core.Keyword(null,"upload","upload",-255769218),"diagrams",new cljs.core.Keyword(null,"diagrams","diagrams",7396602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diagram/",new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"diagram","diagram",1347243758)])], null);
drawio_ui.core.parse_url = (function drawio_ui$core$parse_url(url){
var match = bidi.bidi.match_route(drawio_ui.core.routes,url);
var or__5002__auto__ = match;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"route-params","route-params",2111411055),cljs.core.PersistentArrayMap.EMPTY], null);
}
});
drawio_ui.core.set_route_BANG_ = (function drawio_ui$core$set_route_BANG_(route){
return cljs.core.reset_BANG_(drawio_ui.core.current_route,route);
});
drawio_ui.core.handle_route_change = (function drawio_ui$core$handle_route_change(){
var path = window.location.pathname;
var route = drawio_ui.core.parse_url(path);
return drawio_ui.core.set_route_BANG_(route);
});
drawio_ui.core.header = (function drawio_ui$core$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Draw.io C4 Diagram Comparison"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav","nav.nav",-223269137),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/upload"], null),"Upload"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/diagrams"], null),"Diagrams"], null)], null)], null)], null);
});
drawio_ui.core.home_page = (function drawio_ui$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to Draw.io C4 Diagram Comparison"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Upload your Draw.io diagrams and compare versions with advanced diff analysis."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.features","div.features",-519807727),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.feature","div.feature",1772300869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Upload & Parse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Support for PNG with embedded XML, raw XML, and paste data from Draw.io"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.feature","div.feature",1772300869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Version Timeline"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Automatic versioning with timestamp-based history"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.feature","div.feature",1772300869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Advanced Comparison"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Deep diff analysis with similarity scoring and change categorization"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.actions","div.actions",1521484722),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/upload"], null),"Start Uploading"], null)], null)], null)], null);
});
drawio_ui.core.upload_page = (function drawio_ui$core$upload_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Upload Diagram"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.upload.upload_component], null)], null)], null);
});
drawio_ui.core.diagrams_page = (function drawio_ui$core$diagrams_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Your Diagrams"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Diagram list will be implemented here"], null)], null)], null);
});
drawio_ui.core.diagram_page = (function drawio_ui$core$diagram_page(){
var map__23613 = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawio_ui.core.current_route));
var map__23613__$1 = cljs.core.__destructure_map(map__23613);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Diagram: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Diagram details and comparison view will be implemented here"], null)], null)], null);
});
drawio_ui.core.not_found_page = (function drawio_ui$core$not_found_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Page Not Found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The page you're looking for doesn't exist."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Go Home"], null)], null)], null);
});
drawio_ui.core.app = (function drawio_ui$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.core.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.main","main.main",849355503),(function (){var G__23618 = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawio_ui.core.current_route));
var G__23618__$1 = (((G__23618 instanceof cljs.core.Keyword))?G__23618.fqn:null);
switch (G__23618__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.core.home_page], null);

break;
case "upload":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.core.upload_page], null);

break;
case "diagrams":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.core.diagrams_page], null);

break;
case "diagram":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.core.diagram_page], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.core.not_found_page], null);

}
})()], null)], null);
});
drawio_ui.core.init = (function drawio_ui$core$init(){
drawio_ui.storage.init_BANG_();

drawio_ui.core.handle_route_change();

window.addEventListener("popstate",drawio_ui.core.handle_route_change);

document.addEventListener("click",(function (e){
var target = e.target;
var href = target.getAttribute("href");
if(cljs.core.truth_((function (){var and__5000__auto__ = href;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",target.tagName);
if(and__5000__auto____$1){
var and__5000__auto____$2 = cljs.core.not(target.getAttribute("target"));
if(and__5000__auto____$2){
return href.startsWith("/");
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
e.preventDefault();

history.pushState(null,"",href);

return drawio_ui.core.handle_route_change();
} else {
return null;
}
}));

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.core.app], null),document.getElementById("app"));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Draw.io UI initialized!"], 0));
});
goog.exportSymbol('drawio_ui.core.init', drawio_ui.core.init);

//# sourceMappingURL=drawio_ui.core.js.map
