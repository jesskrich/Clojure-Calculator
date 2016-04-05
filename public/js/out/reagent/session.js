// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26057 = arguments.length;
var i__19429__auto___26058 = (0);
while(true){
if((i__19429__auto___26058 < len__19428__auto___26057)){
args__19435__auto__.push((arguments[i__19429__auto___26058]));

var G__26059 = (i__19429__auto___26058 + (1));
i__19429__auto___26058 = G__26059;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__26055){
var vec__26056 = p__26055;
var default$ = cljs.core.nth.call(null,vec__26056,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq26053){
var G__26054 = cljs.core.first.call(null,seq26053);
var seq26053__$1 = cljs.core.next.call(null,seq26053);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__26054,seq26053__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26064 = arguments.length;
var i__19429__auto___26065 = (0);
while(true){
if((i__19429__auto___26065 < len__19428__auto___26064)){
args__19435__auto__.push((arguments[i__19429__auto___26065]));

var G__26066 = (i__19429__auto___26065 + (1));
i__19429__auto___26065 = G__26066;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__26062){
var vec__26063 = p__26062;
var default$ = cljs.core.nth.call(null,vec__26063,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq26060){
var G__26061 = cljs.core.first.call(null,seq26060);
var seq26060__$1 = cljs.core.next.call(null,seq26060);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__26061,seq26060__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26069 = arguments.length;
var i__19429__auto___26070 = (0);
while(true){
if((i__19429__auto___26070 < len__19428__auto___26069)){
args__19435__auto__.push((arguments[i__19429__auto___26070]));

var G__26071 = (i__19429__auto___26070 + (1));
i__19429__auto___26070 = G__26071;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq26067){
var G__26068 = cljs.core.first.call(null,seq26067);
var seq26067__$1 = cljs.core.next.call(null,seq26067);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26068,seq26067__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__26072_SHARP_){
return cljs.core.assoc_in.call(null,p1__26072_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26077 = arguments.length;
var i__19429__auto___26078 = (0);
while(true){
if((i__19429__auto___26078 < len__19428__auto___26077)){
args__19435__auto__.push((arguments[i__19429__auto___26078]));

var G__26079 = (i__19429__auto___26078 + (1));
i__19429__auto___26078 = G__26079;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__26075){
var vec__26076 = p__26075;
var default$ = cljs.core.nth.call(null,vec__26076,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq26073){
var G__26074 = cljs.core.first.call(null,seq26073);
var seq26073__$1 = cljs.core.next.call(null,seq26073);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26074,seq26073__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26084 = arguments.length;
var i__19429__auto___26085 = (0);
while(true){
if((i__19429__auto___26085 < len__19428__auto___26084)){
args__19435__auto__.push((arguments[i__19429__auto___26085]));

var G__26086 = (i__19429__auto___26085 + (1));
i__19429__auto___26085 = G__26086;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__26082){
var vec__26083 = p__26082;
var default$ = cljs.core.nth.call(null,vec__26083,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq26080){
var G__26081 = cljs.core.first.call(null,seq26080);
var seq26080__$1 = cljs.core.next.call(null,seq26080);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26081,seq26080__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26091 = arguments.length;
var i__19429__auto___26092 = (0);
while(true){
if((i__19429__auto___26092 < len__19428__auto___26091)){
args__19435__auto__.push((arguments[i__19429__auto___26092]));

var G__26093 = (i__19429__auto___26092 + (1));
i__19429__auto___26092 = G__26093;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__26087_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__26087_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq26088){
var G__26089 = cljs.core.first.call(null,seq26088);
var seq26088__$1 = cljs.core.next.call(null,seq26088);
var G__26090 = cljs.core.first.call(null,seq26088__$1);
var seq26088__$2 = cljs.core.next.call(null,seq26088__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26089,G__26090,seq26088__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26098 = arguments.length;
var i__19429__auto___26099 = (0);
while(true){
if((i__19429__auto___26099 < len__19428__auto___26098)){
args__19435__auto__.push((arguments[i__19429__auto___26099]));

var G__26100 = (i__19429__auto___26099 + (1));
i__19429__auto___26099 = G__26100;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__26094_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__26094_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq26095){
var G__26096 = cljs.core.first.call(null,seq26095);
var seq26095__$1 = cljs.core.next.call(null,seq26095);
var G__26097 = cljs.core.first.call(null,seq26095__$1);
var seq26095__$2 = cljs.core.next.call(null,seq26095__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26096,G__26097,seq26095__$2);
});

//# sourceMappingURL=session.js.map