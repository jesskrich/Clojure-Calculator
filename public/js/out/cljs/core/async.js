// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20744 = [];
var len__19428__auto___20750 = arguments.length;
var i__19429__auto___20751 = (0);
while(true){
if((i__19429__auto___20751 < len__19428__auto___20750)){
args20744.push((arguments[i__19429__auto___20751]));

var G__20752 = (i__19429__auto___20751 + (1));
i__19429__auto___20751 = G__20752;
continue;
} else {
}
break;
}

var G__20746 = args20744.length;
switch (G__20746) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20744.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20747 = (function (f,blockable,meta20748){
this.f = f;
this.blockable = blockable;
this.meta20748 = meta20748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20749,meta20748__$1){
var self__ = this;
var _20749__$1 = this;
return (new cljs.core.async.t_cljs$core$async20747(self__.f,self__.blockable,meta20748__$1));
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20749){
var self__ = this;
var _20749__$1 = this;
return self__.meta20748;
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20748","meta20748",1937442558,null)], null);
});

cljs.core.async.t_cljs$core$async20747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20747";

cljs.core.async.t_cljs$core$async20747.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20747");
});

cljs.core.async.__GT_t_cljs$core$async20747 = (function cljs$core$async$__GT_t_cljs$core$async20747(f__$1,blockable__$1,meta20748){
return (new cljs.core.async.t_cljs$core$async20747(f__$1,blockable__$1,meta20748));
});

}

return (new cljs.core.async.t_cljs$core$async20747(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args20756 = [];
var len__19428__auto___20759 = arguments.length;
var i__19429__auto___20760 = (0);
while(true){
if((i__19429__auto___20760 < len__19428__auto___20759)){
args20756.push((arguments[i__19429__auto___20760]));

var G__20761 = (i__19429__auto___20760 + (1));
i__19429__auto___20760 = G__20761;
continue;
} else {
}
break;
}

var G__20758 = args20756.length;
switch (G__20758) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20756.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20763 = [];
var len__19428__auto___20766 = arguments.length;
var i__19429__auto___20767 = (0);
while(true){
if((i__19429__auto___20767 < len__19428__auto___20766)){
args20763.push((arguments[i__19429__auto___20767]));

var G__20768 = (i__19429__auto___20767 + (1));
i__19429__auto___20767 = G__20768;
continue;
} else {
}
break;
}

var G__20765 = args20763.length;
switch (G__20765) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20763.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args20770 = [];
var len__19428__auto___20773 = arguments.length;
var i__19429__auto___20774 = (0);
while(true){
if((i__19429__auto___20774 < len__19428__auto___20773)){
args20770.push((arguments[i__19429__auto___20774]));

var G__20775 = (i__19429__auto___20774 + (1));
i__19429__auto___20774 = G__20775;
continue;
} else {
}
break;
}

var G__20772 = args20770.length;
switch (G__20772) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20770.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20777 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20777);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20777,ret){
return (function (){
return fn1.call(null,val_20777);
});})(val_20777,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20778 = [];
var len__19428__auto___20781 = arguments.length;
var i__19429__auto___20782 = (0);
while(true){
if((i__19429__auto___20782 < len__19428__auto___20781)){
args20778.push((arguments[i__19429__auto___20782]));

var G__20783 = (i__19429__auto___20782 + (1));
i__19429__auto___20782 = G__20783;
continue;
} else {
}
break;
}

var G__20780 = args20778.length;
switch (G__20780) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20778.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19273__auto___20785 = n;
var x_20786 = (0);
while(true){
if((x_20786 < n__19273__auto___20785)){
(a[x_20786] = (0));

var G__20787 = (x_20786 + (1));
x_20786 = G__20787;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20788 = (i + (1));
i = G__20788;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20792 = (function (alt_flag,flag,meta20793){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20793 = meta20793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20794,meta20793__$1){
var self__ = this;
var _20794__$1 = this;
return (new cljs.core.async.t_cljs$core$async20792(self__.alt_flag,self__.flag,meta20793__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20794){
var self__ = this;
var _20794__$1 = this;
return self__.meta20793;
});})(flag))
;

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20792.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20793","meta20793",-1027875820,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20792";

cljs.core.async.t_cljs$core$async20792.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20792");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20792 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20792(alt_flag__$1,flag__$1,meta20793){
return (new cljs.core.async.t_cljs$core$async20792(alt_flag__$1,flag__$1,meta20793));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20792(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20798 = (function (alt_handler,flag,cb,meta20799){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20799 = meta20799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20800,meta20799__$1){
var self__ = this;
var _20800__$1 = this;
return (new cljs.core.async.t_cljs$core$async20798(self__.alt_handler,self__.flag,self__.cb,meta20799__$1));
});

cljs.core.async.t_cljs$core$async20798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20800){
var self__ = this;
var _20800__$1 = this;
return self__.meta20799;
});

cljs.core.async.t_cljs$core$async20798.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20799","meta20799",-1530573063,null)], null);
});

cljs.core.async.t_cljs$core$async20798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20798";

cljs.core.async.t_cljs$core$async20798.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20798");
});

cljs.core.async.__GT_t_cljs$core$async20798 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20798(alt_handler__$1,flag__$1,cb__$1,meta20799){
return (new cljs.core.async.t_cljs$core$async20798(alt_handler__$1,flag__$1,cb__$1,meta20799));
});

}

return (new cljs.core.async.t_cljs$core$async20798(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20801_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20801_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20802_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20802_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18370__auto__ = wport;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20803 = (i + (1));
i = G__20803;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18370__auto__ = ret;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18358__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18358__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__19435__auto__ = [];
var len__19428__auto___20809 = arguments.length;
var i__19429__auto___20810 = (0);
while(true){
if((i__19429__auto___20810 < len__19428__auto___20809)){
args__19435__auto__.push((arguments[i__19429__auto___20810]));

var G__20811 = (i__19429__auto___20810 + (1));
i__19429__auto___20810 = G__20811;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20806){
var map__20807 = p__20806;
var map__20807__$1 = ((((!((map__20807 == null)))?((((map__20807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20807):map__20807);
var opts = map__20807__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20804){
var G__20805 = cljs.core.first.call(null,seq20804);
var seq20804__$1 = cljs.core.next.call(null,seq20804);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20805,seq20804__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args20812 = [];
var len__19428__auto___20862 = arguments.length;
var i__19429__auto___20863 = (0);
while(true){
if((i__19429__auto___20863 < len__19428__auto___20862)){
args20812.push((arguments[i__19429__auto___20863]));

var G__20864 = (i__19429__auto___20863 + (1));
i__19429__auto___20863 = G__20864;
continue;
} else {
}
break;
}

var G__20814 = args20812.length;
switch (G__20814) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20812.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20699__auto___20866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___20866){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___20866){
return (function (state_20838){
var state_val_20839 = (state_20838[(1)]);
if((state_val_20839 === (7))){
var inst_20834 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20840_20867 = state_20838__$1;
(statearr_20840_20867[(2)] = inst_20834);

(statearr_20840_20867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (1))){
var state_20838__$1 = state_20838;
var statearr_20841_20868 = state_20838__$1;
(statearr_20841_20868[(2)] = null);

(statearr_20841_20868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (4))){
var inst_20817 = (state_20838[(7)]);
var inst_20817__$1 = (state_20838[(2)]);
var inst_20818 = (inst_20817__$1 == null);
var state_20838__$1 = (function (){var statearr_20842 = state_20838;
(statearr_20842[(7)] = inst_20817__$1);

return statearr_20842;
})();
if(cljs.core.truth_(inst_20818)){
var statearr_20843_20869 = state_20838__$1;
(statearr_20843_20869[(1)] = (5));

} else {
var statearr_20844_20870 = state_20838__$1;
(statearr_20844_20870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (13))){
var state_20838__$1 = state_20838;
var statearr_20845_20871 = state_20838__$1;
(statearr_20845_20871[(2)] = null);

(statearr_20845_20871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (6))){
var inst_20817 = (state_20838[(7)]);
var state_20838__$1 = state_20838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20838__$1,(11),to,inst_20817);
} else {
if((state_val_20839 === (3))){
var inst_20836 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20838__$1,inst_20836);
} else {
if((state_val_20839 === (12))){
var state_20838__$1 = state_20838;
var statearr_20846_20872 = state_20838__$1;
(statearr_20846_20872[(2)] = null);

(statearr_20846_20872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (2))){
var state_20838__$1 = state_20838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20838__$1,(4),from);
} else {
if((state_val_20839 === (11))){
var inst_20827 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
if(cljs.core.truth_(inst_20827)){
var statearr_20847_20873 = state_20838__$1;
(statearr_20847_20873[(1)] = (12));

} else {
var statearr_20848_20874 = state_20838__$1;
(statearr_20848_20874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (9))){
var state_20838__$1 = state_20838;
var statearr_20849_20875 = state_20838__$1;
(statearr_20849_20875[(2)] = null);

(statearr_20849_20875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (5))){
var state_20838__$1 = state_20838;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20850_20876 = state_20838__$1;
(statearr_20850_20876[(1)] = (8));

} else {
var statearr_20851_20877 = state_20838__$1;
(statearr_20851_20877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (14))){
var inst_20832 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20852_20878 = state_20838__$1;
(statearr_20852_20878[(2)] = inst_20832);

(statearr_20852_20878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (10))){
var inst_20824 = (state_20838[(2)]);
var state_20838__$1 = state_20838;
var statearr_20853_20879 = state_20838__$1;
(statearr_20853_20879[(2)] = inst_20824);

(statearr_20853_20879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20839 === (8))){
var inst_20821 = cljs.core.async.close_BANG_.call(null,to);
var state_20838__$1 = state_20838;
var statearr_20854_20880 = state_20838__$1;
(statearr_20854_20880[(2)] = inst_20821);

(statearr_20854_20880[(1)] = (10));


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
});})(c__20699__auto___20866))
;
return ((function (switch__20587__auto__,c__20699__auto___20866){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_20858 = [null,null,null,null,null,null,null,null];
(statearr_20858[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_20858[(1)] = (1));

return statearr_20858;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_20838){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_20838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e20859){if((e20859 instanceof Object)){
var ex__20591__auto__ = e20859;
var statearr_20860_20881 = state_20838;
(statearr_20860_20881[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20882 = state_20838;
state_20838 = G__20882;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_20838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_20838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___20866))
})();
var state__20701__auto__ = (function (){var statearr_20861 = f__20700__auto__.call(null);
(statearr_20861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___20866);

return statearr_20861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___20866))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21066){
var vec__21067 = p__21066;
var v = cljs.core.nth.call(null,vec__21067,(0),null);
var p = cljs.core.nth.call(null,vec__21067,(1),null);
var job = vec__21067;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20699__auto___21249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___21249,res,vec__21067,v,p,job,jobs,results){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___21249,res,vec__21067,v,p,job,jobs,results){
return (function (state_21072){
var state_val_21073 = (state_21072[(1)]);
if((state_val_21073 === (1))){
var state_21072__$1 = state_21072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21072__$1,(2),res,v);
} else {
if((state_val_21073 === (2))){
var inst_21069 = (state_21072[(2)]);
var inst_21070 = cljs.core.async.close_BANG_.call(null,res);
var state_21072__$1 = (function (){var statearr_21074 = state_21072;
(statearr_21074[(7)] = inst_21069);

return statearr_21074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21072__$1,inst_21070);
} else {
return null;
}
}
});})(c__20699__auto___21249,res,vec__21067,v,p,job,jobs,results))
;
return ((function (switch__20587__auto__,c__20699__auto___21249,res,vec__21067,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0 = (function (){
var statearr_21078 = [null,null,null,null,null,null,null,null];
(statearr_21078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__);

(statearr_21078[(1)] = (1));

return statearr_21078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1 = (function (state_21072){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e21079){if((e21079 instanceof Object)){
var ex__20591__auto__ = e21079;
var statearr_21080_21250 = state_21072;
(statearr_21080_21250[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21251 = state_21072;
state_21072 = G__21251;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = function(state_21072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1.call(this,state_21072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___21249,res,vec__21067,v,p,job,jobs,results))
})();
var state__20701__auto__ = (function (){var statearr_21081 = f__20700__auto__.call(null);
(statearr_21081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___21249);

return statearr_21081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___21249,res,vec__21067,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21082){
var vec__21083 = p__21082;
var v = cljs.core.nth.call(null,vec__21083,(0),null);
var p = cljs.core.nth.call(null,vec__21083,(1),null);
var job = vec__21083;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19273__auto___21252 = n;
var __21253 = (0);
while(true){
if((__21253 < n__19273__auto___21252)){
var G__21084_21254 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21084_21254) {
case "compute":
var c__20699__auto___21256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21253,c__20699__auto___21256,G__21084_21254,n__19273__auto___21252,jobs,results,process,async){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (__21253,c__20699__auto___21256,G__21084_21254,n__19273__auto___21252,jobs,results,process,async){
return (function (state_21097){
var state_val_21098 = (state_21097[(1)]);
if((state_val_21098 === (1))){
var state_21097__$1 = state_21097;
var statearr_21099_21257 = state_21097__$1;
(statearr_21099_21257[(2)] = null);

(statearr_21099_21257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21098 === (2))){
var state_21097__$1 = state_21097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21097__$1,(4),jobs);
} else {
if((state_val_21098 === (3))){
var inst_21095 = (state_21097[(2)]);
var state_21097__$1 = state_21097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21097__$1,inst_21095);
} else {
if((state_val_21098 === (4))){
var inst_21087 = (state_21097[(2)]);
var inst_21088 = process.call(null,inst_21087);
var state_21097__$1 = state_21097;
if(cljs.core.truth_(inst_21088)){
var statearr_21100_21258 = state_21097__$1;
(statearr_21100_21258[(1)] = (5));

} else {
var statearr_21101_21259 = state_21097__$1;
(statearr_21101_21259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21098 === (5))){
var state_21097__$1 = state_21097;
var statearr_21102_21260 = state_21097__$1;
(statearr_21102_21260[(2)] = null);

(statearr_21102_21260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21098 === (6))){
var state_21097__$1 = state_21097;
var statearr_21103_21261 = state_21097__$1;
(statearr_21103_21261[(2)] = null);

(statearr_21103_21261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21098 === (7))){
var inst_21093 = (state_21097[(2)]);
var state_21097__$1 = state_21097;
var statearr_21104_21262 = state_21097__$1;
(statearr_21104_21262[(2)] = inst_21093);

(statearr_21104_21262[(1)] = (3));


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
});})(__21253,c__20699__auto___21256,G__21084_21254,n__19273__auto___21252,jobs,results,process,async))
;
return ((function (__21253,switch__20587__auto__,c__20699__auto___21256,G__21084_21254,n__19273__auto___21252,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0 = (function (){
var statearr_21108 = [null,null,null,null,null,null,null];
(statearr_21108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__);

(statearr_21108[(1)] = (1));

return statearr_21108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1 = (function (state_21097){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e21109){if((e21109 instanceof Object)){
var ex__20591__auto__ = e21109;
var statearr_21110_21263 = state_21097;
(statearr_21110_21263[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21264 = state_21097;
state_21097 = G__21264;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = function(state_21097){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1.call(this,state_21097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__;
})()
;})(__21253,switch__20587__auto__,c__20699__auto___21256,G__21084_21254,n__19273__auto___21252,jobs,results,process,async))
})();
var state__20701__auto__ = (function (){var statearr_21111 = f__20700__auto__.call(null);
(statearr_21111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___21256);

return statearr_21111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(__21253,c__20699__auto___21256,G__21084_21254,n__19273__auto___21252,jobs,results,process,async))
);


break;
case "async":
var c__20699__auto___21265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21253,c__20699__auto___21265,G__21084_21254,n__19273__auto___21252,jobs,results,process,async){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (__21253,c__20699__auto___21265,G__21084_21254,n__19273__auto___21252,jobs,results,process,async){
return (function (state_21124){
var state_val_21125 = (state_21124[(1)]);
if((state_val_21125 === (1))){
var state_21124__$1 = state_21124;
var statearr_21126_21266 = state_21124__$1;
(statearr_21126_21266[(2)] = null);

(statearr_21126_21266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (2))){
var state_21124__$1 = state_21124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21124__$1,(4),jobs);
} else {
if((state_val_21125 === (3))){
var inst_21122 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21124__$1,inst_21122);
} else {
if((state_val_21125 === (4))){
var inst_21114 = (state_21124[(2)]);
var inst_21115 = async.call(null,inst_21114);
var state_21124__$1 = state_21124;
if(cljs.core.truth_(inst_21115)){
var statearr_21127_21267 = state_21124__$1;
(statearr_21127_21267[(1)] = (5));

} else {
var statearr_21128_21268 = state_21124__$1;
(statearr_21128_21268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (5))){
var state_21124__$1 = state_21124;
var statearr_21129_21269 = state_21124__$1;
(statearr_21129_21269[(2)] = null);

(statearr_21129_21269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (6))){
var state_21124__$1 = state_21124;
var statearr_21130_21270 = state_21124__$1;
(statearr_21130_21270[(2)] = null);

(statearr_21130_21270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21125 === (7))){
var inst_21120 = (state_21124[(2)]);
var state_21124__$1 = state_21124;
var statearr_21131_21271 = state_21124__$1;
(statearr_21131_21271[(2)] = inst_21120);

(statearr_21131_21271[(1)] = (3));


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
});})(__21253,c__20699__auto___21265,G__21084_21254,n__19273__auto___21252,jobs,results,process,async))
;
return ((function (__21253,switch__20587__auto__,c__20699__auto___21265,G__21084_21254,n__19273__auto___21252,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0 = (function (){
var statearr_21135 = [null,null,null,null,null,null,null];
(statearr_21135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__);

(statearr_21135[(1)] = (1));

return statearr_21135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1 = (function (state_21124){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e21136){if((e21136 instanceof Object)){
var ex__20591__auto__ = e21136;
var statearr_21137_21272 = state_21124;
(statearr_21137_21272[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21273 = state_21124;
state_21124 = G__21273;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = function(state_21124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1.call(this,state_21124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__;
})()
;})(__21253,switch__20587__auto__,c__20699__auto___21265,G__21084_21254,n__19273__auto___21252,jobs,results,process,async))
})();
var state__20701__auto__ = (function (){var statearr_21138 = f__20700__auto__.call(null);
(statearr_21138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___21265);

return statearr_21138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(__21253,c__20699__auto___21265,G__21084_21254,n__19273__auto___21252,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21274 = (__21253 + (1));
__21253 = G__21274;
continue;
} else {
}
break;
}

var c__20699__auto___21275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___21275,jobs,results,process,async){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___21275,jobs,results,process,async){
return (function (state_21160){
var state_val_21161 = (state_21160[(1)]);
if((state_val_21161 === (1))){
var state_21160__$1 = state_21160;
var statearr_21162_21276 = state_21160__$1;
(statearr_21162_21276[(2)] = null);

(statearr_21162_21276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (2))){
var state_21160__$1 = state_21160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21160__$1,(4),from);
} else {
if((state_val_21161 === (3))){
var inst_21158 = (state_21160[(2)]);
var state_21160__$1 = state_21160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21160__$1,inst_21158);
} else {
if((state_val_21161 === (4))){
var inst_21141 = (state_21160[(7)]);
var inst_21141__$1 = (state_21160[(2)]);
var inst_21142 = (inst_21141__$1 == null);
var state_21160__$1 = (function (){var statearr_21163 = state_21160;
(statearr_21163[(7)] = inst_21141__$1);

return statearr_21163;
})();
if(cljs.core.truth_(inst_21142)){
var statearr_21164_21277 = state_21160__$1;
(statearr_21164_21277[(1)] = (5));

} else {
var statearr_21165_21278 = state_21160__$1;
(statearr_21165_21278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (5))){
var inst_21144 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21160__$1 = state_21160;
var statearr_21166_21279 = state_21160__$1;
(statearr_21166_21279[(2)] = inst_21144);

(statearr_21166_21279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (6))){
var inst_21141 = (state_21160[(7)]);
var inst_21146 = (state_21160[(8)]);
var inst_21146__$1 = cljs.core.async.chan.call(null,(1));
var inst_21147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21148 = [inst_21141,inst_21146__$1];
var inst_21149 = (new cljs.core.PersistentVector(null,2,(5),inst_21147,inst_21148,null));
var state_21160__$1 = (function (){var statearr_21167 = state_21160;
(statearr_21167[(8)] = inst_21146__$1);

return statearr_21167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21160__$1,(8),jobs,inst_21149);
} else {
if((state_val_21161 === (7))){
var inst_21156 = (state_21160[(2)]);
var state_21160__$1 = state_21160;
var statearr_21168_21280 = state_21160__$1;
(statearr_21168_21280[(2)] = inst_21156);

(statearr_21168_21280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21161 === (8))){
var inst_21146 = (state_21160[(8)]);
var inst_21151 = (state_21160[(2)]);
var state_21160__$1 = (function (){var statearr_21169 = state_21160;
(statearr_21169[(9)] = inst_21151);

return statearr_21169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21160__$1,(9),results,inst_21146);
} else {
if((state_val_21161 === (9))){
var inst_21153 = (state_21160[(2)]);
var state_21160__$1 = (function (){var statearr_21170 = state_21160;
(statearr_21170[(10)] = inst_21153);

return statearr_21170;
})();
var statearr_21171_21281 = state_21160__$1;
(statearr_21171_21281[(2)] = null);

(statearr_21171_21281[(1)] = (2));


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
});})(c__20699__auto___21275,jobs,results,process,async))
;
return ((function (switch__20587__auto__,c__20699__auto___21275,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0 = (function (){
var statearr_21175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__);

(statearr_21175[(1)] = (1));

return statearr_21175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1 = (function (state_21160){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e21176){if((e21176 instanceof Object)){
var ex__20591__auto__ = e21176;
var statearr_21177_21282 = state_21160;
(statearr_21177_21282[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21283 = state_21160;
state_21160 = G__21283;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = function(state_21160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1.call(this,state_21160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___21275,jobs,results,process,async))
})();
var state__20701__auto__ = (function (){var statearr_21178 = f__20700__auto__.call(null);
(statearr_21178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___21275);

return statearr_21178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___21275,jobs,results,process,async))
);


var c__20699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto__,jobs,results,process,async){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto__,jobs,results,process,async){
return (function (state_21216){
var state_val_21217 = (state_21216[(1)]);
if((state_val_21217 === (7))){
var inst_21212 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
var statearr_21218_21284 = state_21216__$1;
(statearr_21218_21284[(2)] = inst_21212);

(statearr_21218_21284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (20))){
var state_21216__$1 = state_21216;
var statearr_21219_21285 = state_21216__$1;
(statearr_21219_21285[(2)] = null);

(statearr_21219_21285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (1))){
var state_21216__$1 = state_21216;
var statearr_21220_21286 = state_21216__$1;
(statearr_21220_21286[(2)] = null);

(statearr_21220_21286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (4))){
var inst_21181 = (state_21216[(7)]);
var inst_21181__$1 = (state_21216[(2)]);
var inst_21182 = (inst_21181__$1 == null);
var state_21216__$1 = (function (){var statearr_21221 = state_21216;
(statearr_21221[(7)] = inst_21181__$1);

return statearr_21221;
})();
if(cljs.core.truth_(inst_21182)){
var statearr_21222_21287 = state_21216__$1;
(statearr_21222_21287[(1)] = (5));

} else {
var statearr_21223_21288 = state_21216__$1;
(statearr_21223_21288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (15))){
var inst_21194 = (state_21216[(8)]);
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21216__$1,(18),to,inst_21194);
} else {
if((state_val_21217 === (21))){
var inst_21207 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
var statearr_21224_21289 = state_21216__$1;
(statearr_21224_21289[(2)] = inst_21207);

(statearr_21224_21289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (13))){
var inst_21209 = (state_21216[(2)]);
var state_21216__$1 = (function (){var statearr_21225 = state_21216;
(statearr_21225[(9)] = inst_21209);

return statearr_21225;
})();
var statearr_21226_21290 = state_21216__$1;
(statearr_21226_21290[(2)] = null);

(statearr_21226_21290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (6))){
var inst_21181 = (state_21216[(7)]);
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21216__$1,(11),inst_21181);
} else {
if((state_val_21217 === (17))){
var inst_21202 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
if(cljs.core.truth_(inst_21202)){
var statearr_21227_21291 = state_21216__$1;
(statearr_21227_21291[(1)] = (19));

} else {
var statearr_21228_21292 = state_21216__$1;
(statearr_21228_21292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (3))){
var inst_21214 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21216__$1,inst_21214);
} else {
if((state_val_21217 === (12))){
var inst_21191 = (state_21216[(10)]);
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21216__$1,(14),inst_21191);
} else {
if((state_val_21217 === (2))){
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21216__$1,(4),results);
} else {
if((state_val_21217 === (19))){
var state_21216__$1 = state_21216;
var statearr_21229_21293 = state_21216__$1;
(statearr_21229_21293[(2)] = null);

(statearr_21229_21293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (11))){
var inst_21191 = (state_21216[(2)]);
var state_21216__$1 = (function (){var statearr_21230 = state_21216;
(statearr_21230[(10)] = inst_21191);

return statearr_21230;
})();
var statearr_21231_21294 = state_21216__$1;
(statearr_21231_21294[(2)] = null);

(statearr_21231_21294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (9))){
var state_21216__$1 = state_21216;
var statearr_21232_21295 = state_21216__$1;
(statearr_21232_21295[(2)] = null);

(statearr_21232_21295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (5))){
var state_21216__$1 = state_21216;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21233_21296 = state_21216__$1;
(statearr_21233_21296[(1)] = (8));

} else {
var statearr_21234_21297 = state_21216__$1;
(statearr_21234_21297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (14))){
var inst_21196 = (state_21216[(11)]);
var inst_21194 = (state_21216[(8)]);
var inst_21194__$1 = (state_21216[(2)]);
var inst_21195 = (inst_21194__$1 == null);
var inst_21196__$1 = cljs.core.not.call(null,inst_21195);
var state_21216__$1 = (function (){var statearr_21235 = state_21216;
(statearr_21235[(11)] = inst_21196__$1);

(statearr_21235[(8)] = inst_21194__$1);

return statearr_21235;
})();
if(inst_21196__$1){
var statearr_21236_21298 = state_21216__$1;
(statearr_21236_21298[(1)] = (15));

} else {
var statearr_21237_21299 = state_21216__$1;
(statearr_21237_21299[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (16))){
var inst_21196 = (state_21216[(11)]);
var state_21216__$1 = state_21216;
var statearr_21238_21300 = state_21216__$1;
(statearr_21238_21300[(2)] = inst_21196);

(statearr_21238_21300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (10))){
var inst_21188 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
var statearr_21239_21301 = state_21216__$1;
(statearr_21239_21301[(2)] = inst_21188);

(statearr_21239_21301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (18))){
var inst_21199 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
var statearr_21240_21302 = state_21216__$1;
(statearr_21240_21302[(2)] = inst_21199);

(statearr_21240_21302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (8))){
var inst_21185 = cljs.core.async.close_BANG_.call(null,to);
var state_21216__$1 = state_21216;
var statearr_21241_21303 = state_21216__$1;
(statearr_21241_21303[(2)] = inst_21185);

(statearr_21241_21303[(1)] = (10));


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
});})(c__20699__auto__,jobs,results,process,async))
;
return ((function (switch__20587__auto__,c__20699__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0 = (function (){
var statearr_21245 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__);

(statearr_21245[(1)] = (1));

return statearr_21245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1 = (function (state_21216){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e21246){if((e21246 instanceof Object)){
var ex__20591__auto__ = e21246;
var statearr_21247_21304 = state_21216;
(statearr_21247_21304[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21305 = state_21216;
state_21216 = G__21305;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__ = function(state_21216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1.call(this,state_21216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto__,jobs,results,process,async))
})();
var state__20701__auto__ = (function (){var statearr_21248 = f__20700__auto__.call(null);
(statearr_21248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto__);

return statearr_21248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto__,jobs,results,process,async))
);

return c__20699__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21306 = [];
var len__19428__auto___21309 = arguments.length;
var i__19429__auto___21310 = (0);
while(true){
if((i__19429__auto___21310 < len__19428__auto___21309)){
args21306.push((arguments[i__19429__auto___21310]));

var G__21311 = (i__19429__auto___21310 + (1));
i__19429__auto___21310 = G__21311;
continue;
} else {
}
break;
}

var G__21308 = args21306.length;
switch (G__21308) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21306.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
var args21313 = [];
var len__19428__auto___21316 = arguments.length;
var i__19429__auto___21317 = (0);
while(true){
if((i__19429__auto___21317 < len__19428__auto___21316)){
args21313.push((arguments[i__19429__auto___21317]));

var G__21318 = (i__19429__auto___21317 + (1));
i__19429__auto___21317 = G__21318;
continue;
} else {
}
break;
}

var G__21315 = args21313.length;
switch (G__21315) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21313.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
var args21320 = [];
var len__19428__auto___21373 = arguments.length;
var i__19429__auto___21374 = (0);
while(true){
if((i__19429__auto___21374 < len__19428__auto___21373)){
args21320.push((arguments[i__19429__auto___21374]));

var G__21375 = (i__19429__auto___21374 + (1));
i__19429__auto___21374 = G__21375;
continue;
} else {
}
break;
}

var G__21322 = args21320.length;
switch (G__21322) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21320.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20699__auto___21377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___21377,tc,fc){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___21377,tc,fc){
return (function (state_21348){
var state_val_21349 = (state_21348[(1)]);
if((state_val_21349 === (7))){
var inst_21344 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
var statearr_21350_21378 = state_21348__$1;
(statearr_21350_21378[(2)] = inst_21344);

(statearr_21350_21378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (1))){
var state_21348__$1 = state_21348;
var statearr_21351_21379 = state_21348__$1;
(statearr_21351_21379[(2)] = null);

(statearr_21351_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (4))){
var inst_21325 = (state_21348[(7)]);
var inst_21325__$1 = (state_21348[(2)]);
var inst_21326 = (inst_21325__$1 == null);
var state_21348__$1 = (function (){var statearr_21352 = state_21348;
(statearr_21352[(7)] = inst_21325__$1);

return statearr_21352;
})();
if(cljs.core.truth_(inst_21326)){
var statearr_21353_21380 = state_21348__$1;
(statearr_21353_21380[(1)] = (5));

} else {
var statearr_21354_21381 = state_21348__$1;
(statearr_21354_21381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (13))){
var state_21348__$1 = state_21348;
var statearr_21355_21382 = state_21348__$1;
(statearr_21355_21382[(2)] = null);

(statearr_21355_21382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (6))){
var inst_21325 = (state_21348[(7)]);
var inst_21331 = p.call(null,inst_21325);
var state_21348__$1 = state_21348;
if(cljs.core.truth_(inst_21331)){
var statearr_21356_21383 = state_21348__$1;
(statearr_21356_21383[(1)] = (9));

} else {
var statearr_21357_21384 = state_21348__$1;
(statearr_21357_21384[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (3))){
var inst_21346 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21348__$1,inst_21346);
} else {
if((state_val_21349 === (12))){
var state_21348__$1 = state_21348;
var statearr_21358_21385 = state_21348__$1;
(statearr_21358_21385[(2)] = null);

(statearr_21358_21385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (2))){
var state_21348__$1 = state_21348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21348__$1,(4),ch);
} else {
if((state_val_21349 === (11))){
var inst_21325 = (state_21348[(7)]);
var inst_21335 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21348__$1,(8),inst_21335,inst_21325);
} else {
if((state_val_21349 === (9))){
var state_21348__$1 = state_21348;
var statearr_21359_21386 = state_21348__$1;
(statearr_21359_21386[(2)] = tc);

(statearr_21359_21386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (5))){
var inst_21328 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21329 = cljs.core.async.close_BANG_.call(null,fc);
var state_21348__$1 = (function (){var statearr_21360 = state_21348;
(statearr_21360[(8)] = inst_21328);

return statearr_21360;
})();
var statearr_21361_21387 = state_21348__$1;
(statearr_21361_21387[(2)] = inst_21329);

(statearr_21361_21387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (14))){
var inst_21342 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
var statearr_21362_21388 = state_21348__$1;
(statearr_21362_21388[(2)] = inst_21342);

(statearr_21362_21388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (10))){
var state_21348__$1 = state_21348;
var statearr_21363_21389 = state_21348__$1;
(statearr_21363_21389[(2)] = fc);

(statearr_21363_21389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (8))){
var inst_21337 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
if(cljs.core.truth_(inst_21337)){
var statearr_21364_21390 = state_21348__$1;
(statearr_21364_21390[(1)] = (12));

} else {
var statearr_21365_21391 = state_21348__$1;
(statearr_21365_21391[(1)] = (13));

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
});})(c__20699__auto___21377,tc,fc))
;
return ((function (switch__20587__auto__,c__20699__auto___21377,tc,fc){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_21369 = [null,null,null,null,null,null,null,null,null];
(statearr_21369[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_21369[(1)] = (1));

return statearr_21369;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_21348){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e21370){if((e21370 instanceof Object)){
var ex__20591__auto__ = e21370;
var statearr_21371_21392 = state_21348;
(statearr_21371_21392[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21393 = state_21348;
state_21348 = G__21393;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_21348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_21348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___21377,tc,fc))
})();
var state__20701__auto__ = (function (){var statearr_21372 = f__20700__auto__.call(null);
(statearr_21372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___21377);

return statearr_21372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___21377,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto__){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto__){
return (function (state_21457){
var state_val_21458 = (state_21457[(1)]);
if((state_val_21458 === (7))){
var inst_21453 = (state_21457[(2)]);
var state_21457__$1 = state_21457;
var statearr_21459_21480 = state_21457__$1;
(statearr_21459_21480[(2)] = inst_21453);

(statearr_21459_21480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (1))){
var inst_21437 = init;
var state_21457__$1 = (function (){var statearr_21460 = state_21457;
(statearr_21460[(7)] = inst_21437);

return statearr_21460;
})();
var statearr_21461_21481 = state_21457__$1;
(statearr_21461_21481[(2)] = null);

(statearr_21461_21481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (4))){
var inst_21440 = (state_21457[(8)]);
var inst_21440__$1 = (state_21457[(2)]);
var inst_21441 = (inst_21440__$1 == null);
var state_21457__$1 = (function (){var statearr_21462 = state_21457;
(statearr_21462[(8)] = inst_21440__$1);

return statearr_21462;
})();
if(cljs.core.truth_(inst_21441)){
var statearr_21463_21482 = state_21457__$1;
(statearr_21463_21482[(1)] = (5));

} else {
var statearr_21464_21483 = state_21457__$1;
(statearr_21464_21483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (6))){
var inst_21440 = (state_21457[(8)]);
var inst_21437 = (state_21457[(7)]);
var inst_21444 = (state_21457[(9)]);
var inst_21444__$1 = f.call(null,inst_21437,inst_21440);
var inst_21445 = cljs.core.reduced_QMARK_.call(null,inst_21444__$1);
var state_21457__$1 = (function (){var statearr_21465 = state_21457;
(statearr_21465[(9)] = inst_21444__$1);

return statearr_21465;
})();
if(inst_21445){
var statearr_21466_21484 = state_21457__$1;
(statearr_21466_21484[(1)] = (8));

} else {
var statearr_21467_21485 = state_21457__$1;
(statearr_21467_21485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (3))){
var inst_21455 = (state_21457[(2)]);
var state_21457__$1 = state_21457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21457__$1,inst_21455);
} else {
if((state_val_21458 === (2))){
var state_21457__$1 = state_21457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21457__$1,(4),ch);
} else {
if((state_val_21458 === (9))){
var inst_21444 = (state_21457[(9)]);
var inst_21437 = inst_21444;
var state_21457__$1 = (function (){var statearr_21468 = state_21457;
(statearr_21468[(7)] = inst_21437);

return statearr_21468;
})();
var statearr_21469_21486 = state_21457__$1;
(statearr_21469_21486[(2)] = null);

(statearr_21469_21486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (5))){
var inst_21437 = (state_21457[(7)]);
var state_21457__$1 = state_21457;
var statearr_21470_21487 = state_21457__$1;
(statearr_21470_21487[(2)] = inst_21437);

(statearr_21470_21487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (10))){
var inst_21451 = (state_21457[(2)]);
var state_21457__$1 = state_21457;
var statearr_21471_21488 = state_21457__$1;
(statearr_21471_21488[(2)] = inst_21451);

(statearr_21471_21488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21458 === (8))){
var inst_21444 = (state_21457[(9)]);
var inst_21447 = cljs.core.deref.call(null,inst_21444);
var state_21457__$1 = state_21457;
var statearr_21472_21489 = state_21457__$1;
(statearr_21472_21489[(2)] = inst_21447);

(statearr_21472_21489[(1)] = (10));


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
});})(c__20699__auto__))
;
return ((function (switch__20587__auto__,c__20699__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20588__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20588__auto____0 = (function (){
var statearr_21476 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21476[(0)] = cljs$core$async$reduce_$_state_machine__20588__auto__);

(statearr_21476[(1)] = (1));

return statearr_21476;
});
var cljs$core$async$reduce_$_state_machine__20588__auto____1 = (function (state_21457){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e21477){if((e21477 instanceof Object)){
var ex__20591__auto__ = e21477;
var statearr_21478_21490 = state_21457;
(statearr_21478_21490[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21491 = state_21457;
state_21457 = G__21491;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20588__auto__ = function(state_21457){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20588__auto____1.call(this,state_21457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20588__auto____0;
cljs$core$async$reduce_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20588__auto____1;
return cljs$core$async$reduce_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto__))
})();
var state__20701__auto__ = (function (){var statearr_21479 = f__20700__auto__.call(null);
(statearr_21479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto__);

return statearr_21479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto__))
);

return c__20699__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21492 = [];
var len__19428__auto___21544 = arguments.length;
var i__19429__auto___21545 = (0);
while(true){
if((i__19429__auto___21545 < len__19428__auto___21544)){
args21492.push((arguments[i__19429__auto___21545]));

var G__21546 = (i__19429__auto___21545 + (1));
i__19429__auto___21545 = G__21546;
continue;
} else {
}
break;
}

var G__21494 = args21492.length;
switch (G__21494) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21492.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto__){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto__){
return (function (state_21519){
var state_val_21520 = (state_21519[(1)]);
if((state_val_21520 === (7))){
var inst_21501 = (state_21519[(2)]);
var state_21519__$1 = state_21519;
var statearr_21521_21548 = state_21519__$1;
(statearr_21521_21548[(2)] = inst_21501);

(statearr_21521_21548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (1))){
var inst_21495 = cljs.core.seq.call(null,coll);
var inst_21496 = inst_21495;
var state_21519__$1 = (function (){var statearr_21522 = state_21519;
(statearr_21522[(7)] = inst_21496);

return statearr_21522;
})();
var statearr_21523_21549 = state_21519__$1;
(statearr_21523_21549[(2)] = null);

(statearr_21523_21549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (4))){
var inst_21496 = (state_21519[(7)]);
var inst_21499 = cljs.core.first.call(null,inst_21496);
var state_21519__$1 = state_21519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21519__$1,(7),ch,inst_21499);
} else {
if((state_val_21520 === (13))){
var inst_21513 = (state_21519[(2)]);
var state_21519__$1 = state_21519;
var statearr_21524_21550 = state_21519__$1;
(statearr_21524_21550[(2)] = inst_21513);

(statearr_21524_21550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (6))){
var inst_21504 = (state_21519[(2)]);
var state_21519__$1 = state_21519;
if(cljs.core.truth_(inst_21504)){
var statearr_21525_21551 = state_21519__$1;
(statearr_21525_21551[(1)] = (8));

} else {
var statearr_21526_21552 = state_21519__$1;
(statearr_21526_21552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (3))){
var inst_21517 = (state_21519[(2)]);
var state_21519__$1 = state_21519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21519__$1,inst_21517);
} else {
if((state_val_21520 === (12))){
var state_21519__$1 = state_21519;
var statearr_21527_21553 = state_21519__$1;
(statearr_21527_21553[(2)] = null);

(statearr_21527_21553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (2))){
var inst_21496 = (state_21519[(7)]);
var state_21519__$1 = state_21519;
if(cljs.core.truth_(inst_21496)){
var statearr_21528_21554 = state_21519__$1;
(statearr_21528_21554[(1)] = (4));

} else {
var statearr_21529_21555 = state_21519__$1;
(statearr_21529_21555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (11))){
var inst_21510 = cljs.core.async.close_BANG_.call(null,ch);
var state_21519__$1 = state_21519;
var statearr_21530_21556 = state_21519__$1;
(statearr_21530_21556[(2)] = inst_21510);

(statearr_21530_21556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (9))){
var state_21519__$1 = state_21519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21531_21557 = state_21519__$1;
(statearr_21531_21557[(1)] = (11));

} else {
var statearr_21532_21558 = state_21519__$1;
(statearr_21532_21558[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (5))){
var inst_21496 = (state_21519[(7)]);
var state_21519__$1 = state_21519;
var statearr_21533_21559 = state_21519__$1;
(statearr_21533_21559[(2)] = inst_21496);

(statearr_21533_21559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (10))){
var inst_21515 = (state_21519[(2)]);
var state_21519__$1 = state_21519;
var statearr_21534_21560 = state_21519__$1;
(statearr_21534_21560[(2)] = inst_21515);

(statearr_21534_21560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21520 === (8))){
var inst_21496 = (state_21519[(7)]);
var inst_21506 = cljs.core.next.call(null,inst_21496);
var inst_21496__$1 = inst_21506;
var state_21519__$1 = (function (){var statearr_21535 = state_21519;
(statearr_21535[(7)] = inst_21496__$1);

return statearr_21535;
})();
var statearr_21536_21561 = state_21519__$1;
(statearr_21536_21561[(2)] = null);

(statearr_21536_21561[(1)] = (2));


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
});})(c__20699__auto__))
;
return ((function (switch__20587__auto__,c__20699__auto__){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_21540 = [null,null,null,null,null,null,null,null];
(statearr_21540[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_21540[(1)] = (1));

return statearr_21540;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_21519){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e21541){if((e21541 instanceof Object)){
var ex__20591__auto__ = e21541;
var statearr_21542_21562 = state_21519;
(statearr_21542_21562[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21563 = state_21519;
state_21519 = G__21563;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_21519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_21519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto__))
})();
var state__20701__auto__ = (function (){var statearr_21543 = f__20700__auto__.call(null);
(statearr_21543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto__);

return statearr_21543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto__))
);

return c__20699__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19025__auto__ = (((_ == null))?null:_);
var m__19026__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,_);
} else {
var m__19026__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21785 = (function (mult,ch,cs,meta21786){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21786 = meta21786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21787,meta21786__$1){
var self__ = this;
var _21787__$1 = this;
return (new cljs.core.async.t_cljs$core$async21785(self__.mult,self__.ch,self__.cs,meta21786__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21787){
var self__ = this;
var _21787__$1 = this;
return self__.meta21786;
});})(cs))
;

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21785.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21785.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21786","meta21786",1297719119,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21785";

cljs.core.async.t_cljs$core$async21785.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async21785");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21785 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21785(mult__$1,ch__$1,cs__$1,meta21786){
return (new cljs.core.async.t_cljs$core$async21785(mult__$1,ch__$1,cs__$1,meta21786));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21785(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20699__auto___22006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___22006,cs,m,dchan,dctr,done){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___22006,cs,m,dchan,dctr,done){
return (function (state_21918){
var state_val_21919 = (state_21918[(1)]);
if((state_val_21919 === (7))){
var inst_21914 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21920_22007 = state_21918__$1;
(statearr_21920_22007[(2)] = inst_21914);

(statearr_21920_22007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (20))){
var inst_21819 = (state_21918[(7)]);
var inst_21829 = cljs.core.first.call(null,inst_21819);
var inst_21830 = cljs.core.nth.call(null,inst_21829,(0),null);
var inst_21831 = cljs.core.nth.call(null,inst_21829,(1),null);
var state_21918__$1 = (function (){var statearr_21921 = state_21918;
(statearr_21921[(8)] = inst_21830);

return statearr_21921;
})();
if(cljs.core.truth_(inst_21831)){
var statearr_21922_22008 = state_21918__$1;
(statearr_21922_22008[(1)] = (22));

} else {
var statearr_21923_22009 = state_21918__$1;
(statearr_21923_22009[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (27))){
var inst_21866 = (state_21918[(9)]);
var inst_21861 = (state_21918[(10)]);
var inst_21790 = (state_21918[(11)]);
var inst_21859 = (state_21918[(12)]);
var inst_21866__$1 = cljs.core._nth.call(null,inst_21859,inst_21861);
var inst_21867 = cljs.core.async.put_BANG_.call(null,inst_21866__$1,inst_21790,done);
var state_21918__$1 = (function (){var statearr_21924 = state_21918;
(statearr_21924[(9)] = inst_21866__$1);

return statearr_21924;
})();
if(cljs.core.truth_(inst_21867)){
var statearr_21925_22010 = state_21918__$1;
(statearr_21925_22010[(1)] = (30));

} else {
var statearr_21926_22011 = state_21918__$1;
(statearr_21926_22011[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (1))){
var state_21918__$1 = state_21918;
var statearr_21927_22012 = state_21918__$1;
(statearr_21927_22012[(2)] = null);

(statearr_21927_22012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (24))){
var inst_21819 = (state_21918[(7)]);
var inst_21836 = (state_21918[(2)]);
var inst_21837 = cljs.core.next.call(null,inst_21819);
var inst_21799 = inst_21837;
var inst_21800 = null;
var inst_21801 = (0);
var inst_21802 = (0);
var state_21918__$1 = (function (){var statearr_21928 = state_21918;
(statearr_21928[(13)] = inst_21799);

(statearr_21928[(14)] = inst_21800);

(statearr_21928[(15)] = inst_21802);

(statearr_21928[(16)] = inst_21836);

(statearr_21928[(17)] = inst_21801);

return statearr_21928;
})();
var statearr_21929_22013 = state_21918__$1;
(statearr_21929_22013[(2)] = null);

(statearr_21929_22013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (39))){
var state_21918__$1 = state_21918;
var statearr_21933_22014 = state_21918__$1;
(statearr_21933_22014[(2)] = null);

(statearr_21933_22014[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (4))){
var inst_21790 = (state_21918[(11)]);
var inst_21790__$1 = (state_21918[(2)]);
var inst_21791 = (inst_21790__$1 == null);
var state_21918__$1 = (function (){var statearr_21934 = state_21918;
(statearr_21934[(11)] = inst_21790__$1);

return statearr_21934;
})();
if(cljs.core.truth_(inst_21791)){
var statearr_21935_22015 = state_21918__$1;
(statearr_21935_22015[(1)] = (5));

} else {
var statearr_21936_22016 = state_21918__$1;
(statearr_21936_22016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (15))){
var inst_21799 = (state_21918[(13)]);
var inst_21800 = (state_21918[(14)]);
var inst_21802 = (state_21918[(15)]);
var inst_21801 = (state_21918[(17)]);
var inst_21815 = (state_21918[(2)]);
var inst_21816 = (inst_21802 + (1));
var tmp21930 = inst_21799;
var tmp21931 = inst_21800;
var tmp21932 = inst_21801;
var inst_21799__$1 = tmp21930;
var inst_21800__$1 = tmp21931;
var inst_21801__$1 = tmp21932;
var inst_21802__$1 = inst_21816;
var state_21918__$1 = (function (){var statearr_21937 = state_21918;
(statearr_21937[(18)] = inst_21815);

(statearr_21937[(13)] = inst_21799__$1);

(statearr_21937[(14)] = inst_21800__$1);

(statearr_21937[(15)] = inst_21802__$1);

(statearr_21937[(17)] = inst_21801__$1);

return statearr_21937;
})();
var statearr_21938_22017 = state_21918__$1;
(statearr_21938_22017[(2)] = null);

(statearr_21938_22017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (21))){
var inst_21840 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21942_22018 = state_21918__$1;
(statearr_21942_22018[(2)] = inst_21840);

(statearr_21942_22018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (31))){
var inst_21866 = (state_21918[(9)]);
var inst_21870 = done.call(null,null);
var inst_21871 = cljs.core.async.untap_STAR_.call(null,m,inst_21866);
var state_21918__$1 = (function (){var statearr_21943 = state_21918;
(statearr_21943[(19)] = inst_21870);

return statearr_21943;
})();
var statearr_21944_22019 = state_21918__$1;
(statearr_21944_22019[(2)] = inst_21871);

(statearr_21944_22019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (32))){
var inst_21861 = (state_21918[(10)]);
var inst_21860 = (state_21918[(20)]);
var inst_21859 = (state_21918[(12)]);
var inst_21858 = (state_21918[(21)]);
var inst_21873 = (state_21918[(2)]);
var inst_21874 = (inst_21861 + (1));
var tmp21939 = inst_21860;
var tmp21940 = inst_21859;
var tmp21941 = inst_21858;
var inst_21858__$1 = tmp21941;
var inst_21859__$1 = tmp21940;
var inst_21860__$1 = tmp21939;
var inst_21861__$1 = inst_21874;
var state_21918__$1 = (function (){var statearr_21945 = state_21918;
(statearr_21945[(22)] = inst_21873);

(statearr_21945[(10)] = inst_21861__$1);

(statearr_21945[(20)] = inst_21860__$1);

(statearr_21945[(12)] = inst_21859__$1);

(statearr_21945[(21)] = inst_21858__$1);

return statearr_21945;
})();
var statearr_21946_22020 = state_21918__$1;
(statearr_21946_22020[(2)] = null);

(statearr_21946_22020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (40))){
var inst_21886 = (state_21918[(23)]);
var inst_21890 = done.call(null,null);
var inst_21891 = cljs.core.async.untap_STAR_.call(null,m,inst_21886);
var state_21918__$1 = (function (){var statearr_21947 = state_21918;
(statearr_21947[(24)] = inst_21890);

return statearr_21947;
})();
var statearr_21948_22021 = state_21918__$1;
(statearr_21948_22021[(2)] = inst_21891);

(statearr_21948_22021[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (33))){
var inst_21877 = (state_21918[(25)]);
var inst_21879 = cljs.core.chunked_seq_QMARK_.call(null,inst_21877);
var state_21918__$1 = state_21918;
if(inst_21879){
var statearr_21949_22022 = state_21918__$1;
(statearr_21949_22022[(1)] = (36));

} else {
var statearr_21950_22023 = state_21918__$1;
(statearr_21950_22023[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (13))){
var inst_21809 = (state_21918[(26)]);
var inst_21812 = cljs.core.async.close_BANG_.call(null,inst_21809);
var state_21918__$1 = state_21918;
var statearr_21951_22024 = state_21918__$1;
(statearr_21951_22024[(2)] = inst_21812);

(statearr_21951_22024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (22))){
var inst_21830 = (state_21918[(8)]);
var inst_21833 = cljs.core.async.close_BANG_.call(null,inst_21830);
var state_21918__$1 = state_21918;
var statearr_21952_22025 = state_21918__$1;
(statearr_21952_22025[(2)] = inst_21833);

(statearr_21952_22025[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (36))){
var inst_21877 = (state_21918[(25)]);
var inst_21881 = cljs.core.chunk_first.call(null,inst_21877);
var inst_21882 = cljs.core.chunk_rest.call(null,inst_21877);
var inst_21883 = cljs.core.count.call(null,inst_21881);
var inst_21858 = inst_21882;
var inst_21859 = inst_21881;
var inst_21860 = inst_21883;
var inst_21861 = (0);
var state_21918__$1 = (function (){var statearr_21953 = state_21918;
(statearr_21953[(10)] = inst_21861);

(statearr_21953[(20)] = inst_21860);

(statearr_21953[(12)] = inst_21859);

(statearr_21953[(21)] = inst_21858);

return statearr_21953;
})();
var statearr_21954_22026 = state_21918__$1;
(statearr_21954_22026[(2)] = null);

(statearr_21954_22026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (41))){
var inst_21877 = (state_21918[(25)]);
var inst_21893 = (state_21918[(2)]);
var inst_21894 = cljs.core.next.call(null,inst_21877);
var inst_21858 = inst_21894;
var inst_21859 = null;
var inst_21860 = (0);
var inst_21861 = (0);
var state_21918__$1 = (function (){var statearr_21955 = state_21918;
(statearr_21955[(27)] = inst_21893);

(statearr_21955[(10)] = inst_21861);

(statearr_21955[(20)] = inst_21860);

(statearr_21955[(12)] = inst_21859);

(statearr_21955[(21)] = inst_21858);

return statearr_21955;
})();
var statearr_21956_22027 = state_21918__$1;
(statearr_21956_22027[(2)] = null);

(statearr_21956_22027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (43))){
var state_21918__$1 = state_21918;
var statearr_21957_22028 = state_21918__$1;
(statearr_21957_22028[(2)] = null);

(statearr_21957_22028[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (29))){
var inst_21902 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21958_22029 = state_21918__$1;
(statearr_21958_22029[(2)] = inst_21902);

(statearr_21958_22029[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (44))){
var inst_21911 = (state_21918[(2)]);
var state_21918__$1 = (function (){var statearr_21959 = state_21918;
(statearr_21959[(28)] = inst_21911);

return statearr_21959;
})();
var statearr_21960_22030 = state_21918__$1;
(statearr_21960_22030[(2)] = null);

(statearr_21960_22030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (6))){
var inst_21850 = (state_21918[(29)]);
var inst_21849 = cljs.core.deref.call(null,cs);
var inst_21850__$1 = cljs.core.keys.call(null,inst_21849);
var inst_21851 = cljs.core.count.call(null,inst_21850__$1);
var inst_21852 = cljs.core.reset_BANG_.call(null,dctr,inst_21851);
var inst_21857 = cljs.core.seq.call(null,inst_21850__$1);
var inst_21858 = inst_21857;
var inst_21859 = null;
var inst_21860 = (0);
var inst_21861 = (0);
var state_21918__$1 = (function (){var statearr_21961 = state_21918;
(statearr_21961[(10)] = inst_21861);

(statearr_21961[(20)] = inst_21860);

(statearr_21961[(29)] = inst_21850__$1);

(statearr_21961[(12)] = inst_21859);

(statearr_21961[(30)] = inst_21852);

(statearr_21961[(21)] = inst_21858);

return statearr_21961;
})();
var statearr_21962_22031 = state_21918__$1;
(statearr_21962_22031[(2)] = null);

(statearr_21962_22031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (28))){
var inst_21877 = (state_21918[(25)]);
var inst_21858 = (state_21918[(21)]);
var inst_21877__$1 = cljs.core.seq.call(null,inst_21858);
var state_21918__$1 = (function (){var statearr_21963 = state_21918;
(statearr_21963[(25)] = inst_21877__$1);

return statearr_21963;
})();
if(inst_21877__$1){
var statearr_21964_22032 = state_21918__$1;
(statearr_21964_22032[(1)] = (33));

} else {
var statearr_21965_22033 = state_21918__$1;
(statearr_21965_22033[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (25))){
var inst_21861 = (state_21918[(10)]);
var inst_21860 = (state_21918[(20)]);
var inst_21863 = (inst_21861 < inst_21860);
var inst_21864 = inst_21863;
var state_21918__$1 = state_21918;
if(cljs.core.truth_(inst_21864)){
var statearr_21966_22034 = state_21918__$1;
(statearr_21966_22034[(1)] = (27));

} else {
var statearr_21967_22035 = state_21918__$1;
(statearr_21967_22035[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (34))){
var state_21918__$1 = state_21918;
var statearr_21968_22036 = state_21918__$1;
(statearr_21968_22036[(2)] = null);

(statearr_21968_22036[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (17))){
var state_21918__$1 = state_21918;
var statearr_21969_22037 = state_21918__$1;
(statearr_21969_22037[(2)] = null);

(statearr_21969_22037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (3))){
var inst_21916 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21918__$1,inst_21916);
} else {
if((state_val_21919 === (12))){
var inst_21845 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21970_22038 = state_21918__$1;
(statearr_21970_22038[(2)] = inst_21845);

(statearr_21970_22038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (2))){
var state_21918__$1 = state_21918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21918__$1,(4),ch);
} else {
if((state_val_21919 === (23))){
var state_21918__$1 = state_21918;
var statearr_21971_22039 = state_21918__$1;
(statearr_21971_22039[(2)] = null);

(statearr_21971_22039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (35))){
var inst_21900 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21972_22040 = state_21918__$1;
(statearr_21972_22040[(2)] = inst_21900);

(statearr_21972_22040[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (19))){
var inst_21819 = (state_21918[(7)]);
var inst_21823 = cljs.core.chunk_first.call(null,inst_21819);
var inst_21824 = cljs.core.chunk_rest.call(null,inst_21819);
var inst_21825 = cljs.core.count.call(null,inst_21823);
var inst_21799 = inst_21824;
var inst_21800 = inst_21823;
var inst_21801 = inst_21825;
var inst_21802 = (0);
var state_21918__$1 = (function (){var statearr_21973 = state_21918;
(statearr_21973[(13)] = inst_21799);

(statearr_21973[(14)] = inst_21800);

(statearr_21973[(15)] = inst_21802);

(statearr_21973[(17)] = inst_21801);

return statearr_21973;
})();
var statearr_21974_22041 = state_21918__$1;
(statearr_21974_22041[(2)] = null);

(statearr_21974_22041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (11))){
var inst_21819 = (state_21918[(7)]);
var inst_21799 = (state_21918[(13)]);
var inst_21819__$1 = cljs.core.seq.call(null,inst_21799);
var state_21918__$1 = (function (){var statearr_21975 = state_21918;
(statearr_21975[(7)] = inst_21819__$1);

return statearr_21975;
})();
if(inst_21819__$1){
var statearr_21976_22042 = state_21918__$1;
(statearr_21976_22042[(1)] = (16));

} else {
var statearr_21977_22043 = state_21918__$1;
(statearr_21977_22043[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (9))){
var inst_21847 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21978_22044 = state_21918__$1;
(statearr_21978_22044[(2)] = inst_21847);

(statearr_21978_22044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (5))){
var inst_21797 = cljs.core.deref.call(null,cs);
var inst_21798 = cljs.core.seq.call(null,inst_21797);
var inst_21799 = inst_21798;
var inst_21800 = null;
var inst_21801 = (0);
var inst_21802 = (0);
var state_21918__$1 = (function (){var statearr_21979 = state_21918;
(statearr_21979[(13)] = inst_21799);

(statearr_21979[(14)] = inst_21800);

(statearr_21979[(15)] = inst_21802);

(statearr_21979[(17)] = inst_21801);

return statearr_21979;
})();
var statearr_21980_22045 = state_21918__$1;
(statearr_21980_22045[(2)] = null);

(statearr_21980_22045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (14))){
var state_21918__$1 = state_21918;
var statearr_21981_22046 = state_21918__$1;
(statearr_21981_22046[(2)] = null);

(statearr_21981_22046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (45))){
var inst_21908 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21982_22047 = state_21918__$1;
(statearr_21982_22047[(2)] = inst_21908);

(statearr_21982_22047[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (26))){
var inst_21850 = (state_21918[(29)]);
var inst_21904 = (state_21918[(2)]);
var inst_21905 = cljs.core.seq.call(null,inst_21850);
var state_21918__$1 = (function (){var statearr_21983 = state_21918;
(statearr_21983[(31)] = inst_21904);

return statearr_21983;
})();
if(inst_21905){
var statearr_21984_22048 = state_21918__$1;
(statearr_21984_22048[(1)] = (42));

} else {
var statearr_21985_22049 = state_21918__$1;
(statearr_21985_22049[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (16))){
var inst_21819 = (state_21918[(7)]);
var inst_21821 = cljs.core.chunked_seq_QMARK_.call(null,inst_21819);
var state_21918__$1 = state_21918;
if(inst_21821){
var statearr_21986_22050 = state_21918__$1;
(statearr_21986_22050[(1)] = (19));

} else {
var statearr_21987_22051 = state_21918__$1;
(statearr_21987_22051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (38))){
var inst_21897 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21988_22052 = state_21918__$1;
(statearr_21988_22052[(2)] = inst_21897);

(statearr_21988_22052[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (30))){
var state_21918__$1 = state_21918;
var statearr_21989_22053 = state_21918__$1;
(statearr_21989_22053[(2)] = null);

(statearr_21989_22053[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (10))){
var inst_21800 = (state_21918[(14)]);
var inst_21802 = (state_21918[(15)]);
var inst_21808 = cljs.core._nth.call(null,inst_21800,inst_21802);
var inst_21809 = cljs.core.nth.call(null,inst_21808,(0),null);
var inst_21810 = cljs.core.nth.call(null,inst_21808,(1),null);
var state_21918__$1 = (function (){var statearr_21990 = state_21918;
(statearr_21990[(26)] = inst_21809);

return statearr_21990;
})();
if(cljs.core.truth_(inst_21810)){
var statearr_21991_22054 = state_21918__$1;
(statearr_21991_22054[(1)] = (13));

} else {
var statearr_21992_22055 = state_21918__$1;
(statearr_21992_22055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (18))){
var inst_21843 = (state_21918[(2)]);
var state_21918__$1 = state_21918;
var statearr_21993_22056 = state_21918__$1;
(statearr_21993_22056[(2)] = inst_21843);

(statearr_21993_22056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (42))){
var state_21918__$1 = state_21918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21918__$1,(45),dchan);
} else {
if((state_val_21919 === (37))){
var inst_21886 = (state_21918[(23)]);
var inst_21877 = (state_21918[(25)]);
var inst_21790 = (state_21918[(11)]);
var inst_21886__$1 = cljs.core.first.call(null,inst_21877);
var inst_21887 = cljs.core.async.put_BANG_.call(null,inst_21886__$1,inst_21790,done);
var state_21918__$1 = (function (){var statearr_21994 = state_21918;
(statearr_21994[(23)] = inst_21886__$1);

return statearr_21994;
})();
if(cljs.core.truth_(inst_21887)){
var statearr_21995_22057 = state_21918__$1;
(statearr_21995_22057[(1)] = (39));

} else {
var statearr_21996_22058 = state_21918__$1;
(statearr_21996_22058[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21919 === (8))){
var inst_21802 = (state_21918[(15)]);
var inst_21801 = (state_21918[(17)]);
var inst_21804 = (inst_21802 < inst_21801);
var inst_21805 = inst_21804;
var state_21918__$1 = state_21918;
if(cljs.core.truth_(inst_21805)){
var statearr_21997_22059 = state_21918__$1;
(statearr_21997_22059[(1)] = (10));

} else {
var statearr_21998_22060 = state_21918__$1;
(statearr_21998_22060[(1)] = (11));

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
});})(c__20699__auto___22006,cs,m,dchan,dctr,done))
;
return ((function (switch__20587__auto__,c__20699__auto___22006,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20588__auto__ = null;
var cljs$core$async$mult_$_state_machine__20588__auto____0 = (function (){
var statearr_22002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22002[(0)] = cljs$core$async$mult_$_state_machine__20588__auto__);

(statearr_22002[(1)] = (1));

return statearr_22002;
});
var cljs$core$async$mult_$_state_machine__20588__auto____1 = (function (state_21918){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_21918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e22003){if((e22003 instanceof Object)){
var ex__20591__auto__ = e22003;
var statearr_22004_22061 = state_21918;
(statearr_22004_22061[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22062 = state_21918;
state_21918 = G__22062;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20588__auto__ = function(state_21918){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20588__auto____1.call(this,state_21918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20588__auto____0;
cljs$core$async$mult_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20588__auto____1;
return cljs$core$async$mult_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___22006,cs,m,dchan,dctr,done))
})();
var state__20701__auto__ = (function (){var statearr_22005 = f__20700__auto__.call(null);
(statearr_22005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___22006);

return statearr_22005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___22006,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22063 = [];
var len__19428__auto___22066 = arguments.length;
var i__19429__auto___22067 = (0);
while(true){
if((i__19429__auto___22067 < len__19428__auto___22066)){
args22063.push((arguments[i__19429__auto___22067]));

var G__22068 = (i__19429__auto___22067 + (1));
i__19429__auto___22067 = G__22068;
continue;
} else {
}
break;
}

var G__22065 = args22063.length;
switch (G__22065) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22063.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,state_map);
} else {
var m__19026__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,mode);
} else {
var m__19026__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___22080 = arguments.length;
var i__19429__auto___22081 = (0);
while(true){
if((i__19429__auto___22081 < len__19428__auto___22080)){
args__19435__auto__.push((arguments[i__19429__auto___22081]));

var G__22082 = (i__19429__auto___22081 + (1));
i__19429__auto___22081 = G__22082;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22074){
var map__22075 = p__22074;
var map__22075__$1 = ((((!((map__22075 == null)))?((((map__22075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22075):map__22075);
var opts = map__22075__$1;
var statearr_22077_22083 = state;
(statearr_22077_22083[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22075,map__22075__$1,opts){
return (function (val){
var statearr_22078_22084 = state;
(statearr_22078_22084[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22075,map__22075__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22079_22085 = state;
(statearr_22079_22085[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22070){
var G__22071 = cljs.core.first.call(null,seq22070);
var seq22070__$1 = cljs.core.next.call(null,seq22070);
var G__22072 = cljs.core.first.call(null,seq22070__$1);
var seq22070__$2 = cljs.core.next.call(null,seq22070__$1);
var G__22073 = cljs.core.first.call(null,seq22070__$2);
var seq22070__$3 = cljs.core.next.call(null,seq22070__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22071,G__22072,G__22073,seq22070__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22249 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22250){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22250 = meta22250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22251,meta22250__$1){
var self__ = this;
var _22251__$1 = this;
return (new cljs.core.async.t_cljs$core$async22249(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22250__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22251){
var self__ = this;
var _22251__$1 = this;
return self__.meta22250;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22250","meta22250",-1150499734,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22249";

cljs.core.async.t_cljs$core$async22249.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22249");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22249 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22249(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22250){
return (new cljs.core.async.t_cljs$core$async22249(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22250));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22249(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20699__auto___22412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___22412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___22412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22349){
var state_val_22350 = (state_22349[(1)]);
if((state_val_22350 === (7))){
var inst_22267 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
var statearr_22351_22413 = state_22349__$1;
(statearr_22351_22413[(2)] = inst_22267);

(statearr_22351_22413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (20))){
var inst_22279 = (state_22349[(7)]);
var state_22349__$1 = state_22349;
var statearr_22352_22414 = state_22349__$1;
(statearr_22352_22414[(2)] = inst_22279);

(statearr_22352_22414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (27))){
var state_22349__$1 = state_22349;
var statearr_22353_22415 = state_22349__$1;
(statearr_22353_22415[(2)] = null);

(statearr_22353_22415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (1))){
var inst_22255 = (state_22349[(8)]);
var inst_22255__$1 = calc_state.call(null);
var inst_22257 = (inst_22255__$1 == null);
var inst_22258 = cljs.core.not.call(null,inst_22257);
var state_22349__$1 = (function (){var statearr_22354 = state_22349;
(statearr_22354[(8)] = inst_22255__$1);

return statearr_22354;
})();
if(inst_22258){
var statearr_22355_22416 = state_22349__$1;
(statearr_22355_22416[(1)] = (2));

} else {
var statearr_22356_22417 = state_22349__$1;
(statearr_22356_22417[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (24))){
var inst_22302 = (state_22349[(9)]);
var inst_22309 = (state_22349[(10)]);
var inst_22323 = (state_22349[(11)]);
var inst_22323__$1 = inst_22302.call(null,inst_22309);
var state_22349__$1 = (function (){var statearr_22357 = state_22349;
(statearr_22357[(11)] = inst_22323__$1);

return statearr_22357;
})();
if(cljs.core.truth_(inst_22323__$1)){
var statearr_22358_22418 = state_22349__$1;
(statearr_22358_22418[(1)] = (29));

} else {
var statearr_22359_22419 = state_22349__$1;
(statearr_22359_22419[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (4))){
var inst_22270 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
if(cljs.core.truth_(inst_22270)){
var statearr_22360_22420 = state_22349__$1;
(statearr_22360_22420[(1)] = (8));

} else {
var statearr_22361_22421 = state_22349__$1;
(statearr_22361_22421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (15))){
var inst_22296 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
if(cljs.core.truth_(inst_22296)){
var statearr_22362_22422 = state_22349__$1;
(statearr_22362_22422[(1)] = (19));

} else {
var statearr_22363_22423 = state_22349__$1;
(statearr_22363_22423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (21))){
var inst_22301 = (state_22349[(12)]);
var inst_22301__$1 = (state_22349[(2)]);
var inst_22302 = cljs.core.get.call(null,inst_22301__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22303 = cljs.core.get.call(null,inst_22301__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22304 = cljs.core.get.call(null,inst_22301__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22349__$1 = (function (){var statearr_22364 = state_22349;
(statearr_22364[(9)] = inst_22302);

(statearr_22364[(13)] = inst_22303);

(statearr_22364[(12)] = inst_22301__$1);

return statearr_22364;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22349__$1,(22),inst_22304);
} else {
if((state_val_22350 === (31))){
var inst_22331 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
if(cljs.core.truth_(inst_22331)){
var statearr_22365_22424 = state_22349__$1;
(statearr_22365_22424[(1)] = (32));

} else {
var statearr_22366_22425 = state_22349__$1;
(statearr_22366_22425[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (32))){
var inst_22308 = (state_22349[(14)]);
var state_22349__$1 = state_22349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22349__$1,(35),out,inst_22308);
} else {
if((state_val_22350 === (33))){
var inst_22301 = (state_22349[(12)]);
var inst_22279 = inst_22301;
var state_22349__$1 = (function (){var statearr_22367 = state_22349;
(statearr_22367[(7)] = inst_22279);

return statearr_22367;
})();
var statearr_22368_22426 = state_22349__$1;
(statearr_22368_22426[(2)] = null);

(statearr_22368_22426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (13))){
var inst_22279 = (state_22349[(7)]);
var inst_22286 = inst_22279.cljs$lang$protocol_mask$partition0$;
var inst_22287 = (inst_22286 & (64));
var inst_22288 = inst_22279.cljs$core$ISeq$;
var inst_22289 = (inst_22287) || (inst_22288);
var state_22349__$1 = state_22349;
if(cljs.core.truth_(inst_22289)){
var statearr_22369_22427 = state_22349__$1;
(statearr_22369_22427[(1)] = (16));

} else {
var statearr_22370_22428 = state_22349__$1;
(statearr_22370_22428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (22))){
var inst_22309 = (state_22349[(10)]);
var inst_22308 = (state_22349[(14)]);
var inst_22307 = (state_22349[(2)]);
var inst_22308__$1 = cljs.core.nth.call(null,inst_22307,(0),null);
var inst_22309__$1 = cljs.core.nth.call(null,inst_22307,(1),null);
var inst_22310 = (inst_22308__$1 == null);
var inst_22311 = cljs.core._EQ_.call(null,inst_22309__$1,change);
var inst_22312 = (inst_22310) || (inst_22311);
var state_22349__$1 = (function (){var statearr_22371 = state_22349;
(statearr_22371[(10)] = inst_22309__$1);

(statearr_22371[(14)] = inst_22308__$1);

return statearr_22371;
})();
if(cljs.core.truth_(inst_22312)){
var statearr_22372_22429 = state_22349__$1;
(statearr_22372_22429[(1)] = (23));

} else {
var statearr_22373_22430 = state_22349__$1;
(statearr_22373_22430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (36))){
var inst_22301 = (state_22349[(12)]);
var inst_22279 = inst_22301;
var state_22349__$1 = (function (){var statearr_22374 = state_22349;
(statearr_22374[(7)] = inst_22279);

return statearr_22374;
})();
var statearr_22375_22431 = state_22349__$1;
(statearr_22375_22431[(2)] = null);

(statearr_22375_22431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (29))){
var inst_22323 = (state_22349[(11)]);
var state_22349__$1 = state_22349;
var statearr_22376_22432 = state_22349__$1;
(statearr_22376_22432[(2)] = inst_22323);

(statearr_22376_22432[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (6))){
var state_22349__$1 = state_22349;
var statearr_22377_22433 = state_22349__$1;
(statearr_22377_22433[(2)] = false);

(statearr_22377_22433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (28))){
var inst_22319 = (state_22349[(2)]);
var inst_22320 = calc_state.call(null);
var inst_22279 = inst_22320;
var state_22349__$1 = (function (){var statearr_22378 = state_22349;
(statearr_22378[(7)] = inst_22279);

(statearr_22378[(15)] = inst_22319);

return statearr_22378;
})();
var statearr_22379_22434 = state_22349__$1;
(statearr_22379_22434[(2)] = null);

(statearr_22379_22434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (25))){
var inst_22345 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
var statearr_22380_22435 = state_22349__$1;
(statearr_22380_22435[(2)] = inst_22345);

(statearr_22380_22435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (34))){
var inst_22343 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
var statearr_22381_22436 = state_22349__$1;
(statearr_22381_22436[(2)] = inst_22343);

(statearr_22381_22436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (17))){
var state_22349__$1 = state_22349;
var statearr_22382_22437 = state_22349__$1;
(statearr_22382_22437[(2)] = false);

(statearr_22382_22437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (3))){
var state_22349__$1 = state_22349;
var statearr_22383_22438 = state_22349__$1;
(statearr_22383_22438[(2)] = false);

(statearr_22383_22438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (12))){
var inst_22347 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22349__$1,inst_22347);
} else {
if((state_val_22350 === (2))){
var inst_22255 = (state_22349[(8)]);
var inst_22260 = inst_22255.cljs$lang$protocol_mask$partition0$;
var inst_22261 = (inst_22260 & (64));
var inst_22262 = inst_22255.cljs$core$ISeq$;
var inst_22263 = (inst_22261) || (inst_22262);
var state_22349__$1 = state_22349;
if(cljs.core.truth_(inst_22263)){
var statearr_22384_22439 = state_22349__$1;
(statearr_22384_22439[(1)] = (5));

} else {
var statearr_22385_22440 = state_22349__$1;
(statearr_22385_22440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (23))){
var inst_22308 = (state_22349[(14)]);
var inst_22314 = (inst_22308 == null);
var state_22349__$1 = state_22349;
if(cljs.core.truth_(inst_22314)){
var statearr_22386_22441 = state_22349__$1;
(statearr_22386_22441[(1)] = (26));

} else {
var statearr_22387_22442 = state_22349__$1;
(statearr_22387_22442[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (35))){
var inst_22334 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
if(cljs.core.truth_(inst_22334)){
var statearr_22388_22443 = state_22349__$1;
(statearr_22388_22443[(1)] = (36));

} else {
var statearr_22389_22444 = state_22349__$1;
(statearr_22389_22444[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (19))){
var inst_22279 = (state_22349[(7)]);
var inst_22298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22279);
var state_22349__$1 = state_22349;
var statearr_22390_22445 = state_22349__$1;
(statearr_22390_22445[(2)] = inst_22298);

(statearr_22390_22445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (11))){
var inst_22279 = (state_22349[(7)]);
var inst_22283 = (inst_22279 == null);
var inst_22284 = cljs.core.not.call(null,inst_22283);
var state_22349__$1 = state_22349;
if(inst_22284){
var statearr_22391_22446 = state_22349__$1;
(statearr_22391_22446[(1)] = (13));

} else {
var statearr_22392_22447 = state_22349__$1;
(statearr_22392_22447[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (9))){
var inst_22255 = (state_22349[(8)]);
var state_22349__$1 = state_22349;
var statearr_22393_22448 = state_22349__$1;
(statearr_22393_22448[(2)] = inst_22255);

(statearr_22393_22448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (5))){
var state_22349__$1 = state_22349;
var statearr_22394_22449 = state_22349__$1;
(statearr_22394_22449[(2)] = true);

(statearr_22394_22449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (14))){
var state_22349__$1 = state_22349;
var statearr_22395_22450 = state_22349__$1;
(statearr_22395_22450[(2)] = false);

(statearr_22395_22450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (26))){
var inst_22309 = (state_22349[(10)]);
var inst_22316 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22309);
var state_22349__$1 = state_22349;
var statearr_22396_22451 = state_22349__$1;
(statearr_22396_22451[(2)] = inst_22316);

(statearr_22396_22451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (16))){
var state_22349__$1 = state_22349;
var statearr_22397_22452 = state_22349__$1;
(statearr_22397_22452[(2)] = true);

(statearr_22397_22452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (38))){
var inst_22339 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
var statearr_22398_22453 = state_22349__$1;
(statearr_22398_22453[(2)] = inst_22339);

(statearr_22398_22453[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (30))){
var inst_22302 = (state_22349[(9)]);
var inst_22303 = (state_22349[(13)]);
var inst_22309 = (state_22349[(10)]);
var inst_22326 = cljs.core.empty_QMARK_.call(null,inst_22302);
var inst_22327 = inst_22303.call(null,inst_22309);
var inst_22328 = cljs.core.not.call(null,inst_22327);
var inst_22329 = (inst_22326) && (inst_22328);
var state_22349__$1 = state_22349;
var statearr_22399_22454 = state_22349__$1;
(statearr_22399_22454[(2)] = inst_22329);

(statearr_22399_22454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (10))){
var inst_22255 = (state_22349[(8)]);
var inst_22275 = (state_22349[(2)]);
var inst_22276 = cljs.core.get.call(null,inst_22275,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22277 = cljs.core.get.call(null,inst_22275,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22278 = cljs.core.get.call(null,inst_22275,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22279 = inst_22255;
var state_22349__$1 = (function (){var statearr_22400 = state_22349;
(statearr_22400[(7)] = inst_22279);

(statearr_22400[(16)] = inst_22277);

(statearr_22400[(17)] = inst_22276);

(statearr_22400[(18)] = inst_22278);

return statearr_22400;
})();
var statearr_22401_22455 = state_22349__$1;
(statearr_22401_22455[(2)] = null);

(statearr_22401_22455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (18))){
var inst_22293 = (state_22349[(2)]);
var state_22349__$1 = state_22349;
var statearr_22402_22456 = state_22349__$1;
(statearr_22402_22456[(2)] = inst_22293);

(statearr_22402_22456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (37))){
var state_22349__$1 = state_22349;
var statearr_22403_22457 = state_22349__$1;
(statearr_22403_22457[(2)] = null);

(statearr_22403_22457[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22350 === (8))){
var inst_22255 = (state_22349[(8)]);
var inst_22272 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22255);
var state_22349__$1 = state_22349;
var statearr_22404_22458 = state_22349__$1;
(statearr_22404_22458[(2)] = inst_22272);

(statearr_22404_22458[(1)] = (10));


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
});})(c__20699__auto___22412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20587__auto__,c__20699__auto___22412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20588__auto__ = null;
var cljs$core$async$mix_$_state_machine__20588__auto____0 = (function (){
var statearr_22408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22408[(0)] = cljs$core$async$mix_$_state_machine__20588__auto__);

(statearr_22408[(1)] = (1));

return statearr_22408;
});
var cljs$core$async$mix_$_state_machine__20588__auto____1 = (function (state_22349){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_22349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e22409){if((e22409 instanceof Object)){
var ex__20591__auto__ = e22409;
var statearr_22410_22459 = state_22349;
(statearr_22410_22459[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22460 = state_22349;
state_22349 = G__22460;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20588__auto__ = function(state_22349){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20588__auto____1.call(this,state_22349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20588__auto____0;
cljs$core$async$mix_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20588__auto____1;
return cljs$core$async$mix_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___22412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20701__auto__ = (function (){var statearr_22411 = f__20700__auto__.call(null);
(statearr_22411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___22412);

return statearr_22411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___22412,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22461 = [];
var len__19428__auto___22464 = arguments.length;
var i__19429__auto___22465 = (0);
while(true){
if((i__19429__auto___22465 < len__19428__auto___22464)){
args22461.push((arguments[i__19429__auto___22465]));

var G__22466 = (i__19429__auto___22465 + (1));
i__19429__auto___22465 = G__22466;
continue;
} else {
}
break;
}

var G__22463 = args22461.length;
switch (G__22463) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22461.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
var args22469 = [];
var len__19428__auto___22594 = arguments.length;
var i__19429__auto___22595 = (0);
while(true){
if((i__19429__auto___22595 < len__19428__auto___22594)){
args22469.push((arguments[i__19429__auto___22595]));

var G__22596 = (i__19429__auto___22595 + (1));
i__19429__auto___22595 = G__22596;
continue;
} else {
}
break;
}

var G__22471 = args22469.length;
switch (G__22471) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22469.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18370__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18370__auto__,mults){
return (function (p1__22468_SHARP_){
if(cljs.core.truth_(p1__22468_SHARP_.call(null,topic))){
return p1__22468_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22468_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22472 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22473){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22473 = meta22473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22474,meta22473__$1){
var self__ = this;
var _22474__$1 = this;
return (new cljs.core.async.t_cljs$core$async22472(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22473__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22474){
var self__ = this;
var _22474__$1 = this;
return self__.meta22473;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22472.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22472.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22473","meta22473",-1927419474,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22472";

cljs.core.async.t_cljs$core$async22472.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22472");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22472 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22472(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22473){
return (new cljs.core.async.t_cljs$core$async22472(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22473));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22472(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20699__auto___22598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___22598,mults,ensure_mult,p){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___22598,mults,ensure_mult,p){
return (function (state_22546){
var state_val_22547 = (state_22546[(1)]);
if((state_val_22547 === (7))){
var inst_22542 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22548_22599 = state_22546__$1;
(statearr_22548_22599[(2)] = inst_22542);

(statearr_22548_22599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (20))){
var state_22546__$1 = state_22546;
var statearr_22549_22600 = state_22546__$1;
(statearr_22549_22600[(2)] = null);

(statearr_22549_22600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (1))){
var state_22546__$1 = state_22546;
var statearr_22550_22601 = state_22546__$1;
(statearr_22550_22601[(2)] = null);

(statearr_22550_22601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (24))){
var inst_22525 = (state_22546[(7)]);
var inst_22534 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22525);
var state_22546__$1 = state_22546;
var statearr_22551_22602 = state_22546__$1;
(statearr_22551_22602[(2)] = inst_22534);

(statearr_22551_22602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (4))){
var inst_22477 = (state_22546[(8)]);
var inst_22477__$1 = (state_22546[(2)]);
var inst_22478 = (inst_22477__$1 == null);
var state_22546__$1 = (function (){var statearr_22552 = state_22546;
(statearr_22552[(8)] = inst_22477__$1);

return statearr_22552;
})();
if(cljs.core.truth_(inst_22478)){
var statearr_22553_22603 = state_22546__$1;
(statearr_22553_22603[(1)] = (5));

} else {
var statearr_22554_22604 = state_22546__$1;
(statearr_22554_22604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (15))){
var inst_22519 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22555_22605 = state_22546__$1;
(statearr_22555_22605[(2)] = inst_22519);

(statearr_22555_22605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (21))){
var inst_22539 = (state_22546[(2)]);
var state_22546__$1 = (function (){var statearr_22556 = state_22546;
(statearr_22556[(9)] = inst_22539);

return statearr_22556;
})();
var statearr_22557_22606 = state_22546__$1;
(statearr_22557_22606[(2)] = null);

(statearr_22557_22606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (13))){
var inst_22501 = (state_22546[(10)]);
var inst_22503 = cljs.core.chunked_seq_QMARK_.call(null,inst_22501);
var state_22546__$1 = state_22546;
if(inst_22503){
var statearr_22558_22607 = state_22546__$1;
(statearr_22558_22607[(1)] = (16));

} else {
var statearr_22559_22608 = state_22546__$1;
(statearr_22559_22608[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (22))){
var inst_22531 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22531)){
var statearr_22560_22609 = state_22546__$1;
(statearr_22560_22609[(1)] = (23));

} else {
var statearr_22561_22610 = state_22546__$1;
(statearr_22561_22610[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (6))){
var inst_22477 = (state_22546[(8)]);
var inst_22527 = (state_22546[(11)]);
var inst_22525 = (state_22546[(7)]);
var inst_22525__$1 = topic_fn.call(null,inst_22477);
var inst_22526 = cljs.core.deref.call(null,mults);
var inst_22527__$1 = cljs.core.get.call(null,inst_22526,inst_22525__$1);
var state_22546__$1 = (function (){var statearr_22562 = state_22546;
(statearr_22562[(11)] = inst_22527__$1);

(statearr_22562[(7)] = inst_22525__$1);

return statearr_22562;
})();
if(cljs.core.truth_(inst_22527__$1)){
var statearr_22563_22611 = state_22546__$1;
(statearr_22563_22611[(1)] = (19));

} else {
var statearr_22564_22612 = state_22546__$1;
(statearr_22564_22612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (25))){
var inst_22536 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22565_22613 = state_22546__$1;
(statearr_22565_22613[(2)] = inst_22536);

(statearr_22565_22613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (17))){
var inst_22501 = (state_22546[(10)]);
var inst_22510 = cljs.core.first.call(null,inst_22501);
var inst_22511 = cljs.core.async.muxch_STAR_.call(null,inst_22510);
var inst_22512 = cljs.core.async.close_BANG_.call(null,inst_22511);
var inst_22513 = cljs.core.next.call(null,inst_22501);
var inst_22487 = inst_22513;
var inst_22488 = null;
var inst_22489 = (0);
var inst_22490 = (0);
var state_22546__$1 = (function (){var statearr_22566 = state_22546;
(statearr_22566[(12)] = inst_22512);

(statearr_22566[(13)] = inst_22489);

(statearr_22566[(14)] = inst_22488);

(statearr_22566[(15)] = inst_22490);

(statearr_22566[(16)] = inst_22487);

return statearr_22566;
})();
var statearr_22567_22614 = state_22546__$1;
(statearr_22567_22614[(2)] = null);

(statearr_22567_22614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (3))){
var inst_22544 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22546__$1,inst_22544);
} else {
if((state_val_22547 === (12))){
var inst_22521 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22568_22615 = state_22546__$1;
(statearr_22568_22615[(2)] = inst_22521);

(statearr_22568_22615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (2))){
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22546__$1,(4),ch);
} else {
if((state_val_22547 === (23))){
var state_22546__$1 = state_22546;
var statearr_22569_22616 = state_22546__$1;
(statearr_22569_22616[(2)] = null);

(statearr_22569_22616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (19))){
var inst_22477 = (state_22546[(8)]);
var inst_22527 = (state_22546[(11)]);
var inst_22529 = cljs.core.async.muxch_STAR_.call(null,inst_22527);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22546__$1,(22),inst_22529,inst_22477);
} else {
if((state_val_22547 === (11))){
var inst_22487 = (state_22546[(16)]);
var inst_22501 = (state_22546[(10)]);
var inst_22501__$1 = cljs.core.seq.call(null,inst_22487);
var state_22546__$1 = (function (){var statearr_22570 = state_22546;
(statearr_22570[(10)] = inst_22501__$1);

return statearr_22570;
})();
if(inst_22501__$1){
var statearr_22571_22617 = state_22546__$1;
(statearr_22571_22617[(1)] = (13));

} else {
var statearr_22572_22618 = state_22546__$1;
(statearr_22572_22618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (9))){
var inst_22523 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22573_22619 = state_22546__$1;
(statearr_22573_22619[(2)] = inst_22523);

(statearr_22573_22619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (5))){
var inst_22484 = cljs.core.deref.call(null,mults);
var inst_22485 = cljs.core.vals.call(null,inst_22484);
var inst_22486 = cljs.core.seq.call(null,inst_22485);
var inst_22487 = inst_22486;
var inst_22488 = null;
var inst_22489 = (0);
var inst_22490 = (0);
var state_22546__$1 = (function (){var statearr_22574 = state_22546;
(statearr_22574[(13)] = inst_22489);

(statearr_22574[(14)] = inst_22488);

(statearr_22574[(15)] = inst_22490);

(statearr_22574[(16)] = inst_22487);

return statearr_22574;
})();
var statearr_22575_22620 = state_22546__$1;
(statearr_22575_22620[(2)] = null);

(statearr_22575_22620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (14))){
var state_22546__$1 = state_22546;
var statearr_22579_22621 = state_22546__$1;
(statearr_22579_22621[(2)] = null);

(statearr_22579_22621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (16))){
var inst_22501 = (state_22546[(10)]);
var inst_22505 = cljs.core.chunk_first.call(null,inst_22501);
var inst_22506 = cljs.core.chunk_rest.call(null,inst_22501);
var inst_22507 = cljs.core.count.call(null,inst_22505);
var inst_22487 = inst_22506;
var inst_22488 = inst_22505;
var inst_22489 = inst_22507;
var inst_22490 = (0);
var state_22546__$1 = (function (){var statearr_22580 = state_22546;
(statearr_22580[(13)] = inst_22489);

(statearr_22580[(14)] = inst_22488);

(statearr_22580[(15)] = inst_22490);

(statearr_22580[(16)] = inst_22487);

return statearr_22580;
})();
var statearr_22581_22622 = state_22546__$1;
(statearr_22581_22622[(2)] = null);

(statearr_22581_22622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (10))){
var inst_22489 = (state_22546[(13)]);
var inst_22488 = (state_22546[(14)]);
var inst_22490 = (state_22546[(15)]);
var inst_22487 = (state_22546[(16)]);
var inst_22495 = cljs.core._nth.call(null,inst_22488,inst_22490);
var inst_22496 = cljs.core.async.muxch_STAR_.call(null,inst_22495);
var inst_22497 = cljs.core.async.close_BANG_.call(null,inst_22496);
var inst_22498 = (inst_22490 + (1));
var tmp22576 = inst_22489;
var tmp22577 = inst_22488;
var tmp22578 = inst_22487;
var inst_22487__$1 = tmp22578;
var inst_22488__$1 = tmp22577;
var inst_22489__$1 = tmp22576;
var inst_22490__$1 = inst_22498;
var state_22546__$1 = (function (){var statearr_22582 = state_22546;
(statearr_22582[(13)] = inst_22489__$1);

(statearr_22582[(17)] = inst_22497);

(statearr_22582[(14)] = inst_22488__$1);

(statearr_22582[(15)] = inst_22490__$1);

(statearr_22582[(16)] = inst_22487__$1);

return statearr_22582;
})();
var statearr_22583_22623 = state_22546__$1;
(statearr_22583_22623[(2)] = null);

(statearr_22583_22623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (18))){
var inst_22516 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22584_22624 = state_22546__$1;
(statearr_22584_22624[(2)] = inst_22516);

(statearr_22584_22624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (8))){
var inst_22489 = (state_22546[(13)]);
var inst_22490 = (state_22546[(15)]);
var inst_22492 = (inst_22490 < inst_22489);
var inst_22493 = inst_22492;
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22493)){
var statearr_22585_22625 = state_22546__$1;
(statearr_22585_22625[(1)] = (10));

} else {
var statearr_22586_22626 = state_22546__$1;
(statearr_22586_22626[(1)] = (11));

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
});})(c__20699__auto___22598,mults,ensure_mult,p))
;
return ((function (switch__20587__auto__,c__20699__auto___22598,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_22590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22590[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_22590[(1)] = (1));

return statearr_22590;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_22546){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_22546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e22591){if((e22591 instanceof Object)){
var ex__20591__auto__ = e22591;
var statearr_22592_22627 = state_22546;
(statearr_22592_22627[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22628 = state_22546;
state_22546 = G__22628;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_22546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_22546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___22598,mults,ensure_mult,p))
})();
var state__20701__auto__ = (function (){var statearr_22593 = f__20700__auto__.call(null);
(statearr_22593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___22598);

return statearr_22593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___22598,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22629 = [];
var len__19428__auto___22632 = arguments.length;
var i__19429__auto___22633 = (0);
while(true){
if((i__19429__auto___22633 < len__19428__auto___22632)){
args22629.push((arguments[i__19429__auto___22633]));

var G__22634 = (i__19429__auto___22633 + (1));
i__19429__auto___22633 = G__22634;
continue;
} else {
}
break;
}

var G__22631 = args22629.length;
switch (G__22631) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22629.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22636 = [];
var len__19428__auto___22639 = arguments.length;
var i__19429__auto___22640 = (0);
while(true){
if((i__19429__auto___22640 < len__19428__auto___22639)){
args22636.push((arguments[i__19429__auto___22640]));

var G__22641 = (i__19429__auto___22640 + (1));
i__19429__auto___22640 = G__22641;
continue;
} else {
}
break;
}

var G__22638 = args22636.length;
switch (G__22638) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22636.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
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
var args22643 = [];
var len__19428__auto___22714 = arguments.length;
var i__19429__auto___22715 = (0);
while(true){
if((i__19429__auto___22715 < len__19428__auto___22714)){
args22643.push((arguments[i__19429__auto___22715]));

var G__22716 = (i__19429__auto___22715 + (1));
i__19429__auto___22715 = G__22716;
continue;
} else {
}
break;
}

var G__22645 = args22643.length;
switch (G__22645) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22643.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20699__auto___22718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___22718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___22718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22684){
var state_val_22685 = (state_22684[(1)]);
if((state_val_22685 === (7))){
var state_22684__$1 = state_22684;
var statearr_22686_22719 = state_22684__$1;
(statearr_22686_22719[(2)] = null);

(statearr_22686_22719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (1))){
var state_22684__$1 = state_22684;
var statearr_22687_22720 = state_22684__$1;
(statearr_22687_22720[(2)] = null);

(statearr_22687_22720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (4))){
var inst_22648 = (state_22684[(7)]);
var inst_22650 = (inst_22648 < cnt);
var state_22684__$1 = state_22684;
if(cljs.core.truth_(inst_22650)){
var statearr_22688_22721 = state_22684__$1;
(statearr_22688_22721[(1)] = (6));

} else {
var statearr_22689_22722 = state_22684__$1;
(statearr_22689_22722[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (15))){
var inst_22680 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22690_22723 = state_22684__$1;
(statearr_22690_22723[(2)] = inst_22680);

(statearr_22690_22723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (13))){
var inst_22673 = cljs.core.async.close_BANG_.call(null,out);
var state_22684__$1 = state_22684;
var statearr_22691_22724 = state_22684__$1;
(statearr_22691_22724[(2)] = inst_22673);

(statearr_22691_22724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (6))){
var state_22684__$1 = state_22684;
var statearr_22692_22725 = state_22684__$1;
(statearr_22692_22725[(2)] = null);

(statearr_22692_22725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (3))){
var inst_22682 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22684__$1,inst_22682);
} else {
if((state_val_22685 === (12))){
var inst_22670 = (state_22684[(8)]);
var inst_22670__$1 = (state_22684[(2)]);
var inst_22671 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22670__$1);
var state_22684__$1 = (function (){var statearr_22693 = state_22684;
(statearr_22693[(8)] = inst_22670__$1);

return statearr_22693;
})();
if(cljs.core.truth_(inst_22671)){
var statearr_22694_22726 = state_22684__$1;
(statearr_22694_22726[(1)] = (13));

} else {
var statearr_22695_22727 = state_22684__$1;
(statearr_22695_22727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (2))){
var inst_22647 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22648 = (0);
var state_22684__$1 = (function (){var statearr_22696 = state_22684;
(statearr_22696[(9)] = inst_22647);

(statearr_22696[(7)] = inst_22648);

return statearr_22696;
})();
var statearr_22697_22728 = state_22684__$1;
(statearr_22697_22728[(2)] = null);

(statearr_22697_22728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (11))){
var inst_22648 = (state_22684[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22684,(10),Object,null,(9));
var inst_22657 = chs__$1.call(null,inst_22648);
var inst_22658 = done.call(null,inst_22648);
var inst_22659 = cljs.core.async.take_BANG_.call(null,inst_22657,inst_22658);
var state_22684__$1 = state_22684;
var statearr_22698_22729 = state_22684__$1;
(statearr_22698_22729[(2)] = inst_22659);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (9))){
var inst_22648 = (state_22684[(7)]);
var inst_22661 = (state_22684[(2)]);
var inst_22662 = (inst_22648 + (1));
var inst_22648__$1 = inst_22662;
var state_22684__$1 = (function (){var statearr_22699 = state_22684;
(statearr_22699[(10)] = inst_22661);

(statearr_22699[(7)] = inst_22648__$1);

return statearr_22699;
})();
var statearr_22700_22730 = state_22684__$1;
(statearr_22700_22730[(2)] = null);

(statearr_22700_22730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (5))){
var inst_22668 = (state_22684[(2)]);
var state_22684__$1 = (function (){var statearr_22701 = state_22684;
(statearr_22701[(11)] = inst_22668);

return statearr_22701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22684__$1,(12),dchan);
} else {
if((state_val_22685 === (14))){
var inst_22670 = (state_22684[(8)]);
var inst_22675 = cljs.core.apply.call(null,f,inst_22670);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22684__$1,(16),out,inst_22675);
} else {
if((state_val_22685 === (16))){
var inst_22677 = (state_22684[(2)]);
var state_22684__$1 = (function (){var statearr_22702 = state_22684;
(statearr_22702[(12)] = inst_22677);

return statearr_22702;
})();
var statearr_22703_22731 = state_22684__$1;
(statearr_22703_22731[(2)] = null);

(statearr_22703_22731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (10))){
var inst_22652 = (state_22684[(2)]);
var inst_22653 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22684__$1 = (function (){var statearr_22704 = state_22684;
(statearr_22704[(13)] = inst_22652);

return statearr_22704;
})();
var statearr_22705_22732 = state_22684__$1;
(statearr_22705_22732[(2)] = inst_22653);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22685 === (8))){
var inst_22666 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22706_22733 = state_22684__$1;
(statearr_22706_22733[(2)] = inst_22666);

(statearr_22706_22733[(1)] = (5));


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
});})(c__20699__auto___22718,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20587__auto__,c__20699__auto___22718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_22710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22710[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_22710[(1)] = (1));

return statearr_22710;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_22684){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_22684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e22711){if((e22711 instanceof Object)){
var ex__20591__auto__ = e22711;
var statearr_22712_22734 = state_22684;
(statearr_22712_22734[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22735 = state_22684;
state_22684 = G__22735;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___22718,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20701__auto__ = (function (){var statearr_22713 = f__20700__auto__.call(null);
(statearr_22713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___22718);

return statearr_22713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___22718,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22737 = [];
var len__19428__auto___22793 = arguments.length;
var i__19429__auto___22794 = (0);
while(true){
if((i__19429__auto___22794 < len__19428__auto___22793)){
args22737.push((arguments[i__19429__auto___22794]));

var G__22795 = (i__19429__auto___22794 + (1));
i__19429__auto___22794 = G__22795;
continue;
} else {
}
break;
}

var G__22739 = args22737.length;
switch (G__22739) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22737.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20699__auto___22797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___22797,out){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___22797,out){
return (function (state_22769){
var state_val_22770 = (state_22769[(1)]);
if((state_val_22770 === (7))){
var inst_22749 = (state_22769[(7)]);
var inst_22748 = (state_22769[(8)]);
var inst_22748__$1 = (state_22769[(2)]);
var inst_22749__$1 = cljs.core.nth.call(null,inst_22748__$1,(0),null);
var inst_22750 = cljs.core.nth.call(null,inst_22748__$1,(1),null);
var inst_22751 = (inst_22749__$1 == null);
var state_22769__$1 = (function (){var statearr_22771 = state_22769;
(statearr_22771[(9)] = inst_22750);

(statearr_22771[(7)] = inst_22749__$1);

(statearr_22771[(8)] = inst_22748__$1);

return statearr_22771;
})();
if(cljs.core.truth_(inst_22751)){
var statearr_22772_22798 = state_22769__$1;
(statearr_22772_22798[(1)] = (8));

} else {
var statearr_22773_22799 = state_22769__$1;
(statearr_22773_22799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22770 === (1))){
var inst_22740 = cljs.core.vec.call(null,chs);
var inst_22741 = inst_22740;
var state_22769__$1 = (function (){var statearr_22774 = state_22769;
(statearr_22774[(10)] = inst_22741);

return statearr_22774;
})();
var statearr_22775_22800 = state_22769__$1;
(statearr_22775_22800[(2)] = null);

(statearr_22775_22800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22770 === (4))){
var inst_22741 = (state_22769[(10)]);
var state_22769__$1 = state_22769;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22769__$1,(7),inst_22741);
} else {
if((state_val_22770 === (6))){
var inst_22765 = (state_22769[(2)]);
var state_22769__$1 = state_22769;
var statearr_22776_22801 = state_22769__$1;
(statearr_22776_22801[(2)] = inst_22765);

(statearr_22776_22801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22770 === (3))){
var inst_22767 = (state_22769[(2)]);
var state_22769__$1 = state_22769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22769__$1,inst_22767);
} else {
if((state_val_22770 === (2))){
var inst_22741 = (state_22769[(10)]);
var inst_22743 = cljs.core.count.call(null,inst_22741);
var inst_22744 = (inst_22743 > (0));
var state_22769__$1 = state_22769;
if(cljs.core.truth_(inst_22744)){
var statearr_22778_22802 = state_22769__$1;
(statearr_22778_22802[(1)] = (4));

} else {
var statearr_22779_22803 = state_22769__$1;
(statearr_22779_22803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22770 === (11))){
var inst_22741 = (state_22769[(10)]);
var inst_22758 = (state_22769[(2)]);
var tmp22777 = inst_22741;
var inst_22741__$1 = tmp22777;
var state_22769__$1 = (function (){var statearr_22780 = state_22769;
(statearr_22780[(11)] = inst_22758);

(statearr_22780[(10)] = inst_22741__$1);

return statearr_22780;
})();
var statearr_22781_22804 = state_22769__$1;
(statearr_22781_22804[(2)] = null);

(statearr_22781_22804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22770 === (9))){
var inst_22749 = (state_22769[(7)]);
var state_22769__$1 = state_22769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22769__$1,(11),out,inst_22749);
} else {
if((state_val_22770 === (5))){
var inst_22763 = cljs.core.async.close_BANG_.call(null,out);
var state_22769__$1 = state_22769;
var statearr_22782_22805 = state_22769__$1;
(statearr_22782_22805[(2)] = inst_22763);

(statearr_22782_22805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22770 === (10))){
var inst_22761 = (state_22769[(2)]);
var state_22769__$1 = state_22769;
var statearr_22783_22806 = state_22769__$1;
(statearr_22783_22806[(2)] = inst_22761);

(statearr_22783_22806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22770 === (8))){
var inst_22741 = (state_22769[(10)]);
var inst_22750 = (state_22769[(9)]);
var inst_22749 = (state_22769[(7)]);
var inst_22748 = (state_22769[(8)]);
var inst_22753 = (function (){var cs = inst_22741;
var vec__22746 = inst_22748;
var v = inst_22749;
var c = inst_22750;
return ((function (cs,vec__22746,v,c,inst_22741,inst_22750,inst_22749,inst_22748,state_val_22770,c__20699__auto___22797,out){
return (function (p1__22736_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22736_SHARP_);
});
;})(cs,vec__22746,v,c,inst_22741,inst_22750,inst_22749,inst_22748,state_val_22770,c__20699__auto___22797,out))
})();
var inst_22754 = cljs.core.filterv.call(null,inst_22753,inst_22741);
var inst_22741__$1 = inst_22754;
var state_22769__$1 = (function (){var statearr_22784 = state_22769;
(statearr_22784[(10)] = inst_22741__$1);

return statearr_22784;
})();
var statearr_22785_22807 = state_22769__$1;
(statearr_22785_22807[(2)] = null);

(statearr_22785_22807[(1)] = (2));


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
});})(c__20699__auto___22797,out))
;
return ((function (switch__20587__auto__,c__20699__auto___22797,out){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_22789 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22789[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_22789[(1)] = (1));

return statearr_22789;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_22769){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_22769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e22790){if((e22790 instanceof Object)){
var ex__20591__auto__ = e22790;
var statearr_22791_22808 = state_22769;
(statearr_22791_22808[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22809 = state_22769;
state_22769 = G__22809;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_22769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_22769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___22797,out))
})();
var state__20701__auto__ = (function (){var statearr_22792 = f__20700__auto__.call(null);
(statearr_22792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___22797);

return statearr_22792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___22797,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22810 = [];
var len__19428__auto___22859 = arguments.length;
var i__19429__auto___22860 = (0);
while(true){
if((i__19429__auto___22860 < len__19428__auto___22859)){
args22810.push((arguments[i__19429__auto___22860]));

var G__22861 = (i__19429__auto___22860 + (1));
i__19429__auto___22860 = G__22861;
continue;
} else {
}
break;
}

var G__22812 = args22810.length;
switch (G__22812) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22810.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20699__auto___22863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___22863,out){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___22863,out){
return (function (state_22836){
var state_val_22837 = (state_22836[(1)]);
if((state_val_22837 === (7))){
var inst_22818 = (state_22836[(7)]);
var inst_22818__$1 = (state_22836[(2)]);
var inst_22819 = (inst_22818__$1 == null);
var inst_22820 = cljs.core.not.call(null,inst_22819);
var state_22836__$1 = (function (){var statearr_22838 = state_22836;
(statearr_22838[(7)] = inst_22818__$1);

return statearr_22838;
})();
if(inst_22820){
var statearr_22839_22864 = state_22836__$1;
(statearr_22839_22864[(1)] = (8));

} else {
var statearr_22840_22865 = state_22836__$1;
(statearr_22840_22865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (1))){
var inst_22813 = (0);
var state_22836__$1 = (function (){var statearr_22841 = state_22836;
(statearr_22841[(8)] = inst_22813);

return statearr_22841;
})();
var statearr_22842_22866 = state_22836__$1;
(statearr_22842_22866[(2)] = null);

(statearr_22842_22866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (4))){
var state_22836__$1 = state_22836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22836__$1,(7),ch);
} else {
if((state_val_22837 === (6))){
var inst_22831 = (state_22836[(2)]);
var state_22836__$1 = state_22836;
var statearr_22843_22867 = state_22836__$1;
(statearr_22843_22867[(2)] = inst_22831);

(statearr_22843_22867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (3))){
var inst_22833 = (state_22836[(2)]);
var inst_22834 = cljs.core.async.close_BANG_.call(null,out);
var state_22836__$1 = (function (){var statearr_22844 = state_22836;
(statearr_22844[(9)] = inst_22833);

return statearr_22844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22836__$1,inst_22834);
} else {
if((state_val_22837 === (2))){
var inst_22813 = (state_22836[(8)]);
var inst_22815 = (inst_22813 < n);
var state_22836__$1 = state_22836;
if(cljs.core.truth_(inst_22815)){
var statearr_22845_22868 = state_22836__$1;
(statearr_22845_22868[(1)] = (4));

} else {
var statearr_22846_22869 = state_22836__$1;
(statearr_22846_22869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (11))){
var inst_22813 = (state_22836[(8)]);
var inst_22823 = (state_22836[(2)]);
var inst_22824 = (inst_22813 + (1));
var inst_22813__$1 = inst_22824;
var state_22836__$1 = (function (){var statearr_22847 = state_22836;
(statearr_22847[(8)] = inst_22813__$1);

(statearr_22847[(10)] = inst_22823);

return statearr_22847;
})();
var statearr_22848_22870 = state_22836__$1;
(statearr_22848_22870[(2)] = null);

(statearr_22848_22870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (9))){
var state_22836__$1 = state_22836;
var statearr_22849_22871 = state_22836__$1;
(statearr_22849_22871[(2)] = null);

(statearr_22849_22871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (5))){
var state_22836__$1 = state_22836;
var statearr_22850_22872 = state_22836__$1;
(statearr_22850_22872[(2)] = null);

(statearr_22850_22872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (10))){
var inst_22828 = (state_22836[(2)]);
var state_22836__$1 = state_22836;
var statearr_22851_22873 = state_22836__$1;
(statearr_22851_22873[(2)] = inst_22828);

(statearr_22851_22873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (8))){
var inst_22818 = (state_22836[(7)]);
var state_22836__$1 = state_22836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22836__$1,(11),out,inst_22818);
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
});})(c__20699__auto___22863,out))
;
return ((function (switch__20587__auto__,c__20699__auto___22863,out){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_22855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22855[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_22855[(1)] = (1));

return statearr_22855;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_22836){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_22836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e22856){if((e22856 instanceof Object)){
var ex__20591__auto__ = e22856;
var statearr_22857_22874 = state_22836;
(statearr_22857_22874[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22875 = state_22836;
state_22836 = G__22875;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_22836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_22836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___22863,out))
})();
var state__20701__auto__ = (function (){var statearr_22858 = f__20700__auto__.call(null);
(statearr_22858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___22863);

return statearr_22858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___22863,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22883 = (function (map_LT_,f,ch,meta22884){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22884 = meta22884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22885,meta22884__$1){
var self__ = this;
var _22885__$1 = this;
return (new cljs.core.async.t_cljs$core$async22883(self__.map_LT_,self__.f,self__.ch,meta22884__$1));
});

cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22885){
var self__ = this;
var _22885__$1 = this;
return self__.meta22884;
});

cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22886 = (function (map_LT_,f,ch,meta22884,_,fn1,meta22887){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22884 = meta22884;
this._ = _;
this.fn1 = fn1;
this.meta22887 = meta22887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22888,meta22887__$1){
var self__ = this;
var _22888__$1 = this;
return (new cljs.core.async.t_cljs$core$async22886(self__.map_LT_,self__.f,self__.ch,self__.meta22884,self__._,self__.fn1,meta22887__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22888){
var self__ = this;
var _22888__$1 = this;
return self__.meta22887;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22876_SHARP_){
return f1.call(null,(((p1__22876_SHARP_ == null))?null:self__.f.call(null,p1__22876_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22886.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22884","meta22884",-974141588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22883","cljs.core.async/t_cljs$core$async22883",964253097,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22887","meta22887",1595146720,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22886";

cljs.core.async.t_cljs$core$async22886.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22886");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22886 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22886(map_LT___$1,f__$1,ch__$1,meta22884__$1,___$2,fn1__$1,meta22887){
return (new cljs.core.async.t_cljs$core$async22886(map_LT___$1,f__$1,ch__$1,meta22884__$1,___$2,fn1__$1,meta22887));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22886(self__.map_LT_,self__.f,self__.ch,self__.meta22884,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18358__auto__ = ret;
if(cljs.core.truth_(and__18358__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18358__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22884","meta22884",-974141588,null)], null);
});

cljs.core.async.t_cljs$core$async22883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22883";

cljs.core.async.t_cljs$core$async22883.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22883");
});

cljs.core.async.__GT_t_cljs$core$async22883 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22883(map_LT___$1,f__$1,ch__$1,meta22884){
return (new cljs.core.async.t_cljs$core$async22883(map_LT___$1,f__$1,ch__$1,meta22884));
});

}

return (new cljs.core.async.t_cljs$core$async22883(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22892 = (function (map_GT_,f,ch,meta22893){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22893 = meta22893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22894,meta22893__$1){
var self__ = this;
var _22894__$1 = this;
return (new cljs.core.async.t_cljs$core$async22892(self__.map_GT_,self__.f,self__.ch,meta22893__$1));
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22894){
var self__ = this;
var _22894__$1 = this;
return self__.meta22893;
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22893","meta22893",-257260551,null)], null);
});

cljs.core.async.t_cljs$core$async22892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22892";

cljs.core.async.t_cljs$core$async22892.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22892");
});

cljs.core.async.__GT_t_cljs$core$async22892 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22892(map_GT___$1,f__$1,ch__$1,meta22893){
return (new cljs.core.async.t_cljs$core$async22892(map_GT___$1,f__$1,ch__$1,meta22893));
});

}

return (new cljs.core.async.t_cljs$core$async22892(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22898 = (function (filter_GT_,p,ch,meta22899){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22899 = meta22899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22900,meta22899__$1){
var self__ = this;
var _22900__$1 = this;
return (new cljs.core.async.t_cljs$core$async22898(self__.filter_GT_,self__.p,self__.ch,meta22899__$1));
});

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22900){
var self__ = this;
var _22900__$1 = this;
return self__.meta22899;
});

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22899","meta22899",-1528483528,null)], null);
});

cljs.core.async.t_cljs$core$async22898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22898";

cljs.core.async.t_cljs$core$async22898.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22898");
});

cljs.core.async.__GT_t_cljs$core$async22898 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22898(filter_GT___$1,p__$1,ch__$1,meta22899){
return (new cljs.core.async.t_cljs$core$async22898(filter_GT___$1,p__$1,ch__$1,meta22899));
});

}

return (new cljs.core.async.t_cljs$core$async22898(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22901 = [];
var len__19428__auto___22945 = arguments.length;
var i__19429__auto___22946 = (0);
while(true){
if((i__19429__auto___22946 < len__19428__auto___22945)){
args22901.push((arguments[i__19429__auto___22946]));

var G__22947 = (i__19429__auto___22946 + (1));
i__19429__auto___22946 = G__22947;
continue;
} else {
}
break;
}

var G__22903 = args22901.length;
switch (G__22903) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22901.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20699__auto___22949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___22949,out){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___22949,out){
return (function (state_22924){
var state_val_22925 = (state_22924[(1)]);
if((state_val_22925 === (7))){
var inst_22920 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22926_22950 = state_22924__$1;
(statearr_22926_22950[(2)] = inst_22920);

(statearr_22926_22950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (1))){
var state_22924__$1 = state_22924;
var statearr_22927_22951 = state_22924__$1;
(statearr_22927_22951[(2)] = null);

(statearr_22927_22951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (4))){
var inst_22906 = (state_22924[(7)]);
var inst_22906__$1 = (state_22924[(2)]);
var inst_22907 = (inst_22906__$1 == null);
var state_22924__$1 = (function (){var statearr_22928 = state_22924;
(statearr_22928[(7)] = inst_22906__$1);

return statearr_22928;
})();
if(cljs.core.truth_(inst_22907)){
var statearr_22929_22952 = state_22924__$1;
(statearr_22929_22952[(1)] = (5));

} else {
var statearr_22930_22953 = state_22924__$1;
(statearr_22930_22953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (6))){
var inst_22906 = (state_22924[(7)]);
var inst_22911 = p.call(null,inst_22906);
var state_22924__$1 = state_22924;
if(cljs.core.truth_(inst_22911)){
var statearr_22931_22954 = state_22924__$1;
(statearr_22931_22954[(1)] = (8));

} else {
var statearr_22932_22955 = state_22924__$1;
(statearr_22932_22955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (3))){
var inst_22922 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22924__$1,inst_22922);
} else {
if((state_val_22925 === (2))){
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22924__$1,(4),ch);
} else {
if((state_val_22925 === (11))){
var inst_22914 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22933_22956 = state_22924__$1;
(statearr_22933_22956[(2)] = inst_22914);

(statearr_22933_22956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (9))){
var state_22924__$1 = state_22924;
var statearr_22934_22957 = state_22924__$1;
(statearr_22934_22957[(2)] = null);

(statearr_22934_22957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (5))){
var inst_22909 = cljs.core.async.close_BANG_.call(null,out);
var state_22924__$1 = state_22924;
var statearr_22935_22958 = state_22924__$1;
(statearr_22935_22958[(2)] = inst_22909);

(statearr_22935_22958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (10))){
var inst_22917 = (state_22924[(2)]);
var state_22924__$1 = (function (){var statearr_22936 = state_22924;
(statearr_22936[(8)] = inst_22917);

return statearr_22936;
})();
var statearr_22937_22959 = state_22924__$1;
(statearr_22937_22959[(2)] = null);

(statearr_22937_22959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (8))){
var inst_22906 = (state_22924[(7)]);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22924__$1,(11),out,inst_22906);
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
});})(c__20699__auto___22949,out))
;
return ((function (switch__20587__auto__,c__20699__auto___22949,out){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_22941 = [null,null,null,null,null,null,null,null,null];
(statearr_22941[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_22941[(1)] = (1));

return statearr_22941;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_22924){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_22924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e22942){if((e22942 instanceof Object)){
var ex__20591__auto__ = e22942;
var statearr_22943_22960 = state_22924;
(statearr_22943_22960[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22961 = state_22924;
state_22924 = G__22961;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_22924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_22924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___22949,out))
})();
var state__20701__auto__ = (function (){var statearr_22944 = f__20700__auto__.call(null);
(statearr_22944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___22949);

return statearr_22944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___22949,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22962 = [];
var len__19428__auto___22965 = arguments.length;
var i__19429__auto___22966 = (0);
while(true){
if((i__19429__auto___22966 < len__19428__auto___22965)){
args22962.push((arguments[i__19429__auto___22966]));

var G__22967 = (i__19429__auto___22966 + (1));
i__19429__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var G__22964 = args22962.length;
switch (G__22964) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22962.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto__){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto__){
return (function (state_23134){
var state_val_23135 = (state_23134[(1)]);
if((state_val_23135 === (7))){
var inst_23130 = (state_23134[(2)]);
var state_23134__$1 = state_23134;
var statearr_23136_23177 = state_23134__$1;
(statearr_23136_23177[(2)] = inst_23130);

(statearr_23136_23177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (20))){
var inst_23100 = (state_23134[(7)]);
var inst_23111 = (state_23134[(2)]);
var inst_23112 = cljs.core.next.call(null,inst_23100);
var inst_23086 = inst_23112;
var inst_23087 = null;
var inst_23088 = (0);
var inst_23089 = (0);
var state_23134__$1 = (function (){var statearr_23137 = state_23134;
(statearr_23137[(8)] = inst_23087);

(statearr_23137[(9)] = inst_23089);

(statearr_23137[(10)] = inst_23086);

(statearr_23137[(11)] = inst_23111);

(statearr_23137[(12)] = inst_23088);

return statearr_23137;
})();
var statearr_23138_23178 = state_23134__$1;
(statearr_23138_23178[(2)] = null);

(statearr_23138_23178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (1))){
var state_23134__$1 = state_23134;
var statearr_23139_23179 = state_23134__$1;
(statearr_23139_23179[(2)] = null);

(statearr_23139_23179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (4))){
var inst_23075 = (state_23134[(13)]);
var inst_23075__$1 = (state_23134[(2)]);
var inst_23076 = (inst_23075__$1 == null);
var state_23134__$1 = (function (){var statearr_23140 = state_23134;
(statearr_23140[(13)] = inst_23075__$1);

return statearr_23140;
})();
if(cljs.core.truth_(inst_23076)){
var statearr_23141_23180 = state_23134__$1;
(statearr_23141_23180[(1)] = (5));

} else {
var statearr_23142_23181 = state_23134__$1;
(statearr_23142_23181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (15))){
var state_23134__$1 = state_23134;
var statearr_23146_23182 = state_23134__$1;
(statearr_23146_23182[(2)] = null);

(statearr_23146_23182[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (21))){
var state_23134__$1 = state_23134;
var statearr_23147_23183 = state_23134__$1;
(statearr_23147_23183[(2)] = null);

(statearr_23147_23183[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (13))){
var inst_23087 = (state_23134[(8)]);
var inst_23089 = (state_23134[(9)]);
var inst_23086 = (state_23134[(10)]);
var inst_23088 = (state_23134[(12)]);
var inst_23096 = (state_23134[(2)]);
var inst_23097 = (inst_23089 + (1));
var tmp23143 = inst_23087;
var tmp23144 = inst_23086;
var tmp23145 = inst_23088;
var inst_23086__$1 = tmp23144;
var inst_23087__$1 = tmp23143;
var inst_23088__$1 = tmp23145;
var inst_23089__$1 = inst_23097;
var state_23134__$1 = (function (){var statearr_23148 = state_23134;
(statearr_23148[(8)] = inst_23087__$1);

(statearr_23148[(9)] = inst_23089__$1);

(statearr_23148[(10)] = inst_23086__$1);

(statearr_23148[(14)] = inst_23096);

(statearr_23148[(12)] = inst_23088__$1);

return statearr_23148;
})();
var statearr_23149_23184 = state_23134__$1;
(statearr_23149_23184[(2)] = null);

(statearr_23149_23184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (22))){
var state_23134__$1 = state_23134;
var statearr_23150_23185 = state_23134__$1;
(statearr_23150_23185[(2)] = null);

(statearr_23150_23185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (6))){
var inst_23075 = (state_23134[(13)]);
var inst_23084 = f.call(null,inst_23075);
var inst_23085 = cljs.core.seq.call(null,inst_23084);
var inst_23086 = inst_23085;
var inst_23087 = null;
var inst_23088 = (0);
var inst_23089 = (0);
var state_23134__$1 = (function (){var statearr_23151 = state_23134;
(statearr_23151[(8)] = inst_23087);

(statearr_23151[(9)] = inst_23089);

(statearr_23151[(10)] = inst_23086);

(statearr_23151[(12)] = inst_23088);

return statearr_23151;
})();
var statearr_23152_23186 = state_23134__$1;
(statearr_23152_23186[(2)] = null);

(statearr_23152_23186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (17))){
var inst_23100 = (state_23134[(7)]);
var inst_23104 = cljs.core.chunk_first.call(null,inst_23100);
var inst_23105 = cljs.core.chunk_rest.call(null,inst_23100);
var inst_23106 = cljs.core.count.call(null,inst_23104);
var inst_23086 = inst_23105;
var inst_23087 = inst_23104;
var inst_23088 = inst_23106;
var inst_23089 = (0);
var state_23134__$1 = (function (){var statearr_23153 = state_23134;
(statearr_23153[(8)] = inst_23087);

(statearr_23153[(9)] = inst_23089);

(statearr_23153[(10)] = inst_23086);

(statearr_23153[(12)] = inst_23088);

return statearr_23153;
})();
var statearr_23154_23187 = state_23134__$1;
(statearr_23154_23187[(2)] = null);

(statearr_23154_23187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (3))){
var inst_23132 = (state_23134[(2)]);
var state_23134__$1 = state_23134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23134__$1,inst_23132);
} else {
if((state_val_23135 === (12))){
var inst_23120 = (state_23134[(2)]);
var state_23134__$1 = state_23134;
var statearr_23155_23188 = state_23134__$1;
(statearr_23155_23188[(2)] = inst_23120);

(statearr_23155_23188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (2))){
var state_23134__$1 = state_23134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23134__$1,(4),in$);
} else {
if((state_val_23135 === (23))){
var inst_23128 = (state_23134[(2)]);
var state_23134__$1 = state_23134;
var statearr_23156_23189 = state_23134__$1;
(statearr_23156_23189[(2)] = inst_23128);

(statearr_23156_23189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (19))){
var inst_23115 = (state_23134[(2)]);
var state_23134__$1 = state_23134;
var statearr_23157_23190 = state_23134__$1;
(statearr_23157_23190[(2)] = inst_23115);

(statearr_23157_23190[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (11))){
var inst_23086 = (state_23134[(10)]);
var inst_23100 = (state_23134[(7)]);
var inst_23100__$1 = cljs.core.seq.call(null,inst_23086);
var state_23134__$1 = (function (){var statearr_23158 = state_23134;
(statearr_23158[(7)] = inst_23100__$1);

return statearr_23158;
})();
if(inst_23100__$1){
var statearr_23159_23191 = state_23134__$1;
(statearr_23159_23191[(1)] = (14));

} else {
var statearr_23160_23192 = state_23134__$1;
(statearr_23160_23192[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (9))){
var inst_23122 = (state_23134[(2)]);
var inst_23123 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23134__$1 = (function (){var statearr_23161 = state_23134;
(statearr_23161[(15)] = inst_23122);

return statearr_23161;
})();
if(cljs.core.truth_(inst_23123)){
var statearr_23162_23193 = state_23134__$1;
(statearr_23162_23193[(1)] = (21));

} else {
var statearr_23163_23194 = state_23134__$1;
(statearr_23163_23194[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (5))){
var inst_23078 = cljs.core.async.close_BANG_.call(null,out);
var state_23134__$1 = state_23134;
var statearr_23164_23195 = state_23134__$1;
(statearr_23164_23195[(2)] = inst_23078);

(statearr_23164_23195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (14))){
var inst_23100 = (state_23134[(7)]);
var inst_23102 = cljs.core.chunked_seq_QMARK_.call(null,inst_23100);
var state_23134__$1 = state_23134;
if(inst_23102){
var statearr_23165_23196 = state_23134__$1;
(statearr_23165_23196[(1)] = (17));

} else {
var statearr_23166_23197 = state_23134__$1;
(statearr_23166_23197[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (16))){
var inst_23118 = (state_23134[(2)]);
var state_23134__$1 = state_23134;
var statearr_23167_23198 = state_23134__$1;
(statearr_23167_23198[(2)] = inst_23118);

(statearr_23167_23198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23135 === (10))){
var inst_23087 = (state_23134[(8)]);
var inst_23089 = (state_23134[(9)]);
var inst_23094 = cljs.core._nth.call(null,inst_23087,inst_23089);
var state_23134__$1 = state_23134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23134__$1,(13),out,inst_23094);
} else {
if((state_val_23135 === (18))){
var inst_23100 = (state_23134[(7)]);
var inst_23109 = cljs.core.first.call(null,inst_23100);
var state_23134__$1 = state_23134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23134__$1,(20),out,inst_23109);
} else {
if((state_val_23135 === (8))){
var inst_23089 = (state_23134[(9)]);
var inst_23088 = (state_23134[(12)]);
var inst_23091 = (inst_23089 < inst_23088);
var inst_23092 = inst_23091;
var state_23134__$1 = state_23134;
if(cljs.core.truth_(inst_23092)){
var statearr_23168_23199 = state_23134__$1;
(statearr_23168_23199[(1)] = (10));

} else {
var statearr_23169_23200 = state_23134__$1;
(statearr_23169_23200[(1)] = (11));

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
});})(c__20699__auto__))
;
return ((function (switch__20587__auto__,c__20699__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20588__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20588__auto____0 = (function (){
var statearr_23173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23173[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20588__auto__);

(statearr_23173[(1)] = (1));

return statearr_23173;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20588__auto____1 = (function (state_23134){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_23134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e23174){if((e23174 instanceof Object)){
var ex__20591__auto__ = e23174;
var statearr_23175_23201 = state_23134;
(statearr_23175_23201[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23202 = state_23134;
state_23134 = G__23202;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20588__auto__ = function(state_23134){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20588__auto____1.call(this,state_23134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20588__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20588__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto__))
})();
var state__20701__auto__ = (function (){var statearr_23176 = f__20700__auto__.call(null);
(statearr_23176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto__);

return statearr_23176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto__))
);

return c__20699__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23203 = [];
var len__19428__auto___23206 = arguments.length;
var i__19429__auto___23207 = (0);
while(true){
if((i__19429__auto___23207 < len__19428__auto___23206)){
args23203.push((arguments[i__19429__auto___23207]));

var G__23208 = (i__19429__auto___23207 + (1));
i__19429__auto___23207 = G__23208;
continue;
} else {
}
break;
}

var G__23205 = args23203.length;
switch (G__23205) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23203.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23210 = [];
var len__19428__auto___23213 = arguments.length;
var i__19429__auto___23214 = (0);
while(true){
if((i__19429__auto___23214 < len__19428__auto___23213)){
args23210.push((arguments[i__19429__auto___23214]));

var G__23215 = (i__19429__auto___23214 + (1));
i__19429__auto___23214 = G__23215;
continue;
} else {
}
break;
}

var G__23212 = args23210.length;
switch (G__23212) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23210.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23217 = [];
var len__19428__auto___23268 = arguments.length;
var i__19429__auto___23269 = (0);
while(true){
if((i__19429__auto___23269 < len__19428__auto___23268)){
args23217.push((arguments[i__19429__auto___23269]));

var G__23270 = (i__19429__auto___23269 + (1));
i__19429__auto___23269 = G__23270;
continue;
} else {
}
break;
}

var G__23219 = args23217.length;
switch (G__23219) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23217.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20699__auto___23272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___23272,out){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___23272,out){
return (function (state_23243){
var state_val_23244 = (state_23243[(1)]);
if((state_val_23244 === (7))){
var inst_23238 = (state_23243[(2)]);
var state_23243__$1 = state_23243;
var statearr_23245_23273 = state_23243__$1;
(statearr_23245_23273[(2)] = inst_23238);

(statearr_23245_23273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (1))){
var inst_23220 = null;
var state_23243__$1 = (function (){var statearr_23246 = state_23243;
(statearr_23246[(7)] = inst_23220);

return statearr_23246;
})();
var statearr_23247_23274 = state_23243__$1;
(statearr_23247_23274[(2)] = null);

(statearr_23247_23274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (4))){
var inst_23223 = (state_23243[(8)]);
var inst_23223__$1 = (state_23243[(2)]);
var inst_23224 = (inst_23223__$1 == null);
var inst_23225 = cljs.core.not.call(null,inst_23224);
var state_23243__$1 = (function (){var statearr_23248 = state_23243;
(statearr_23248[(8)] = inst_23223__$1);

return statearr_23248;
})();
if(inst_23225){
var statearr_23249_23275 = state_23243__$1;
(statearr_23249_23275[(1)] = (5));

} else {
var statearr_23250_23276 = state_23243__$1;
(statearr_23250_23276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (6))){
var state_23243__$1 = state_23243;
var statearr_23251_23277 = state_23243__$1;
(statearr_23251_23277[(2)] = null);

(statearr_23251_23277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (3))){
var inst_23240 = (state_23243[(2)]);
var inst_23241 = cljs.core.async.close_BANG_.call(null,out);
var state_23243__$1 = (function (){var statearr_23252 = state_23243;
(statearr_23252[(9)] = inst_23240);

return statearr_23252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23243__$1,inst_23241);
} else {
if((state_val_23244 === (2))){
var state_23243__$1 = state_23243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23243__$1,(4),ch);
} else {
if((state_val_23244 === (11))){
var inst_23223 = (state_23243[(8)]);
var inst_23232 = (state_23243[(2)]);
var inst_23220 = inst_23223;
var state_23243__$1 = (function (){var statearr_23253 = state_23243;
(statearr_23253[(10)] = inst_23232);

(statearr_23253[(7)] = inst_23220);

return statearr_23253;
})();
var statearr_23254_23278 = state_23243__$1;
(statearr_23254_23278[(2)] = null);

(statearr_23254_23278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (9))){
var inst_23223 = (state_23243[(8)]);
var state_23243__$1 = state_23243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23243__$1,(11),out,inst_23223);
} else {
if((state_val_23244 === (5))){
var inst_23223 = (state_23243[(8)]);
var inst_23220 = (state_23243[(7)]);
var inst_23227 = cljs.core._EQ_.call(null,inst_23223,inst_23220);
var state_23243__$1 = state_23243;
if(inst_23227){
var statearr_23256_23279 = state_23243__$1;
(statearr_23256_23279[(1)] = (8));

} else {
var statearr_23257_23280 = state_23243__$1;
(statearr_23257_23280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (10))){
var inst_23235 = (state_23243[(2)]);
var state_23243__$1 = state_23243;
var statearr_23258_23281 = state_23243__$1;
(statearr_23258_23281[(2)] = inst_23235);

(statearr_23258_23281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23244 === (8))){
var inst_23220 = (state_23243[(7)]);
var tmp23255 = inst_23220;
var inst_23220__$1 = tmp23255;
var state_23243__$1 = (function (){var statearr_23259 = state_23243;
(statearr_23259[(7)] = inst_23220__$1);

return statearr_23259;
})();
var statearr_23260_23282 = state_23243__$1;
(statearr_23260_23282[(2)] = null);

(statearr_23260_23282[(1)] = (2));


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
});})(c__20699__auto___23272,out))
;
return ((function (switch__20587__auto__,c__20699__auto___23272,out){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_23264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23264[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_23264[(1)] = (1));

return statearr_23264;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_23243){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_23243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e23265){if((e23265 instanceof Object)){
var ex__20591__auto__ = e23265;
var statearr_23266_23283 = state_23243;
(statearr_23266_23283[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23284 = state_23243;
state_23243 = G__23284;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_23243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_23243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___23272,out))
})();
var state__20701__auto__ = (function (){var statearr_23267 = f__20700__auto__.call(null);
(statearr_23267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___23272);

return statearr_23267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___23272,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23285 = [];
var len__19428__auto___23355 = arguments.length;
var i__19429__auto___23356 = (0);
while(true){
if((i__19429__auto___23356 < len__19428__auto___23355)){
args23285.push((arguments[i__19429__auto___23356]));

var G__23357 = (i__19429__auto___23356 + (1));
i__19429__auto___23356 = G__23357;
continue;
} else {
}
break;
}

var G__23287 = args23285.length;
switch (G__23287) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23285.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20699__auto___23359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___23359,out){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___23359,out){
return (function (state_23325){
var state_val_23326 = (state_23325[(1)]);
if((state_val_23326 === (7))){
var inst_23321 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
var statearr_23327_23360 = state_23325__$1;
(statearr_23327_23360[(2)] = inst_23321);

(statearr_23327_23360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (1))){
var inst_23288 = (new Array(n));
var inst_23289 = inst_23288;
var inst_23290 = (0);
var state_23325__$1 = (function (){var statearr_23328 = state_23325;
(statearr_23328[(7)] = inst_23289);

(statearr_23328[(8)] = inst_23290);

return statearr_23328;
})();
var statearr_23329_23361 = state_23325__$1;
(statearr_23329_23361[(2)] = null);

(statearr_23329_23361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (4))){
var inst_23293 = (state_23325[(9)]);
var inst_23293__$1 = (state_23325[(2)]);
var inst_23294 = (inst_23293__$1 == null);
var inst_23295 = cljs.core.not.call(null,inst_23294);
var state_23325__$1 = (function (){var statearr_23330 = state_23325;
(statearr_23330[(9)] = inst_23293__$1);

return statearr_23330;
})();
if(inst_23295){
var statearr_23331_23362 = state_23325__$1;
(statearr_23331_23362[(1)] = (5));

} else {
var statearr_23332_23363 = state_23325__$1;
(statearr_23332_23363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (15))){
var inst_23315 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
var statearr_23333_23364 = state_23325__$1;
(statearr_23333_23364[(2)] = inst_23315);

(statearr_23333_23364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (13))){
var state_23325__$1 = state_23325;
var statearr_23334_23365 = state_23325__$1;
(statearr_23334_23365[(2)] = null);

(statearr_23334_23365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (6))){
var inst_23290 = (state_23325[(8)]);
var inst_23311 = (inst_23290 > (0));
var state_23325__$1 = state_23325;
if(cljs.core.truth_(inst_23311)){
var statearr_23335_23366 = state_23325__$1;
(statearr_23335_23366[(1)] = (12));

} else {
var statearr_23336_23367 = state_23325__$1;
(statearr_23336_23367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (3))){
var inst_23323 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23325__$1,inst_23323);
} else {
if((state_val_23326 === (12))){
var inst_23289 = (state_23325[(7)]);
var inst_23313 = cljs.core.vec.call(null,inst_23289);
var state_23325__$1 = state_23325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23325__$1,(15),out,inst_23313);
} else {
if((state_val_23326 === (2))){
var state_23325__$1 = state_23325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23325__$1,(4),ch);
} else {
if((state_val_23326 === (11))){
var inst_23305 = (state_23325[(2)]);
var inst_23306 = (new Array(n));
var inst_23289 = inst_23306;
var inst_23290 = (0);
var state_23325__$1 = (function (){var statearr_23337 = state_23325;
(statearr_23337[(7)] = inst_23289);

(statearr_23337[(10)] = inst_23305);

(statearr_23337[(8)] = inst_23290);

return statearr_23337;
})();
var statearr_23338_23368 = state_23325__$1;
(statearr_23338_23368[(2)] = null);

(statearr_23338_23368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (9))){
var inst_23289 = (state_23325[(7)]);
var inst_23303 = cljs.core.vec.call(null,inst_23289);
var state_23325__$1 = state_23325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23325__$1,(11),out,inst_23303);
} else {
if((state_val_23326 === (5))){
var inst_23298 = (state_23325[(11)]);
var inst_23289 = (state_23325[(7)]);
var inst_23290 = (state_23325[(8)]);
var inst_23293 = (state_23325[(9)]);
var inst_23297 = (inst_23289[inst_23290] = inst_23293);
var inst_23298__$1 = (inst_23290 + (1));
var inst_23299 = (inst_23298__$1 < n);
var state_23325__$1 = (function (){var statearr_23339 = state_23325;
(statearr_23339[(11)] = inst_23298__$1);

(statearr_23339[(12)] = inst_23297);

return statearr_23339;
})();
if(cljs.core.truth_(inst_23299)){
var statearr_23340_23369 = state_23325__$1;
(statearr_23340_23369[(1)] = (8));

} else {
var statearr_23341_23370 = state_23325__$1;
(statearr_23341_23370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (14))){
var inst_23318 = (state_23325[(2)]);
var inst_23319 = cljs.core.async.close_BANG_.call(null,out);
var state_23325__$1 = (function (){var statearr_23343 = state_23325;
(statearr_23343[(13)] = inst_23318);

return statearr_23343;
})();
var statearr_23344_23371 = state_23325__$1;
(statearr_23344_23371[(2)] = inst_23319);

(statearr_23344_23371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (10))){
var inst_23309 = (state_23325[(2)]);
var state_23325__$1 = state_23325;
var statearr_23345_23372 = state_23325__$1;
(statearr_23345_23372[(2)] = inst_23309);

(statearr_23345_23372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23326 === (8))){
var inst_23298 = (state_23325[(11)]);
var inst_23289 = (state_23325[(7)]);
var tmp23342 = inst_23289;
var inst_23289__$1 = tmp23342;
var inst_23290 = inst_23298;
var state_23325__$1 = (function (){var statearr_23346 = state_23325;
(statearr_23346[(7)] = inst_23289__$1);

(statearr_23346[(8)] = inst_23290);

return statearr_23346;
})();
var statearr_23347_23373 = state_23325__$1;
(statearr_23347_23373[(2)] = null);

(statearr_23347_23373[(1)] = (2));


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
});})(c__20699__auto___23359,out))
;
return ((function (switch__20587__auto__,c__20699__auto___23359,out){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_23351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23351[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_23351[(1)] = (1));

return statearr_23351;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_23325){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_23325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e23352){if((e23352 instanceof Object)){
var ex__20591__auto__ = e23352;
var statearr_23353_23374 = state_23325;
(statearr_23353_23374[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23375 = state_23325;
state_23325 = G__23375;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_23325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_23325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___23359,out))
})();
var state__20701__auto__ = (function (){var statearr_23354 = f__20700__auto__.call(null);
(statearr_23354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___23359);

return statearr_23354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___23359,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23376 = [];
var len__19428__auto___23450 = arguments.length;
var i__19429__auto___23451 = (0);
while(true){
if((i__19429__auto___23451 < len__19428__auto___23450)){
args23376.push((arguments[i__19429__auto___23451]));

var G__23452 = (i__19429__auto___23451 + (1));
i__19429__auto___23451 = G__23452;
continue;
} else {
}
break;
}

var G__23378 = args23376.length;
switch (G__23378) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23376.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20699__auto___23454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___23454,out){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___23454,out){
return (function (state_23420){
var state_val_23421 = (state_23420[(1)]);
if((state_val_23421 === (7))){
var inst_23416 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23422_23455 = state_23420__$1;
(statearr_23422_23455[(2)] = inst_23416);

(statearr_23422_23455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (1))){
var inst_23379 = [];
var inst_23380 = inst_23379;
var inst_23381 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23420__$1 = (function (){var statearr_23423 = state_23420;
(statearr_23423[(7)] = inst_23381);

(statearr_23423[(8)] = inst_23380);

return statearr_23423;
})();
var statearr_23424_23456 = state_23420__$1;
(statearr_23424_23456[(2)] = null);

(statearr_23424_23456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (4))){
var inst_23384 = (state_23420[(9)]);
var inst_23384__$1 = (state_23420[(2)]);
var inst_23385 = (inst_23384__$1 == null);
var inst_23386 = cljs.core.not.call(null,inst_23385);
var state_23420__$1 = (function (){var statearr_23425 = state_23420;
(statearr_23425[(9)] = inst_23384__$1);

return statearr_23425;
})();
if(inst_23386){
var statearr_23426_23457 = state_23420__$1;
(statearr_23426_23457[(1)] = (5));

} else {
var statearr_23427_23458 = state_23420__$1;
(statearr_23427_23458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (15))){
var inst_23410 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23428_23459 = state_23420__$1;
(statearr_23428_23459[(2)] = inst_23410);

(statearr_23428_23459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (13))){
var state_23420__$1 = state_23420;
var statearr_23429_23460 = state_23420__$1;
(statearr_23429_23460[(2)] = null);

(statearr_23429_23460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (6))){
var inst_23380 = (state_23420[(8)]);
var inst_23405 = inst_23380.length;
var inst_23406 = (inst_23405 > (0));
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23406)){
var statearr_23430_23461 = state_23420__$1;
(statearr_23430_23461[(1)] = (12));

} else {
var statearr_23431_23462 = state_23420__$1;
(statearr_23431_23462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (3))){
var inst_23418 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23420__$1,inst_23418);
} else {
if((state_val_23421 === (12))){
var inst_23380 = (state_23420[(8)]);
var inst_23408 = cljs.core.vec.call(null,inst_23380);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23420__$1,(15),out,inst_23408);
} else {
if((state_val_23421 === (2))){
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23420__$1,(4),ch);
} else {
if((state_val_23421 === (11))){
var inst_23388 = (state_23420[(10)]);
var inst_23384 = (state_23420[(9)]);
var inst_23398 = (state_23420[(2)]);
var inst_23399 = [];
var inst_23400 = inst_23399.push(inst_23384);
var inst_23380 = inst_23399;
var inst_23381 = inst_23388;
var state_23420__$1 = (function (){var statearr_23432 = state_23420;
(statearr_23432[(11)] = inst_23400);

(statearr_23432[(7)] = inst_23381);

(statearr_23432[(8)] = inst_23380);

(statearr_23432[(12)] = inst_23398);

return statearr_23432;
})();
var statearr_23433_23463 = state_23420__$1;
(statearr_23433_23463[(2)] = null);

(statearr_23433_23463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (9))){
var inst_23380 = (state_23420[(8)]);
var inst_23396 = cljs.core.vec.call(null,inst_23380);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23420__$1,(11),out,inst_23396);
} else {
if((state_val_23421 === (5))){
var inst_23381 = (state_23420[(7)]);
var inst_23388 = (state_23420[(10)]);
var inst_23384 = (state_23420[(9)]);
var inst_23388__$1 = f.call(null,inst_23384);
var inst_23389 = cljs.core._EQ_.call(null,inst_23388__$1,inst_23381);
var inst_23390 = cljs.core.keyword_identical_QMARK_.call(null,inst_23381,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23391 = (inst_23389) || (inst_23390);
var state_23420__$1 = (function (){var statearr_23434 = state_23420;
(statearr_23434[(10)] = inst_23388__$1);

return statearr_23434;
})();
if(cljs.core.truth_(inst_23391)){
var statearr_23435_23464 = state_23420__$1;
(statearr_23435_23464[(1)] = (8));

} else {
var statearr_23436_23465 = state_23420__$1;
(statearr_23436_23465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (14))){
var inst_23413 = (state_23420[(2)]);
var inst_23414 = cljs.core.async.close_BANG_.call(null,out);
var state_23420__$1 = (function (){var statearr_23438 = state_23420;
(statearr_23438[(13)] = inst_23413);

return statearr_23438;
})();
var statearr_23439_23466 = state_23420__$1;
(statearr_23439_23466[(2)] = inst_23414);

(statearr_23439_23466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (10))){
var inst_23403 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23440_23467 = state_23420__$1;
(statearr_23440_23467[(2)] = inst_23403);

(statearr_23440_23467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (8))){
var inst_23388 = (state_23420[(10)]);
var inst_23384 = (state_23420[(9)]);
var inst_23380 = (state_23420[(8)]);
var inst_23393 = inst_23380.push(inst_23384);
var tmp23437 = inst_23380;
var inst_23380__$1 = tmp23437;
var inst_23381 = inst_23388;
var state_23420__$1 = (function (){var statearr_23441 = state_23420;
(statearr_23441[(14)] = inst_23393);

(statearr_23441[(7)] = inst_23381);

(statearr_23441[(8)] = inst_23380__$1);

return statearr_23441;
})();
var statearr_23442_23468 = state_23420__$1;
(statearr_23442_23468[(2)] = null);

(statearr_23442_23468[(1)] = (2));


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
});})(c__20699__auto___23454,out))
;
return ((function (switch__20587__auto__,c__20699__auto___23454,out){
return (function() {
var cljs$core$async$state_machine__20588__auto__ = null;
var cljs$core$async$state_machine__20588__auto____0 = (function (){
var statearr_23446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23446[(0)] = cljs$core$async$state_machine__20588__auto__);

(statearr_23446[(1)] = (1));

return statearr_23446;
});
var cljs$core$async$state_machine__20588__auto____1 = (function (state_23420){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_23420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e23447){if((e23447 instanceof Object)){
var ex__20591__auto__ = e23447;
var statearr_23448_23469 = state_23420;
(statearr_23448_23469[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23470 = state_23420;
state_23420 = G__23470;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
cljs$core$async$state_machine__20588__auto__ = function(state_23420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20588__auto____1.call(this,state_23420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20588__auto____0;
cljs$core$async$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20588__auto____1;
return cljs$core$async$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___23454,out))
})();
var state__20701__auto__ = (function (){var statearr_23449 = f__20700__auto__.call(null);
(statearr_23449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___23454);

return statearr_23449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___23454,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map