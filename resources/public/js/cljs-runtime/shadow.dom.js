goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12630 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12630(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12633 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12633(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11747 = coll;
var G__11748 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11747,G__11748) : shadow.dom.lazy_native_coll_seq.call(null,G__11747,G__11748));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11754 = arguments.length;
switch (G__11754) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11756 = arguments.length;
switch (G__11756) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11758 = arguments.length;
switch (G__11758) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11760 = arguments.length;
switch (G__11760) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11762 = arguments.length;
switch (G__11762) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11768 = arguments.length;
switch (G__11768) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11769){if((e11769 instanceof Object)){
var e = e11769;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11769;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11778 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11779 = null;
var count__11780 = (0);
var i__11781 = (0);
while(true){
if((i__11781 < count__11780)){
var el = chunk__11779.cljs$core$IIndexed$_nth$arity$2(null,i__11781);
var handler_12663__$1 = ((function (seq__11778,chunk__11779,count__11780,i__11781,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11778,chunk__11779,count__11780,i__11781,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12663__$1);


var G__12666 = seq__11778;
var G__12667 = chunk__11779;
var G__12668 = count__11780;
var G__12669 = (i__11781 + (1));
seq__11778 = G__12666;
chunk__11779 = G__12667;
count__11780 = G__12668;
i__11781 = G__12669;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11778);
if(temp__5804__auto__){
var seq__11778__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11778__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11778__$1);
var G__12676 = cljs.core.chunk_rest(seq__11778__$1);
var G__12677 = c__5525__auto__;
var G__12678 = cljs.core.count(c__5525__auto__);
var G__12679 = (0);
seq__11778 = G__12676;
chunk__11779 = G__12677;
count__11780 = G__12678;
i__11781 = G__12679;
continue;
} else {
var el = cljs.core.first(seq__11778__$1);
var handler_12680__$1 = ((function (seq__11778,chunk__11779,count__11780,i__11781,el,seq__11778__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11778,chunk__11779,count__11780,i__11781,el,seq__11778__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12680__$1);


var G__12681 = cljs.core.next(seq__11778__$1);
var G__12682 = null;
var G__12683 = (0);
var G__12684 = (0);
seq__11778 = G__12681;
chunk__11779 = G__12682;
count__11780 = G__12683;
i__11781 = G__12684;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11813 = arguments.length;
switch (G__11813) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11814 = cljs.core.seq(events);
var chunk__11815 = null;
var count__11816 = (0);
var i__11817 = (0);
while(true){
if((i__11817 < count__11816)){
var vec__11829 = chunk__11815.cljs$core$IIndexed$_nth$arity$2(null,i__11817);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11829,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11829,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12690 = seq__11814;
var G__12691 = chunk__11815;
var G__12692 = count__11816;
var G__12693 = (i__11817 + (1));
seq__11814 = G__12690;
chunk__11815 = G__12691;
count__11816 = G__12692;
i__11817 = G__12693;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11814);
if(temp__5804__auto__){
var seq__11814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11814__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11814__$1);
var G__12695 = cljs.core.chunk_rest(seq__11814__$1);
var G__12696 = c__5525__auto__;
var G__12697 = cljs.core.count(c__5525__auto__);
var G__12698 = (0);
seq__11814 = G__12695;
chunk__11815 = G__12696;
count__11816 = G__12697;
i__11817 = G__12698;
continue;
} else {
var vec__11832 = cljs.core.first(seq__11814__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12699 = cljs.core.next(seq__11814__$1);
var G__12700 = null;
var G__12701 = (0);
var G__12702 = (0);
seq__11814 = G__12699;
chunk__11815 = G__12700;
count__11816 = G__12701;
i__11817 = G__12702;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11835 = cljs.core.seq(styles);
var chunk__11836 = null;
var count__11837 = (0);
var i__11838 = (0);
while(true){
if((i__11838 < count__11837)){
var vec__11845 = chunk__11836.cljs$core$IIndexed$_nth$arity$2(null,i__11838);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11845,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12704 = seq__11835;
var G__12705 = chunk__11836;
var G__12706 = count__11837;
var G__12707 = (i__11838 + (1));
seq__11835 = G__12704;
chunk__11836 = G__12705;
count__11837 = G__12706;
i__11838 = G__12707;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11835);
if(temp__5804__auto__){
var seq__11835__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11835__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11835__$1);
var G__12709 = cljs.core.chunk_rest(seq__11835__$1);
var G__12710 = c__5525__auto__;
var G__12711 = cljs.core.count(c__5525__auto__);
var G__12712 = (0);
seq__11835 = G__12709;
chunk__11836 = G__12710;
count__11837 = G__12711;
i__11838 = G__12712;
continue;
} else {
var vec__11860 = cljs.core.first(seq__11835__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11860,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12713 = cljs.core.next(seq__11835__$1);
var G__12714 = null;
var G__12715 = (0);
var G__12716 = (0);
seq__11835 = G__12713;
chunk__11836 = G__12714;
count__11837 = G__12715;
i__11838 = G__12716;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11863_12717 = key;
var G__11863_12718__$1 = (((G__11863_12717 instanceof cljs.core.Keyword))?G__11863_12717.fqn:null);
switch (G__11863_12718__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12722 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12722,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12722,"aria-");
}
})())){
el.setAttribute(ks_12722,value);
} else {
(el[ks_12722] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11909){
var map__11910 = p__11909;
var map__11910__$1 = cljs.core.__destructure_map(map__11910);
var props = map__11910__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11910__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11911 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11911,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11911,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11911,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11915 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11915,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11915;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11918 = arguments.length;
switch (G__11918) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11920){
var vec__11921 = p__11920;
var seq__11922 = cljs.core.seq(vec__11921);
var first__11923 = cljs.core.first(seq__11922);
var seq__11922__$1 = cljs.core.next(seq__11922);
var nn = first__11923;
var first__11923__$1 = cljs.core.first(seq__11922__$1);
var seq__11922__$2 = cljs.core.next(seq__11922__$1);
var np = first__11923__$1;
var nc = seq__11922__$2;
var node = vec__11921;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11928 = nn;
var G__11929 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11928,G__11929) : create_fn.call(null,G__11928,G__11929));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11930 = nn;
var G__11931 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11930,G__11931) : create_fn.call(null,G__11930,G__11931));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11939 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11939,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11939,(1),null);
var seq__11943_12724 = cljs.core.seq(node_children);
var chunk__11944_12725 = null;
var count__11945_12726 = (0);
var i__11946_12727 = (0);
while(true){
if((i__11946_12727 < count__11945_12726)){
var child_struct_12728 = chunk__11944_12725.cljs$core$IIndexed$_nth$arity$2(null,i__11946_12727);
var children_12729 = shadow.dom.dom_node(child_struct_12728);
if(cljs.core.seq_QMARK_(children_12729)){
var seq__12033_12730 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12729));
var chunk__12035_12731 = null;
var count__12036_12732 = (0);
var i__12037_12733 = (0);
while(true){
if((i__12037_12733 < count__12036_12732)){
var child_12735 = chunk__12035_12731.cljs$core$IIndexed$_nth$arity$2(null,i__12037_12733);
if(cljs.core.truth_(child_12735)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12735);


var G__12738 = seq__12033_12730;
var G__12739 = chunk__12035_12731;
var G__12740 = count__12036_12732;
var G__12741 = (i__12037_12733 + (1));
seq__12033_12730 = G__12738;
chunk__12035_12731 = G__12739;
count__12036_12732 = G__12740;
i__12037_12733 = G__12741;
continue;
} else {
var G__12743 = seq__12033_12730;
var G__12744 = chunk__12035_12731;
var G__12745 = count__12036_12732;
var G__12746 = (i__12037_12733 + (1));
seq__12033_12730 = G__12743;
chunk__12035_12731 = G__12744;
count__12036_12732 = G__12745;
i__12037_12733 = G__12746;
continue;
}
} else {
var temp__5804__auto___12747 = cljs.core.seq(seq__12033_12730);
if(temp__5804__auto___12747){
var seq__12033_12748__$1 = temp__5804__auto___12747;
if(cljs.core.chunked_seq_QMARK_(seq__12033_12748__$1)){
var c__5525__auto___12749 = cljs.core.chunk_first(seq__12033_12748__$1);
var G__12750 = cljs.core.chunk_rest(seq__12033_12748__$1);
var G__12751 = c__5525__auto___12749;
var G__12752 = cljs.core.count(c__5525__auto___12749);
var G__12753 = (0);
seq__12033_12730 = G__12750;
chunk__12035_12731 = G__12751;
count__12036_12732 = G__12752;
i__12037_12733 = G__12753;
continue;
} else {
var child_12754 = cljs.core.first(seq__12033_12748__$1);
if(cljs.core.truth_(child_12754)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12754);


var G__12755 = cljs.core.next(seq__12033_12748__$1);
var G__12756 = null;
var G__12757 = (0);
var G__12758 = (0);
seq__12033_12730 = G__12755;
chunk__12035_12731 = G__12756;
count__12036_12732 = G__12757;
i__12037_12733 = G__12758;
continue;
} else {
var G__12759 = cljs.core.next(seq__12033_12748__$1);
var G__12760 = null;
var G__12761 = (0);
var G__12762 = (0);
seq__12033_12730 = G__12759;
chunk__12035_12731 = G__12760;
count__12036_12732 = G__12761;
i__12037_12733 = G__12762;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12729);
}


var G__12766 = seq__11943_12724;
var G__12767 = chunk__11944_12725;
var G__12768 = count__11945_12726;
var G__12769 = (i__11946_12727 + (1));
seq__11943_12724 = G__12766;
chunk__11944_12725 = G__12767;
count__11945_12726 = G__12768;
i__11946_12727 = G__12769;
continue;
} else {
var temp__5804__auto___12770 = cljs.core.seq(seq__11943_12724);
if(temp__5804__auto___12770){
var seq__11943_12771__$1 = temp__5804__auto___12770;
if(cljs.core.chunked_seq_QMARK_(seq__11943_12771__$1)){
var c__5525__auto___12772 = cljs.core.chunk_first(seq__11943_12771__$1);
var G__12773 = cljs.core.chunk_rest(seq__11943_12771__$1);
var G__12774 = c__5525__auto___12772;
var G__12775 = cljs.core.count(c__5525__auto___12772);
var G__12776 = (0);
seq__11943_12724 = G__12773;
chunk__11944_12725 = G__12774;
count__11945_12726 = G__12775;
i__11946_12727 = G__12776;
continue;
} else {
var child_struct_12777 = cljs.core.first(seq__11943_12771__$1);
var children_12778 = shadow.dom.dom_node(child_struct_12777);
if(cljs.core.seq_QMARK_(children_12778)){
var seq__12045_12779 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12778));
var chunk__12047_12780 = null;
var count__12048_12781 = (0);
var i__12049_12782 = (0);
while(true){
if((i__12049_12782 < count__12048_12781)){
var child_12783 = chunk__12047_12780.cljs$core$IIndexed$_nth$arity$2(null,i__12049_12782);
if(cljs.core.truth_(child_12783)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12783);


var G__12784 = seq__12045_12779;
var G__12785 = chunk__12047_12780;
var G__12786 = count__12048_12781;
var G__12787 = (i__12049_12782 + (1));
seq__12045_12779 = G__12784;
chunk__12047_12780 = G__12785;
count__12048_12781 = G__12786;
i__12049_12782 = G__12787;
continue;
} else {
var G__12788 = seq__12045_12779;
var G__12789 = chunk__12047_12780;
var G__12790 = count__12048_12781;
var G__12791 = (i__12049_12782 + (1));
seq__12045_12779 = G__12788;
chunk__12047_12780 = G__12789;
count__12048_12781 = G__12790;
i__12049_12782 = G__12791;
continue;
}
} else {
var temp__5804__auto___12792__$1 = cljs.core.seq(seq__12045_12779);
if(temp__5804__auto___12792__$1){
var seq__12045_12793__$1 = temp__5804__auto___12792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12045_12793__$1)){
var c__5525__auto___12794 = cljs.core.chunk_first(seq__12045_12793__$1);
var G__12795 = cljs.core.chunk_rest(seq__12045_12793__$1);
var G__12796 = c__5525__auto___12794;
var G__12797 = cljs.core.count(c__5525__auto___12794);
var G__12798 = (0);
seq__12045_12779 = G__12795;
chunk__12047_12780 = G__12796;
count__12048_12781 = G__12797;
i__12049_12782 = G__12798;
continue;
} else {
var child_12799 = cljs.core.first(seq__12045_12793__$1);
if(cljs.core.truth_(child_12799)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12799);


var G__12800 = cljs.core.next(seq__12045_12793__$1);
var G__12801 = null;
var G__12802 = (0);
var G__12803 = (0);
seq__12045_12779 = G__12800;
chunk__12047_12780 = G__12801;
count__12048_12781 = G__12802;
i__12049_12782 = G__12803;
continue;
} else {
var G__12804 = cljs.core.next(seq__12045_12793__$1);
var G__12805 = null;
var G__12806 = (0);
var G__12807 = (0);
seq__12045_12779 = G__12804;
chunk__12047_12780 = G__12805;
count__12048_12781 = G__12806;
i__12049_12782 = G__12807;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12778);
}


var G__12808 = cljs.core.next(seq__11943_12771__$1);
var G__12809 = null;
var G__12810 = (0);
var G__12811 = (0);
seq__11943_12724 = G__12808;
chunk__11944_12725 = G__12809;
count__11945_12726 = G__12810;
i__11946_12727 = G__12811;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12076 = cljs.core.seq(node);
var chunk__12077 = null;
var count__12078 = (0);
var i__12079 = (0);
while(true){
if((i__12079 < count__12078)){
var n = chunk__12077.cljs$core$IIndexed$_nth$arity$2(null,i__12079);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12850 = seq__12076;
var G__12851 = chunk__12077;
var G__12852 = count__12078;
var G__12853 = (i__12079 + (1));
seq__12076 = G__12850;
chunk__12077 = G__12851;
count__12078 = G__12852;
i__12079 = G__12853;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12076);
if(temp__5804__auto__){
var seq__12076__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12076__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12076__$1);
var G__12854 = cljs.core.chunk_rest(seq__12076__$1);
var G__12855 = c__5525__auto__;
var G__12856 = cljs.core.count(c__5525__auto__);
var G__12857 = (0);
seq__12076 = G__12854;
chunk__12077 = G__12855;
count__12078 = G__12856;
i__12079 = G__12857;
continue;
} else {
var n = cljs.core.first(seq__12076__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12874 = cljs.core.next(seq__12076__$1);
var G__12875 = null;
var G__12876 = (0);
var G__12877 = (0);
seq__12076 = G__12874;
chunk__12077 = G__12875;
count__12078 = G__12876;
i__12079 = G__12877;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12105 = arguments.length;
switch (G__12105) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12107 = arguments.length;
switch (G__12107) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12115 = arguments.length;
switch (G__12115) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12924 = arguments.length;
var i__5727__auto___12925 = (0);
while(true){
if((i__5727__auto___12925 < len__5726__auto___12924)){
args__5732__auto__.push((arguments[i__5727__auto___12925]));

var G__12926 = (i__5727__auto___12925 + (1));
i__5727__auto___12925 = G__12926;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12147_12927 = cljs.core.seq(nodes);
var chunk__12148_12928 = null;
var count__12149_12929 = (0);
var i__12150_12930 = (0);
while(true){
if((i__12150_12930 < count__12149_12929)){
var node_12932 = chunk__12148_12928.cljs$core$IIndexed$_nth$arity$2(null,i__12150_12930);
fragment.appendChild(shadow.dom._to_dom(node_12932));


var G__12933 = seq__12147_12927;
var G__12934 = chunk__12148_12928;
var G__12935 = count__12149_12929;
var G__12936 = (i__12150_12930 + (1));
seq__12147_12927 = G__12933;
chunk__12148_12928 = G__12934;
count__12149_12929 = G__12935;
i__12150_12930 = G__12936;
continue;
} else {
var temp__5804__auto___12937 = cljs.core.seq(seq__12147_12927);
if(temp__5804__auto___12937){
var seq__12147_12939__$1 = temp__5804__auto___12937;
if(cljs.core.chunked_seq_QMARK_(seq__12147_12939__$1)){
var c__5525__auto___12940 = cljs.core.chunk_first(seq__12147_12939__$1);
var G__12941 = cljs.core.chunk_rest(seq__12147_12939__$1);
var G__12942 = c__5525__auto___12940;
var G__12943 = cljs.core.count(c__5525__auto___12940);
var G__12944 = (0);
seq__12147_12927 = G__12941;
chunk__12148_12928 = G__12942;
count__12149_12929 = G__12943;
i__12150_12930 = G__12944;
continue;
} else {
var node_12946 = cljs.core.first(seq__12147_12939__$1);
fragment.appendChild(shadow.dom._to_dom(node_12946));


var G__12947 = cljs.core.next(seq__12147_12939__$1);
var G__12948 = null;
var G__12949 = (0);
var G__12950 = (0);
seq__12147_12927 = G__12947;
chunk__12148_12928 = G__12948;
count__12149_12929 = G__12949;
i__12150_12930 = G__12950;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12144){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12144));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12175_12951 = cljs.core.seq(scripts);
var chunk__12176_12952 = null;
var count__12177_12953 = (0);
var i__12178_12954 = (0);
while(true){
if((i__12178_12954 < count__12177_12953)){
var vec__12186_12956 = chunk__12176_12952.cljs$core$IIndexed$_nth$arity$2(null,i__12178_12954);
var script_tag_12957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12186_12956,(0),null);
var script_body_12958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12186_12956,(1),null);
eval(script_body_12958);


var G__12959 = seq__12175_12951;
var G__12960 = chunk__12176_12952;
var G__12961 = count__12177_12953;
var G__12962 = (i__12178_12954 + (1));
seq__12175_12951 = G__12959;
chunk__12176_12952 = G__12960;
count__12177_12953 = G__12961;
i__12178_12954 = G__12962;
continue;
} else {
var temp__5804__auto___12963 = cljs.core.seq(seq__12175_12951);
if(temp__5804__auto___12963){
var seq__12175_12964__$1 = temp__5804__auto___12963;
if(cljs.core.chunked_seq_QMARK_(seq__12175_12964__$1)){
var c__5525__auto___12967 = cljs.core.chunk_first(seq__12175_12964__$1);
var G__12968 = cljs.core.chunk_rest(seq__12175_12964__$1);
var G__12969 = c__5525__auto___12967;
var G__12970 = cljs.core.count(c__5525__auto___12967);
var G__12971 = (0);
seq__12175_12951 = G__12968;
chunk__12176_12952 = G__12969;
count__12177_12953 = G__12970;
i__12178_12954 = G__12971;
continue;
} else {
var vec__12190_12972 = cljs.core.first(seq__12175_12964__$1);
var script_tag_12973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12190_12972,(0),null);
var script_body_12974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12190_12972,(1),null);
eval(script_body_12974);


var G__12975 = cljs.core.next(seq__12175_12964__$1);
var G__12976 = null;
var G__12977 = (0);
var G__12978 = (0);
seq__12175_12951 = G__12975;
chunk__12176_12952 = G__12976;
count__12177_12953 = G__12977;
i__12178_12954 = G__12978;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12195){
var vec__12197 = p__12195;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12197,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12197,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12216 = arguments.length;
switch (G__12216) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12235 = cljs.core.seq(style_keys);
var chunk__12236 = null;
var count__12237 = (0);
var i__12238 = (0);
while(true){
if((i__12238 < count__12237)){
var it = chunk__12236.cljs$core$IIndexed$_nth$arity$2(null,i__12238);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12990 = seq__12235;
var G__12991 = chunk__12236;
var G__12992 = count__12237;
var G__12993 = (i__12238 + (1));
seq__12235 = G__12990;
chunk__12236 = G__12991;
count__12237 = G__12992;
i__12238 = G__12993;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12235);
if(temp__5804__auto__){
var seq__12235__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12235__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12235__$1);
var G__12996 = cljs.core.chunk_rest(seq__12235__$1);
var G__12997 = c__5525__auto__;
var G__12998 = cljs.core.count(c__5525__auto__);
var G__12999 = (0);
seq__12235 = G__12996;
chunk__12236 = G__12997;
count__12237 = G__12998;
i__12238 = G__12999;
continue;
} else {
var it = cljs.core.first(seq__12235__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13001 = cljs.core.next(seq__12235__$1);
var G__13002 = null;
var G__13003 = (0);
var G__13004 = (0);
seq__12235 = G__13001;
chunk__12236 = G__13002;
count__12237 = G__13003;
i__12238 = G__13004;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12267,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12301 = k12267;
var G__12301__$1 = (((G__12301 instanceof cljs.core.Keyword))?G__12301.fqn:null);
switch (G__12301__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12267,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12308){
var vec__12309 = p__12308;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12309,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12309,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12266){
var self__ = this;
var G__12266__$1 = this;
return (new cljs.core.RecordIter((0),G__12266__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12269,other12270){
var self__ = this;
var this12269__$1 = this;
return (((!((other12270 == null)))) && ((((this12269__$1.constructor === other12270.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12269__$1.x,other12270.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12269__$1.y,other12270.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12269__$1.__extmap,other12270.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12267){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12326 = k12267;
var G__12326__$1 = (((G__12326 instanceof cljs.core.Keyword))?G__12326.fqn:null);
switch (G__12326__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12267);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12266){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12331 = cljs.core.keyword_identical_QMARK_;
var expr__12332 = k__5309__auto__;
if(cljs.core.truth_((pred__12331.cljs$core$IFn$_invoke$arity$2 ? pred__12331.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12332) : pred__12331.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12332)))){
return (new shadow.dom.Coordinate(G__12266,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12331.cljs$core$IFn$_invoke$arity$2 ? pred__12331.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12332) : pred__12331.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12332)))){
return (new shadow.dom.Coordinate(self__.x,G__12266,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12266),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12266){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12266,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12294){
var extmap__5342__auto__ = (function (){var G__12340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12294,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12340);
} else {
return G__12340;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12294),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12294),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12345,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12354 = k12345;
var G__12354__$1 = (((G__12354 instanceof cljs.core.Keyword))?G__12354.fqn:null);
switch (G__12354__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12345,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12359){
var vec__12360 = p__12359;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12360,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12360,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12344){
var self__ = this;
var G__12344__$1 = this;
return (new cljs.core.RecordIter((0),G__12344__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12346,other12347){
var self__ = this;
var this12346__$1 = this;
return (((!((other12347 == null)))) && ((((this12346__$1.constructor === other12347.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12346__$1.w,other12347.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12346__$1.h,other12347.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12346__$1.__extmap,other12347.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12345){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12382 = k12345;
var G__12382__$1 = (((G__12382 instanceof cljs.core.Keyword))?G__12382.fqn:null);
switch (G__12382__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12345);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12344){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12383 = cljs.core.keyword_identical_QMARK_;
var expr__12384 = k__5309__auto__;
if(cljs.core.truth_((pred__12383.cljs$core$IFn$_invoke$arity$2 ? pred__12383.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12384) : pred__12383.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12384)))){
return (new shadow.dom.Size(G__12344,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12383.cljs$core$IFn$_invoke$arity$2 ? pred__12383.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12384) : pred__12383.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12384)))){
return (new shadow.dom.Size(self__.w,G__12344,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12344),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12344){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12344,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12349){
var extmap__5342__auto__ = (function (){var G__12403 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12349,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12349)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12403);
} else {
return G__12403;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12349),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12349),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13097 = (i + (1));
var G__13098 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13097;
ret = G__13098;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12437){
var vec__12438 = p__12437;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12443 = arguments.length;
switch (G__12443) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13109 = ps;
var G__13110 = (i + (1));
el__$1 = G__13109;
i = G__13110;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12456 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12456,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12456,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12456,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12459_13115 = cljs.core.seq(props);
var chunk__12460_13116 = null;
var count__12461_13117 = (0);
var i__12462_13118 = (0);
while(true){
if((i__12462_13118 < count__12461_13117)){
var vec__12476_13119 = chunk__12460_13116.cljs$core$IIndexed$_nth$arity$2(null,i__12462_13118);
var k_13120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12476_13119,(0),null);
var v_13121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12476_13119,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13120);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13120),v_13121);


var G__13122 = seq__12459_13115;
var G__13123 = chunk__12460_13116;
var G__13124 = count__12461_13117;
var G__13125 = (i__12462_13118 + (1));
seq__12459_13115 = G__13122;
chunk__12460_13116 = G__13123;
count__12461_13117 = G__13124;
i__12462_13118 = G__13125;
continue;
} else {
var temp__5804__auto___13126 = cljs.core.seq(seq__12459_13115);
if(temp__5804__auto___13126){
var seq__12459_13127__$1 = temp__5804__auto___13126;
if(cljs.core.chunked_seq_QMARK_(seq__12459_13127__$1)){
var c__5525__auto___13128 = cljs.core.chunk_first(seq__12459_13127__$1);
var G__13129 = cljs.core.chunk_rest(seq__12459_13127__$1);
var G__13130 = c__5525__auto___13128;
var G__13131 = cljs.core.count(c__5525__auto___13128);
var G__13132 = (0);
seq__12459_13115 = G__13129;
chunk__12460_13116 = G__13130;
count__12461_13117 = G__13131;
i__12462_13118 = G__13132;
continue;
} else {
var vec__12486_13133 = cljs.core.first(seq__12459_13127__$1);
var k_13134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486_13133,(0),null);
var v_13135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486_13133,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13134);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13134),v_13135);


var G__13136 = cljs.core.next(seq__12459_13127__$1);
var G__13137 = null;
var G__13138 = (0);
var G__13139 = (0);
seq__12459_13115 = G__13136;
chunk__12460_13116 = G__13137;
count__12461_13117 = G__13138;
i__12462_13118 = G__13139;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12529 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12529,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12529,(1),null);
var seq__12532_13140 = cljs.core.seq(node_children);
var chunk__12534_13141 = null;
var count__12535_13142 = (0);
var i__12536_13143 = (0);
while(true){
if((i__12536_13143 < count__12535_13142)){
var child_struct_13144 = chunk__12534_13141.cljs$core$IIndexed$_nth$arity$2(null,i__12536_13143);
if((!((child_struct_13144 == null)))){
if(typeof child_struct_13144 === 'string'){
var text_13145 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13145),child_struct_13144].join(''));
} else {
var children_13146 = shadow.dom.svg_node(child_struct_13144);
if(cljs.core.seq_QMARK_(children_13146)){
var seq__12567_13147 = cljs.core.seq(children_13146);
var chunk__12569_13148 = null;
var count__12570_13149 = (0);
var i__12571_13150 = (0);
while(true){
if((i__12571_13150 < count__12570_13149)){
var child_13151 = chunk__12569_13148.cljs$core$IIndexed$_nth$arity$2(null,i__12571_13150);
if(cljs.core.truth_(child_13151)){
node.appendChild(child_13151);


var G__13152 = seq__12567_13147;
var G__13153 = chunk__12569_13148;
var G__13154 = count__12570_13149;
var G__13155 = (i__12571_13150 + (1));
seq__12567_13147 = G__13152;
chunk__12569_13148 = G__13153;
count__12570_13149 = G__13154;
i__12571_13150 = G__13155;
continue;
} else {
var G__13156 = seq__12567_13147;
var G__13157 = chunk__12569_13148;
var G__13158 = count__12570_13149;
var G__13159 = (i__12571_13150 + (1));
seq__12567_13147 = G__13156;
chunk__12569_13148 = G__13157;
count__12570_13149 = G__13158;
i__12571_13150 = G__13159;
continue;
}
} else {
var temp__5804__auto___13160 = cljs.core.seq(seq__12567_13147);
if(temp__5804__auto___13160){
var seq__12567_13161__$1 = temp__5804__auto___13160;
if(cljs.core.chunked_seq_QMARK_(seq__12567_13161__$1)){
var c__5525__auto___13162 = cljs.core.chunk_first(seq__12567_13161__$1);
var G__13163 = cljs.core.chunk_rest(seq__12567_13161__$1);
var G__13164 = c__5525__auto___13162;
var G__13165 = cljs.core.count(c__5525__auto___13162);
var G__13166 = (0);
seq__12567_13147 = G__13163;
chunk__12569_13148 = G__13164;
count__12570_13149 = G__13165;
i__12571_13150 = G__13166;
continue;
} else {
var child_13167 = cljs.core.first(seq__12567_13161__$1);
if(cljs.core.truth_(child_13167)){
node.appendChild(child_13167);


var G__13173 = cljs.core.next(seq__12567_13161__$1);
var G__13174 = null;
var G__13175 = (0);
var G__13176 = (0);
seq__12567_13147 = G__13173;
chunk__12569_13148 = G__13174;
count__12570_13149 = G__13175;
i__12571_13150 = G__13176;
continue;
} else {
var G__13177 = cljs.core.next(seq__12567_13161__$1);
var G__13178 = null;
var G__13179 = (0);
var G__13180 = (0);
seq__12567_13147 = G__13177;
chunk__12569_13148 = G__13178;
count__12570_13149 = G__13179;
i__12571_13150 = G__13180;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13146);
}
}


var G__13182 = seq__12532_13140;
var G__13183 = chunk__12534_13141;
var G__13184 = count__12535_13142;
var G__13185 = (i__12536_13143 + (1));
seq__12532_13140 = G__13182;
chunk__12534_13141 = G__13183;
count__12535_13142 = G__13184;
i__12536_13143 = G__13185;
continue;
} else {
var G__13186 = seq__12532_13140;
var G__13187 = chunk__12534_13141;
var G__13188 = count__12535_13142;
var G__13189 = (i__12536_13143 + (1));
seq__12532_13140 = G__13186;
chunk__12534_13141 = G__13187;
count__12535_13142 = G__13188;
i__12536_13143 = G__13189;
continue;
}
} else {
var temp__5804__auto___13190 = cljs.core.seq(seq__12532_13140);
if(temp__5804__auto___13190){
var seq__12532_13191__$1 = temp__5804__auto___13190;
if(cljs.core.chunked_seq_QMARK_(seq__12532_13191__$1)){
var c__5525__auto___13192 = cljs.core.chunk_first(seq__12532_13191__$1);
var G__13193 = cljs.core.chunk_rest(seq__12532_13191__$1);
var G__13194 = c__5525__auto___13192;
var G__13195 = cljs.core.count(c__5525__auto___13192);
var G__13196 = (0);
seq__12532_13140 = G__13193;
chunk__12534_13141 = G__13194;
count__12535_13142 = G__13195;
i__12536_13143 = G__13196;
continue;
} else {
var child_struct_13197 = cljs.core.first(seq__12532_13191__$1);
if((!((child_struct_13197 == null)))){
if(typeof child_struct_13197 === 'string'){
var text_13199 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13199),child_struct_13197].join(''));
} else {
var children_13200 = shadow.dom.svg_node(child_struct_13197);
if(cljs.core.seq_QMARK_(children_13200)){
var seq__12581_13201 = cljs.core.seq(children_13200);
var chunk__12583_13202 = null;
var count__12584_13203 = (0);
var i__12585_13204 = (0);
while(true){
if((i__12585_13204 < count__12584_13203)){
var child_13205 = chunk__12583_13202.cljs$core$IIndexed$_nth$arity$2(null,i__12585_13204);
if(cljs.core.truth_(child_13205)){
node.appendChild(child_13205);


var G__13210 = seq__12581_13201;
var G__13211 = chunk__12583_13202;
var G__13212 = count__12584_13203;
var G__13213 = (i__12585_13204 + (1));
seq__12581_13201 = G__13210;
chunk__12583_13202 = G__13211;
count__12584_13203 = G__13212;
i__12585_13204 = G__13213;
continue;
} else {
var G__13214 = seq__12581_13201;
var G__13215 = chunk__12583_13202;
var G__13216 = count__12584_13203;
var G__13217 = (i__12585_13204 + (1));
seq__12581_13201 = G__13214;
chunk__12583_13202 = G__13215;
count__12584_13203 = G__13216;
i__12585_13204 = G__13217;
continue;
}
} else {
var temp__5804__auto___13220__$1 = cljs.core.seq(seq__12581_13201);
if(temp__5804__auto___13220__$1){
var seq__12581_13222__$1 = temp__5804__auto___13220__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12581_13222__$1)){
var c__5525__auto___13223 = cljs.core.chunk_first(seq__12581_13222__$1);
var G__13224 = cljs.core.chunk_rest(seq__12581_13222__$1);
var G__13225 = c__5525__auto___13223;
var G__13226 = cljs.core.count(c__5525__auto___13223);
var G__13227 = (0);
seq__12581_13201 = G__13224;
chunk__12583_13202 = G__13225;
count__12584_13203 = G__13226;
i__12585_13204 = G__13227;
continue;
} else {
var child_13229 = cljs.core.first(seq__12581_13222__$1);
if(cljs.core.truth_(child_13229)){
node.appendChild(child_13229);


var G__13230 = cljs.core.next(seq__12581_13222__$1);
var G__13231 = null;
var G__13232 = (0);
var G__13233 = (0);
seq__12581_13201 = G__13230;
chunk__12583_13202 = G__13231;
count__12584_13203 = G__13232;
i__12585_13204 = G__13233;
continue;
} else {
var G__13234 = cljs.core.next(seq__12581_13222__$1);
var G__13235 = null;
var G__13236 = (0);
var G__13237 = (0);
seq__12581_13201 = G__13234;
chunk__12583_13202 = G__13235;
count__12584_13203 = G__13236;
i__12585_13204 = G__13237;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13200);
}
}


var G__13239 = cljs.core.next(seq__12532_13191__$1);
var G__13240 = null;
var G__13241 = (0);
var G__13242 = (0);
seq__12532_13140 = G__13239;
chunk__12534_13141 = G__13240;
count__12535_13142 = G__13241;
i__12536_13143 = G__13242;
continue;
} else {
var G__13243 = cljs.core.next(seq__12532_13191__$1);
var G__13244 = null;
var G__13245 = (0);
var G__13246 = (0);
seq__12532_13140 = G__13243;
chunk__12534_13141 = G__13244;
count__12535_13142 = G__13245;
i__12536_13143 = G__13246;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13250 = arguments.length;
var i__5727__auto___13251 = (0);
while(true){
if((i__5727__auto___13251 < len__5726__auto___13250)){
args__5732__auto__.push((arguments[i__5727__auto___13251]));

var G__13252 = (i__5727__auto___13251 + (1));
i__5727__auto___13251 = G__13252;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12611){
var G__12612 = cljs.core.first(seq12611);
var seq12611__$1 = cljs.core.next(seq12611);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12612,seq12611__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
