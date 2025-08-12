goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14875 = (function (f,blockable,meta14876){
this.f = f;
this.blockable = blockable;
this.meta14876 = meta14876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14877,meta14876__$1){
var self__ = this;
var _14877__$1 = this;
return (new cljs.core.async.t_cljs$core$async14875(self__.f,self__.blockable,meta14876__$1));
}));

(cljs.core.async.t_cljs$core$async14875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14877){
var self__ = this;
var _14877__$1 = this;
return self__.meta14876;
}));

(cljs.core.async.t_cljs$core$async14875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14876","meta14876",-1812887838,null)], null);
}));

(cljs.core.async.t_cljs$core$async14875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14875");

(cljs.core.async.t_cljs$core$async14875.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14875.
 */
cljs.core.async.__GT_t_cljs$core$async14875 = (function cljs$core$async$__GT_t_cljs$core$async14875(f,blockable,meta14876){
return (new cljs.core.async.t_cljs$core$async14875(f,blockable,meta14876));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14857 = arguments.length;
switch (G__14857) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14875(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14939 = arguments.length;
switch (G__14939) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14962 = arguments.length;
switch (G__14962) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14990 = arguments.length;
switch (G__14990) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18062 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18062) : fn1.call(null,val_18062));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18062) : fn1.call(null,val_18062));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15003 = arguments.length;
switch (G__15003) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18064 = n;
var x_18065 = (0);
while(true){
if((x_18065 < n__5593__auto___18064)){
(a[x_18065] = x_18065);

var G__18066 = (x_18065 + (1));
x_18065 = G__18066;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15021 = (function (flag,meta15022){
this.flag = flag;
this.meta15022 = meta15022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15023,meta15022__$1){
var self__ = this;
var _15023__$1 = this;
return (new cljs.core.async.t_cljs$core$async15021(self__.flag,meta15022__$1));
}));

(cljs.core.async.t_cljs$core$async15021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15023){
var self__ = this;
var _15023__$1 = this;
return self__.meta15022;
}));

(cljs.core.async.t_cljs$core$async15021.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15022","meta15022",-1330451285,null)], null);
}));

(cljs.core.async.t_cljs$core$async15021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15021");

(cljs.core.async.t_cljs$core$async15021.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15021.
 */
cljs.core.async.__GT_t_cljs$core$async15021 = (function cljs$core$async$__GT_t_cljs$core$async15021(flag,meta15022){
return (new cljs.core.async.t_cljs$core$async15021(flag,meta15022));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15021(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15045 = (function (flag,cb,meta15046){
this.flag = flag;
this.cb = cb;
this.meta15046 = meta15046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15047,meta15046__$1){
var self__ = this;
var _15047__$1 = this;
return (new cljs.core.async.t_cljs$core$async15045(self__.flag,self__.cb,meta15046__$1));
}));

(cljs.core.async.t_cljs$core$async15045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15047){
var self__ = this;
var _15047__$1 = this;
return self__.meta15046;
}));

(cljs.core.async.t_cljs$core$async15045.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15046","meta15046",329559181,null)], null);
}));

(cljs.core.async.t_cljs$core$async15045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15045");

(cljs.core.async.t_cljs$core$async15045.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15045.
 */
cljs.core.async.__GT_t_cljs$core$async15045 = (function cljs$core$async$__GT_t_cljs$core$async15045(flag,cb,meta15046){
return (new cljs.core.async.t_cljs$core$async15045(flag,cb,meta15046));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15045(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15049_SHARP_){
var G__15059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15049_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15059) : fret.call(null,G__15059));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15050_SHARP_){
var G__15060 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15050_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15060) : fret.call(null,G__15060));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18067 = (i + (1));
i = G__18067;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18068 = arguments.length;
var i__5727__auto___18069 = (0);
while(true){
if((i__5727__auto___18069 < len__5726__auto___18068)){
args__5732__auto__.push((arguments[i__5727__auto___18069]));

var G__18070 = (i__5727__auto___18069 + (1));
i__5727__auto___18069 = G__18070;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15079){
var map__15080 = p__15079;
var map__15080__$1 = cljs.core.__destructure_map(map__15080);
var opts = map__15080__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15071){
var G__15072 = cljs.core.first(seq15071);
var seq15071__$1 = cljs.core.next(seq15071);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15072,seq15071__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15094 = arguments.length;
switch (G__15094) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14652__auto___18072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_15190){
var state_val_15191 = (state_15190[(1)]);
if((state_val_15191 === (7))){
var inst_15182 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15218_18073 = state_15190__$1;
(statearr_15218_18073[(2)] = inst_15182);

(statearr_15218_18073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (1))){
var state_15190__$1 = state_15190;
var statearr_15219_18074 = state_15190__$1;
(statearr_15219_18074[(2)] = null);

(statearr_15219_18074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (4))){
var inst_15164 = (state_15190[(7)]);
var inst_15164__$1 = (state_15190[(2)]);
var inst_15165 = (inst_15164__$1 == null);
var state_15190__$1 = (function (){var statearr_15222 = state_15190;
(statearr_15222[(7)] = inst_15164__$1);

return statearr_15222;
})();
if(cljs.core.truth_(inst_15165)){
var statearr_15223_18075 = state_15190__$1;
(statearr_15223_18075[(1)] = (5));

} else {
var statearr_15224_18076 = state_15190__$1;
(statearr_15224_18076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (13))){
var state_15190__$1 = state_15190;
var statearr_15225_18077 = state_15190__$1;
(statearr_15225_18077[(2)] = null);

(statearr_15225_18077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (6))){
var inst_15164 = (state_15190[(7)]);
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15190__$1,(11),to,inst_15164);
} else {
if((state_val_15191 === (3))){
var inst_15184 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15190__$1,inst_15184);
} else {
if((state_val_15191 === (12))){
var state_15190__$1 = state_15190;
var statearr_15229_18078 = state_15190__$1;
(statearr_15229_18078[(2)] = null);

(statearr_15229_18078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (2))){
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15190__$1,(4),from);
} else {
if((state_val_15191 === (11))){
var inst_15175 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
if(cljs.core.truth_(inst_15175)){
var statearr_15232_18079 = state_15190__$1;
(statearr_15232_18079[(1)] = (12));

} else {
var statearr_15233_18080 = state_15190__$1;
(statearr_15233_18080[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (9))){
var state_15190__$1 = state_15190;
var statearr_15234_18081 = state_15190__$1;
(statearr_15234_18081[(2)] = null);

(statearr_15234_18081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (5))){
var state_15190__$1 = state_15190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15235_18082 = state_15190__$1;
(statearr_15235_18082[(1)] = (8));

} else {
var statearr_15236_18083 = state_15190__$1;
(statearr_15236_18083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (14))){
var inst_15180 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15237_18084 = state_15190__$1;
(statearr_15237_18084[(2)] = inst_15180);

(statearr_15237_18084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (10))){
var inst_15172 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15238_18085 = state_15190__$1;
(statearr_15238_18085[(2)] = inst_15172);

(statearr_15238_18085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (8))){
var inst_15169 = cljs.core.async.close_BANG_(to);
var state_15190__$1 = state_15190;
var statearr_15239_18086 = state_15190__$1;
(statearr_15239_18086[(2)] = inst_15169);

(statearr_15239_18086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_15240 = [null,null,null,null,null,null,null,null];
(statearr_15240[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_15240[(1)] = (1));

return statearr_15240;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_15190){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15190);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15241){var ex__14334__auto__ = e15241;
var statearr_15242_18087 = state_15190;
(statearr_15242_18087[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15190[(4)]))){
var statearr_15245_18088 = state_15190;
(statearr_15245_18088[(1)] = cljs.core.first((state_15190[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18089 = state_15190;
state_15190 = G__18089;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_15190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_15190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_15248 = f__14653__auto__();
(statearr_15248[(6)] = c__14652__auto___18072);

return statearr_15248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15281){
var vec__15282 = p__15281;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15282,(1),null);
var job = vec__15282;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14652__auto___18090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_15290){
var state_val_15291 = (state_15290[(1)]);
if((state_val_15291 === (1))){
var state_15290__$1 = state_15290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15290__$1,(2),res,v);
} else {
if((state_val_15291 === (2))){
var inst_15287 = (state_15290[(2)]);
var inst_15288 = cljs.core.async.close_BANG_(res);
var state_15290__$1 = (function (){var statearr_15308 = state_15290;
(statearr_15308[(7)] = inst_15287);

return statearr_15308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15290__$1,inst_15288);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0 = (function (){
var statearr_15317 = [null,null,null,null,null,null,null,null];
(statearr_15317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__);

(statearr_15317[(1)] = (1));

return statearr_15317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1 = (function (state_15290){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15290);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15319){var ex__14334__auto__ = e15319;
var statearr_15320_18091 = state_15290;
(statearr_15320_18091[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15290[(4)]))){
var statearr_15321_18092 = state_15290;
(statearr_15321_18092[(1)] = cljs.core.first((state_15290[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18093 = state_15290;
state_15290 = G__18093;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = function(state_15290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1.call(this,state_15290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_15322 = f__14653__auto__();
(statearr_15322[(6)] = c__14652__auto___18090);

return statearr_15322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15323){
var vec__15324 = p__15323;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,(1),null);
var job = vec__15324;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18094 = n;
var __18095 = (0);
while(true){
if((__18095 < n__5593__auto___18094)){
var G__15327_18096 = type;
var G__15327_18097__$1 = (((G__15327_18096 instanceof cljs.core.Keyword))?G__15327_18096.fqn:null);
switch (G__15327_18097__$1) {
case "compute":
var c__14652__auto___18099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18095,c__14652__auto___18099,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async){
return (function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = ((function (__18095,c__14652__auto___18099,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async){
return (function (state_15340){
var state_val_15341 = (state_15340[(1)]);
if((state_val_15341 === (1))){
var state_15340__$1 = state_15340;
var statearr_15342_18100 = state_15340__$1;
(statearr_15342_18100[(2)] = null);

(statearr_15342_18100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15341 === (2))){
var state_15340__$1 = state_15340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15340__$1,(4),jobs);
} else {
if((state_val_15341 === (3))){
var inst_15338 = (state_15340[(2)]);
var state_15340__$1 = state_15340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15340__$1,inst_15338);
} else {
if((state_val_15341 === (4))){
var inst_15330 = (state_15340[(2)]);
var inst_15331 = process__$1(inst_15330);
var state_15340__$1 = state_15340;
if(cljs.core.truth_(inst_15331)){
var statearr_15348_18101 = state_15340__$1;
(statearr_15348_18101[(1)] = (5));

} else {
var statearr_15349_18102 = state_15340__$1;
(statearr_15349_18102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15341 === (5))){
var state_15340__$1 = state_15340;
var statearr_15354_18103 = state_15340__$1;
(statearr_15354_18103[(2)] = null);

(statearr_15354_18103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15341 === (6))){
var state_15340__$1 = state_15340;
var statearr_15355_18104 = state_15340__$1;
(statearr_15355_18104[(2)] = null);

(statearr_15355_18104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15341 === (7))){
var inst_15336 = (state_15340[(2)]);
var state_15340__$1 = state_15340;
var statearr_15357_18108 = state_15340__$1;
(statearr_15357_18108[(2)] = inst_15336);

(statearr_15357_18108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18095,c__14652__auto___18099,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async))
;
return ((function (__18095,switch__14330__auto__,c__14652__auto___18099,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0 = (function (){
var statearr_15358 = [null,null,null,null,null,null,null];
(statearr_15358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__);

(statearr_15358[(1)] = (1));

return statearr_15358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1 = (function (state_15340){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15340);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15361){var ex__14334__auto__ = e15361;
var statearr_15363_18109 = state_15340;
(statearr_15363_18109[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15340[(4)]))){
var statearr_15365_18110 = state_15340;
(statearr_15365_18110[(1)] = cljs.core.first((state_15340[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18111 = state_15340;
state_15340 = G__18111;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = function(state_15340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1.call(this,state_15340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__;
})()
;})(__18095,switch__14330__auto__,c__14652__auto___18099,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async))
})();
var state__14654__auto__ = (function (){var statearr_15367 = f__14653__auto__();
(statearr_15367[(6)] = c__14652__auto___18099);

return statearr_15367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
});})(__18095,c__14652__auto___18099,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async))
);


break;
case "async":
var c__14652__auto___18112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18095,c__14652__auto___18112,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async){
return (function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = ((function (__18095,c__14652__auto___18112,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async){
return (function (state_15382){
var state_val_15383 = (state_15382[(1)]);
if((state_val_15383 === (1))){
var state_15382__$1 = state_15382;
var statearr_15384_18113 = state_15382__$1;
(statearr_15384_18113[(2)] = null);

(statearr_15384_18113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (2))){
var state_15382__$1 = state_15382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15382__$1,(4),jobs);
} else {
if((state_val_15383 === (3))){
var inst_15380 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15382__$1,inst_15380);
} else {
if((state_val_15383 === (4))){
var inst_15371 = (state_15382[(2)]);
var inst_15373 = async(inst_15371);
var state_15382__$1 = state_15382;
if(cljs.core.truth_(inst_15373)){
var statearr_15385_18114 = state_15382__$1;
(statearr_15385_18114[(1)] = (5));

} else {
var statearr_15386_18115 = state_15382__$1;
(statearr_15386_18115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (5))){
var state_15382__$1 = state_15382;
var statearr_15387_18116 = state_15382__$1;
(statearr_15387_18116[(2)] = null);

(statearr_15387_18116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (6))){
var state_15382__$1 = state_15382;
var statearr_15388_18117 = state_15382__$1;
(statearr_15388_18117[(2)] = null);

(statearr_15388_18117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (7))){
var inst_15378 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
var statearr_15389_18118 = state_15382__$1;
(statearr_15389_18118[(2)] = inst_15378);

(statearr_15389_18118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18095,c__14652__auto___18112,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async))
;
return ((function (__18095,switch__14330__auto__,c__14652__auto___18112,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0 = (function (){
var statearr_15390 = [null,null,null,null,null,null,null];
(statearr_15390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__);

(statearr_15390[(1)] = (1));

return statearr_15390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1 = (function (state_15382){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15382);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15392){var ex__14334__auto__ = e15392;
var statearr_15393_18119 = state_15382;
(statearr_15393_18119[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15382[(4)]))){
var statearr_15395_18120 = state_15382;
(statearr_15395_18120[(1)] = cljs.core.first((state_15382[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18121 = state_15382;
state_15382 = G__18121;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = function(state_15382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1.call(this,state_15382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__;
})()
;})(__18095,switch__14330__auto__,c__14652__auto___18112,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async))
})();
var state__14654__auto__ = (function (){var statearr_15396 = f__14653__auto__();
(statearr_15396[(6)] = c__14652__auto___18112);

return statearr_15396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
});})(__18095,c__14652__auto___18112,G__15327_18096,G__15327_18097__$1,n__5593__auto___18094,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15327_18097__$1)].join('')));

}

var G__18122 = (__18095 + (1));
__18095 = G__18122;
continue;
} else {
}
break;
}

var c__14652__auto___18123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_15422){
var state_val_15424 = (state_15422[(1)]);
if((state_val_15424 === (7))){
var inst_15418 = (state_15422[(2)]);
var state_15422__$1 = state_15422;
var statearr_15429_18124 = state_15422__$1;
(statearr_15429_18124[(2)] = inst_15418);

(statearr_15429_18124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (1))){
var state_15422__$1 = state_15422;
var statearr_15430_18125 = state_15422__$1;
(statearr_15430_18125[(2)] = null);

(statearr_15430_18125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (4))){
var inst_15399 = (state_15422[(7)]);
var inst_15399__$1 = (state_15422[(2)]);
var inst_15400 = (inst_15399__$1 == null);
var state_15422__$1 = (function (){var statearr_15431 = state_15422;
(statearr_15431[(7)] = inst_15399__$1);

return statearr_15431;
})();
if(cljs.core.truth_(inst_15400)){
var statearr_15432_18126 = state_15422__$1;
(statearr_15432_18126[(1)] = (5));

} else {
var statearr_15434_18127 = state_15422__$1;
(statearr_15434_18127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (6))){
var inst_15404 = (state_15422[(8)]);
var inst_15399 = (state_15422[(7)]);
var inst_15404__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15410 = [inst_15399,inst_15404__$1];
var inst_15411 = (new cljs.core.PersistentVector(null,2,(5),inst_15409,inst_15410,null));
var state_15422__$1 = (function (){var statearr_15436 = state_15422;
(statearr_15436[(8)] = inst_15404__$1);

return statearr_15436;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15422__$1,(8),jobs,inst_15411);
} else {
if((state_val_15424 === (3))){
var inst_15420 = (state_15422[(2)]);
var state_15422__$1 = state_15422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15422__$1,inst_15420);
} else {
if((state_val_15424 === (2))){
var state_15422__$1 = state_15422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15422__$1,(4),from);
} else {
if((state_val_15424 === (9))){
var inst_15415 = (state_15422[(2)]);
var state_15422__$1 = (function (){var statearr_15440 = state_15422;
(statearr_15440[(9)] = inst_15415);

return statearr_15440;
})();
var statearr_15442_18128 = state_15422__$1;
(statearr_15442_18128[(2)] = null);

(statearr_15442_18128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (5))){
var inst_15402 = cljs.core.async.close_BANG_(jobs);
var state_15422__$1 = state_15422;
var statearr_15444_18129 = state_15422__$1;
(statearr_15444_18129[(2)] = inst_15402);

(statearr_15444_18129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15424 === (8))){
var inst_15404 = (state_15422[(8)]);
var inst_15413 = (state_15422[(2)]);
var state_15422__$1 = (function (){var statearr_15445 = state_15422;
(statearr_15445[(10)] = inst_15413);

return statearr_15445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15422__$1,(9),results,inst_15404);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0 = (function (){
var statearr_15447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__);

(statearr_15447[(1)] = (1));

return statearr_15447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1 = (function (state_15422){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15422);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15451){var ex__14334__auto__ = e15451;
var statearr_15453_18132 = state_15422;
(statearr_15453_18132[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15422[(4)]))){
var statearr_15455_18133 = state_15422;
(statearr_15455_18133[(1)] = cljs.core.first((state_15422[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18134 = state_15422;
state_15422 = G__18134;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = function(state_15422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1.call(this,state_15422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_15458 = f__14653__auto__();
(statearr_15458[(6)] = c__14652__auto___18123);

return statearr_15458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_15498){
var state_val_15499 = (state_15498[(1)]);
if((state_val_15499 === (7))){
var inst_15494 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
var statearr_15504_18135 = state_15498__$1;
(statearr_15504_18135[(2)] = inst_15494);

(statearr_15504_18135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (20))){
var state_15498__$1 = state_15498;
var statearr_15505_18136 = state_15498__$1;
(statearr_15505_18136[(2)] = null);

(statearr_15505_18136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (1))){
var state_15498__$1 = state_15498;
var statearr_15507_18137 = state_15498__$1;
(statearr_15507_18137[(2)] = null);

(statearr_15507_18137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (4))){
var inst_15462 = (state_15498[(7)]);
var inst_15462__$1 = (state_15498[(2)]);
var inst_15463 = (inst_15462__$1 == null);
var state_15498__$1 = (function (){var statearr_15512 = state_15498;
(statearr_15512[(7)] = inst_15462__$1);

return statearr_15512;
})();
if(cljs.core.truth_(inst_15463)){
var statearr_15513_18138 = state_15498__$1;
(statearr_15513_18138[(1)] = (5));

} else {
var statearr_15514_18139 = state_15498__$1;
(statearr_15514_18139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (15))){
var inst_15475 = (state_15498[(8)]);
var state_15498__$1 = state_15498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15498__$1,(18),to,inst_15475);
} else {
if((state_val_15499 === (21))){
var inst_15489 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
var statearr_15516_18140 = state_15498__$1;
(statearr_15516_18140[(2)] = inst_15489);

(statearr_15516_18140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (13))){
var inst_15491 = (state_15498[(2)]);
var state_15498__$1 = (function (){var statearr_15517 = state_15498;
(statearr_15517[(9)] = inst_15491);

return statearr_15517;
})();
var statearr_15518_18141 = state_15498__$1;
(statearr_15518_18141[(2)] = null);

(statearr_15518_18141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (6))){
var inst_15462 = (state_15498[(7)]);
var state_15498__$1 = state_15498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15498__$1,(11),inst_15462);
} else {
if((state_val_15499 === (17))){
var inst_15483 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
if(cljs.core.truth_(inst_15483)){
var statearr_15519_18142 = state_15498__$1;
(statearr_15519_18142[(1)] = (19));

} else {
var statearr_15520_18143 = state_15498__$1;
(statearr_15520_18143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (3))){
var inst_15496 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15498__$1,inst_15496);
} else {
if((state_val_15499 === (12))){
var inst_15472 = (state_15498[(10)]);
var state_15498__$1 = state_15498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15498__$1,(14),inst_15472);
} else {
if((state_val_15499 === (2))){
var state_15498__$1 = state_15498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15498__$1,(4),results);
} else {
if((state_val_15499 === (19))){
var state_15498__$1 = state_15498;
var statearr_15521_18144 = state_15498__$1;
(statearr_15521_18144[(2)] = null);

(statearr_15521_18144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (11))){
var inst_15472 = (state_15498[(2)]);
var state_15498__$1 = (function (){var statearr_15522 = state_15498;
(statearr_15522[(10)] = inst_15472);

return statearr_15522;
})();
var statearr_15523_18145 = state_15498__$1;
(statearr_15523_18145[(2)] = null);

(statearr_15523_18145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (9))){
var state_15498__$1 = state_15498;
var statearr_15529_18146 = state_15498__$1;
(statearr_15529_18146[(2)] = null);

(statearr_15529_18146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (5))){
var state_15498__$1 = state_15498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15545_18147 = state_15498__$1;
(statearr_15545_18147[(1)] = (8));

} else {
var statearr_15547_18148 = state_15498__$1;
(statearr_15547_18148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (14))){
var inst_15475 = (state_15498[(8)]);
var inst_15477 = (state_15498[(11)]);
var inst_15475__$1 = (state_15498[(2)]);
var inst_15476 = (inst_15475__$1 == null);
var inst_15477__$1 = cljs.core.not(inst_15476);
var state_15498__$1 = (function (){var statearr_15549 = state_15498;
(statearr_15549[(8)] = inst_15475__$1);

(statearr_15549[(11)] = inst_15477__$1);

return statearr_15549;
})();
if(inst_15477__$1){
var statearr_15550_18149 = state_15498__$1;
(statearr_15550_18149[(1)] = (15));

} else {
var statearr_15551_18150 = state_15498__$1;
(statearr_15551_18150[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (16))){
var inst_15477 = (state_15498[(11)]);
var state_15498__$1 = state_15498;
var statearr_15553_18151 = state_15498__$1;
(statearr_15553_18151[(2)] = inst_15477);

(statearr_15553_18151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (10))){
var inst_15469 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
var statearr_15555_18152 = state_15498__$1;
(statearr_15555_18152[(2)] = inst_15469);

(statearr_15555_18152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (18))){
var inst_15480 = (state_15498[(2)]);
var state_15498__$1 = state_15498;
var statearr_15557_18153 = state_15498__$1;
(statearr_15557_18153[(2)] = inst_15480);

(statearr_15557_18153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15499 === (8))){
var inst_15466 = cljs.core.async.close_BANG_(to);
var state_15498__$1 = state_15498;
var statearr_15558_18154 = state_15498__$1;
(statearr_15558_18154[(2)] = inst_15466);

(statearr_15558_18154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0 = (function (){
var statearr_15562 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__);

(statearr_15562[(1)] = (1));

return statearr_15562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1 = (function (state_15498){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15498);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15564){var ex__14334__auto__ = e15564;
var statearr_15566_18155 = state_15498;
(statearr_15566_18155[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15498[(4)]))){
var statearr_15568_18159 = state_15498;
(statearr_15568_18159[(1)] = cljs.core.first((state_15498[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18161 = state_15498;
state_15498 = G__18161;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__ = function(state_15498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1.call(this,state_15498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14331__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_15570 = f__14653__auto__();
(statearr_15570[(6)] = c__14652__auto__);

return statearr_15570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15572 = arguments.length;
switch (G__15572) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15575 = arguments.length;
switch (G__15575) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15579 = arguments.length;
switch (G__15579) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14652__auto___18175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_15652){
var state_val_15654 = (state_15652[(1)]);
if((state_val_15654 === (7))){
var inst_15648 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15659_18176 = state_15652__$1;
(statearr_15659_18176[(2)] = inst_15648);

(statearr_15659_18176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (1))){
var state_15652__$1 = state_15652;
var statearr_15660_18177 = state_15652__$1;
(statearr_15660_18177[(2)] = null);

(statearr_15660_18177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (4))){
var inst_15588 = (state_15652[(7)]);
var inst_15588__$1 = (state_15652[(2)]);
var inst_15589 = (inst_15588__$1 == null);
var state_15652__$1 = (function (){var statearr_15661 = state_15652;
(statearr_15661[(7)] = inst_15588__$1);

return statearr_15661;
})();
if(cljs.core.truth_(inst_15589)){
var statearr_15662_18178 = state_15652__$1;
(statearr_15662_18178[(1)] = (5));

} else {
var statearr_15665_18179 = state_15652__$1;
(statearr_15665_18179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (13))){
var state_15652__$1 = state_15652;
var statearr_15667_18180 = state_15652__$1;
(statearr_15667_18180[(2)] = null);

(statearr_15667_18180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (6))){
var inst_15588 = (state_15652[(7)]);
var inst_15635 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15588) : p.call(null,inst_15588));
var state_15652__$1 = state_15652;
if(cljs.core.truth_(inst_15635)){
var statearr_15669_18181 = state_15652__$1;
(statearr_15669_18181[(1)] = (9));

} else {
var statearr_15670_18182 = state_15652__$1;
(statearr_15670_18182[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (3))){
var inst_15650 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15652__$1,inst_15650);
} else {
if((state_val_15654 === (12))){
var state_15652__$1 = state_15652;
var statearr_15671_18183 = state_15652__$1;
(statearr_15671_18183[(2)] = null);

(statearr_15671_18183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (2))){
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15652__$1,(4),ch);
} else {
if((state_val_15654 === (11))){
var inst_15588 = (state_15652[(7)]);
var inst_15639 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15652__$1,(8),inst_15639,inst_15588);
} else {
if((state_val_15654 === (9))){
var state_15652__$1 = state_15652;
var statearr_15672_18184 = state_15652__$1;
(statearr_15672_18184[(2)] = tc);

(statearr_15672_18184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (5))){
var inst_15591 = cljs.core.async.close_BANG_(tc);
var inst_15592 = cljs.core.async.close_BANG_(fc);
var state_15652__$1 = (function (){var statearr_15677 = state_15652;
(statearr_15677[(8)] = inst_15591);

return statearr_15677;
})();
var statearr_15678_18185 = state_15652__$1;
(statearr_15678_18185[(2)] = inst_15592);

(statearr_15678_18185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (14))){
var inst_15646 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15680_18186 = state_15652__$1;
(statearr_15680_18186[(2)] = inst_15646);

(statearr_15680_18186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (10))){
var state_15652__$1 = state_15652;
var statearr_15683_18187 = state_15652__$1;
(statearr_15683_18187[(2)] = fc);

(statearr_15683_18187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15654 === (8))){
var inst_15641 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
if(cljs.core.truth_(inst_15641)){
var statearr_15688_18188 = state_15652__$1;
(statearr_15688_18188[(1)] = (12));

} else {
var statearr_15689_18195 = state_15652__$1;
(statearr_15689_18195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_15691 = [null,null,null,null,null,null,null,null,null];
(statearr_15691[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_15691[(1)] = (1));

return statearr_15691;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_15652){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15652);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15699){var ex__14334__auto__ = e15699;
var statearr_15701_18196 = state_15652;
(statearr_15701_18196[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15652[(4)]))){
var statearr_15702_18197 = state_15652;
(statearr_15702_18197[(1)] = cljs.core.first((state_15652[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18198 = state_15652;
state_15652 = G__18198;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_15710 = f__14653__auto__();
(statearr_15710[(6)] = c__14652__auto___18175);

return statearr_15710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_15756){
var state_val_15761 = (state_15756[(1)]);
if((state_val_15761 === (7))){
var inst_15752 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15762_18200 = state_15756__$1;
(statearr_15762_18200[(2)] = inst_15752);

(statearr_15762_18200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15761 === (1))){
var inst_15730 = init;
var inst_15731 = inst_15730;
var state_15756__$1 = (function (){var statearr_15765 = state_15756;
(statearr_15765[(7)] = inst_15731);

return statearr_15765;
})();
var statearr_15766_18201 = state_15756__$1;
(statearr_15766_18201[(2)] = null);

(statearr_15766_18201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15761 === (4))){
var inst_15737 = (state_15756[(8)]);
var inst_15737__$1 = (state_15756[(2)]);
var inst_15740 = (inst_15737__$1 == null);
var state_15756__$1 = (function (){var statearr_15767 = state_15756;
(statearr_15767[(8)] = inst_15737__$1);

return statearr_15767;
})();
if(cljs.core.truth_(inst_15740)){
var statearr_15768_18202 = state_15756__$1;
(statearr_15768_18202[(1)] = (5));

} else {
var statearr_15770_18203 = state_15756__$1;
(statearr_15770_18203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15761 === (6))){
var inst_15743 = (state_15756[(9)]);
var inst_15731 = (state_15756[(7)]);
var inst_15737 = (state_15756[(8)]);
var inst_15743__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15731,inst_15737) : f.call(null,inst_15731,inst_15737));
var inst_15744 = cljs.core.reduced_QMARK_(inst_15743__$1);
var state_15756__$1 = (function (){var statearr_15771 = state_15756;
(statearr_15771[(9)] = inst_15743__$1);

return statearr_15771;
})();
if(inst_15744){
var statearr_15773_18208 = state_15756__$1;
(statearr_15773_18208[(1)] = (8));

} else {
var statearr_15774_18209 = state_15756__$1;
(statearr_15774_18209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15761 === (3))){
var inst_15754 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15756__$1,inst_15754);
} else {
if((state_val_15761 === (2))){
var state_15756__$1 = state_15756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15756__$1,(4),ch);
} else {
if((state_val_15761 === (9))){
var inst_15743 = (state_15756[(9)]);
var inst_15731 = inst_15743;
var state_15756__$1 = (function (){var statearr_15776 = state_15756;
(statearr_15776[(7)] = inst_15731);

return statearr_15776;
})();
var statearr_15777_18211 = state_15756__$1;
(statearr_15777_18211[(2)] = null);

(statearr_15777_18211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15761 === (5))){
var inst_15731 = (state_15756[(7)]);
var state_15756__$1 = state_15756;
var statearr_15778_18212 = state_15756__$1;
(statearr_15778_18212[(2)] = inst_15731);

(statearr_15778_18212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15761 === (10))){
var inst_15750 = (state_15756[(2)]);
var state_15756__$1 = state_15756;
var statearr_15779_18214 = state_15756__$1;
(statearr_15779_18214[(2)] = inst_15750);

(statearr_15779_18214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15761 === (8))){
var inst_15743 = (state_15756[(9)]);
var inst_15746 = cljs.core.deref(inst_15743);
var state_15756__$1 = state_15756;
var statearr_15781_18215 = state_15756__$1;
(statearr_15781_18215[(2)] = inst_15746);

(statearr_15781_18215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14331__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14331__auto____0 = (function (){
var statearr_15782 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15782[(0)] = cljs$core$async$reduce_$_state_machine__14331__auto__);

(statearr_15782[(1)] = (1));

return statearr_15782;
});
var cljs$core$async$reduce_$_state_machine__14331__auto____1 = (function (state_15756){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15756);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15783){var ex__14334__auto__ = e15783;
var statearr_15784_18218 = state_15756;
(statearr_15784_18218[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15756[(4)]))){
var statearr_15785_18219 = state_15756;
(statearr_15785_18219[(1)] = cljs.core.first((state_15756[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18220 = state_15756;
state_15756 = G__18220;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14331__auto__ = function(state_15756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14331__auto____1.call(this,state_15756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14331__auto____0;
cljs$core$async$reduce_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14331__auto____1;
return cljs$core$async$reduce_$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_15786 = f__14653__auto__();
(statearr_15786[(6)] = c__14652__auto__);

return statearr_15786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_15796){
var state_val_15797 = (state_15796[(1)]);
if((state_val_15797 === (1))){
var inst_15791 = cljs.core.async.reduce(f__$1,init,ch);
var state_15796__$1 = state_15796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15796__$1,(2),inst_15791);
} else {
if((state_val_15797 === (2))){
var inst_15793 = (state_15796[(2)]);
var inst_15794 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15793) : f__$1.call(null,inst_15793));
var state_15796__$1 = state_15796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15796__$1,inst_15794);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14331__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14331__auto____0 = (function (){
var statearr_15800 = [null,null,null,null,null,null,null];
(statearr_15800[(0)] = cljs$core$async$transduce_$_state_machine__14331__auto__);

(statearr_15800[(1)] = (1));

return statearr_15800;
});
var cljs$core$async$transduce_$_state_machine__14331__auto____1 = (function (state_15796){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15796);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15801){var ex__14334__auto__ = e15801;
var statearr_15802_18221 = state_15796;
(statearr_15802_18221[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15796[(4)]))){
var statearr_15803_18222 = state_15796;
(statearr_15803_18222[(1)] = cljs.core.first((state_15796[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18223 = state_15796;
state_15796 = G__18223;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14331__auto__ = function(state_15796){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14331__auto____1.call(this,state_15796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14331__auto____0;
cljs$core$async$transduce_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14331__auto____1;
return cljs$core$async$transduce_$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_15807 = f__14653__auto__();
(statearr_15807[(6)] = c__14652__auto__);

return statearr_15807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15809 = arguments.length;
switch (G__15809) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_15840){
var state_val_15841 = (state_15840[(1)]);
if((state_val_15841 === (7))){
var inst_15819 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
var statearr_15843_18225 = state_15840__$1;
(statearr_15843_18225[(2)] = inst_15819);

(statearr_15843_18225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (1))){
var inst_15810 = cljs.core.seq(coll);
var inst_15811 = inst_15810;
var state_15840__$1 = (function (){var statearr_15844 = state_15840;
(statearr_15844[(7)] = inst_15811);

return statearr_15844;
})();
var statearr_15845_18226 = state_15840__$1;
(statearr_15845_18226[(2)] = null);

(statearr_15845_18226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (4))){
var inst_15811 = (state_15840[(7)]);
var inst_15817 = cljs.core.first(inst_15811);
var state_15840__$1 = state_15840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15840__$1,(7),ch,inst_15817);
} else {
if((state_val_15841 === (13))){
var inst_15831 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
var statearr_15846_18230 = state_15840__$1;
(statearr_15846_18230[(2)] = inst_15831);

(statearr_15846_18230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (6))){
var inst_15822 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
if(cljs.core.truth_(inst_15822)){
var statearr_15847_18231 = state_15840__$1;
(statearr_15847_18231[(1)] = (8));

} else {
var statearr_15848_18232 = state_15840__$1;
(statearr_15848_18232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (3))){
var inst_15838 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15840__$1,inst_15838);
} else {
if((state_val_15841 === (12))){
var state_15840__$1 = state_15840;
var statearr_15853_18233 = state_15840__$1;
(statearr_15853_18233[(2)] = null);

(statearr_15853_18233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (2))){
var inst_15811 = (state_15840[(7)]);
var state_15840__$1 = state_15840;
if(cljs.core.truth_(inst_15811)){
var statearr_15856_18272 = state_15840__$1;
(statearr_15856_18272[(1)] = (4));

} else {
var statearr_15857_18273 = state_15840__$1;
(statearr_15857_18273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (11))){
var inst_15828 = cljs.core.async.close_BANG_(ch);
var state_15840__$1 = state_15840;
var statearr_15858_18274 = state_15840__$1;
(statearr_15858_18274[(2)] = inst_15828);

(statearr_15858_18274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (9))){
var state_15840__$1 = state_15840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15859_18275 = state_15840__$1;
(statearr_15859_18275[(1)] = (11));

} else {
var statearr_15860_18276 = state_15840__$1;
(statearr_15860_18276[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (5))){
var inst_15811 = (state_15840[(7)]);
var state_15840__$1 = state_15840;
var statearr_15861_18277 = state_15840__$1;
(statearr_15861_18277[(2)] = inst_15811);

(statearr_15861_18277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (10))){
var inst_15833 = (state_15840[(2)]);
var state_15840__$1 = state_15840;
var statearr_15862_18279 = state_15840__$1;
(statearr_15862_18279[(2)] = inst_15833);

(statearr_15862_18279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15841 === (8))){
var inst_15811 = (state_15840[(7)]);
var inst_15824 = cljs.core.next(inst_15811);
var inst_15811__$1 = inst_15824;
var state_15840__$1 = (function (){var statearr_15863 = state_15840;
(statearr_15863[(7)] = inst_15811__$1);

return statearr_15863;
})();
var statearr_15864_18282 = state_15840__$1;
(statearr_15864_18282[(2)] = null);

(statearr_15864_18282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_15866 = [null,null,null,null,null,null,null,null];
(statearr_15866[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_15866[(1)] = (1));

return statearr_15866;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_15840){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_15840);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e15871){var ex__14334__auto__ = e15871;
var statearr_15872_18283 = state_15840;
(statearr_15872_18283[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_15840[(4)]))){
var statearr_15873_18284 = state_15840;
(statearr_15873_18284[(1)] = cljs.core.first((state_15840[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18285 = state_15840;
state_15840 = G__18285;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_15840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_15840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_15876 = f__14653__auto__();
(statearr_15876[(6)] = c__14652__auto__);

return statearr_15876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15892 = arguments.length;
switch (G__15892) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18287 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18287(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18288 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18288(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18289 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18289(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18290 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18290(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15928 = (function (ch,cs,meta15929){
this.ch = ch;
this.cs = cs;
this.meta15929 = meta15929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15930,meta15929__$1){
var self__ = this;
var _15930__$1 = this;
return (new cljs.core.async.t_cljs$core$async15928(self__.ch,self__.cs,meta15929__$1));
}));

(cljs.core.async.t_cljs$core$async15928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15930){
var self__ = this;
var _15930__$1 = this;
return self__.meta15929;
}));

(cljs.core.async.t_cljs$core$async15928.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15928.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15928.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15928.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15928.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15928.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15929","meta15929",105509752,null)], null);
}));

(cljs.core.async.t_cljs$core$async15928.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15928");

(cljs.core.async.t_cljs$core$async15928.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15928");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15928.
 */
cljs.core.async.__GT_t_cljs$core$async15928 = (function cljs$core$async$__GT_t_cljs$core$async15928(ch,cs,meta15929){
return (new cljs.core.async.t_cljs$core$async15928(ch,cs,meta15929));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15928(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14652__auto___18294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_16094){
var state_val_16099 = (state_16094[(1)]);
if((state_val_16099 === (7))){
var inst_16088 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16104_18295 = state_16094__$1;
(statearr_16104_18295[(2)] = inst_16088);

(statearr_16104_18295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (20))){
var inst_15983 = (state_16094[(7)]);
var inst_15998 = cljs.core.first(inst_15983);
var inst_15999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15998,(0),null);
var inst_16000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15998,(1),null);
var state_16094__$1 = (function (){var statearr_16106 = state_16094;
(statearr_16106[(8)] = inst_15999);

return statearr_16106;
})();
if(cljs.core.truth_(inst_16000)){
var statearr_16111_18296 = state_16094__$1;
(statearr_16111_18296[(1)] = (22));

} else {
var statearr_16112_18297 = state_16094__$1;
(statearr_16112_18297[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (27))){
var inst_16029 = (state_16094[(9)]);
var inst_15952 = (state_16094[(10)]);
var inst_16036 = (state_16094[(11)]);
var inst_16031 = (state_16094[(12)]);
var inst_16036__$1 = cljs.core._nth(inst_16029,inst_16031);
var inst_16037 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16036__$1,inst_15952,done);
var state_16094__$1 = (function (){var statearr_16117 = state_16094;
(statearr_16117[(11)] = inst_16036__$1);

return statearr_16117;
})();
if(cljs.core.truth_(inst_16037)){
var statearr_16118_18298 = state_16094__$1;
(statearr_16118_18298[(1)] = (30));

} else {
var statearr_16119_18299 = state_16094__$1;
(statearr_16119_18299[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (1))){
var state_16094__$1 = state_16094;
var statearr_16120_18300 = state_16094__$1;
(statearr_16120_18300[(2)] = null);

(statearr_16120_18300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (24))){
var inst_15983 = (state_16094[(7)]);
var inst_16005 = (state_16094[(2)]);
var inst_16006 = cljs.core.next(inst_15983);
var inst_15961 = inst_16006;
var inst_15962 = null;
var inst_15963 = (0);
var inst_15964 = (0);
var state_16094__$1 = (function (){var statearr_16121 = state_16094;
(statearr_16121[(13)] = inst_15963);

(statearr_16121[(14)] = inst_16005);

(statearr_16121[(15)] = inst_15962);

(statearr_16121[(16)] = inst_15964);

(statearr_16121[(17)] = inst_15961);

return statearr_16121;
})();
var statearr_16122_18301 = state_16094__$1;
(statearr_16122_18301[(2)] = null);

(statearr_16122_18301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (39))){
var state_16094__$1 = state_16094;
var statearr_16127_18302 = state_16094__$1;
(statearr_16127_18302[(2)] = null);

(statearr_16127_18302[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (4))){
var inst_15952 = (state_16094[(10)]);
var inst_15952__$1 = (state_16094[(2)]);
var inst_15953 = (inst_15952__$1 == null);
var state_16094__$1 = (function (){var statearr_16128 = state_16094;
(statearr_16128[(10)] = inst_15952__$1);

return statearr_16128;
})();
if(cljs.core.truth_(inst_15953)){
var statearr_16129_18303 = state_16094__$1;
(statearr_16129_18303[(1)] = (5));

} else {
var statearr_16130_18307 = state_16094__$1;
(statearr_16130_18307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (15))){
var inst_15963 = (state_16094[(13)]);
var inst_15962 = (state_16094[(15)]);
var inst_15964 = (state_16094[(16)]);
var inst_15961 = (state_16094[(17)]);
var inst_15979 = (state_16094[(2)]);
var inst_15980 = (inst_15964 + (1));
var tmp16123 = inst_15963;
var tmp16124 = inst_15962;
var tmp16125 = inst_15961;
var inst_15961__$1 = tmp16125;
var inst_15962__$1 = tmp16124;
var inst_15963__$1 = tmp16123;
var inst_15964__$1 = inst_15980;
var state_16094__$1 = (function (){var statearr_16131 = state_16094;
(statearr_16131[(13)] = inst_15963__$1);

(statearr_16131[(15)] = inst_15962__$1);

(statearr_16131[(16)] = inst_15964__$1);

(statearr_16131[(18)] = inst_15979);

(statearr_16131[(17)] = inst_15961__$1);

return statearr_16131;
})();
var statearr_16132_18315 = state_16094__$1;
(statearr_16132_18315[(2)] = null);

(statearr_16132_18315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (21))){
var inst_16009 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16136_18316 = state_16094__$1;
(statearr_16136_18316[(2)] = inst_16009);

(statearr_16136_18316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (31))){
var inst_16036 = (state_16094[(11)]);
var inst_16042 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16036);
var state_16094__$1 = state_16094;
var statearr_16138_18320 = state_16094__$1;
(statearr_16138_18320[(2)] = inst_16042);

(statearr_16138_18320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (32))){
var inst_16028 = (state_16094[(19)]);
var inst_16029 = (state_16094[(9)]);
var inst_16030 = (state_16094[(20)]);
var inst_16031 = (state_16094[(12)]);
var inst_16044 = (state_16094[(2)]);
var inst_16045 = (inst_16031 + (1));
var tmp16133 = inst_16028;
var tmp16134 = inst_16029;
var tmp16135 = inst_16030;
var inst_16028__$1 = tmp16133;
var inst_16029__$1 = tmp16134;
var inst_16030__$1 = tmp16135;
var inst_16031__$1 = inst_16045;
var state_16094__$1 = (function (){var statearr_16140 = state_16094;
(statearr_16140[(19)] = inst_16028__$1);

(statearr_16140[(9)] = inst_16029__$1);

(statearr_16140[(21)] = inst_16044);

(statearr_16140[(20)] = inst_16030__$1);

(statearr_16140[(12)] = inst_16031__$1);

return statearr_16140;
})();
var statearr_16144_18321 = state_16094__$1;
(statearr_16144_18321[(2)] = null);

(statearr_16144_18321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (40))){
var inst_16060 = (state_16094[(22)]);
var inst_16065 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16060);
var state_16094__$1 = state_16094;
var statearr_16145_18322 = state_16094__$1;
(statearr_16145_18322[(2)] = inst_16065);

(statearr_16145_18322[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (33))){
var inst_16048 = (state_16094[(23)]);
var inst_16052 = cljs.core.chunked_seq_QMARK_(inst_16048);
var state_16094__$1 = state_16094;
if(inst_16052){
var statearr_16146_18323 = state_16094__$1;
(statearr_16146_18323[(1)] = (36));

} else {
var statearr_16147_18324 = state_16094__$1;
(statearr_16147_18324[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (13))){
var inst_15973 = (state_16094[(24)]);
var inst_15976 = cljs.core.async.close_BANG_(inst_15973);
var state_16094__$1 = state_16094;
var statearr_16148_18328 = state_16094__$1;
(statearr_16148_18328[(2)] = inst_15976);

(statearr_16148_18328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (22))){
var inst_15999 = (state_16094[(8)]);
var inst_16002 = cljs.core.async.close_BANG_(inst_15999);
var state_16094__$1 = state_16094;
var statearr_16152_18339 = state_16094__$1;
(statearr_16152_18339[(2)] = inst_16002);

(statearr_16152_18339[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (36))){
var inst_16048 = (state_16094[(23)]);
var inst_16054 = cljs.core.chunk_first(inst_16048);
var inst_16056 = cljs.core.chunk_rest(inst_16048);
var inst_16057 = cljs.core.count(inst_16054);
var inst_16028 = inst_16056;
var inst_16029 = inst_16054;
var inst_16030 = inst_16057;
var inst_16031 = (0);
var state_16094__$1 = (function (){var statearr_16154 = state_16094;
(statearr_16154[(19)] = inst_16028);

(statearr_16154[(9)] = inst_16029);

(statearr_16154[(20)] = inst_16030);

(statearr_16154[(12)] = inst_16031);

return statearr_16154;
})();
var statearr_16155_18343 = state_16094__$1;
(statearr_16155_18343[(2)] = null);

(statearr_16155_18343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (41))){
var inst_16048 = (state_16094[(23)]);
var inst_16067 = (state_16094[(2)]);
var inst_16068 = cljs.core.next(inst_16048);
var inst_16028 = inst_16068;
var inst_16029 = null;
var inst_16030 = (0);
var inst_16031 = (0);
var state_16094__$1 = (function (){var statearr_16156 = state_16094;
(statearr_16156[(19)] = inst_16028);

(statearr_16156[(9)] = inst_16029);

(statearr_16156[(25)] = inst_16067);

(statearr_16156[(20)] = inst_16030);

(statearr_16156[(12)] = inst_16031);

return statearr_16156;
})();
var statearr_16157_18347 = state_16094__$1;
(statearr_16157_18347[(2)] = null);

(statearr_16157_18347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (43))){
var state_16094__$1 = state_16094;
var statearr_16158_18348 = state_16094__$1;
(statearr_16158_18348[(2)] = null);

(statearr_16158_18348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (29))){
var inst_16076 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16160_18349 = state_16094__$1;
(statearr_16160_18349[(2)] = inst_16076);

(statearr_16160_18349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (44))){
var inst_16085 = (state_16094[(2)]);
var state_16094__$1 = (function (){var statearr_16162 = state_16094;
(statearr_16162[(26)] = inst_16085);

return statearr_16162;
})();
var statearr_16163_18350 = state_16094__$1;
(statearr_16163_18350[(2)] = null);

(statearr_16163_18350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (6))){
var inst_16019 = (state_16094[(27)]);
var inst_16018 = cljs.core.deref(cs);
var inst_16019__$1 = cljs.core.keys(inst_16018);
var inst_16020 = cljs.core.count(inst_16019__$1);
var inst_16021 = cljs.core.reset_BANG_(dctr,inst_16020);
var inst_16026 = cljs.core.seq(inst_16019__$1);
var inst_16028 = inst_16026;
var inst_16029 = null;
var inst_16030 = (0);
var inst_16031 = (0);
var state_16094__$1 = (function (){var statearr_16164 = state_16094;
(statearr_16164[(19)] = inst_16028);

(statearr_16164[(9)] = inst_16029);

(statearr_16164[(27)] = inst_16019__$1);

(statearr_16164[(20)] = inst_16030);

(statearr_16164[(12)] = inst_16031);

(statearr_16164[(28)] = inst_16021);

return statearr_16164;
})();
var statearr_16165_18351 = state_16094__$1;
(statearr_16165_18351[(2)] = null);

(statearr_16165_18351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (28))){
var inst_16028 = (state_16094[(19)]);
var inst_16048 = (state_16094[(23)]);
var inst_16048__$1 = cljs.core.seq(inst_16028);
var state_16094__$1 = (function (){var statearr_16166 = state_16094;
(statearr_16166[(23)] = inst_16048__$1);

return statearr_16166;
})();
if(inst_16048__$1){
var statearr_16167_18352 = state_16094__$1;
(statearr_16167_18352[(1)] = (33));

} else {
var statearr_16170_18353 = state_16094__$1;
(statearr_16170_18353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (25))){
var inst_16030 = (state_16094[(20)]);
var inst_16031 = (state_16094[(12)]);
var inst_16033 = (inst_16031 < inst_16030);
var inst_16034 = inst_16033;
var state_16094__$1 = state_16094;
if(cljs.core.truth_(inst_16034)){
var statearr_16173_18354 = state_16094__$1;
(statearr_16173_18354[(1)] = (27));

} else {
var statearr_16174_18355 = state_16094__$1;
(statearr_16174_18355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (34))){
var state_16094__$1 = state_16094;
var statearr_16177_18356 = state_16094__$1;
(statearr_16177_18356[(2)] = null);

(statearr_16177_18356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (17))){
var state_16094__$1 = state_16094;
var statearr_16178_18357 = state_16094__$1;
(statearr_16178_18357[(2)] = null);

(statearr_16178_18357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (3))){
var inst_16090 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16094__$1,inst_16090);
} else {
if((state_val_16099 === (12))){
var inst_16014 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16180_18358 = state_16094__$1;
(statearr_16180_18358[(2)] = inst_16014);

(statearr_16180_18358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (2))){
var state_16094__$1 = state_16094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16094__$1,(4),ch);
} else {
if((state_val_16099 === (23))){
var state_16094__$1 = state_16094;
var statearr_16181_18362 = state_16094__$1;
(statearr_16181_18362[(2)] = null);

(statearr_16181_18362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (35))){
var inst_16074 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16183_18363 = state_16094__$1;
(statearr_16183_18363[(2)] = inst_16074);

(statearr_16183_18363[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (19))){
var inst_15983 = (state_16094[(7)]);
var inst_15989 = cljs.core.chunk_first(inst_15983);
var inst_15990 = cljs.core.chunk_rest(inst_15983);
var inst_15991 = cljs.core.count(inst_15989);
var inst_15961 = inst_15990;
var inst_15962 = inst_15989;
var inst_15963 = inst_15991;
var inst_15964 = (0);
var state_16094__$1 = (function (){var statearr_16186 = state_16094;
(statearr_16186[(13)] = inst_15963);

(statearr_16186[(15)] = inst_15962);

(statearr_16186[(16)] = inst_15964);

(statearr_16186[(17)] = inst_15961);

return statearr_16186;
})();
var statearr_16193_18364 = state_16094__$1;
(statearr_16193_18364[(2)] = null);

(statearr_16193_18364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (11))){
var inst_15983 = (state_16094[(7)]);
var inst_15961 = (state_16094[(17)]);
var inst_15983__$1 = cljs.core.seq(inst_15961);
var state_16094__$1 = (function (){var statearr_16194 = state_16094;
(statearr_16194[(7)] = inst_15983__$1);

return statearr_16194;
})();
if(inst_15983__$1){
var statearr_16195_18365 = state_16094__$1;
(statearr_16195_18365[(1)] = (16));

} else {
var statearr_16196_18366 = state_16094__$1;
(statearr_16196_18366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (9))){
var inst_16016 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16197_18367 = state_16094__$1;
(statearr_16197_18367[(2)] = inst_16016);

(statearr_16197_18367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (5))){
var inst_15959 = cljs.core.deref(cs);
var inst_15960 = cljs.core.seq(inst_15959);
var inst_15961 = inst_15960;
var inst_15962 = null;
var inst_15963 = (0);
var inst_15964 = (0);
var state_16094__$1 = (function (){var statearr_16199 = state_16094;
(statearr_16199[(13)] = inst_15963);

(statearr_16199[(15)] = inst_15962);

(statearr_16199[(16)] = inst_15964);

(statearr_16199[(17)] = inst_15961);

return statearr_16199;
})();
var statearr_16200_18368 = state_16094__$1;
(statearr_16200_18368[(2)] = null);

(statearr_16200_18368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (14))){
var state_16094__$1 = state_16094;
var statearr_16201_18369 = state_16094__$1;
(statearr_16201_18369[(2)] = null);

(statearr_16201_18369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (45))){
var inst_16082 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16202_18370 = state_16094__$1;
(statearr_16202_18370[(2)] = inst_16082);

(statearr_16202_18370[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (26))){
var inst_16019 = (state_16094[(27)]);
var inst_16078 = (state_16094[(2)]);
var inst_16079 = cljs.core.seq(inst_16019);
var state_16094__$1 = (function (){var statearr_16203 = state_16094;
(statearr_16203[(29)] = inst_16078);

return statearr_16203;
})();
if(inst_16079){
var statearr_16205_18371 = state_16094__$1;
(statearr_16205_18371[(1)] = (42));

} else {
var statearr_16206_18372 = state_16094__$1;
(statearr_16206_18372[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (16))){
var inst_15983 = (state_16094[(7)]);
var inst_15985 = cljs.core.chunked_seq_QMARK_(inst_15983);
var state_16094__$1 = state_16094;
if(inst_15985){
var statearr_16207_18373 = state_16094__$1;
(statearr_16207_18373[(1)] = (19));

} else {
var statearr_16208_18374 = state_16094__$1;
(statearr_16208_18374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (38))){
var inst_16071 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16209_18375 = state_16094__$1;
(statearr_16209_18375[(2)] = inst_16071);

(statearr_16209_18375[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (30))){
var state_16094__$1 = state_16094;
var statearr_16210_18376 = state_16094__$1;
(statearr_16210_18376[(2)] = null);

(statearr_16210_18376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (10))){
var inst_15962 = (state_16094[(15)]);
var inst_15964 = (state_16094[(16)]);
var inst_15972 = cljs.core._nth(inst_15962,inst_15964);
var inst_15973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15972,(0),null);
var inst_15974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15972,(1),null);
var state_16094__$1 = (function (){var statearr_16211 = state_16094;
(statearr_16211[(24)] = inst_15973);

return statearr_16211;
})();
if(cljs.core.truth_(inst_15974)){
var statearr_16212_18377 = state_16094__$1;
(statearr_16212_18377[(1)] = (13));

} else {
var statearr_16213_18378 = state_16094__$1;
(statearr_16213_18378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (18))){
var inst_16012 = (state_16094[(2)]);
var state_16094__$1 = state_16094;
var statearr_16215_18379 = state_16094__$1;
(statearr_16215_18379[(2)] = inst_16012);

(statearr_16215_18379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (42))){
var state_16094__$1 = state_16094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16094__$1,(45),dchan);
} else {
if((state_val_16099 === (37))){
var inst_16048 = (state_16094[(23)]);
var inst_15952 = (state_16094[(10)]);
var inst_16060 = (state_16094[(22)]);
var inst_16060__$1 = cljs.core.first(inst_16048);
var inst_16061 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16060__$1,inst_15952,done);
var state_16094__$1 = (function (){var statearr_16217 = state_16094;
(statearr_16217[(22)] = inst_16060__$1);

return statearr_16217;
})();
if(cljs.core.truth_(inst_16061)){
var statearr_16219_18383 = state_16094__$1;
(statearr_16219_18383[(1)] = (39));

} else {
var statearr_16220_18384 = state_16094__$1;
(statearr_16220_18384[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (8))){
var inst_15963 = (state_16094[(13)]);
var inst_15964 = (state_16094[(16)]);
var inst_15966 = (inst_15964 < inst_15963);
var inst_15967 = inst_15966;
var state_16094__$1 = state_16094;
if(cljs.core.truth_(inst_15967)){
var statearr_16221_18385 = state_16094__$1;
(statearr_16221_18385[(1)] = (10));

} else {
var statearr_16222_18386 = state_16094__$1;
(statearr_16222_18386[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14331__auto__ = null;
var cljs$core$async$mult_$_state_machine__14331__auto____0 = (function (){
var statearr_16227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16227[(0)] = cljs$core$async$mult_$_state_machine__14331__auto__);

(statearr_16227[(1)] = (1));

return statearr_16227;
});
var cljs$core$async$mult_$_state_machine__14331__auto____1 = (function (state_16094){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_16094);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e16228){var ex__14334__auto__ = e16228;
var statearr_16229_18387 = state_16094;
(statearr_16229_18387[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_16094[(4)]))){
var statearr_16230_18388 = state_16094;
(statearr_16230_18388[(1)] = cljs.core.first((state_16094[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18389 = state_16094;
state_16094 = G__18389;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14331__auto__ = function(state_16094){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14331__auto____1.call(this,state_16094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14331__auto____0;
cljs$core$async$mult_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14331__auto____1;
return cljs$core$async$mult_$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_16231 = f__14653__auto__();
(statearr_16231[(6)] = c__14652__auto___18294);

return statearr_16231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16234 = arguments.length;
switch (G__16234) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18393 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18393(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18399 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18399(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18400 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18400(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18401 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18401(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18402 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18402(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18403 = arguments.length;
var i__5727__auto___18404 = (0);
while(true){
if((i__5727__auto___18404 < len__5726__auto___18403)){
args__5732__auto__.push((arguments[i__5727__auto___18404]));

var G__18405 = (i__5727__auto___18404 + (1));
i__5727__auto___18404 = G__18405;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16284){
var map__16285 = p__16284;
var map__16285__$1 = cljs.core.__destructure_map(map__16285);
var opts = map__16285__$1;
var statearr_16288_18406 = state;
(statearr_16288_18406[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16291_18407 = state;
(statearr_16291_18407[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16316_18408 = state;
(statearr_16316_18408[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16268){
var G__16269 = cljs.core.first(seq16268);
var seq16268__$1 = cljs.core.next(seq16268);
var G__16270 = cljs.core.first(seq16268__$1);
var seq16268__$2 = cljs.core.next(seq16268__$1);
var G__16271 = cljs.core.first(seq16268__$2);
var seq16268__$3 = cljs.core.next(seq16268__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16269,G__16270,G__16271,seq16268__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16332 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16333){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16333 = meta16333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16334,meta16333__$1){
var self__ = this;
var _16334__$1 = this;
return (new cljs.core.async.t_cljs$core$async16332(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16333__$1));
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16334){
var self__ = this;
var _16334__$1 = this;
return self__.meta16333;
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16333","meta16333",1278928844,null)], null);
}));

(cljs.core.async.t_cljs$core$async16332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16332");

(cljs.core.async.t_cljs$core$async16332.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16332.
 */
cljs.core.async.__GT_t_cljs$core$async16332 = (function cljs$core$async$__GT_t_cljs$core$async16332(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16333){
return (new cljs.core.async.t_cljs$core$async16332(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16333));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16332(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14652__auto___18438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_16423){
var state_val_16424 = (state_16423[(1)]);
if((state_val_16424 === (7))){
var inst_16375 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
if(cljs.core.truth_(inst_16375)){
var statearr_16429_18439 = state_16423__$1;
(statearr_16429_18439[(1)] = (8));

} else {
var statearr_16430_18443 = state_16423__$1;
(statearr_16430_18443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (20))){
var inst_16368 = (state_16423[(7)]);
var state_16423__$1 = state_16423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16423__$1,(23),out,inst_16368);
} else {
if((state_val_16424 === (1))){
var inst_16351 = calc_state();
var inst_16352 = cljs.core.__destructure_map(inst_16351);
var inst_16353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16352,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16352,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16352,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16356 = inst_16351;
var state_16423__$1 = (function (){var statearr_16431 = state_16423;
(statearr_16431[(8)] = inst_16354);

(statearr_16431[(9)] = inst_16355);

(statearr_16431[(10)] = inst_16353);

(statearr_16431[(11)] = inst_16356);

return statearr_16431;
})();
var statearr_16432_18448 = state_16423__$1;
(statearr_16432_18448[(2)] = null);

(statearr_16432_18448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (24))){
var inst_16359 = (state_16423[(12)]);
var inst_16356 = inst_16359;
var state_16423__$1 = (function (){var statearr_16433 = state_16423;
(statearr_16433[(11)] = inst_16356);

return statearr_16433;
})();
var statearr_16434_18449 = state_16423__$1;
(statearr_16434_18449[(2)] = null);

(statearr_16434_18449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (4))){
var inst_16368 = (state_16423[(7)]);
var inst_16370 = (state_16423[(13)]);
var inst_16367 = (state_16423[(2)]);
var inst_16368__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16367,(0),null);
var inst_16369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16367,(1),null);
var inst_16370__$1 = (inst_16368__$1 == null);
var state_16423__$1 = (function (){var statearr_16435 = state_16423;
(statearr_16435[(14)] = inst_16369);

(statearr_16435[(7)] = inst_16368__$1);

(statearr_16435[(13)] = inst_16370__$1);

return statearr_16435;
})();
if(cljs.core.truth_(inst_16370__$1)){
var statearr_16437_18450 = state_16423__$1;
(statearr_16437_18450[(1)] = (5));

} else {
var statearr_16438_18451 = state_16423__$1;
(statearr_16438_18451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (15))){
var inst_16389 = (state_16423[(15)]);
var inst_16360 = (state_16423[(16)]);
var inst_16389__$1 = cljs.core.empty_QMARK_(inst_16360);
var state_16423__$1 = (function (){var statearr_16446 = state_16423;
(statearr_16446[(15)] = inst_16389__$1);

return statearr_16446;
})();
if(inst_16389__$1){
var statearr_16447_18454 = state_16423__$1;
(statearr_16447_18454[(1)] = (17));

} else {
var statearr_16449_18455 = state_16423__$1;
(statearr_16449_18455[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (21))){
var inst_16359 = (state_16423[(12)]);
var inst_16356 = inst_16359;
var state_16423__$1 = (function (){var statearr_16452 = state_16423;
(statearr_16452[(11)] = inst_16356);

return statearr_16452;
})();
var statearr_16453_18456 = state_16423__$1;
(statearr_16453_18456[(2)] = null);

(statearr_16453_18456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (13))){
var inst_16382 = (state_16423[(2)]);
var inst_16383 = calc_state();
var inst_16356 = inst_16383;
var state_16423__$1 = (function (){var statearr_16454 = state_16423;
(statearr_16454[(17)] = inst_16382);

(statearr_16454[(11)] = inst_16356);

return statearr_16454;
})();
var statearr_16455_18457 = state_16423__$1;
(statearr_16455_18457[(2)] = null);

(statearr_16455_18457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (22))){
var inst_16409 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
var statearr_16458_18458 = state_16423__$1;
(statearr_16458_18458[(2)] = inst_16409);

(statearr_16458_18458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (6))){
var inst_16369 = (state_16423[(14)]);
var inst_16373 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16369,change);
var state_16423__$1 = state_16423;
var statearr_16461_18459 = state_16423__$1;
(statearr_16461_18459[(2)] = inst_16373);

(statearr_16461_18459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (25))){
var state_16423__$1 = state_16423;
var statearr_16467_18460 = state_16423__$1;
(statearr_16467_18460[(2)] = null);

(statearr_16467_18460[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (17))){
var inst_16369 = (state_16423[(14)]);
var inst_16361 = (state_16423[(18)]);
var inst_16391 = (inst_16361.cljs$core$IFn$_invoke$arity$1 ? inst_16361.cljs$core$IFn$_invoke$arity$1(inst_16369) : inst_16361.call(null,inst_16369));
var inst_16392 = cljs.core.not(inst_16391);
var state_16423__$1 = state_16423;
var statearr_16469_18461 = state_16423__$1;
(statearr_16469_18461[(2)] = inst_16392);

(statearr_16469_18461[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (3))){
var inst_16413 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16423__$1,inst_16413);
} else {
if((state_val_16424 === (12))){
var state_16423__$1 = state_16423;
var statearr_16473_18462 = state_16423__$1;
(statearr_16473_18462[(2)] = null);

(statearr_16473_18462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (2))){
var inst_16359 = (state_16423[(12)]);
var inst_16356 = (state_16423[(11)]);
var inst_16359__$1 = cljs.core.__destructure_map(inst_16356);
var inst_16360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16359__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16359__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16359__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16423__$1 = (function (){var statearr_16474 = state_16423;
(statearr_16474[(12)] = inst_16359__$1);

(statearr_16474[(16)] = inst_16360);

(statearr_16474[(18)] = inst_16361);

return statearr_16474;
})();
return cljs.core.async.ioc_alts_BANG_(state_16423__$1,(4),inst_16362);
} else {
if((state_val_16424 === (23))){
var inst_16400 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
if(cljs.core.truth_(inst_16400)){
var statearr_16475_18463 = state_16423__$1;
(statearr_16475_18463[(1)] = (24));

} else {
var statearr_16476_18464 = state_16423__$1;
(statearr_16476_18464[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (19))){
var inst_16395 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
var statearr_16477_18465 = state_16423__$1;
(statearr_16477_18465[(2)] = inst_16395);

(statearr_16477_18465[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (11))){
var inst_16369 = (state_16423[(14)]);
var inst_16379 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16369);
var state_16423__$1 = state_16423;
var statearr_16479_18466 = state_16423__$1;
(statearr_16479_18466[(2)] = inst_16379);

(statearr_16479_18466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (9))){
var inst_16369 = (state_16423[(14)]);
var inst_16360 = (state_16423[(16)]);
var inst_16386 = (state_16423[(19)]);
var inst_16386__$1 = (inst_16360.cljs$core$IFn$_invoke$arity$1 ? inst_16360.cljs$core$IFn$_invoke$arity$1(inst_16369) : inst_16360.call(null,inst_16369));
var state_16423__$1 = (function (){var statearr_16480 = state_16423;
(statearr_16480[(19)] = inst_16386__$1);

return statearr_16480;
})();
if(cljs.core.truth_(inst_16386__$1)){
var statearr_16481_18467 = state_16423__$1;
(statearr_16481_18467[(1)] = (14));

} else {
var statearr_16482_18468 = state_16423__$1;
(statearr_16482_18468[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (5))){
var inst_16370 = (state_16423[(13)]);
var state_16423__$1 = state_16423;
var statearr_16483_18469 = state_16423__$1;
(statearr_16483_18469[(2)] = inst_16370);

(statearr_16483_18469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (14))){
var inst_16386 = (state_16423[(19)]);
var state_16423__$1 = state_16423;
var statearr_16484_18470 = state_16423__$1;
(statearr_16484_18470[(2)] = inst_16386);

(statearr_16484_18470[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (26))){
var inst_16405 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
var statearr_16485_18471 = state_16423__$1;
(statearr_16485_18471[(2)] = inst_16405);

(statearr_16485_18471[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (16))){
var inst_16397 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
if(cljs.core.truth_(inst_16397)){
var statearr_16486_18472 = state_16423__$1;
(statearr_16486_18472[(1)] = (20));

} else {
var statearr_16487_18473 = state_16423__$1;
(statearr_16487_18473[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (10))){
var inst_16411 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
var statearr_16488_18474 = state_16423__$1;
(statearr_16488_18474[(2)] = inst_16411);

(statearr_16488_18474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (18))){
var inst_16389 = (state_16423[(15)]);
var state_16423__$1 = state_16423;
var statearr_16490_18478 = state_16423__$1;
(statearr_16490_18478[(2)] = inst_16389);

(statearr_16490_18478[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (8))){
var inst_16368 = (state_16423[(7)]);
var inst_16377 = (inst_16368 == null);
var state_16423__$1 = state_16423;
if(cljs.core.truth_(inst_16377)){
var statearr_16491_18479 = state_16423__$1;
(statearr_16491_18479[(1)] = (11));

} else {
var statearr_16492_18480 = state_16423__$1;
(statearr_16492_18480[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14331__auto__ = null;
var cljs$core$async$mix_$_state_machine__14331__auto____0 = (function (){
var statearr_16500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16500[(0)] = cljs$core$async$mix_$_state_machine__14331__auto__);

(statearr_16500[(1)] = (1));

return statearr_16500;
});
var cljs$core$async$mix_$_state_machine__14331__auto____1 = (function (state_16423){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_16423);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e16506){var ex__14334__auto__ = e16506;
var statearr_16523_18481 = state_16423;
(statearr_16523_18481[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_16423[(4)]))){
var statearr_16526_18485 = state_16423;
(statearr_16526_18485[(1)] = cljs.core.first((state_16423[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18486 = state_16423;
state_16423 = G__18486;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14331__auto__ = function(state_16423){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14331__auto____1.call(this,state_16423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14331__auto____0;
cljs$core$async$mix_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14331__auto____1;
return cljs$core$async$mix_$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_16528 = f__14653__auto__();
(statearr_16528[(6)] = c__14652__auto___18438);

return statearr_16528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18497 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18497(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18501 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18501(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18502 = (function() {
var G__18503 = null;
var G__18503__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18503__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18503 = function(p,v){
switch(arguments.length){
case 1:
return G__18503__1.call(this,p);
case 2:
return G__18503__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18503.cljs$core$IFn$_invoke$arity$1 = G__18503__1;
G__18503.cljs$core$IFn$_invoke$arity$2 = G__18503__2;
return G__18503;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16578 = arguments.length;
switch (G__16578) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18502(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18502(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16625 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16626){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16626 = meta16626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16627,meta16626__$1){
var self__ = this;
var _16627__$1 = this;
return (new cljs.core.async.t_cljs$core$async16625(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16626__$1));
}));

(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16627){
var self__ = this;
var _16627__$1 = this;
return self__.meta16626;
}));

(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16626","meta16626",1103345444,null)], null);
}));

(cljs.core.async.t_cljs$core$async16625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16625");

(cljs.core.async.t_cljs$core$async16625.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16625.
 */
cljs.core.async.__GT_t_cljs$core$async16625 = (function cljs$core$async$__GT_t_cljs$core$async16625(ch,topic_fn,buf_fn,mults,ensure_mult,meta16626){
return (new cljs.core.async.t_cljs$core$async16625(ch,topic_fn,buf_fn,mults,ensure_mult,meta16626));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16614 = arguments.length;
switch (G__16614) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16607_SHARP_){
if(cljs.core.truth_((p1__16607_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16607_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16607_SHARP_.call(null,topic)))){
return p1__16607_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16607_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16625(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14652__auto___18509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_16732){
var state_val_16733 = (state_16732[(1)]);
if((state_val_16733 === (7))){
var inst_16725 = (state_16732[(2)]);
var state_16732__$1 = state_16732;
var statearr_16739_18510 = state_16732__$1;
(statearr_16739_18510[(2)] = inst_16725);

(statearr_16739_18510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (20))){
var state_16732__$1 = state_16732;
var statearr_16740_18511 = state_16732__$1;
(statearr_16740_18511[(2)] = null);

(statearr_16740_18511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (1))){
var state_16732__$1 = state_16732;
var statearr_16743_18512 = state_16732__$1;
(statearr_16743_18512[(2)] = null);

(statearr_16743_18512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (24))){
var inst_16708 = (state_16732[(7)]);
var inst_16717 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16708);
var state_16732__$1 = state_16732;
var statearr_16748_18513 = state_16732__$1;
(statearr_16748_18513[(2)] = inst_16717);

(statearr_16748_18513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (4))){
var inst_16657 = (state_16732[(8)]);
var inst_16657__$1 = (state_16732[(2)]);
var inst_16659 = (inst_16657__$1 == null);
var state_16732__$1 = (function (){var statearr_16749 = state_16732;
(statearr_16749[(8)] = inst_16657__$1);

return statearr_16749;
})();
if(cljs.core.truth_(inst_16659)){
var statearr_16751_18514 = state_16732__$1;
(statearr_16751_18514[(1)] = (5));

} else {
var statearr_16752_18515 = state_16732__$1;
(statearr_16752_18515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (15))){
var inst_16702 = (state_16732[(2)]);
var state_16732__$1 = state_16732;
var statearr_16754_18516 = state_16732__$1;
(statearr_16754_18516[(2)] = inst_16702);

(statearr_16754_18516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (21))){
var inst_16722 = (state_16732[(2)]);
var state_16732__$1 = (function (){var statearr_16759 = state_16732;
(statearr_16759[(9)] = inst_16722);

return statearr_16759;
})();
var statearr_16760_18517 = state_16732__$1;
(statearr_16760_18517[(2)] = null);

(statearr_16760_18517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (13))){
var inst_16682 = (state_16732[(10)]);
var inst_16684 = cljs.core.chunked_seq_QMARK_(inst_16682);
var state_16732__$1 = state_16732;
if(inst_16684){
var statearr_16762_18518 = state_16732__$1;
(statearr_16762_18518[(1)] = (16));

} else {
var statearr_16763_18519 = state_16732__$1;
(statearr_16763_18519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (22))){
var inst_16714 = (state_16732[(2)]);
var state_16732__$1 = state_16732;
if(cljs.core.truth_(inst_16714)){
var statearr_16767_18520 = state_16732__$1;
(statearr_16767_18520[(1)] = (23));

} else {
var statearr_16769_18521 = state_16732__$1;
(statearr_16769_18521[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (6))){
var inst_16657 = (state_16732[(8)]);
var inst_16710 = (state_16732[(11)]);
var inst_16708 = (state_16732[(7)]);
var inst_16708__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16657) : topic_fn.call(null,inst_16657));
var inst_16709 = cljs.core.deref(mults);
var inst_16710__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16709,inst_16708__$1);
var state_16732__$1 = (function (){var statearr_16771 = state_16732;
(statearr_16771[(11)] = inst_16710__$1);

(statearr_16771[(7)] = inst_16708__$1);

return statearr_16771;
})();
if(cljs.core.truth_(inst_16710__$1)){
var statearr_16772_18522 = state_16732__$1;
(statearr_16772_18522[(1)] = (19));

} else {
var statearr_16773_18523 = state_16732__$1;
(statearr_16773_18523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (25))){
var inst_16719 = (state_16732[(2)]);
var state_16732__$1 = state_16732;
var statearr_16774_18524 = state_16732__$1;
(statearr_16774_18524[(2)] = inst_16719);

(statearr_16774_18524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (17))){
var inst_16682 = (state_16732[(10)]);
var inst_16693 = cljs.core.first(inst_16682);
var inst_16694 = cljs.core.async.muxch_STAR_(inst_16693);
var inst_16695 = cljs.core.async.close_BANG_(inst_16694);
var inst_16696 = cljs.core.next(inst_16682);
var inst_16668 = inst_16696;
var inst_16669 = null;
var inst_16670 = (0);
var inst_16671 = (0);
var state_16732__$1 = (function (){var statearr_16776 = state_16732;
(statearr_16776[(12)] = inst_16669);

(statearr_16776[(13)] = inst_16668);

(statearr_16776[(14)] = inst_16670);

(statearr_16776[(15)] = inst_16695);

(statearr_16776[(16)] = inst_16671);

return statearr_16776;
})();
var statearr_16779_18531 = state_16732__$1;
(statearr_16779_18531[(2)] = null);

(statearr_16779_18531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (3))){
var inst_16727 = (state_16732[(2)]);
var state_16732__$1 = state_16732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16732__$1,inst_16727);
} else {
if((state_val_16733 === (12))){
var inst_16704 = (state_16732[(2)]);
var state_16732__$1 = state_16732;
var statearr_16780_18532 = state_16732__$1;
(statearr_16780_18532[(2)] = inst_16704);

(statearr_16780_18532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (2))){
var state_16732__$1 = state_16732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16732__$1,(4),ch);
} else {
if((state_val_16733 === (23))){
var state_16732__$1 = state_16732;
var statearr_16781_18533 = state_16732__$1;
(statearr_16781_18533[(2)] = null);

(statearr_16781_18533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (19))){
var inst_16657 = (state_16732[(8)]);
var inst_16710 = (state_16732[(11)]);
var inst_16712 = cljs.core.async.muxch_STAR_(inst_16710);
var state_16732__$1 = state_16732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16732__$1,(22),inst_16712,inst_16657);
} else {
if((state_val_16733 === (11))){
var inst_16682 = (state_16732[(10)]);
var inst_16668 = (state_16732[(13)]);
var inst_16682__$1 = cljs.core.seq(inst_16668);
var state_16732__$1 = (function (){var statearr_16785 = state_16732;
(statearr_16785[(10)] = inst_16682__$1);

return statearr_16785;
})();
if(inst_16682__$1){
var statearr_16786_18534 = state_16732__$1;
(statearr_16786_18534[(1)] = (13));

} else {
var statearr_16787_18535 = state_16732__$1;
(statearr_16787_18535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (9))){
var inst_16706 = (state_16732[(2)]);
var state_16732__$1 = state_16732;
var statearr_16789_18536 = state_16732__$1;
(statearr_16789_18536[(2)] = inst_16706);

(statearr_16789_18536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (5))){
var inst_16665 = cljs.core.deref(mults);
var inst_16666 = cljs.core.vals(inst_16665);
var inst_16667 = cljs.core.seq(inst_16666);
var inst_16668 = inst_16667;
var inst_16669 = null;
var inst_16670 = (0);
var inst_16671 = (0);
var state_16732__$1 = (function (){var statearr_16794 = state_16732;
(statearr_16794[(12)] = inst_16669);

(statearr_16794[(13)] = inst_16668);

(statearr_16794[(14)] = inst_16670);

(statearr_16794[(16)] = inst_16671);

return statearr_16794;
})();
var statearr_16795_18537 = state_16732__$1;
(statearr_16795_18537[(2)] = null);

(statearr_16795_18537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (14))){
var state_16732__$1 = state_16732;
var statearr_16801_18538 = state_16732__$1;
(statearr_16801_18538[(2)] = null);

(statearr_16801_18538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (16))){
var inst_16682 = (state_16732[(10)]);
var inst_16688 = cljs.core.chunk_first(inst_16682);
var inst_16689 = cljs.core.chunk_rest(inst_16682);
var inst_16690 = cljs.core.count(inst_16688);
var inst_16668 = inst_16689;
var inst_16669 = inst_16688;
var inst_16670 = inst_16690;
var inst_16671 = (0);
var state_16732__$1 = (function (){var statearr_16804 = state_16732;
(statearr_16804[(12)] = inst_16669);

(statearr_16804[(13)] = inst_16668);

(statearr_16804[(14)] = inst_16670);

(statearr_16804[(16)] = inst_16671);

return statearr_16804;
})();
var statearr_16806_18539 = state_16732__$1;
(statearr_16806_18539[(2)] = null);

(statearr_16806_18539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (10))){
var inst_16669 = (state_16732[(12)]);
var inst_16668 = (state_16732[(13)]);
var inst_16670 = (state_16732[(14)]);
var inst_16671 = (state_16732[(16)]);
var inst_16676 = cljs.core._nth(inst_16669,inst_16671);
var inst_16677 = cljs.core.async.muxch_STAR_(inst_16676);
var inst_16678 = cljs.core.async.close_BANG_(inst_16677);
var inst_16679 = (inst_16671 + (1));
var tmp16797 = inst_16669;
var tmp16798 = inst_16668;
var tmp16799 = inst_16670;
var inst_16668__$1 = tmp16798;
var inst_16669__$1 = tmp16797;
var inst_16670__$1 = tmp16799;
var inst_16671__$1 = inst_16679;
var state_16732__$1 = (function (){var statearr_16810 = state_16732;
(statearr_16810[(12)] = inst_16669__$1);

(statearr_16810[(17)] = inst_16678);

(statearr_16810[(13)] = inst_16668__$1);

(statearr_16810[(14)] = inst_16670__$1);

(statearr_16810[(16)] = inst_16671__$1);

return statearr_16810;
})();
var statearr_16811_18542 = state_16732__$1;
(statearr_16811_18542[(2)] = null);

(statearr_16811_18542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (18))){
var inst_16699 = (state_16732[(2)]);
var state_16732__$1 = state_16732;
var statearr_16816_18543 = state_16732__$1;
(statearr_16816_18543[(2)] = inst_16699);

(statearr_16816_18543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16733 === (8))){
var inst_16670 = (state_16732[(14)]);
var inst_16671 = (state_16732[(16)]);
var inst_16673 = (inst_16671 < inst_16670);
var inst_16674 = inst_16673;
var state_16732__$1 = state_16732;
if(cljs.core.truth_(inst_16674)){
var statearr_16817_18544 = state_16732__$1;
(statearr_16817_18544[(1)] = (10));

} else {
var statearr_16818_18545 = state_16732__$1;
(statearr_16818_18545[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_16828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16828[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_16828[(1)] = (1));

return statearr_16828;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_16732){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_16732);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e16830){var ex__14334__auto__ = e16830;
var statearr_16831_18546 = state_16732;
(statearr_16831_18546[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_16732[(4)]))){
var statearr_16834_18548 = state_16732;
(statearr_16834_18548[(1)] = cljs.core.first((state_16732[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18549 = state_16732;
state_16732 = G__18549;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_16732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_16732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_16839 = f__14653__auto__();
(statearr_16839[(6)] = c__14652__auto___18509);

return statearr_16839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16845 = arguments.length;
switch (G__16845) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16860 = arguments.length;
switch (G__16860) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16874 = arguments.length;
switch (G__16874) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14652__auto___18568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_16969){
var state_val_16970 = (state_16969[(1)]);
if((state_val_16970 === (7))){
var state_16969__$1 = state_16969;
var statearr_16973_18569 = state_16969__$1;
(statearr_16973_18569[(2)] = null);

(statearr_16973_18569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (1))){
var state_16969__$1 = state_16969;
var statearr_16976_18571 = state_16969__$1;
(statearr_16976_18571[(2)] = null);

(statearr_16976_18571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (4))){
var inst_16907 = (state_16969[(7)]);
var inst_16908 = (state_16969[(8)]);
var inst_16910 = (inst_16908 < inst_16907);
var state_16969__$1 = state_16969;
if(cljs.core.truth_(inst_16910)){
var statearr_16980_18572 = state_16969__$1;
(statearr_16980_18572[(1)] = (6));

} else {
var statearr_16981_18573 = state_16969__$1;
(statearr_16981_18573[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (15))){
var inst_16951 = (state_16969[(9)]);
var inst_16957 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16951);
var state_16969__$1 = state_16969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16969__$1,(17),out,inst_16957);
} else {
if((state_val_16970 === (13))){
var inst_16951 = (state_16969[(9)]);
var inst_16951__$1 = (state_16969[(2)]);
var inst_16952 = cljs.core.some(cljs.core.nil_QMARK_,inst_16951__$1);
var state_16969__$1 = (function (){var statearr_16982 = state_16969;
(statearr_16982[(9)] = inst_16951__$1);

return statearr_16982;
})();
if(cljs.core.truth_(inst_16952)){
var statearr_16983_18574 = state_16969__$1;
(statearr_16983_18574[(1)] = (14));

} else {
var statearr_16984_18575 = state_16969__$1;
(statearr_16984_18575[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (6))){
var state_16969__$1 = state_16969;
var statearr_16985_18576 = state_16969__$1;
(statearr_16985_18576[(2)] = null);

(statearr_16985_18576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (17))){
var inst_16959 = (state_16969[(2)]);
var state_16969__$1 = (function (){var statearr_17000 = state_16969;
(statearr_17000[(10)] = inst_16959);

return statearr_17000;
})();
var statearr_17001_18577 = state_16969__$1;
(statearr_17001_18577[(2)] = null);

(statearr_17001_18577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (3))){
var inst_16965 = (state_16969[(2)]);
var state_16969__$1 = state_16969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16969__$1,inst_16965);
} else {
if((state_val_16970 === (12))){
var _ = (function (){var statearr_17010 = state_16969;
(statearr_17010[(4)] = cljs.core.rest((state_16969[(4)])));

return statearr_17010;
})();
var state_16969__$1 = state_16969;
var ex16996 = (state_16969__$1[(2)]);
var statearr_17015_18578 = state_16969__$1;
(statearr_17015_18578[(5)] = ex16996);


if((ex16996 instanceof Object)){
var statearr_17016_18579 = state_16969__$1;
(statearr_17016_18579[(1)] = (11));

(statearr_17016_18579[(5)] = null);

} else {
throw ex16996;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (2))){
var inst_16904 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16907 = cnt;
var inst_16908 = (0);
var state_16969__$1 = (function (){var statearr_17020 = state_16969;
(statearr_17020[(7)] = inst_16907);

(statearr_17020[(11)] = inst_16904);

(statearr_17020[(8)] = inst_16908);

return statearr_17020;
})();
var statearr_17021_18580 = state_16969__$1;
(statearr_17021_18580[(2)] = null);

(statearr_17021_18580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (11))){
var inst_16926 = (state_16969[(2)]);
var inst_16927 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16969__$1 = (function (){var statearr_17022 = state_16969;
(statearr_17022[(12)] = inst_16926);

return statearr_17022;
})();
var statearr_17023_18581 = state_16969__$1;
(statearr_17023_18581[(2)] = inst_16927);

(statearr_17023_18581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (9))){
var inst_16908 = (state_16969[(8)]);
var _ = (function (){var statearr_17024 = state_16969;
(statearr_17024[(4)] = cljs.core.cons((12),(state_16969[(4)])));

return statearr_17024;
})();
var inst_16933 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16908) : chs__$1.call(null,inst_16908));
var inst_16934 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16908) : done.call(null,inst_16908));
var inst_16935 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16933,inst_16934);
var ___$1 = (function (){var statearr_17025 = state_16969;
(statearr_17025[(4)] = cljs.core.rest((state_16969[(4)])));

return statearr_17025;
})();
var state_16969__$1 = state_16969;
var statearr_17026_18582 = state_16969__$1;
(statearr_17026_18582[(2)] = inst_16935);

(statearr_17026_18582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (5))){
var inst_16948 = (state_16969[(2)]);
var state_16969__$1 = (function (){var statearr_17027 = state_16969;
(statearr_17027[(13)] = inst_16948);

return statearr_17027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16969__$1,(13),dchan);
} else {
if((state_val_16970 === (14))){
var inst_16954 = cljs.core.async.close_BANG_(out);
var state_16969__$1 = state_16969;
var statearr_17029_18583 = state_16969__$1;
(statearr_17029_18583[(2)] = inst_16954);

(statearr_17029_18583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (16))){
var inst_16962 = (state_16969[(2)]);
var state_16969__$1 = state_16969;
var statearr_17030_18584 = state_16969__$1;
(statearr_17030_18584[(2)] = inst_16962);

(statearr_17030_18584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (10))){
var inst_16908 = (state_16969[(8)]);
var inst_16938 = (state_16969[(2)]);
var inst_16941 = (inst_16908 + (1));
var inst_16908__$1 = inst_16941;
var state_16969__$1 = (function (){var statearr_17031 = state_16969;
(statearr_17031[(14)] = inst_16938);

(statearr_17031[(8)] = inst_16908__$1);

return statearr_17031;
})();
var statearr_17032_18585 = state_16969__$1;
(statearr_17032_18585[(2)] = null);

(statearr_17032_18585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16970 === (8))){
var inst_16946 = (state_16969[(2)]);
var state_16969__$1 = state_16969;
var statearr_17033_18586 = state_16969__$1;
(statearr_17033_18586[(2)] = inst_16946);

(statearr_17033_18586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_17034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17034[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_17034[(1)] = (1));

return statearr_17034;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_16969){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_16969);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e17039){var ex__14334__auto__ = e17039;
var statearr_17040_18589 = state_16969;
(statearr_17040_18589[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_16969[(4)]))){
var statearr_17045_18590 = state_16969;
(statearr_17045_18590[(1)] = cljs.core.first((state_16969[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18591 = state_16969;
state_16969 = G__18591;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_16969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_16969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_17050 = f__14653__auto__();
(statearr_17050[(6)] = c__14652__auto___18568);

return statearr_17050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17057 = arguments.length;
switch (G__17057) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14652__auto___18593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_17105){
var state_val_17106 = (state_17105[(1)]);
if((state_val_17106 === (7))){
var inst_17077 = (state_17105[(7)]);
var inst_17079 = (state_17105[(8)]);
var inst_17077__$1 = (state_17105[(2)]);
var inst_17079__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17077__$1,(0),null);
var inst_17080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17077__$1,(1),null);
var inst_17082 = (inst_17079__$1 == null);
var state_17105__$1 = (function (){var statearr_17113 = state_17105;
(statearr_17113[(9)] = inst_17080);

(statearr_17113[(7)] = inst_17077__$1);

(statearr_17113[(8)] = inst_17079__$1);

return statearr_17113;
})();
if(cljs.core.truth_(inst_17082)){
var statearr_17118_18594 = state_17105__$1;
(statearr_17118_18594[(1)] = (8));

} else {
var statearr_17119_18595 = state_17105__$1;
(statearr_17119_18595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17106 === (1))){
var inst_17064 = cljs.core.vec(chs);
var inst_17065 = inst_17064;
var state_17105__$1 = (function (){var statearr_17120 = state_17105;
(statearr_17120[(10)] = inst_17065);

return statearr_17120;
})();
var statearr_17121_18597 = state_17105__$1;
(statearr_17121_18597[(2)] = null);

(statearr_17121_18597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17106 === (4))){
var inst_17065 = (state_17105[(10)]);
var state_17105__$1 = state_17105;
return cljs.core.async.ioc_alts_BANG_(state_17105__$1,(7),inst_17065);
} else {
if((state_val_17106 === (6))){
var inst_17099 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
var statearr_17138_18598 = state_17105__$1;
(statearr_17138_18598[(2)] = inst_17099);

(statearr_17138_18598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17106 === (3))){
var inst_17102 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17105__$1,inst_17102);
} else {
if((state_val_17106 === (2))){
var inst_17065 = (state_17105[(10)]);
var inst_17067 = cljs.core.count(inst_17065);
var inst_17068 = (inst_17067 > (0));
var state_17105__$1 = state_17105;
if(cljs.core.truth_(inst_17068)){
var statearr_17147_18608 = state_17105__$1;
(statearr_17147_18608[(1)] = (4));

} else {
var statearr_17149_18609 = state_17105__$1;
(statearr_17149_18609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17106 === (11))){
var inst_17065 = (state_17105[(10)]);
var inst_17089 = (state_17105[(2)]);
var tmp17142 = inst_17065;
var inst_17065__$1 = tmp17142;
var state_17105__$1 = (function (){var statearr_17150 = state_17105;
(statearr_17150[(11)] = inst_17089);

(statearr_17150[(10)] = inst_17065__$1);

return statearr_17150;
})();
var statearr_17151_18612 = state_17105__$1;
(statearr_17151_18612[(2)] = null);

(statearr_17151_18612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17106 === (9))){
var inst_17079 = (state_17105[(8)]);
var state_17105__$1 = state_17105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17105__$1,(11),out,inst_17079);
} else {
if((state_val_17106 === (5))){
var inst_17097 = cljs.core.async.close_BANG_(out);
var state_17105__$1 = state_17105;
var statearr_17157_18613 = state_17105__$1;
(statearr_17157_18613[(2)] = inst_17097);

(statearr_17157_18613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17106 === (10))){
var inst_17093 = (state_17105[(2)]);
var state_17105__$1 = state_17105;
var statearr_17158_18614 = state_17105__$1;
(statearr_17158_18614[(2)] = inst_17093);

(statearr_17158_18614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17106 === (8))){
var inst_17080 = (state_17105[(9)]);
var inst_17077 = (state_17105[(7)]);
var inst_17079 = (state_17105[(8)]);
var inst_17065 = (state_17105[(10)]);
var inst_17084 = (function (){var cs = inst_17065;
var vec__17072 = inst_17077;
var v = inst_17079;
var c = inst_17080;
return (function (p1__17052_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17052_SHARP_);
});
})();
var inst_17085 = cljs.core.filterv(inst_17084,inst_17065);
var inst_17065__$1 = inst_17085;
var state_17105__$1 = (function (){var statearr_17159 = state_17105;
(statearr_17159[(10)] = inst_17065__$1);

return statearr_17159;
})();
var statearr_17160_18616 = state_17105__$1;
(statearr_17160_18616[(2)] = null);

(statearr_17160_18616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_17161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17161[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_17161[(1)] = (1));

return statearr_17161;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_17105){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_17105);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e17162){var ex__14334__auto__ = e17162;
var statearr_17163_18617 = state_17105;
(statearr_17163_18617[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_17105[(4)]))){
var statearr_17164_18618 = state_17105;
(statearr_17164_18618[(1)] = cljs.core.first((state_17105[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18619 = state_17105;
state_17105 = G__18619;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_17105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_17105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_17165 = f__14653__auto__();
(statearr_17165[(6)] = c__14652__auto___18593);

return statearr_17165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17167 = arguments.length;
switch (G__17167) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14652__auto___18621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_17191){
var state_val_17192 = (state_17191[(1)]);
if((state_val_17192 === (7))){
var inst_17173 = (state_17191[(7)]);
var inst_17173__$1 = (state_17191[(2)]);
var inst_17174 = (inst_17173__$1 == null);
var inst_17175 = cljs.core.not(inst_17174);
var state_17191__$1 = (function (){var statearr_17193 = state_17191;
(statearr_17193[(7)] = inst_17173__$1);

return statearr_17193;
})();
if(inst_17175){
var statearr_17194_18631 = state_17191__$1;
(statearr_17194_18631[(1)] = (8));

} else {
var statearr_17195_18632 = state_17191__$1;
(statearr_17195_18632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (1))){
var inst_17168 = (0);
var state_17191__$1 = (function (){var statearr_17196 = state_17191;
(statearr_17196[(8)] = inst_17168);

return statearr_17196;
})();
var statearr_17197_18633 = state_17191__$1;
(statearr_17197_18633[(2)] = null);

(statearr_17197_18633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (4))){
var state_17191__$1 = state_17191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17191__$1,(7),ch);
} else {
if((state_val_17192 === (6))){
var inst_17186 = (state_17191[(2)]);
var state_17191__$1 = state_17191;
var statearr_17198_18637 = state_17191__$1;
(statearr_17198_18637[(2)] = inst_17186);

(statearr_17198_18637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (3))){
var inst_17188 = (state_17191[(2)]);
var inst_17189 = cljs.core.async.close_BANG_(out);
var state_17191__$1 = (function (){var statearr_17199 = state_17191;
(statearr_17199[(9)] = inst_17188);

return statearr_17199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17191__$1,inst_17189);
} else {
if((state_val_17192 === (2))){
var inst_17168 = (state_17191[(8)]);
var inst_17170 = (inst_17168 < n);
var state_17191__$1 = state_17191;
if(cljs.core.truth_(inst_17170)){
var statearr_17200_18638 = state_17191__$1;
(statearr_17200_18638[(1)] = (4));

} else {
var statearr_17201_18639 = state_17191__$1;
(statearr_17201_18639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (11))){
var inst_17168 = (state_17191[(8)]);
var inst_17178 = (state_17191[(2)]);
var inst_17179 = (inst_17168 + (1));
var inst_17168__$1 = inst_17179;
var state_17191__$1 = (function (){var statearr_17202 = state_17191;
(statearr_17202[(10)] = inst_17178);

(statearr_17202[(8)] = inst_17168__$1);

return statearr_17202;
})();
var statearr_17203_18640 = state_17191__$1;
(statearr_17203_18640[(2)] = null);

(statearr_17203_18640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (9))){
var state_17191__$1 = state_17191;
var statearr_17204_18641 = state_17191__$1;
(statearr_17204_18641[(2)] = null);

(statearr_17204_18641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (5))){
var state_17191__$1 = state_17191;
var statearr_17205_18643 = state_17191__$1;
(statearr_17205_18643[(2)] = null);

(statearr_17205_18643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (10))){
var inst_17183 = (state_17191[(2)]);
var state_17191__$1 = state_17191;
var statearr_17206_18644 = state_17191__$1;
(statearr_17206_18644[(2)] = inst_17183);

(statearr_17206_18644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17192 === (8))){
var inst_17173 = (state_17191[(7)]);
var state_17191__$1 = state_17191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17191__$1,(11),out,inst_17173);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_17208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17208[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_17208[(1)] = (1));

return statearr_17208;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_17191){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_17191);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e17209){var ex__14334__auto__ = e17209;
var statearr_17210_18648 = state_17191;
(statearr_17210_18648[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_17191[(4)]))){
var statearr_17211_18649 = state_17191;
(statearr_17211_18649[(1)] = cljs.core.first((state_17191[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18650 = state_17191;
state_17191 = G__18650;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_17191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_17191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_17212 = f__14653__auto__();
(statearr_17212[(6)] = c__14652__auto___18621);

return statearr_17212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17257 = (function (f,ch,meta17231,_,fn1,meta17258){
this.f = f;
this.ch = ch;
this.meta17231 = meta17231;
this._ = _;
this.fn1 = fn1;
this.meta17258 = meta17258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17259,meta17258__$1){
var self__ = this;
var _17259__$1 = this;
return (new cljs.core.async.t_cljs$core$async17257(self__.f,self__.ch,self__.meta17231,self__._,self__.fn1,meta17258__$1));
}));

(cljs.core.async.t_cljs$core$async17257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17259){
var self__ = this;
var _17259__$1 = this;
return self__.meta17258;
}));

(cljs.core.async.t_cljs$core$async17257.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17257.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17228_SHARP_){
var G__17268 = (((p1__17228_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17228_SHARP_) : self__.f.call(null,p1__17228_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17268) : f1.call(null,G__17268));
});
}));

(cljs.core.async.t_cljs$core$async17257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17231","meta17231",-315349988,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17230","cljs.core.async/t_cljs$core$async17230",-1607732111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17258","meta17258",-460100251,null)], null);
}));

(cljs.core.async.t_cljs$core$async17257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17257");

(cljs.core.async.t_cljs$core$async17257.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17257.
 */
cljs.core.async.__GT_t_cljs$core$async17257 = (function cljs$core$async$__GT_t_cljs$core$async17257(f,ch,meta17231,_,fn1,meta17258){
return (new cljs.core.async.t_cljs$core$async17257(f,ch,meta17231,_,fn1,meta17258));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17230 = (function (f,ch,meta17231){
this.f = f;
this.ch = ch;
this.meta17231 = meta17231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17232,meta17231__$1){
var self__ = this;
var _17232__$1 = this;
return (new cljs.core.async.t_cljs$core$async17230(self__.f,self__.ch,meta17231__$1));
}));

(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17232){
var self__ = this;
var _17232__$1 = this;
return self__.meta17231;
}));

(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17257(self__.f,self__.ch,self__.meta17231,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17354 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17354) : self__.f.call(null,G__17354));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17231","meta17231",-315349988,null)], null);
}));

(cljs.core.async.t_cljs$core$async17230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17230");

(cljs.core.async.t_cljs$core$async17230.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17230.
 */
cljs.core.async.__GT_t_cljs$core$async17230 = (function cljs$core$async$__GT_t_cljs$core$async17230(f,ch,meta17231){
return (new cljs.core.async.t_cljs$core$async17230(f,ch,meta17231));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17230(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17366 = (function (f,ch,meta17367){
this.f = f;
this.ch = ch;
this.meta17367 = meta17367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17368,meta17367__$1){
var self__ = this;
var _17368__$1 = this;
return (new cljs.core.async.t_cljs$core$async17366(self__.f,self__.ch,meta17367__$1));
}));

(cljs.core.async.t_cljs$core$async17366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17368){
var self__ = this;
var _17368__$1 = this;
return self__.meta17367;
}));

(cljs.core.async.t_cljs$core$async17366.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17366.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17366.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17367","meta17367",2004361825,null)], null);
}));

(cljs.core.async.t_cljs$core$async17366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17366");

(cljs.core.async.t_cljs$core$async17366.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17366.
 */
cljs.core.async.__GT_t_cljs$core$async17366 = (function cljs$core$async$__GT_t_cljs$core$async17366(f,ch,meta17367){
return (new cljs.core.async.t_cljs$core$async17366(f,ch,meta17367));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17366(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17411 = (function (p,ch,meta17412){
this.p = p;
this.ch = ch;
this.meta17412 = meta17412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17413,meta17412__$1){
var self__ = this;
var _17413__$1 = this;
return (new cljs.core.async.t_cljs$core$async17411(self__.p,self__.ch,meta17412__$1));
}));

(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17413){
var self__ = this;
var _17413__$1 = this;
return self__.meta17412;
}));

(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17412","meta17412",-879481063,null)], null);
}));

(cljs.core.async.t_cljs$core$async17411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17411");

(cljs.core.async.t_cljs$core$async17411.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17411.
 */
cljs.core.async.__GT_t_cljs$core$async17411 = (function cljs$core$async$__GT_t_cljs$core$async17411(p,ch,meta17412){
return (new cljs.core.async.t_cljs$core$async17411(p,ch,meta17412));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17411(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17430 = arguments.length;
switch (G__17430) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14652__auto___18664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_17456){
var state_val_17457 = (state_17456[(1)]);
if((state_val_17457 === (7))){
var inst_17452 = (state_17456[(2)]);
var state_17456__$1 = state_17456;
var statearr_17458_18665 = state_17456__$1;
(statearr_17458_18665[(2)] = inst_17452);

(statearr_17458_18665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (1))){
var state_17456__$1 = state_17456;
var statearr_17459_18667 = state_17456__$1;
(statearr_17459_18667[(2)] = null);

(statearr_17459_18667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (4))){
var inst_17435 = (state_17456[(7)]);
var inst_17435__$1 = (state_17456[(2)]);
var inst_17439 = (inst_17435__$1 == null);
var state_17456__$1 = (function (){var statearr_17460 = state_17456;
(statearr_17460[(7)] = inst_17435__$1);

return statearr_17460;
})();
if(cljs.core.truth_(inst_17439)){
var statearr_17461_18668 = state_17456__$1;
(statearr_17461_18668[(1)] = (5));

} else {
var statearr_17462_18669 = state_17456__$1;
(statearr_17462_18669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (6))){
var inst_17435 = (state_17456[(7)]);
var inst_17443 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17435) : p.call(null,inst_17435));
var state_17456__$1 = state_17456;
if(cljs.core.truth_(inst_17443)){
var statearr_17463_18671 = state_17456__$1;
(statearr_17463_18671[(1)] = (8));

} else {
var statearr_17464_18672 = state_17456__$1;
(statearr_17464_18672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (3))){
var inst_17454 = (state_17456[(2)]);
var state_17456__$1 = state_17456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17456__$1,inst_17454);
} else {
if((state_val_17457 === (2))){
var state_17456__$1 = state_17456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17456__$1,(4),ch);
} else {
if((state_val_17457 === (11))){
var inst_17446 = (state_17456[(2)]);
var state_17456__$1 = state_17456;
var statearr_17465_18674 = state_17456__$1;
(statearr_17465_18674[(2)] = inst_17446);

(statearr_17465_18674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (9))){
var state_17456__$1 = state_17456;
var statearr_17467_18675 = state_17456__$1;
(statearr_17467_18675[(2)] = null);

(statearr_17467_18675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (5))){
var inst_17441 = cljs.core.async.close_BANG_(out);
var state_17456__$1 = state_17456;
var statearr_17468_18676 = state_17456__$1;
(statearr_17468_18676[(2)] = inst_17441);

(statearr_17468_18676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (10))){
var inst_17449 = (state_17456[(2)]);
var state_17456__$1 = (function (){var statearr_17469 = state_17456;
(statearr_17469[(8)] = inst_17449);

return statearr_17469;
})();
var statearr_17470_18677 = state_17456__$1;
(statearr_17470_18677[(2)] = null);

(statearr_17470_18677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17457 === (8))){
var inst_17435 = (state_17456[(7)]);
var state_17456__$1 = state_17456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17456__$1,(11),out,inst_17435);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_17471 = [null,null,null,null,null,null,null,null,null];
(statearr_17471[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_17471[(1)] = (1));

return statearr_17471;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_17456){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_17456);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e17472){var ex__14334__auto__ = e17472;
var statearr_17474_18678 = state_17456;
(statearr_17474_18678[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_17456[(4)]))){
var statearr_17475_18679 = state_17456;
(statearr_17475_18679[(1)] = cljs.core.first((state_17456[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18680 = state_17456;
state_17456 = G__18680;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_17456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_17456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_17476 = f__14653__auto__();
(statearr_17476[(6)] = c__14652__auto___18664);

return statearr_17476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17478 = arguments.length;
switch (G__17478) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_17577){
var state_val_17578 = (state_17577[(1)]);
if((state_val_17578 === (7))){
var inst_17572 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17580_18683 = state_17577__$1;
(statearr_17580_18683[(2)] = inst_17572);

(statearr_17580_18683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (20))){
var inst_17542 = (state_17577[(7)]);
var inst_17553 = (state_17577[(2)]);
var inst_17554 = cljs.core.next(inst_17542);
var inst_17496 = inst_17554;
var inst_17497 = null;
var inst_17498 = (0);
var inst_17500 = (0);
var state_17577__$1 = (function (){var statearr_17583 = state_17577;
(statearr_17583[(8)] = inst_17500);

(statearr_17583[(9)] = inst_17498);

(statearr_17583[(10)] = inst_17497);

(statearr_17583[(11)] = inst_17553);

(statearr_17583[(12)] = inst_17496);

return statearr_17583;
})();
var statearr_17585_18695 = state_17577__$1;
(statearr_17585_18695[(2)] = null);

(statearr_17585_18695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (1))){
var state_17577__$1 = state_17577;
var statearr_17586_18696 = state_17577__$1;
(statearr_17586_18696[(2)] = null);

(statearr_17586_18696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (4))){
var inst_17483 = (state_17577[(13)]);
var inst_17483__$1 = (state_17577[(2)]);
var inst_17484 = (inst_17483__$1 == null);
var state_17577__$1 = (function (){var statearr_17590 = state_17577;
(statearr_17590[(13)] = inst_17483__$1);

return statearr_17590;
})();
if(cljs.core.truth_(inst_17484)){
var statearr_17593_18698 = state_17577__$1;
(statearr_17593_18698[(1)] = (5));

} else {
var statearr_17594_18700 = state_17577__$1;
(statearr_17594_18700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (15))){
var state_17577__$1 = state_17577;
var statearr_17598_18701 = state_17577__$1;
(statearr_17598_18701[(2)] = null);

(statearr_17598_18701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (21))){
var state_17577__$1 = state_17577;
var statearr_17599_18702 = state_17577__$1;
(statearr_17599_18702[(2)] = null);

(statearr_17599_18702[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (13))){
var inst_17500 = (state_17577[(8)]);
var inst_17498 = (state_17577[(9)]);
var inst_17497 = (state_17577[(10)]);
var inst_17496 = (state_17577[(12)]);
var inst_17538 = (state_17577[(2)]);
var inst_17539 = (inst_17500 + (1));
var tmp17595 = inst_17498;
var tmp17596 = inst_17497;
var tmp17597 = inst_17496;
var inst_17496__$1 = tmp17597;
var inst_17497__$1 = tmp17596;
var inst_17498__$1 = tmp17595;
var inst_17500__$1 = inst_17539;
var state_17577__$1 = (function (){var statearr_17602 = state_17577;
(statearr_17602[(8)] = inst_17500__$1);

(statearr_17602[(14)] = inst_17538);

(statearr_17602[(9)] = inst_17498__$1);

(statearr_17602[(10)] = inst_17497__$1);

(statearr_17602[(12)] = inst_17496__$1);

return statearr_17602;
})();
var statearr_17605_18703 = state_17577__$1;
(statearr_17605_18703[(2)] = null);

(statearr_17605_18703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (22))){
var state_17577__$1 = state_17577;
var statearr_17606_18713 = state_17577__$1;
(statearr_17606_18713[(2)] = null);

(statearr_17606_18713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (6))){
var inst_17483 = (state_17577[(13)]);
var inst_17494 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17483) : f.call(null,inst_17483));
var inst_17495 = cljs.core.seq(inst_17494);
var inst_17496 = inst_17495;
var inst_17497 = null;
var inst_17498 = (0);
var inst_17500 = (0);
var state_17577__$1 = (function (){var statearr_17607 = state_17577;
(statearr_17607[(8)] = inst_17500);

(statearr_17607[(9)] = inst_17498);

(statearr_17607[(10)] = inst_17497);

(statearr_17607[(12)] = inst_17496);

return statearr_17607;
})();
var statearr_17608_18714 = state_17577__$1;
(statearr_17608_18714[(2)] = null);

(statearr_17608_18714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (17))){
var inst_17542 = (state_17577[(7)]);
var inst_17546 = cljs.core.chunk_first(inst_17542);
var inst_17547 = cljs.core.chunk_rest(inst_17542);
var inst_17548 = cljs.core.count(inst_17546);
var inst_17496 = inst_17547;
var inst_17497 = inst_17546;
var inst_17498 = inst_17548;
var inst_17500 = (0);
var state_17577__$1 = (function (){var statearr_17609 = state_17577;
(statearr_17609[(8)] = inst_17500);

(statearr_17609[(9)] = inst_17498);

(statearr_17609[(10)] = inst_17497);

(statearr_17609[(12)] = inst_17496);

return statearr_17609;
})();
var statearr_17611_18716 = state_17577__$1;
(statearr_17611_18716[(2)] = null);

(statearr_17611_18716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (3))){
var inst_17574 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17577__$1,inst_17574);
} else {
if((state_val_17578 === (12))){
var inst_17562 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17612_18719 = state_17577__$1;
(statearr_17612_18719[(2)] = inst_17562);

(statearr_17612_18719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (2))){
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17577__$1,(4),in$);
} else {
if((state_val_17578 === (23))){
var inst_17570 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17614_18722 = state_17577__$1;
(statearr_17614_18722[(2)] = inst_17570);

(statearr_17614_18722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (19))){
var inst_17557 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17616_18724 = state_17577__$1;
(statearr_17616_18724[(2)] = inst_17557);

(statearr_17616_18724[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (11))){
var inst_17542 = (state_17577[(7)]);
var inst_17496 = (state_17577[(12)]);
var inst_17542__$1 = cljs.core.seq(inst_17496);
var state_17577__$1 = (function (){var statearr_17618 = state_17577;
(statearr_17618[(7)] = inst_17542__$1);

return statearr_17618;
})();
if(inst_17542__$1){
var statearr_17620_18728 = state_17577__$1;
(statearr_17620_18728[(1)] = (14));

} else {
var statearr_17622_18729 = state_17577__$1;
(statearr_17622_18729[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (9))){
var inst_17564 = (state_17577[(2)]);
var inst_17565 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17577__$1 = (function (){var statearr_17623 = state_17577;
(statearr_17623[(15)] = inst_17564);

return statearr_17623;
})();
if(cljs.core.truth_(inst_17565)){
var statearr_17624_18737 = state_17577__$1;
(statearr_17624_18737[(1)] = (21));

} else {
var statearr_17625_18738 = state_17577__$1;
(statearr_17625_18738[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (5))){
var inst_17486 = cljs.core.async.close_BANG_(out);
var state_17577__$1 = state_17577;
var statearr_17626_18739 = state_17577__$1;
(statearr_17626_18739[(2)] = inst_17486);

(statearr_17626_18739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (14))){
var inst_17542 = (state_17577[(7)]);
var inst_17544 = cljs.core.chunked_seq_QMARK_(inst_17542);
var state_17577__$1 = state_17577;
if(inst_17544){
var statearr_17627_18740 = state_17577__$1;
(statearr_17627_18740[(1)] = (17));

} else {
var statearr_17628_18741 = state_17577__$1;
(statearr_17628_18741[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (16))){
var inst_17560 = (state_17577[(2)]);
var state_17577__$1 = state_17577;
var statearr_17676_18742 = state_17577__$1;
(statearr_17676_18742[(2)] = inst_17560);

(statearr_17676_18742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17578 === (10))){
var inst_17500 = (state_17577[(8)]);
var inst_17497 = (state_17577[(10)]);
var inst_17535 = cljs.core._nth(inst_17497,inst_17500);
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17577__$1,(13),out,inst_17535);
} else {
if((state_val_17578 === (18))){
var inst_17542 = (state_17577[(7)]);
var inst_17551 = cljs.core.first(inst_17542);
var state_17577__$1 = state_17577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17577__$1,(20),out,inst_17551);
} else {
if((state_val_17578 === (8))){
var inst_17500 = (state_17577[(8)]);
var inst_17498 = (state_17577[(9)]);
var inst_17503 = (inst_17500 < inst_17498);
var inst_17504 = inst_17503;
var state_17577__$1 = state_17577;
if(cljs.core.truth_(inst_17504)){
var statearr_17688_18744 = state_17577__$1;
(statearr_17688_18744[(1)] = (10));

} else {
var statearr_17689_18745 = state_17577__$1;
(statearr_17689_18745[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14331__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14331__auto____0 = (function (){
var statearr_17696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17696[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14331__auto__);

(statearr_17696[(1)] = (1));

return statearr_17696;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14331__auto____1 = (function (state_17577){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_17577);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e17697){var ex__14334__auto__ = e17697;
var statearr_17698_18746 = state_17577;
(statearr_17698_18746[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_17577[(4)]))){
var statearr_17699_18747 = state_17577;
(statearr_17699_18747[(1)] = cljs.core.first((state_17577[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18748 = state_17577;
state_17577 = G__18748;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14331__auto__ = function(state_17577){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14331__auto____1.call(this,state_17577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14331__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14331__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_17709 = f__14653__auto__();
(statearr_17709[(6)] = c__14652__auto__);

return statearr_17709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17720 = arguments.length;
switch (G__17720) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17726 = arguments.length;
switch (G__17726) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17732 = arguments.length;
switch (G__17732) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14652__auto___18759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_17758){
var state_val_17759 = (state_17758[(1)]);
if((state_val_17759 === (7))){
var inst_17753 = (state_17758[(2)]);
var state_17758__$1 = state_17758;
var statearr_17767_18760 = state_17758__$1;
(statearr_17767_18760[(2)] = inst_17753);

(statearr_17767_18760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (1))){
var inst_17735 = null;
var state_17758__$1 = (function (){var statearr_17771 = state_17758;
(statearr_17771[(7)] = inst_17735);

return statearr_17771;
})();
var statearr_17772_18762 = state_17758__$1;
(statearr_17772_18762[(2)] = null);

(statearr_17772_18762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (4))){
var inst_17738 = (state_17758[(8)]);
var inst_17738__$1 = (state_17758[(2)]);
var inst_17739 = (inst_17738__$1 == null);
var inst_17740 = cljs.core.not(inst_17739);
var state_17758__$1 = (function (){var statearr_17773 = state_17758;
(statearr_17773[(8)] = inst_17738__$1);

return statearr_17773;
})();
if(inst_17740){
var statearr_17774_18763 = state_17758__$1;
(statearr_17774_18763[(1)] = (5));

} else {
var statearr_17775_18764 = state_17758__$1;
(statearr_17775_18764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (6))){
var state_17758__$1 = state_17758;
var statearr_17776_18765 = state_17758__$1;
(statearr_17776_18765[(2)] = null);

(statearr_17776_18765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (3))){
var inst_17755 = (state_17758[(2)]);
var inst_17756 = cljs.core.async.close_BANG_(out);
var state_17758__$1 = (function (){var statearr_17777 = state_17758;
(statearr_17777[(9)] = inst_17755);

return statearr_17777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17758__$1,inst_17756);
} else {
if((state_val_17759 === (2))){
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17758__$1,(4),ch);
} else {
if((state_val_17759 === (11))){
var inst_17738 = (state_17758[(8)]);
var inst_17747 = (state_17758[(2)]);
var inst_17735 = inst_17738;
var state_17758__$1 = (function (){var statearr_17778 = state_17758;
(statearr_17778[(10)] = inst_17747);

(statearr_17778[(7)] = inst_17735);

return statearr_17778;
})();
var statearr_17779_18771 = state_17758__$1;
(statearr_17779_18771[(2)] = null);

(statearr_17779_18771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (9))){
var inst_17738 = (state_17758[(8)]);
var state_17758__$1 = state_17758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17758__$1,(11),out,inst_17738);
} else {
if((state_val_17759 === (5))){
var inst_17738 = (state_17758[(8)]);
var inst_17735 = (state_17758[(7)]);
var inst_17742 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17738,inst_17735);
var state_17758__$1 = state_17758;
if(inst_17742){
var statearr_17781_18772 = state_17758__$1;
(statearr_17781_18772[(1)] = (8));

} else {
var statearr_17782_18773 = state_17758__$1;
(statearr_17782_18773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (10))){
var inst_17750 = (state_17758[(2)]);
var state_17758__$1 = state_17758;
var statearr_17783_18777 = state_17758__$1;
(statearr_17783_18777[(2)] = inst_17750);

(statearr_17783_18777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17759 === (8))){
var inst_17735 = (state_17758[(7)]);
var tmp17780 = inst_17735;
var inst_17735__$1 = tmp17780;
var state_17758__$1 = (function (){var statearr_17784 = state_17758;
(statearr_17784[(7)] = inst_17735__$1);

return statearr_17784;
})();
var statearr_17785_18778 = state_17758__$1;
(statearr_17785_18778[(2)] = null);

(statearr_17785_18778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_17786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17786[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_17786[(1)] = (1));

return statearr_17786;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_17758){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_17758);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e17787){var ex__14334__auto__ = e17787;
var statearr_17788_18785 = state_17758;
(statearr_17788_18785[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_17758[(4)]))){
var statearr_17789_18786 = state_17758;
(statearr_17789_18786[(1)] = cljs.core.first((state_17758[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18787 = state_17758;
state_17758 = G__18787;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_17758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_17758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_17791 = f__14653__auto__();
(statearr_17791[(6)] = c__14652__auto___18759);

return statearr_17791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17795 = arguments.length;
switch (G__17795) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14652__auto___18790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_17846){
var state_val_17847 = (state_17846[(1)]);
if((state_val_17847 === (7))){
var inst_17834 = (state_17846[(2)]);
var state_17846__$1 = state_17846;
var statearr_17850_18798 = state_17846__$1;
(statearr_17850_18798[(2)] = inst_17834);

(statearr_17850_18798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (1))){
var inst_17801 = (new Array(n));
var inst_17802 = inst_17801;
var inst_17803 = (0);
var state_17846__$1 = (function (){var statearr_17851 = state_17846;
(statearr_17851[(7)] = inst_17803);

(statearr_17851[(8)] = inst_17802);

return statearr_17851;
})();
var statearr_17852_18799 = state_17846__$1;
(statearr_17852_18799[(2)] = null);

(statearr_17852_18799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (4))){
var inst_17806 = (state_17846[(9)]);
var inst_17806__$1 = (state_17846[(2)]);
var inst_17807 = (inst_17806__$1 == null);
var inst_17808 = cljs.core.not(inst_17807);
var state_17846__$1 = (function (){var statearr_17853 = state_17846;
(statearr_17853[(9)] = inst_17806__$1);

return statearr_17853;
})();
if(inst_17808){
var statearr_17854_18800 = state_17846__$1;
(statearr_17854_18800[(1)] = (5));

} else {
var statearr_17855_18801 = state_17846__$1;
(statearr_17855_18801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (15))){
var inst_17828 = (state_17846[(2)]);
var state_17846__$1 = state_17846;
var statearr_17856_18803 = state_17846__$1;
(statearr_17856_18803[(2)] = inst_17828);

(statearr_17856_18803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (13))){
var state_17846__$1 = state_17846;
var statearr_17861_18804 = state_17846__$1;
(statearr_17861_18804[(2)] = null);

(statearr_17861_18804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (6))){
var inst_17803 = (state_17846[(7)]);
var inst_17824 = (inst_17803 > (0));
var state_17846__$1 = state_17846;
if(cljs.core.truth_(inst_17824)){
var statearr_17862_18805 = state_17846__$1;
(statearr_17862_18805[(1)] = (12));

} else {
var statearr_17863_18806 = state_17846__$1;
(statearr_17863_18806[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (3))){
var inst_17836 = (state_17846[(2)]);
var state_17846__$1 = state_17846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17846__$1,inst_17836);
} else {
if((state_val_17847 === (12))){
var inst_17802 = (state_17846[(8)]);
var inst_17826 = cljs.core.vec(inst_17802);
var state_17846__$1 = state_17846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17846__$1,(15),out,inst_17826);
} else {
if((state_val_17847 === (2))){
var state_17846__$1 = state_17846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17846__$1,(4),ch);
} else {
if((state_val_17847 === (11))){
var inst_17818 = (state_17846[(2)]);
var inst_17819 = (new Array(n));
var inst_17802 = inst_17819;
var inst_17803 = (0);
var state_17846__$1 = (function (){var statearr_17869 = state_17846;
(statearr_17869[(7)] = inst_17803);

(statearr_17869[(8)] = inst_17802);

(statearr_17869[(10)] = inst_17818);

return statearr_17869;
})();
var statearr_17870_18807 = state_17846__$1;
(statearr_17870_18807[(2)] = null);

(statearr_17870_18807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (9))){
var inst_17802 = (state_17846[(8)]);
var inst_17816 = cljs.core.vec(inst_17802);
var state_17846__$1 = state_17846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17846__$1,(11),out,inst_17816);
} else {
if((state_val_17847 === (5))){
var inst_17806 = (state_17846[(9)]);
var inst_17803 = (state_17846[(7)]);
var inst_17811 = (state_17846[(11)]);
var inst_17802 = (state_17846[(8)]);
var inst_17810 = (inst_17802[inst_17803] = inst_17806);
var inst_17811__$1 = (inst_17803 + (1));
var inst_17812 = (inst_17811__$1 < n);
var state_17846__$1 = (function (){var statearr_17873 = state_17846;
(statearr_17873[(11)] = inst_17811__$1);

(statearr_17873[(12)] = inst_17810);

return statearr_17873;
})();
if(cljs.core.truth_(inst_17812)){
var statearr_17877_18810 = state_17846__$1;
(statearr_17877_18810[(1)] = (8));

} else {
var statearr_17878_18811 = state_17846__$1;
(statearr_17878_18811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (14))){
var inst_17831 = (state_17846[(2)]);
var inst_17832 = cljs.core.async.close_BANG_(out);
var state_17846__$1 = (function (){var statearr_17880 = state_17846;
(statearr_17880[(13)] = inst_17831);

return statearr_17880;
})();
var statearr_17882_18813 = state_17846__$1;
(statearr_17882_18813[(2)] = inst_17832);

(statearr_17882_18813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (10))){
var inst_17822 = (state_17846[(2)]);
var state_17846__$1 = state_17846;
var statearr_17886_18814 = state_17846__$1;
(statearr_17886_18814[(2)] = inst_17822);

(statearr_17886_18814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17847 === (8))){
var inst_17811 = (state_17846[(11)]);
var inst_17802 = (state_17846[(8)]);
var tmp17879 = inst_17802;
var inst_17802__$1 = tmp17879;
var inst_17803 = inst_17811;
var state_17846__$1 = (function (){var statearr_17887 = state_17846;
(statearr_17887[(7)] = inst_17803);

(statearr_17887[(8)] = inst_17802__$1);

return statearr_17887;
})();
var statearr_17888_18817 = state_17846__$1;
(statearr_17888_18817[(2)] = null);

(statearr_17888_18817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_17889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17889[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_17889[(1)] = (1));

return statearr_17889;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_17846){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_17846);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e17890){var ex__14334__auto__ = e17890;
var statearr_17891_18818 = state_17846;
(statearr_17891_18818[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_17846[(4)]))){
var statearr_17892_18819 = state_17846;
(statearr_17892_18819[(1)] = cljs.core.first((state_17846[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18820 = state_17846;
state_17846 = G__18820;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_17846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_17846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_17893 = f__14653__auto__();
(statearr_17893[(6)] = c__14652__auto___18790);

return statearr_17893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17897 = arguments.length;
switch (G__17897) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14652__auto___18824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_17949){
var state_val_17950 = (state_17949[(1)]);
if((state_val_17950 === (7))){
var inst_17942 = (state_17949[(2)]);
var state_17949__$1 = state_17949;
var statearr_17951_18825 = state_17949__$1;
(statearr_17951_18825[(2)] = inst_17942);

(statearr_17951_18825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (1))){
var inst_17901 = [];
var inst_17902 = inst_17901;
var inst_17903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17949__$1 = (function (){var statearr_17952 = state_17949;
(statearr_17952[(7)] = inst_17902);

(statearr_17952[(8)] = inst_17903);

return statearr_17952;
})();
var statearr_17953_18827 = state_17949__$1;
(statearr_17953_18827[(2)] = null);

(statearr_17953_18827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (4))){
var inst_17906 = (state_17949[(9)]);
var inst_17906__$1 = (state_17949[(2)]);
var inst_17907 = (inst_17906__$1 == null);
var inst_17908 = cljs.core.not(inst_17907);
var state_17949__$1 = (function (){var statearr_17968 = state_17949;
(statearr_17968[(9)] = inst_17906__$1);

return statearr_17968;
})();
if(inst_17908){
var statearr_17969_18828 = state_17949__$1;
(statearr_17969_18828[(1)] = (5));

} else {
var statearr_17970_18829 = state_17949__$1;
(statearr_17970_18829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (15))){
var inst_17902 = (state_17949[(7)]);
var inst_17934 = cljs.core.vec(inst_17902);
var state_17949__$1 = state_17949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17949__$1,(18),out,inst_17934);
} else {
if((state_val_17950 === (13))){
var inst_17929 = (state_17949[(2)]);
var state_17949__$1 = state_17949;
var statearr_17971_18830 = state_17949__$1;
(statearr_17971_18830[(2)] = inst_17929);

(statearr_17971_18830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (6))){
var inst_17902 = (state_17949[(7)]);
var inst_17931 = inst_17902.length;
var inst_17932 = (inst_17931 > (0));
var state_17949__$1 = state_17949;
if(cljs.core.truth_(inst_17932)){
var statearr_17972_18831 = state_17949__$1;
(statearr_17972_18831[(1)] = (15));

} else {
var statearr_17973_18832 = state_17949__$1;
(statearr_17973_18832[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (17))){
var inst_17939 = (state_17949[(2)]);
var inst_17940 = cljs.core.async.close_BANG_(out);
var state_17949__$1 = (function (){var statearr_17974 = state_17949;
(statearr_17974[(10)] = inst_17939);

return statearr_17974;
})();
var statearr_17975_18833 = state_17949__$1;
(statearr_17975_18833[(2)] = inst_17940);

(statearr_17975_18833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (3))){
var inst_17944 = (state_17949[(2)]);
var state_17949__$1 = state_17949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17949__$1,inst_17944);
} else {
if((state_val_17950 === (12))){
var inst_17902 = (state_17949[(7)]);
var inst_17922 = cljs.core.vec(inst_17902);
var state_17949__$1 = state_17949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17949__$1,(14),out,inst_17922);
} else {
if((state_val_17950 === (2))){
var state_17949__$1 = state_17949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17949__$1,(4),ch);
} else {
if((state_val_17950 === (11))){
var inst_17906 = (state_17949[(9)]);
var inst_17902 = (state_17949[(7)]);
var inst_17910 = (state_17949[(11)]);
var inst_17918 = inst_17902.push(inst_17906);
var tmp17976 = inst_17902;
var inst_17902__$1 = tmp17976;
var inst_17903 = inst_17910;
var state_17949__$1 = (function (){var statearr_17977 = state_17949;
(statearr_17977[(7)] = inst_17902__$1);

(statearr_17977[(8)] = inst_17903);

(statearr_17977[(12)] = inst_17918);

return statearr_17977;
})();
var statearr_17978_18834 = state_17949__$1;
(statearr_17978_18834[(2)] = null);

(statearr_17978_18834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (9))){
var inst_17903 = (state_17949[(8)]);
var inst_17914 = cljs.core.keyword_identical_QMARK_(inst_17903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17949__$1 = state_17949;
var statearr_17979_18835 = state_17949__$1;
(statearr_17979_18835[(2)] = inst_17914);

(statearr_17979_18835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (5))){
var inst_17911 = (state_17949[(13)]);
var inst_17906 = (state_17949[(9)]);
var inst_17910 = (state_17949[(11)]);
var inst_17903 = (state_17949[(8)]);
var inst_17910__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17906) : f.call(null,inst_17906));
var inst_17911__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17910__$1,inst_17903);
var state_17949__$1 = (function (){var statearr_17980 = state_17949;
(statearr_17980[(13)] = inst_17911__$1);

(statearr_17980[(11)] = inst_17910__$1);

return statearr_17980;
})();
if(inst_17911__$1){
var statearr_17981_18836 = state_17949__$1;
(statearr_17981_18836[(1)] = (8));

} else {
var statearr_17982_18837 = state_17949__$1;
(statearr_17982_18837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (14))){
var inst_17906 = (state_17949[(9)]);
var inst_17910 = (state_17949[(11)]);
var inst_17924 = (state_17949[(2)]);
var inst_17925 = [];
var inst_17926 = inst_17925.push(inst_17906);
var inst_17902 = inst_17925;
var inst_17903 = inst_17910;
var state_17949__$1 = (function (){var statearr_17983 = state_17949;
(statearr_17983[(7)] = inst_17902);

(statearr_17983[(14)] = inst_17924);

(statearr_17983[(8)] = inst_17903);

(statearr_17983[(15)] = inst_17926);

return statearr_17983;
})();
var statearr_17984_18838 = state_17949__$1;
(statearr_17984_18838[(2)] = null);

(statearr_17984_18838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (16))){
var state_17949__$1 = state_17949;
var statearr_17985_18843 = state_17949__$1;
(statearr_17985_18843[(2)] = null);

(statearr_17985_18843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (10))){
var inst_17916 = (state_17949[(2)]);
var state_17949__$1 = state_17949;
if(cljs.core.truth_(inst_17916)){
var statearr_17986_18844 = state_17949__$1;
(statearr_17986_18844[(1)] = (11));

} else {
var statearr_17987_18845 = state_17949__$1;
(statearr_17987_18845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (18))){
var inst_17936 = (state_17949[(2)]);
var state_17949__$1 = state_17949;
var statearr_17989_18846 = state_17949__$1;
(statearr_17989_18846[(2)] = inst_17936);

(statearr_17989_18846[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17950 === (8))){
var inst_17911 = (state_17949[(13)]);
var state_17949__$1 = state_17949;
var statearr_17990_18847 = state_17949__$1;
(statearr_17990_18847[(2)] = inst_17911);

(statearr_17990_18847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14331__auto__ = null;
var cljs$core$async$state_machine__14331__auto____0 = (function (){
var statearr_17991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17991[(0)] = cljs$core$async$state_machine__14331__auto__);

(statearr_17991[(1)] = (1));

return statearr_17991;
});
var cljs$core$async$state_machine__14331__auto____1 = (function (state_17949){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_17949);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e17992){var ex__14334__auto__ = e17992;
var statearr_17993_18848 = state_17949;
(statearr_17993_18848[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_17949[(4)]))){
var statearr_17994_18849 = state_17949;
(statearr_17994_18849[(1)] = cljs.core.first((state_17949[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18851 = state_17949;
state_17949 = G__18851;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
cljs$core$async$state_machine__14331__auto__ = function(state_17949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14331__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14331__auto____1.call(this,state_17949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14331__auto____0;
cljs$core$async$state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14331__auto____1;
return cljs$core$async$state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_18006 = f__14653__auto__();
(statearr_18006[(6)] = c__14652__auto___18824);

return statearr_18006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
