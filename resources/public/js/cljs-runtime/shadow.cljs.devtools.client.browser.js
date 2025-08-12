goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21548 = arguments.length;
var i__5727__auto___21549 = (0);
while(true){
if((i__5727__auto___21549 < len__5726__auto___21548)){
args__5732__auto__.push((arguments[i__5727__auto___21549]));

var G__21550 = (i__5727__auto___21549 + (1));
i__5727__auto___21549 = G__21550;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21089){
var G__21090 = cljs.core.first(seq21089);
var seq21089__$1 = cljs.core.next(seq21089);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21090,seq21089__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21098 = cljs.core.seq(sources);
var chunk__21099 = null;
var count__21100 = (0);
var i__21101 = (0);
while(true){
if((i__21101 < count__21100)){
var map__21106 = chunk__21099.cljs$core$IIndexed$_nth$arity$2(null,i__21101);
var map__21106__$1 = cljs.core.__destructure_map(map__21106);
var src = map__21106__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21107){var e_21560 = e21107;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21560);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21560.message)].join('')));
}

var G__21561 = seq__21098;
var G__21562 = chunk__21099;
var G__21563 = count__21100;
var G__21564 = (i__21101 + (1));
seq__21098 = G__21561;
chunk__21099 = G__21562;
count__21100 = G__21563;
i__21101 = G__21564;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21098);
if(temp__5804__auto__){
var seq__21098__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21098__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21098__$1);
var G__21565 = cljs.core.chunk_rest(seq__21098__$1);
var G__21566 = c__5525__auto__;
var G__21567 = cljs.core.count(c__5525__auto__);
var G__21568 = (0);
seq__21098 = G__21565;
chunk__21099 = G__21566;
count__21100 = G__21567;
i__21101 = G__21568;
continue;
} else {
var map__21109 = cljs.core.first(seq__21098__$1);
var map__21109__$1 = cljs.core.__destructure_map(map__21109);
var src = map__21109__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21110){var e_21569 = e21110;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21569);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21569.message)].join('')));
}

var G__21570 = cljs.core.next(seq__21098__$1);
var G__21571 = null;
var G__21572 = (0);
var G__21573 = (0);
seq__21098 = G__21570;
chunk__21099 = G__21571;
count__21100 = G__21572;
i__21101 = G__21573;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21111 = cljs.core.seq(js_requires);
var chunk__21112 = null;
var count__21113 = (0);
var i__21114 = (0);
while(true){
if((i__21114 < count__21113)){
var js_ns = chunk__21112.cljs$core$IIndexed$_nth$arity$2(null,i__21114);
var require_str_21574 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21574);


var G__21575 = seq__21111;
var G__21576 = chunk__21112;
var G__21577 = count__21113;
var G__21578 = (i__21114 + (1));
seq__21111 = G__21575;
chunk__21112 = G__21576;
count__21113 = G__21577;
i__21114 = G__21578;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21111);
if(temp__5804__auto__){
var seq__21111__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21111__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21111__$1);
var G__21583 = cljs.core.chunk_rest(seq__21111__$1);
var G__21584 = c__5525__auto__;
var G__21585 = cljs.core.count(c__5525__auto__);
var G__21586 = (0);
seq__21111 = G__21583;
chunk__21112 = G__21584;
count__21113 = G__21585;
i__21114 = G__21586;
continue;
} else {
var js_ns = cljs.core.first(seq__21111__$1);
var require_str_21587 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21587);


var G__21588 = cljs.core.next(seq__21111__$1);
var G__21589 = null;
var G__21590 = (0);
var G__21591 = (0);
seq__21111 = G__21588;
chunk__21112 = G__21589;
count__21113 = G__21590;
i__21114 = G__21591;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21121){
var map__21122 = p__21121;
var map__21122__$1 = cljs.core.__destructure_map(map__21122);
var msg = map__21122__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21122__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21122__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21124(s__21125){
return (new cljs.core.LazySeq(null,(function (){
var s__21125__$1 = s__21125;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21125__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21134 = cljs.core.first(xs__6360__auto__);
var map__21134__$1 = cljs.core.__destructure_map(map__21134);
var src = map__21134__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21134__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21134__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21125__$1,map__21134,map__21134__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21122,map__21122__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21124_$_iter__21126(s__21127){
return (new cljs.core.LazySeq(null,((function (s__21125__$1,map__21134,map__21134__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21122,map__21122__$1,msg,info,reload_info){
return (function (){
var s__21127__$1 = s__21127;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21127__$1);
if(temp__5804__auto____$1){
var s__21127__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21127__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21127__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21129 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21128 = (0);
while(true){
if((i__21128 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21128);
cljs.core.chunk_append(b__21129,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21592 = (i__21128 + (1));
i__21128 = G__21592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21129),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21124_$_iter__21126(cljs.core.chunk_rest(s__21127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21129),null);
}
} else {
var warning = cljs.core.first(s__21127__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21124_$_iter__21126(cljs.core.rest(s__21127__$2)));
}
} else {
return null;
}
break;
}
});})(s__21125__$1,map__21134,map__21134__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21122,map__21122__$1,msg,info,reload_info))
,null,null));
});})(s__21125__$1,map__21134,map__21134__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21122,map__21122__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21124(cljs.core.rest(s__21125__$1)));
} else {
var G__21593 = cljs.core.rest(s__21125__$1);
s__21125__$1 = G__21593;
continue;
}
} else {
var G__21594 = cljs.core.rest(s__21125__$1);
s__21125__$1 = G__21594;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21138_21595 = cljs.core.seq(warnings);
var chunk__21139_21596 = null;
var count__21140_21597 = (0);
var i__21141_21598 = (0);
while(true){
if((i__21141_21598 < count__21140_21597)){
var map__21147_21599 = chunk__21139_21596.cljs$core$IIndexed$_nth$arity$2(null,i__21141_21598);
var map__21147_21600__$1 = cljs.core.__destructure_map(map__21147_21599);
var w_21601 = map__21147_21600__$1;
var msg_21602__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21600__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21600__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21600__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21600__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21605)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21603),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21604),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21602__$1)].join(''));


var G__21606 = seq__21138_21595;
var G__21607 = chunk__21139_21596;
var G__21608 = count__21140_21597;
var G__21609 = (i__21141_21598 + (1));
seq__21138_21595 = G__21606;
chunk__21139_21596 = G__21607;
count__21140_21597 = G__21608;
i__21141_21598 = G__21609;
continue;
} else {
var temp__5804__auto___21610 = cljs.core.seq(seq__21138_21595);
if(temp__5804__auto___21610){
var seq__21138_21611__$1 = temp__5804__auto___21610;
if(cljs.core.chunked_seq_QMARK_(seq__21138_21611__$1)){
var c__5525__auto___21612 = cljs.core.chunk_first(seq__21138_21611__$1);
var G__21614 = cljs.core.chunk_rest(seq__21138_21611__$1);
var G__21615 = c__5525__auto___21612;
var G__21616 = cljs.core.count(c__5525__auto___21612);
var G__21617 = (0);
seq__21138_21595 = G__21614;
chunk__21139_21596 = G__21615;
count__21140_21597 = G__21616;
i__21141_21598 = G__21617;
continue;
} else {
var map__21148_21618 = cljs.core.first(seq__21138_21611__$1);
var map__21148_21619__$1 = cljs.core.__destructure_map(map__21148_21618);
var w_21620 = map__21148_21619__$1;
var msg_21621__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148_21619__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148_21619__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148_21619__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148_21619__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21624)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21622),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21623),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21621__$1)].join(''));


var G__21625 = cljs.core.next(seq__21138_21611__$1);
var G__21626 = null;
var G__21627 = (0);
var G__21628 = (0);
seq__21138_21595 = G__21625;
chunk__21139_21596 = G__21626;
count__21140_21597 = G__21627;
i__21141_21598 = G__21628;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21120_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21120_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21150 = node_uri;
G__21150.setQuery(null);

G__21150.setPath(new$);

return G__21150;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21151){
var map__21152 = p__21151;
var map__21152__$1 = cljs.core.__destructure_map(map__21152);
var msg = map__21152__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21152__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21153 = cljs.core.seq(updates);
var chunk__21155 = null;
var count__21156 = (0);
var i__21157 = (0);
while(true){
if((i__21157 < count__21156)){
var path = chunk__21155.cljs$core$IIndexed$_nth$arity$2(null,i__21157);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21333_21633 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21337_21634 = null;
var count__21338_21635 = (0);
var i__21339_21636 = (0);
while(true){
if((i__21339_21636 < count__21338_21635)){
var node_21637 = chunk__21337_21634.cljs$core$IIndexed$_nth$arity$2(null,i__21339_21636);
if(cljs.core.not(node_21637.shadow$old)){
var path_match_21638 = shadow.cljs.devtools.client.browser.match_paths(node_21637.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21638)){
var new_link_21639 = (function (){var G__21379 = node_21637.cloneNode(true);
G__21379.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21638),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21379;
})();
(node_21637.shadow$old = true);

(new_link_21639.onload = ((function (seq__21333_21633,chunk__21337_21634,count__21338_21635,i__21339_21636,seq__21153,chunk__21155,count__21156,i__21157,new_link_21639,path_match_21638,node_21637,path,map__21152,map__21152__$1,msg,updates,reload_info){
return (function (e){
var seq__21380_21640 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21382_21641 = null;
var count__21383_21642 = (0);
var i__21384_21643 = (0);
while(true){
if((i__21384_21643 < count__21383_21642)){
var map__21392_21644 = chunk__21382_21641.cljs$core$IIndexed$_nth$arity$2(null,i__21384_21643);
var map__21392_21645__$1 = cljs.core.__destructure_map(map__21392_21644);
var task_21646 = map__21392_21645__$1;
var fn_str_21647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392_21645__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392_21645__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21649 = goog.getObjectByName(fn_str_21647,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21648)].join(''));

(fn_obj_21649.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21649.cljs$core$IFn$_invoke$arity$2(path,new_link_21639) : fn_obj_21649.call(null,path,new_link_21639));


var G__21650 = seq__21380_21640;
var G__21651 = chunk__21382_21641;
var G__21652 = count__21383_21642;
var G__21653 = (i__21384_21643 + (1));
seq__21380_21640 = G__21650;
chunk__21382_21641 = G__21651;
count__21383_21642 = G__21652;
i__21384_21643 = G__21653;
continue;
} else {
var temp__5804__auto___21654 = cljs.core.seq(seq__21380_21640);
if(temp__5804__auto___21654){
var seq__21380_21655__$1 = temp__5804__auto___21654;
if(cljs.core.chunked_seq_QMARK_(seq__21380_21655__$1)){
var c__5525__auto___21656 = cljs.core.chunk_first(seq__21380_21655__$1);
var G__21657 = cljs.core.chunk_rest(seq__21380_21655__$1);
var G__21658 = c__5525__auto___21656;
var G__21659 = cljs.core.count(c__5525__auto___21656);
var G__21660 = (0);
seq__21380_21640 = G__21657;
chunk__21382_21641 = G__21658;
count__21383_21642 = G__21659;
i__21384_21643 = G__21660;
continue;
} else {
var map__21393_21663 = cljs.core.first(seq__21380_21655__$1);
var map__21393_21664__$1 = cljs.core.__destructure_map(map__21393_21663);
var task_21665 = map__21393_21664__$1;
var fn_str_21666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393_21664__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21393_21664__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21669 = goog.getObjectByName(fn_str_21666,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21667)].join(''));

(fn_obj_21669.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21669.cljs$core$IFn$_invoke$arity$2(path,new_link_21639) : fn_obj_21669.call(null,path,new_link_21639));


var G__21670 = cljs.core.next(seq__21380_21655__$1);
var G__21671 = null;
var G__21672 = (0);
var G__21673 = (0);
seq__21380_21640 = G__21670;
chunk__21382_21641 = G__21671;
count__21383_21642 = G__21672;
i__21384_21643 = G__21673;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21637);
});})(seq__21333_21633,chunk__21337_21634,count__21338_21635,i__21339_21636,seq__21153,chunk__21155,count__21156,i__21157,new_link_21639,path_match_21638,node_21637,path,map__21152,map__21152__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21638], 0));

goog.dom.insertSiblingAfter(new_link_21639,node_21637);


var G__21674 = seq__21333_21633;
var G__21675 = chunk__21337_21634;
var G__21676 = count__21338_21635;
var G__21677 = (i__21339_21636 + (1));
seq__21333_21633 = G__21674;
chunk__21337_21634 = G__21675;
count__21338_21635 = G__21676;
i__21339_21636 = G__21677;
continue;
} else {
var G__21678 = seq__21333_21633;
var G__21679 = chunk__21337_21634;
var G__21680 = count__21338_21635;
var G__21681 = (i__21339_21636 + (1));
seq__21333_21633 = G__21678;
chunk__21337_21634 = G__21679;
count__21338_21635 = G__21680;
i__21339_21636 = G__21681;
continue;
}
} else {
var G__21682 = seq__21333_21633;
var G__21683 = chunk__21337_21634;
var G__21684 = count__21338_21635;
var G__21685 = (i__21339_21636 + (1));
seq__21333_21633 = G__21682;
chunk__21337_21634 = G__21683;
count__21338_21635 = G__21684;
i__21339_21636 = G__21685;
continue;
}
} else {
var temp__5804__auto___21686 = cljs.core.seq(seq__21333_21633);
if(temp__5804__auto___21686){
var seq__21333_21687__$1 = temp__5804__auto___21686;
if(cljs.core.chunked_seq_QMARK_(seq__21333_21687__$1)){
var c__5525__auto___21688 = cljs.core.chunk_first(seq__21333_21687__$1);
var G__21689 = cljs.core.chunk_rest(seq__21333_21687__$1);
var G__21690 = c__5525__auto___21688;
var G__21691 = cljs.core.count(c__5525__auto___21688);
var G__21692 = (0);
seq__21333_21633 = G__21689;
chunk__21337_21634 = G__21690;
count__21338_21635 = G__21691;
i__21339_21636 = G__21692;
continue;
} else {
var node_21693 = cljs.core.first(seq__21333_21687__$1);
if(cljs.core.not(node_21693.shadow$old)){
var path_match_21694 = shadow.cljs.devtools.client.browser.match_paths(node_21693.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21694)){
var new_link_21695 = (function (){var G__21396 = node_21693.cloneNode(true);
G__21396.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21694),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21396;
})();
(node_21693.shadow$old = true);

(new_link_21695.onload = ((function (seq__21333_21633,chunk__21337_21634,count__21338_21635,i__21339_21636,seq__21153,chunk__21155,count__21156,i__21157,new_link_21695,path_match_21694,node_21693,seq__21333_21687__$1,temp__5804__auto___21686,path,map__21152,map__21152__$1,msg,updates,reload_info){
return (function (e){
var seq__21397_21696 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21399_21697 = null;
var count__21400_21698 = (0);
var i__21401_21699 = (0);
while(true){
if((i__21401_21699 < count__21400_21698)){
var map__21408_21700 = chunk__21399_21697.cljs$core$IIndexed$_nth$arity$2(null,i__21401_21699);
var map__21408_21701__$1 = cljs.core.__destructure_map(map__21408_21700);
var task_21702 = map__21408_21701__$1;
var fn_str_21703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408_21701__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408_21701__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21705 = goog.getObjectByName(fn_str_21703,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21704)].join(''));

(fn_obj_21705.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21705.cljs$core$IFn$_invoke$arity$2(path,new_link_21695) : fn_obj_21705.call(null,path,new_link_21695));


var G__21706 = seq__21397_21696;
var G__21707 = chunk__21399_21697;
var G__21708 = count__21400_21698;
var G__21709 = (i__21401_21699 + (1));
seq__21397_21696 = G__21706;
chunk__21399_21697 = G__21707;
count__21400_21698 = G__21708;
i__21401_21699 = G__21709;
continue;
} else {
var temp__5804__auto___21710__$1 = cljs.core.seq(seq__21397_21696);
if(temp__5804__auto___21710__$1){
var seq__21397_21711__$1 = temp__5804__auto___21710__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21397_21711__$1)){
var c__5525__auto___21712 = cljs.core.chunk_first(seq__21397_21711__$1);
var G__21713 = cljs.core.chunk_rest(seq__21397_21711__$1);
var G__21714 = c__5525__auto___21712;
var G__21715 = cljs.core.count(c__5525__auto___21712);
var G__21716 = (0);
seq__21397_21696 = G__21713;
chunk__21399_21697 = G__21714;
count__21400_21698 = G__21715;
i__21401_21699 = G__21716;
continue;
} else {
var map__21409_21717 = cljs.core.first(seq__21397_21711__$1);
var map__21409_21718__$1 = cljs.core.__destructure_map(map__21409_21717);
var task_21719 = map__21409_21718__$1;
var fn_str_21720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409_21718__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409_21718__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21722 = goog.getObjectByName(fn_str_21720,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21721)].join(''));

(fn_obj_21722.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21722.cljs$core$IFn$_invoke$arity$2(path,new_link_21695) : fn_obj_21722.call(null,path,new_link_21695));


var G__21727 = cljs.core.next(seq__21397_21711__$1);
var G__21728 = null;
var G__21729 = (0);
var G__21730 = (0);
seq__21397_21696 = G__21727;
chunk__21399_21697 = G__21728;
count__21400_21698 = G__21729;
i__21401_21699 = G__21730;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21693);
});})(seq__21333_21633,chunk__21337_21634,count__21338_21635,i__21339_21636,seq__21153,chunk__21155,count__21156,i__21157,new_link_21695,path_match_21694,node_21693,seq__21333_21687__$1,temp__5804__auto___21686,path,map__21152,map__21152__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21694], 0));

goog.dom.insertSiblingAfter(new_link_21695,node_21693);


var G__21731 = cljs.core.next(seq__21333_21687__$1);
var G__21732 = null;
var G__21733 = (0);
var G__21734 = (0);
seq__21333_21633 = G__21731;
chunk__21337_21634 = G__21732;
count__21338_21635 = G__21733;
i__21339_21636 = G__21734;
continue;
} else {
var G__21735 = cljs.core.next(seq__21333_21687__$1);
var G__21736 = null;
var G__21737 = (0);
var G__21738 = (0);
seq__21333_21633 = G__21735;
chunk__21337_21634 = G__21736;
count__21338_21635 = G__21737;
i__21339_21636 = G__21738;
continue;
}
} else {
var G__21740 = cljs.core.next(seq__21333_21687__$1);
var G__21741 = null;
var G__21742 = (0);
var G__21743 = (0);
seq__21333_21633 = G__21740;
chunk__21337_21634 = G__21741;
count__21338_21635 = G__21742;
i__21339_21636 = G__21743;
continue;
}
}
} else {
}
}
break;
}


var G__21744 = seq__21153;
var G__21745 = chunk__21155;
var G__21746 = count__21156;
var G__21747 = (i__21157 + (1));
seq__21153 = G__21744;
chunk__21155 = G__21745;
count__21156 = G__21746;
i__21157 = G__21747;
continue;
} else {
var G__21748 = seq__21153;
var G__21749 = chunk__21155;
var G__21750 = count__21156;
var G__21751 = (i__21157 + (1));
seq__21153 = G__21748;
chunk__21155 = G__21749;
count__21156 = G__21750;
i__21157 = G__21751;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21153);
if(temp__5804__auto__){
var seq__21153__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21153__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21153__$1);
var G__21753 = cljs.core.chunk_rest(seq__21153__$1);
var G__21754 = c__5525__auto__;
var G__21755 = cljs.core.count(c__5525__auto__);
var G__21756 = (0);
seq__21153 = G__21753;
chunk__21155 = G__21754;
count__21156 = G__21755;
i__21157 = G__21756;
continue;
} else {
var path = cljs.core.first(seq__21153__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21414_21757 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21418_21758 = null;
var count__21419_21759 = (0);
var i__21420_21760 = (0);
while(true){
if((i__21420_21760 < count__21419_21759)){
var node_21761 = chunk__21418_21758.cljs$core$IIndexed$_nth$arity$2(null,i__21420_21760);
if(cljs.core.not(node_21761.shadow$old)){
var path_match_21762 = shadow.cljs.devtools.client.browser.match_paths(node_21761.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21762)){
var new_link_21763 = (function (){var G__21455 = node_21761.cloneNode(true);
G__21455.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21762),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21455;
})();
(node_21761.shadow$old = true);

(new_link_21763.onload = ((function (seq__21414_21757,chunk__21418_21758,count__21419_21759,i__21420_21760,seq__21153,chunk__21155,count__21156,i__21157,new_link_21763,path_match_21762,node_21761,path,seq__21153__$1,temp__5804__auto__,map__21152,map__21152__$1,msg,updates,reload_info){
return (function (e){
var seq__21457_21765 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21459_21766 = null;
var count__21460_21767 = (0);
var i__21461_21768 = (0);
while(true){
if((i__21461_21768 < count__21460_21767)){
var map__21470_21772 = chunk__21459_21766.cljs$core$IIndexed$_nth$arity$2(null,i__21461_21768);
var map__21470_21773__$1 = cljs.core.__destructure_map(map__21470_21772);
var task_21774 = map__21470_21773__$1;
var fn_str_21775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21470_21773__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21470_21773__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21781 = goog.getObjectByName(fn_str_21775,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21776)].join(''));

(fn_obj_21781.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21781.cljs$core$IFn$_invoke$arity$2(path,new_link_21763) : fn_obj_21781.call(null,path,new_link_21763));


var G__21782 = seq__21457_21765;
var G__21783 = chunk__21459_21766;
var G__21784 = count__21460_21767;
var G__21785 = (i__21461_21768 + (1));
seq__21457_21765 = G__21782;
chunk__21459_21766 = G__21783;
count__21460_21767 = G__21784;
i__21461_21768 = G__21785;
continue;
} else {
var temp__5804__auto___21786__$1 = cljs.core.seq(seq__21457_21765);
if(temp__5804__auto___21786__$1){
var seq__21457_21787__$1 = temp__5804__auto___21786__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21457_21787__$1)){
var c__5525__auto___21788 = cljs.core.chunk_first(seq__21457_21787__$1);
var G__21789 = cljs.core.chunk_rest(seq__21457_21787__$1);
var G__21790 = c__5525__auto___21788;
var G__21791 = cljs.core.count(c__5525__auto___21788);
var G__21792 = (0);
seq__21457_21765 = G__21789;
chunk__21459_21766 = G__21790;
count__21460_21767 = G__21791;
i__21461_21768 = G__21792;
continue;
} else {
var map__21471_21793 = cljs.core.first(seq__21457_21787__$1);
var map__21471_21794__$1 = cljs.core.__destructure_map(map__21471_21793);
var task_21795 = map__21471_21794__$1;
var fn_str_21796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21471_21794__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21471_21794__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21798 = goog.getObjectByName(fn_str_21796,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21797)].join(''));

(fn_obj_21798.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21798.cljs$core$IFn$_invoke$arity$2(path,new_link_21763) : fn_obj_21798.call(null,path,new_link_21763));


var G__21799 = cljs.core.next(seq__21457_21787__$1);
var G__21800 = null;
var G__21801 = (0);
var G__21802 = (0);
seq__21457_21765 = G__21799;
chunk__21459_21766 = G__21800;
count__21460_21767 = G__21801;
i__21461_21768 = G__21802;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21761);
});})(seq__21414_21757,chunk__21418_21758,count__21419_21759,i__21420_21760,seq__21153,chunk__21155,count__21156,i__21157,new_link_21763,path_match_21762,node_21761,path,seq__21153__$1,temp__5804__auto__,map__21152,map__21152__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21762], 0));

goog.dom.insertSiblingAfter(new_link_21763,node_21761);


var G__21804 = seq__21414_21757;
var G__21805 = chunk__21418_21758;
var G__21806 = count__21419_21759;
var G__21807 = (i__21420_21760 + (1));
seq__21414_21757 = G__21804;
chunk__21418_21758 = G__21805;
count__21419_21759 = G__21806;
i__21420_21760 = G__21807;
continue;
} else {
var G__21808 = seq__21414_21757;
var G__21809 = chunk__21418_21758;
var G__21810 = count__21419_21759;
var G__21811 = (i__21420_21760 + (1));
seq__21414_21757 = G__21808;
chunk__21418_21758 = G__21809;
count__21419_21759 = G__21810;
i__21420_21760 = G__21811;
continue;
}
} else {
var G__21812 = seq__21414_21757;
var G__21813 = chunk__21418_21758;
var G__21814 = count__21419_21759;
var G__21815 = (i__21420_21760 + (1));
seq__21414_21757 = G__21812;
chunk__21418_21758 = G__21813;
count__21419_21759 = G__21814;
i__21420_21760 = G__21815;
continue;
}
} else {
var temp__5804__auto___21816__$1 = cljs.core.seq(seq__21414_21757);
if(temp__5804__auto___21816__$1){
var seq__21414_21817__$1 = temp__5804__auto___21816__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21414_21817__$1)){
var c__5525__auto___21818 = cljs.core.chunk_first(seq__21414_21817__$1);
var G__21819 = cljs.core.chunk_rest(seq__21414_21817__$1);
var G__21820 = c__5525__auto___21818;
var G__21821 = cljs.core.count(c__5525__auto___21818);
var G__21822 = (0);
seq__21414_21757 = G__21819;
chunk__21418_21758 = G__21820;
count__21419_21759 = G__21821;
i__21420_21760 = G__21822;
continue;
} else {
var node_21823 = cljs.core.first(seq__21414_21817__$1);
if(cljs.core.not(node_21823.shadow$old)){
var path_match_21824 = shadow.cljs.devtools.client.browser.match_paths(node_21823.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21824)){
var new_link_21825 = (function (){var G__21479 = node_21823.cloneNode(true);
G__21479.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21824),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21479;
})();
(node_21823.shadow$old = true);

(new_link_21825.onload = ((function (seq__21414_21757,chunk__21418_21758,count__21419_21759,i__21420_21760,seq__21153,chunk__21155,count__21156,i__21157,new_link_21825,path_match_21824,node_21823,seq__21414_21817__$1,temp__5804__auto___21816__$1,path,seq__21153__$1,temp__5804__auto__,map__21152,map__21152__$1,msg,updates,reload_info){
return (function (e){
var seq__21480_21826 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21482_21827 = null;
var count__21483_21828 = (0);
var i__21484_21829 = (0);
while(true){
if((i__21484_21829 < count__21483_21828)){
var map__21489_21830 = chunk__21482_21827.cljs$core$IIndexed$_nth$arity$2(null,i__21484_21829);
var map__21489_21831__$1 = cljs.core.__destructure_map(map__21489_21830);
var task_21832 = map__21489_21831__$1;
var fn_str_21833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21489_21831__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21489_21831__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21835 = goog.getObjectByName(fn_str_21833,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21834)].join(''));

(fn_obj_21835.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21835.cljs$core$IFn$_invoke$arity$2(path,new_link_21825) : fn_obj_21835.call(null,path,new_link_21825));


var G__21837 = seq__21480_21826;
var G__21838 = chunk__21482_21827;
var G__21839 = count__21483_21828;
var G__21840 = (i__21484_21829 + (1));
seq__21480_21826 = G__21837;
chunk__21482_21827 = G__21838;
count__21483_21828 = G__21839;
i__21484_21829 = G__21840;
continue;
} else {
var temp__5804__auto___21842__$2 = cljs.core.seq(seq__21480_21826);
if(temp__5804__auto___21842__$2){
var seq__21480_21844__$1 = temp__5804__auto___21842__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21480_21844__$1)){
var c__5525__auto___21845 = cljs.core.chunk_first(seq__21480_21844__$1);
var G__21847 = cljs.core.chunk_rest(seq__21480_21844__$1);
var G__21848 = c__5525__auto___21845;
var G__21849 = cljs.core.count(c__5525__auto___21845);
var G__21850 = (0);
seq__21480_21826 = G__21847;
chunk__21482_21827 = G__21848;
count__21483_21828 = G__21849;
i__21484_21829 = G__21850;
continue;
} else {
var map__21500_21852 = cljs.core.first(seq__21480_21844__$1);
var map__21500_21853__$1 = cljs.core.__destructure_map(map__21500_21852);
var task_21854 = map__21500_21853__$1;
var fn_str_21855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21500_21853__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21500_21853__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21857 = goog.getObjectByName(fn_str_21855,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21856)].join(''));

(fn_obj_21857.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21857.cljs$core$IFn$_invoke$arity$2(path,new_link_21825) : fn_obj_21857.call(null,path,new_link_21825));


var G__21858 = cljs.core.next(seq__21480_21844__$1);
var G__21859 = null;
var G__21860 = (0);
var G__21861 = (0);
seq__21480_21826 = G__21858;
chunk__21482_21827 = G__21859;
count__21483_21828 = G__21860;
i__21484_21829 = G__21861;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21823);
});})(seq__21414_21757,chunk__21418_21758,count__21419_21759,i__21420_21760,seq__21153,chunk__21155,count__21156,i__21157,new_link_21825,path_match_21824,node_21823,seq__21414_21817__$1,temp__5804__auto___21816__$1,path,seq__21153__$1,temp__5804__auto__,map__21152,map__21152__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21824], 0));

goog.dom.insertSiblingAfter(new_link_21825,node_21823);


var G__21862 = cljs.core.next(seq__21414_21817__$1);
var G__21863 = null;
var G__21864 = (0);
var G__21865 = (0);
seq__21414_21757 = G__21862;
chunk__21418_21758 = G__21863;
count__21419_21759 = G__21864;
i__21420_21760 = G__21865;
continue;
} else {
var G__21867 = cljs.core.next(seq__21414_21817__$1);
var G__21868 = null;
var G__21869 = (0);
var G__21870 = (0);
seq__21414_21757 = G__21867;
chunk__21418_21758 = G__21868;
count__21419_21759 = G__21869;
i__21420_21760 = G__21870;
continue;
}
} else {
var G__21871 = cljs.core.next(seq__21414_21817__$1);
var G__21872 = null;
var G__21873 = (0);
var G__21874 = (0);
seq__21414_21757 = G__21871;
chunk__21418_21758 = G__21872;
count__21419_21759 = G__21873;
i__21420_21760 = G__21874;
continue;
}
}
} else {
}
}
break;
}


var G__21875 = cljs.core.next(seq__21153__$1);
var G__21876 = null;
var G__21877 = (0);
var G__21878 = (0);
seq__21153 = G__21875;
chunk__21155 = G__21876;
count__21156 = G__21877;
i__21157 = G__21878;
continue;
} else {
var G__21879 = cljs.core.next(seq__21153__$1);
var G__21880 = null;
var G__21881 = (0);
var G__21882 = (0);
seq__21153 = G__21879;
chunk__21155 = G__21880;
count__21156 = G__21881;
i__21157 = G__21882;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21509 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21509) : success.call(null,G__21509));
}catch (e21508){var e = e21508;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21510,success,fail){
var map__21512 = p__21510;
var map__21512__$1 = cljs.core.__destructure_map(map__21512);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21512__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21514 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21514) : success.call(null,G__21514));
}catch (e21513){var e = e21513;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21515,done,error){
var map__21516 = p__21515;
var map__21516__$1 = cljs.core.__destructure_map(map__21516);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21516__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21517,done,error){
var map__21518 = p__21517;
var map__21518__$1 = cljs.core.__destructure_map(map__21518);
var msg = map__21518__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21519){
var map__21520 = p__21519;
var map__21520__$1 = cljs.core.__destructure_map(map__21520);
var src = map__21520__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21524 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21524) : done.call(null,G__21524));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21525){
var map__21526 = p__21525;
var map__21526__$1 = cljs.core.__destructure_map(map__21526);
var msg__$1 = map__21526__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21526__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21529){var ex = e21529;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21533){
var map__21534 = p__21533;
var map__21534__$1 = cljs.core.__destructure_map(map__21534);
var env = map__21534__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21534__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21537){
var map__21538 = p__21537;
var map__21538__$1 = cljs.core.__destructure_map(map__21538);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21538__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21538__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21539){
var map__21540 = p__21539;
var map__21540__$1 = cljs.core.__destructure_map(map__21540);
var svc = map__21540__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21540__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
