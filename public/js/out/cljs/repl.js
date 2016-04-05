// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24617_24631 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24618_24632 = null;
var count__24619_24633 = (0);
var i__24620_24634 = (0);
while(true){
if((i__24620_24634 < count__24619_24633)){
var f_24635 = cljs.core._nth.call(null,chunk__24618_24632,i__24620_24634);
cljs.core.println.call(null,"  ",f_24635);

var G__24636 = seq__24617_24631;
var G__24637 = chunk__24618_24632;
var G__24638 = count__24619_24633;
var G__24639 = (i__24620_24634 + (1));
seq__24617_24631 = G__24636;
chunk__24618_24632 = G__24637;
count__24619_24633 = G__24638;
i__24620_24634 = G__24639;
continue;
} else {
var temp__4657__auto___24640 = cljs.core.seq.call(null,seq__24617_24631);
if(temp__4657__auto___24640){
var seq__24617_24641__$1 = temp__4657__auto___24640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24617_24641__$1)){
var c__19173__auto___24642 = cljs.core.chunk_first.call(null,seq__24617_24641__$1);
var G__24643 = cljs.core.chunk_rest.call(null,seq__24617_24641__$1);
var G__24644 = c__19173__auto___24642;
var G__24645 = cljs.core.count.call(null,c__19173__auto___24642);
var G__24646 = (0);
seq__24617_24631 = G__24643;
chunk__24618_24632 = G__24644;
count__24619_24633 = G__24645;
i__24620_24634 = G__24646;
continue;
} else {
var f_24647 = cljs.core.first.call(null,seq__24617_24641__$1);
cljs.core.println.call(null,"  ",f_24647);

var G__24648 = cljs.core.next.call(null,seq__24617_24641__$1);
var G__24649 = null;
var G__24650 = (0);
var G__24651 = (0);
seq__24617_24631 = G__24648;
chunk__24618_24632 = G__24649;
count__24619_24633 = G__24650;
i__24620_24634 = G__24651;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24652 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24652);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24652)))?cljs.core.second.call(null,arglists_24652):arglists_24652));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24621 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24622 = null;
var count__24623 = (0);
var i__24624 = (0);
while(true){
if((i__24624 < count__24623)){
var vec__24625 = cljs.core._nth.call(null,chunk__24622,i__24624);
var name = cljs.core.nth.call(null,vec__24625,(0),null);
var map__24626 = cljs.core.nth.call(null,vec__24625,(1),null);
var map__24626__$1 = ((((!((map__24626 == null)))?((((map__24626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24626):map__24626);
var doc = cljs.core.get.call(null,map__24626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24653 = seq__24621;
var G__24654 = chunk__24622;
var G__24655 = count__24623;
var G__24656 = (i__24624 + (1));
seq__24621 = G__24653;
chunk__24622 = G__24654;
count__24623 = G__24655;
i__24624 = G__24656;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24621);
if(temp__4657__auto__){
var seq__24621__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24621__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__24621__$1);
var G__24657 = cljs.core.chunk_rest.call(null,seq__24621__$1);
var G__24658 = c__19173__auto__;
var G__24659 = cljs.core.count.call(null,c__19173__auto__);
var G__24660 = (0);
seq__24621 = G__24657;
chunk__24622 = G__24658;
count__24623 = G__24659;
i__24624 = G__24660;
continue;
} else {
var vec__24628 = cljs.core.first.call(null,seq__24621__$1);
var name = cljs.core.nth.call(null,vec__24628,(0),null);
var map__24629 = cljs.core.nth.call(null,vec__24628,(1),null);
var map__24629__$1 = ((((!((map__24629 == null)))?((((map__24629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24629):map__24629);
var doc = cljs.core.get.call(null,map__24629__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24629__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24661 = cljs.core.next.call(null,seq__24621__$1);
var G__24662 = null;
var G__24663 = (0);
var G__24664 = (0);
seq__24621 = G__24661;
chunk__24622 = G__24662;
count__24623 = G__24663;
i__24624 = G__24664;
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
}
});

//# sourceMappingURL=repl.js.map