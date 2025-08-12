goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19305){
var map__19306 = p__19305;
var map__19306__$1 = cljs.core.__destructure_map(map__19306);
var m = map__19306__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19306__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19320_19819 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19321_19820 = null;
var count__19322_19821 = (0);
var i__19323_19822 = (0);
while(true){
if((i__19323_19822 < count__19322_19821)){
var f_19823 = chunk__19321_19820.cljs$core$IIndexed$_nth$arity$2(null,i__19323_19822);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19823], 0));


var G__19824 = seq__19320_19819;
var G__19825 = chunk__19321_19820;
var G__19826 = count__19322_19821;
var G__19827 = (i__19323_19822 + (1));
seq__19320_19819 = G__19824;
chunk__19321_19820 = G__19825;
count__19322_19821 = G__19826;
i__19323_19822 = G__19827;
continue;
} else {
var temp__5804__auto___19828 = cljs.core.seq(seq__19320_19819);
if(temp__5804__auto___19828){
var seq__19320_19829__$1 = temp__5804__auto___19828;
if(cljs.core.chunked_seq_QMARK_(seq__19320_19829__$1)){
var c__5525__auto___19830 = cljs.core.chunk_first(seq__19320_19829__$1);
var G__19831 = cljs.core.chunk_rest(seq__19320_19829__$1);
var G__19832 = c__5525__auto___19830;
var G__19833 = cljs.core.count(c__5525__auto___19830);
var G__19834 = (0);
seq__19320_19819 = G__19831;
chunk__19321_19820 = G__19832;
count__19322_19821 = G__19833;
i__19323_19822 = G__19834;
continue;
} else {
var f_19835 = cljs.core.first(seq__19320_19829__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19835], 0));


var G__19836 = cljs.core.next(seq__19320_19829__$1);
var G__19837 = null;
var G__19838 = (0);
var G__19839 = (0);
seq__19320_19819 = G__19836;
chunk__19321_19820 = G__19837;
count__19322_19821 = G__19838;
i__19323_19822 = G__19839;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19840 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19840], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19840)))?cljs.core.second(arglists_19840):arglists_19840)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19349_19869 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19350_19870 = null;
var count__19351_19871 = (0);
var i__19352_19872 = (0);
while(true){
if((i__19352_19872 < count__19351_19871)){
var vec__19363_19873 = chunk__19350_19870.cljs$core$IIndexed$_nth$arity$2(null,i__19352_19872);
var name_19874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19363_19873,(0),null);
var map__19366_19875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19363_19873,(1),null);
var map__19366_19876__$1 = cljs.core.__destructure_map(map__19366_19875);
var doc_19877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19366_19876__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19366_19876__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19874], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19878], 0));

if(cljs.core.truth_(doc_19877)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19877], 0));
} else {
}


var G__19879 = seq__19349_19869;
var G__19880 = chunk__19350_19870;
var G__19881 = count__19351_19871;
var G__19882 = (i__19352_19872 + (1));
seq__19349_19869 = G__19879;
chunk__19350_19870 = G__19880;
count__19351_19871 = G__19881;
i__19352_19872 = G__19882;
continue;
} else {
var temp__5804__auto___19883 = cljs.core.seq(seq__19349_19869);
if(temp__5804__auto___19883){
var seq__19349_19884__$1 = temp__5804__auto___19883;
if(cljs.core.chunked_seq_QMARK_(seq__19349_19884__$1)){
var c__5525__auto___19889 = cljs.core.chunk_first(seq__19349_19884__$1);
var G__19890 = cljs.core.chunk_rest(seq__19349_19884__$1);
var G__19891 = c__5525__auto___19889;
var G__19892 = cljs.core.count(c__5525__auto___19889);
var G__19893 = (0);
seq__19349_19869 = G__19890;
chunk__19350_19870 = G__19891;
count__19351_19871 = G__19892;
i__19352_19872 = G__19893;
continue;
} else {
var vec__19434_19894 = cljs.core.first(seq__19349_19884__$1);
var name_19895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19434_19894,(0),null);
var map__19437_19896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19434_19894,(1),null);
var map__19437_19897__$1 = cljs.core.__destructure_map(map__19437_19896);
var doc_19898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19437_19897__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19437_19897__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19895], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19899], 0));

if(cljs.core.truth_(doc_19898)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19898], 0));
} else {
}


var G__19900 = cljs.core.next(seq__19349_19884__$1);
var G__19901 = null;
var G__19902 = (0);
var G__19903 = (0);
seq__19349_19869 = G__19900;
chunk__19350_19870 = G__19901;
count__19351_19871 = G__19902;
i__19352_19872 = G__19903;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19446 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19447 = null;
var count__19448 = (0);
var i__19449 = (0);
while(true){
if((i__19449 < count__19448)){
var role = chunk__19447.cljs$core$IIndexed$_nth$arity$2(null,i__19449);
var temp__5804__auto___19904__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19904__$1)){
var spec_19905 = temp__5804__auto___19904__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19905)], 0));
} else {
}


var G__19906 = seq__19446;
var G__19907 = chunk__19447;
var G__19908 = count__19448;
var G__19909 = (i__19449 + (1));
seq__19446 = G__19906;
chunk__19447 = G__19907;
count__19448 = G__19908;
i__19449 = G__19909;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19446);
if(temp__5804__auto____$1){
var seq__19446__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19446__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19446__$1);
var G__19910 = cljs.core.chunk_rest(seq__19446__$1);
var G__19911 = c__5525__auto__;
var G__19912 = cljs.core.count(c__5525__auto__);
var G__19913 = (0);
seq__19446 = G__19910;
chunk__19447 = G__19911;
count__19448 = G__19912;
i__19449 = G__19913;
continue;
} else {
var role = cljs.core.first(seq__19446__$1);
var temp__5804__auto___19914__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19914__$2)){
var spec_19915 = temp__5804__auto___19914__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19915)], 0));
} else {
}


var G__19916 = cljs.core.next(seq__19446__$1);
var G__19917 = null;
var G__19918 = (0);
var G__19919 = (0);
seq__19446 = G__19916;
chunk__19447 = G__19917;
count__19448 = G__19918;
i__19449 = G__19919;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19550 = datafied_throwable;
var map__19550__$1 = cljs.core.__destructure_map(map__19550);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19550__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19550__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19550__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19555 = cljs.core.last(via);
var map__19555__$1 = cljs.core.__destructure_map(map__19555);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19555__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19555__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19555__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19556 = data;
var map__19556__$1 = cljs.core.__destructure_map(map__19556);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19556__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19556__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19556__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19557 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19557__$1 = cljs.core.__destructure_map(map__19557);
var top_data = map__19557__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19575 = phase;
var G__19575__$1 = (((G__19575 instanceof cljs.core.Keyword))?G__19575.fqn:null);
switch (G__19575__$1) {
case "read-source":
var map__19713 = data;
var map__19713__$1 = cljs.core.__destructure_map(map__19713);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19713__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19714 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19714__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19714,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19714);
var G__19714__$2 = (cljs.core.truth_((function (){var fexpr__19715 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19715.cljs$core$IFn$_invoke$arity$1 ? fexpr__19715.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19715.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19714__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19714__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19714__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19714__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19716 = top_data;
var G__19716__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19716,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19716);
var G__19716__$2 = (cljs.core.truth_((function (){var fexpr__19717 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19717.cljs$core$IFn$_invoke$arity$1 ? fexpr__19717.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19717.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19716__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19716__$1);
var G__19716__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19716__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19716__$2);
var G__19716__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19716__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19716__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19716__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19716__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19718 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19718,(3),null);
var G__19722 = top_data;
var G__19722__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19722,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19722);
var G__19722__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19722__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19722__$1);
var G__19722__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19722__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19722__$2);
var G__19722__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19722__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19722__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19722__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19722__$4;
}

break;
case "execution":
var vec__19728 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19547_SHARP_){
var or__5002__auto__ = (p1__19547_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19733 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19733.cljs$core$IFn$_invoke$arity$1 ? fexpr__19733.cljs$core$IFn$_invoke$arity$1(p1__19547_SHARP_) : fexpr__19733.call(null,p1__19547_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19734 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19734__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19734,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19734);
var G__19734__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19734__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19734__$1);
var G__19734__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19734__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19734__$2);
var G__19734__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19734__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19734__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19734__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19734__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19575__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19760){
var map__19761 = p__19760;
var map__19761__$1 = cljs.core.__destructure_map(map__19761);
var triage_data = map__19761__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19761__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19765 = phase;
var G__19765__$1 = (((G__19765 instanceof cljs.core.Keyword))?G__19765.fqn:null);
switch (G__19765__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19771 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19772 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19773 = loc;
var G__19774 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19775_19949 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19776_19950 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19777_19951 = true;
var _STAR_print_fn_STAR__temp_val__19778_19952 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19777_19951);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19778_19952);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19735_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19735_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19776_19950);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19775_19949);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19771,G__19772,G__19773,G__19774) : format.call(null,G__19771,G__19772,G__19773,G__19774));

break;
case "macroexpansion":
var G__19781 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19782 = cause_type;
var G__19783 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19784 = loc;
var G__19785 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19781,G__19782,G__19783,G__19784,G__19785) : format.call(null,G__19781,G__19782,G__19783,G__19784,G__19785));

break;
case "compile-syntax-check":
var G__19787 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19788 = cause_type;
var G__19789 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19790 = loc;
var G__19791 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19787,G__19788,G__19789,G__19790,G__19791) : format.call(null,G__19787,G__19788,G__19789,G__19790,G__19791));

break;
case "compilation":
var G__19794 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19795 = cause_type;
var G__19796 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19797 = loc;
var G__19798 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19794,G__19795,G__19796,G__19797,G__19798) : format.call(null,G__19794,G__19795,G__19796,G__19797,G__19798));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19800 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19801 = symbol;
var G__19802 = loc;
var G__19803 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19804_19954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19805_19955 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19806_19956 = true;
var _STAR_print_fn_STAR__temp_val__19807_19957 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19806_19956);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19807_19957);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19737_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19737_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19805_19955);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19804_19954);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19800,G__19801,G__19802,G__19803) : format.call(null,G__19800,G__19801,G__19802,G__19803));
} else {
var G__19809 = "Execution error%s at %s(%s).\n%s\n";
var G__19810 = cause_type;
var G__19811 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19812 = loc;
var G__19813 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19809,G__19810,G__19811,G__19812,G__19813) : format.call(null,G__19809,G__19810,G__19811,G__19812,G__19813));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19765__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
