// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18370__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18370__auto__){
return or__18370__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18370__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23593_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23593_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23598 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23599 = null;
var count__23600 = (0);
var i__23601 = (0);
while(true){
if((i__23601 < count__23600)){
var n = cljs.core._nth.call(null,chunk__23599,i__23601);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23602 = seq__23598;
var G__23603 = chunk__23599;
var G__23604 = count__23600;
var G__23605 = (i__23601 + (1));
seq__23598 = G__23602;
chunk__23599 = G__23603;
count__23600 = G__23604;
i__23601 = G__23605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23598);
if(temp__4657__auto__){
var seq__23598__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23598__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__23598__$1);
var G__23606 = cljs.core.chunk_rest.call(null,seq__23598__$1);
var G__23607 = c__19173__auto__;
var G__23608 = cljs.core.count.call(null,c__19173__auto__);
var G__23609 = (0);
seq__23598 = G__23606;
chunk__23599 = G__23607;
count__23600 = G__23608;
i__23601 = G__23609;
continue;
} else {
var n = cljs.core.first.call(null,seq__23598__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23610 = cljs.core.next.call(null,seq__23598__$1);
var G__23611 = null;
var G__23612 = (0);
var G__23613 = (0);
seq__23598 = G__23610;
chunk__23599 = G__23611;
count__23600 = G__23612;
i__23601 = G__23613;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23652_23659 = cljs.core.seq.call(null,deps);
var chunk__23653_23660 = null;
var count__23654_23661 = (0);
var i__23655_23662 = (0);
while(true){
if((i__23655_23662 < count__23654_23661)){
var dep_23663 = cljs.core._nth.call(null,chunk__23653_23660,i__23655_23662);
topo_sort_helper_STAR_.call(null,dep_23663,(depth + (1)),state);

var G__23664 = seq__23652_23659;
var G__23665 = chunk__23653_23660;
var G__23666 = count__23654_23661;
var G__23667 = (i__23655_23662 + (1));
seq__23652_23659 = G__23664;
chunk__23653_23660 = G__23665;
count__23654_23661 = G__23666;
i__23655_23662 = G__23667;
continue;
} else {
var temp__4657__auto___23668 = cljs.core.seq.call(null,seq__23652_23659);
if(temp__4657__auto___23668){
var seq__23652_23669__$1 = temp__4657__auto___23668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23652_23669__$1)){
var c__19173__auto___23670 = cljs.core.chunk_first.call(null,seq__23652_23669__$1);
var G__23671 = cljs.core.chunk_rest.call(null,seq__23652_23669__$1);
var G__23672 = c__19173__auto___23670;
var G__23673 = cljs.core.count.call(null,c__19173__auto___23670);
var G__23674 = (0);
seq__23652_23659 = G__23671;
chunk__23653_23660 = G__23672;
count__23654_23661 = G__23673;
i__23655_23662 = G__23674;
continue;
} else {
var dep_23675 = cljs.core.first.call(null,seq__23652_23669__$1);
topo_sort_helper_STAR_.call(null,dep_23675,(depth + (1)),state);

var G__23676 = cljs.core.next.call(null,seq__23652_23669__$1);
var G__23677 = null;
var G__23678 = (0);
var G__23679 = (0);
seq__23652_23659 = G__23676;
chunk__23653_23660 = G__23677;
count__23654_23661 = G__23678;
i__23655_23662 = G__23679;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23656){
var vec__23658 = p__23656;
var x = cljs.core.nth.call(null,vec__23658,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23658,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23658,x,xs,get_deps__$1){
return (function (p1__23614_SHARP_){
return clojure.set.difference.call(null,p1__23614_SHARP_,x);
});})(vec__23658,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23692 = cljs.core.seq.call(null,provides);
var chunk__23693 = null;
var count__23694 = (0);
var i__23695 = (0);
while(true){
if((i__23695 < count__23694)){
var prov = cljs.core._nth.call(null,chunk__23693,i__23695);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23696_23704 = cljs.core.seq.call(null,requires);
var chunk__23697_23705 = null;
var count__23698_23706 = (0);
var i__23699_23707 = (0);
while(true){
if((i__23699_23707 < count__23698_23706)){
var req_23708 = cljs.core._nth.call(null,chunk__23697_23705,i__23699_23707);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23708,prov);

var G__23709 = seq__23696_23704;
var G__23710 = chunk__23697_23705;
var G__23711 = count__23698_23706;
var G__23712 = (i__23699_23707 + (1));
seq__23696_23704 = G__23709;
chunk__23697_23705 = G__23710;
count__23698_23706 = G__23711;
i__23699_23707 = G__23712;
continue;
} else {
var temp__4657__auto___23713 = cljs.core.seq.call(null,seq__23696_23704);
if(temp__4657__auto___23713){
var seq__23696_23714__$1 = temp__4657__auto___23713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23696_23714__$1)){
var c__19173__auto___23715 = cljs.core.chunk_first.call(null,seq__23696_23714__$1);
var G__23716 = cljs.core.chunk_rest.call(null,seq__23696_23714__$1);
var G__23717 = c__19173__auto___23715;
var G__23718 = cljs.core.count.call(null,c__19173__auto___23715);
var G__23719 = (0);
seq__23696_23704 = G__23716;
chunk__23697_23705 = G__23717;
count__23698_23706 = G__23718;
i__23699_23707 = G__23719;
continue;
} else {
var req_23720 = cljs.core.first.call(null,seq__23696_23714__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23720,prov);

var G__23721 = cljs.core.next.call(null,seq__23696_23714__$1);
var G__23722 = null;
var G__23723 = (0);
var G__23724 = (0);
seq__23696_23704 = G__23721;
chunk__23697_23705 = G__23722;
count__23698_23706 = G__23723;
i__23699_23707 = G__23724;
continue;
}
} else {
}
}
break;
}

var G__23725 = seq__23692;
var G__23726 = chunk__23693;
var G__23727 = count__23694;
var G__23728 = (i__23695 + (1));
seq__23692 = G__23725;
chunk__23693 = G__23726;
count__23694 = G__23727;
i__23695 = G__23728;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23692);
if(temp__4657__auto__){
var seq__23692__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23692__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__23692__$1);
var G__23729 = cljs.core.chunk_rest.call(null,seq__23692__$1);
var G__23730 = c__19173__auto__;
var G__23731 = cljs.core.count.call(null,c__19173__auto__);
var G__23732 = (0);
seq__23692 = G__23729;
chunk__23693 = G__23730;
count__23694 = G__23731;
i__23695 = G__23732;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23692__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23700_23733 = cljs.core.seq.call(null,requires);
var chunk__23701_23734 = null;
var count__23702_23735 = (0);
var i__23703_23736 = (0);
while(true){
if((i__23703_23736 < count__23702_23735)){
var req_23737 = cljs.core._nth.call(null,chunk__23701_23734,i__23703_23736);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23737,prov);

var G__23738 = seq__23700_23733;
var G__23739 = chunk__23701_23734;
var G__23740 = count__23702_23735;
var G__23741 = (i__23703_23736 + (1));
seq__23700_23733 = G__23738;
chunk__23701_23734 = G__23739;
count__23702_23735 = G__23740;
i__23703_23736 = G__23741;
continue;
} else {
var temp__4657__auto___23742__$1 = cljs.core.seq.call(null,seq__23700_23733);
if(temp__4657__auto___23742__$1){
var seq__23700_23743__$1 = temp__4657__auto___23742__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23700_23743__$1)){
var c__19173__auto___23744 = cljs.core.chunk_first.call(null,seq__23700_23743__$1);
var G__23745 = cljs.core.chunk_rest.call(null,seq__23700_23743__$1);
var G__23746 = c__19173__auto___23744;
var G__23747 = cljs.core.count.call(null,c__19173__auto___23744);
var G__23748 = (0);
seq__23700_23733 = G__23745;
chunk__23701_23734 = G__23746;
count__23702_23735 = G__23747;
i__23703_23736 = G__23748;
continue;
} else {
var req_23749 = cljs.core.first.call(null,seq__23700_23743__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23749,prov);

var G__23750 = cljs.core.next.call(null,seq__23700_23743__$1);
var G__23751 = null;
var G__23752 = (0);
var G__23753 = (0);
seq__23700_23733 = G__23750;
chunk__23701_23734 = G__23751;
count__23702_23735 = G__23752;
i__23703_23736 = G__23753;
continue;
}
} else {
}
}
break;
}

var G__23754 = cljs.core.next.call(null,seq__23692__$1);
var G__23755 = null;
var G__23756 = (0);
var G__23757 = (0);
seq__23692 = G__23754;
chunk__23693 = G__23755;
count__23694 = G__23756;
i__23695 = G__23757;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23762_23766 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23763_23767 = null;
var count__23764_23768 = (0);
var i__23765_23769 = (0);
while(true){
if((i__23765_23769 < count__23764_23768)){
var ns_23770 = cljs.core._nth.call(null,chunk__23763_23767,i__23765_23769);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23770);

var G__23771 = seq__23762_23766;
var G__23772 = chunk__23763_23767;
var G__23773 = count__23764_23768;
var G__23774 = (i__23765_23769 + (1));
seq__23762_23766 = G__23771;
chunk__23763_23767 = G__23772;
count__23764_23768 = G__23773;
i__23765_23769 = G__23774;
continue;
} else {
var temp__4657__auto___23775 = cljs.core.seq.call(null,seq__23762_23766);
if(temp__4657__auto___23775){
var seq__23762_23776__$1 = temp__4657__auto___23775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23762_23776__$1)){
var c__19173__auto___23777 = cljs.core.chunk_first.call(null,seq__23762_23776__$1);
var G__23778 = cljs.core.chunk_rest.call(null,seq__23762_23776__$1);
var G__23779 = c__19173__auto___23777;
var G__23780 = cljs.core.count.call(null,c__19173__auto___23777);
var G__23781 = (0);
seq__23762_23766 = G__23778;
chunk__23763_23767 = G__23779;
count__23764_23768 = G__23780;
i__23765_23769 = G__23781;
continue;
} else {
var ns_23782 = cljs.core.first.call(null,seq__23762_23776__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23782);

var G__23783 = cljs.core.next.call(null,seq__23762_23776__$1);
var G__23784 = null;
var G__23785 = (0);
var G__23786 = (0);
seq__23762_23766 = G__23783;
chunk__23763_23767 = G__23784;
count__23764_23768 = G__23785;
i__23765_23769 = G__23786;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18370__auto__ = goog.require__;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23787__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23788__i = 0, G__23788__a = new Array(arguments.length -  0);
while (G__23788__i < G__23788__a.length) {G__23788__a[G__23788__i] = arguments[G__23788__i + 0]; ++G__23788__i;}
  args = new cljs.core.IndexedSeq(G__23788__a,0);
} 
return G__23787__delegate.call(this,args);};
G__23787.cljs$lang$maxFixedArity = 0;
G__23787.cljs$lang$applyTo = (function (arglist__23789){
var args = cljs.core.seq(arglist__23789);
return G__23787__delegate(args);
});
G__23787.cljs$core$IFn$_invoke$arity$variadic = G__23787__delegate;
return G__23787;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23791 = cljs.core._EQ_;
var expr__23792 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23791.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23792))){
var path_parts = ((function (pred__23791,expr__23792){
return (function (p1__23790_SHARP_){
return clojure.string.split.call(null,p1__23790_SHARP_,/[\/\\]/);
});})(pred__23791,expr__23792))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23791,expr__23792){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23794){if((e23794 instanceof Error)){
var e = e23794;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23794;

}
}})());
});
;})(path_parts,sep,root,pred__23791,expr__23792))
} else {
if(cljs.core.truth_(pred__23791.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23792))){
return ((function (pred__23791,expr__23792){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23791,expr__23792){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23791,expr__23792))
);

return deferred.addErrback(((function (deferred,pred__23791,expr__23792){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23791,expr__23792))
);
});
;})(pred__23791,expr__23792))
} else {
return ((function (pred__23791,expr__23792){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23791,expr__23792))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23795,callback){
var map__23798 = p__23795;
var map__23798__$1 = ((((!((map__23798 == null)))?((((map__23798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23798):map__23798);
var file_msg = map__23798__$1;
var request_url = cljs.core.get.call(null,map__23798__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23798,map__23798__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23798,map__23798__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto__){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto__){
return (function (state_23822){
var state_val_23823 = (state_23822[(1)]);
if((state_val_23823 === (7))){
var inst_23818 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
var statearr_23824_23844 = state_23822__$1;
(statearr_23824_23844[(2)] = inst_23818);

(statearr_23824_23844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (1))){
var state_23822__$1 = state_23822;
var statearr_23825_23845 = state_23822__$1;
(statearr_23825_23845[(2)] = null);

(statearr_23825_23845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (4))){
var inst_23802 = (state_23822[(7)]);
var inst_23802__$1 = (state_23822[(2)]);
var state_23822__$1 = (function (){var statearr_23826 = state_23822;
(statearr_23826[(7)] = inst_23802__$1);

return statearr_23826;
})();
if(cljs.core.truth_(inst_23802__$1)){
var statearr_23827_23846 = state_23822__$1;
(statearr_23827_23846[(1)] = (5));

} else {
var statearr_23828_23847 = state_23822__$1;
(statearr_23828_23847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (6))){
var state_23822__$1 = state_23822;
var statearr_23829_23848 = state_23822__$1;
(statearr_23829_23848[(2)] = null);

(statearr_23829_23848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (3))){
var inst_23820 = (state_23822[(2)]);
var state_23822__$1 = state_23822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23822__$1,inst_23820);
} else {
if((state_val_23823 === (2))){
var state_23822__$1 = state_23822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23822__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23823 === (11))){
var inst_23814 = (state_23822[(2)]);
var state_23822__$1 = (function (){var statearr_23830 = state_23822;
(statearr_23830[(8)] = inst_23814);

return statearr_23830;
})();
var statearr_23831_23849 = state_23822__$1;
(statearr_23831_23849[(2)] = null);

(statearr_23831_23849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (9))){
var inst_23806 = (state_23822[(9)]);
var inst_23808 = (state_23822[(10)]);
var inst_23810 = inst_23808.call(null,inst_23806);
var state_23822__$1 = state_23822;
var statearr_23832_23850 = state_23822__$1;
(statearr_23832_23850[(2)] = inst_23810);

(statearr_23832_23850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (5))){
var inst_23802 = (state_23822[(7)]);
var inst_23804 = figwheel.client.file_reloading.blocking_load.call(null,inst_23802);
var state_23822__$1 = state_23822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23822__$1,(8),inst_23804);
} else {
if((state_val_23823 === (10))){
var inst_23806 = (state_23822[(9)]);
var inst_23812 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23806);
var state_23822__$1 = state_23822;
var statearr_23833_23851 = state_23822__$1;
(statearr_23833_23851[(2)] = inst_23812);

(statearr_23833_23851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23823 === (8))){
var inst_23802 = (state_23822[(7)]);
var inst_23808 = (state_23822[(10)]);
var inst_23806 = (state_23822[(2)]);
var inst_23807 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23808__$1 = cljs.core.get.call(null,inst_23807,inst_23802);
var state_23822__$1 = (function (){var statearr_23834 = state_23822;
(statearr_23834[(9)] = inst_23806);

(statearr_23834[(10)] = inst_23808__$1);

return statearr_23834;
})();
if(cljs.core.truth_(inst_23808__$1)){
var statearr_23835_23852 = state_23822__$1;
(statearr_23835_23852[(1)] = (9));

} else {
var statearr_23836_23853 = state_23822__$1;
(statearr_23836_23853[(1)] = (10));

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
});})(c__20699__auto__))
;
return ((function (switch__20587__auto__,c__20699__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20588__auto__ = null;
var figwheel$client$file_reloading$state_machine__20588__auto____0 = (function (){
var statearr_23840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23840[(0)] = figwheel$client$file_reloading$state_machine__20588__auto__);

(statearr_23840[(1)] = (1));

return statearr_23840;
});
var figwheel$client$file_reloading$state_machine__20588__auto____1 = (function (state_23822){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_23822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e23841){if((e23841 instanceof Object)){
var ex__20591__auto__ = e23841;
var statearr_23842_23854 = state_23822;
(statearr_23842_23854[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23855 = state_23822;
state_23822 = G__23855;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20588__auto__ = function(state_23822){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20588__auto____1.call(this,state_23822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20588__auto____0;
figwheel$client$file_reloading$state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20588__auto____1;
return figwheel$client$file_reloading$state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto__))
})();
var state__20701__auto__ = (function (){var statearr_23843 = f__20700__auto__.call(null);
(statearr_23843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto__);

return statearr_23843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto__))
);

return c__20699__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23856,callback){
var map__23859 = p__23856;
var map__23859__$1 = ((((!((map__23859 == null)))?((((map__23859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23859):map__23859);
var file_msg = map__23859__$1;
var namespace = cljs.core.get.call(null,map__23859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23859,map__23859__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23859,map__23859__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23861){
var map__23864 = p__23861;
var map__23864__$1 = ((((!((map__23864 == null)))?((((map__23864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23864):map__23864);
var file_msg = map__23864__$1;
var namespace = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18358__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18358__auto__){
var or__18370__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var or__18370__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto____$1)){
return or__18370__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18358__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23866,callback){
var map__23869 = p__23866;
var map__23869__$1 = ((((!((map__23869 == null)))?((((map__23869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23869):map__23869);
var file_msg = map__23869__$1;
var request_url = cljs.core.get.call(null,map__23869__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23869__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20699__auto___23957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___23957,out){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___23957,out){
return (function (state_23939){
var state_val_23940 = (state_23939[(1)]);
if((state_val_23940 === (1))){
var inst_23917 = cljs.core.nth.call(null,files,(0),null);
var inst_23918 = cljs.core.nthnext.call(null,files,(1));
var inst_23919 = files;
var state_23939__$1 = (function (){var statearr_23941 = state_23939;
(statearr_23941[(7)] = inst_23917);

(statearr_23941[(8)] = inst_23919);

(statearr_23941[(9)] = inst_23918);

return statearr_23941;
})();
var statearr_23942_23958 = state_23939__$1;
(statearr_23942_23958[(2)] = null);

(statearr_23942_23958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (2))){
var inst_23919 = (state_23939[(8)]);
var inst_23922 = (state_23939[(10)]);
var inst_23922__$1 = cljs.core.nth.call(null,inst_23919,(0),null);
var inst_23923 = cljs.core.nthnext.call(null,inst_23919,(1));
var inst_23924 = (inst_23922__$1 == null);
var inst_23925 = cljs.core.not.call(null,inst_23924);
var state_23939__$1 = (function (){var statearr_23943 = state_23939;
(statearr_23943[(11)] = inst_23923);

(statearr_23943[(10)] = inst_23922__$1);

return statearr_23943;
})();
if(inst_23925){
var statearr_23944_23959 = state_23939__$1;
(statearr_23944_23959[(1)] = (4));

} else {
var statearr_23945_23960 = state_23939__$1;
(statearr_23945_23960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (3))){
var inst_23937 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23939__$1,inst_23937);
} else {
if((state_val_23940 === (4))){
var inst_23922 = (state_23939[(10)]);
var inst_23927 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23922);
var state_23939__$1 = state_23939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23939__$1,(7),inst_23927);
} else {
if((state_val_23940 === (5))){
var inst_23933 = cljs.core.async.close_BANG_.call(null,out);
var state_23939__$1 = state_23939;
var statearr_23946_23961 = state_23939__$1;
(statearr_23946_23961[(2)] = inst_23933);

(statearr_23946_23961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (6))){
var inst_23935 = (state_23939[(2)]);
var state_23939__$1 = state_23939;
var statearr_23947_23962 = state_23939__$1;
(statearr_23947_23962[(2)] = inst_23935);

(statearr_23947_23962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23940 === (7))){
var inst_23923 = (state_23939[(11)]);
var inst_23929 = (state_23939[(2)]);
var inst_23930 = cljs.core.async.put_BANG_.call(null,out,inst_23929);
var inst_23919 = inst_23923;
var state_23939__$1 = (function (){var statearr_23948 = state_23939;
(statearr_23948[(8)] = inst_23919);

(statearr_23948[(12)] = inst_23930);

return statearr_23948;
})();
var statearr_23949_23963 = state_23939__$1;
(statearr_23949_23963[(2)] = null);

(statearr_23949_23963[(1)] = (2));


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
});})(c__20699__auto___23957,out))
;
return ((function (switch__20587__auto__,c__20699__auto___23957,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto____0 = (function (){
var statearr_23953 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23953[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto__);

(statearr_23953[(1)] = (1));

return statearr_23953;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto____1 = (function (state_23939){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_23939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e23954){if((e23954 instanceof Object)){
var ex__20591__auto__ = e23954;
var statearr_23955_23964 = state_23939;
(statearr_23955_23964[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23965 = state_23939;
state_23939 = G__23965;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto__ = function(state_23939){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto____1.call(this,state_23939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___23957,out))
})();
var state__20701__auto__ = (function (){var statearr_23956 = f__20700__auto__.call(null);
(statearr_23956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___23957);

return statearr_23956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___23957,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23966,opts){
var map__23970 = p__23966;
var map__23970__$1 = ((((!((map__23970 == null)))?((((map__23970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23970):map__23970);
var eval_body__$1 = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18358__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18358__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18358__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23972){var e = e23972;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23973_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23973_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23978){
var vec__23979 = p__23978;
var k = cljs.core.nth.call(null,vec__23979,(0),null);
var v = cljs.core.nth.call(null,vec__23979,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23980){
var vec__23981 = p__23980;
var k = cljs.core.nth.call(null,vec__23981,(0),null);
var v = cljs.core.nth.call(null,vec__23981,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23985,p__23986){
var map__24233 = p__23985;
var map__24233__$1 = ((((!((map__24233 == null)))?((((map__24233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24233):map__24233);
var opts = map__24233__$1;
var before_jsload = cljs.core.get.call(null,map__24233__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24233__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24233__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24234 = p__23986;
var map__24234__$1 = ((((!((map__24234 == null)))?((((map__24234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24234):map__24234);
var msg = map__24234__$1;
var files = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24387){
var state_val_24388 = (state_24387[(1)]);
if((state_val_24388 === (7))){
var inst_24248 = (state_24387[(7)]);
var inst_24249 = (state_24387[(8)]);
var inst_24250 = (state_24387[(9)]);
var inst_24251 = (state_24387[(10)]);
var inst_24256 = cljs.core._nth.call(null,inst_24249,inst_24251);
var inst_24257 = figwheel.client.file_reloading.eval_body.call(null,inst_24256,opts);
var inst_24258 = (inst_24251 + (1));
var tmp24389 = inst_24248;
var tmp24390 = inst_24249;
var tmp24391 = inst_24250;
var inst_24248__$1 = tmp24389;
var inst_24249__$1 = tmp24390;
var inst_24250__$1 = tmp24391;
var inst_24251__$1 = inst_24258;
var state_24387__$1 = (function (){var statearr_24392 = state_24387;
(statearr_24392[(7)] = inst_24248__$1);

(statearr_24392[(11)] = inst_24257);

(statearr_24392[(8)] = inst_24249__$1);

(statearr_24392[(9)] = inst_24250__$1);

(statearr_24392[(10)] = inst_24251__$1);

return statearr_24392;
})();
var statearr_24393_24479 = state_24387__$1;
(statearr_24393_24479[(2)] = null);

(statearr_24393_24479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (20))){
var inst_24291 = (state_24387[(12)]);
var inst_24299 = figwheel.client.file_reloading.sort_files.call(null,inst_24291);
var state_24387__$1 = state_24387;
var statearr_24394_24480 = state_24387__$1;
(statearr_24394_24480[(2)] = inst_24299);

(statearr_24394_24480[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (27))){
var state_24387__$1 = state_24387;
var statearr_24395_24481 = state_24387__$1;
(statearr_24395_24481[(2)] = null);

(statearr_24395_24481[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (1))){
var inst_24240 = (state_24387[(13)]);
var inst_24237 = before_jsload.call(null,files);
var inst_24238 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24239 = (function (){return ((function (inst_24240,inst_24237,inst_24238,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23982_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23982_SHARP_);
});
;})(inst_24240,inst_24237,inst_24238,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24240__$1 = cljs.core.filter.call(null,inst_24239,files);
var inst_24241 = cljs.core.not_empty.call(null,inst_24240__$1);
var state_24387__$1 = (function (){var statearr_24396 = state_24387;
(statearr_24396[(13)] = inst_24240__$1);

(statearr_24396[(14)] = inst_24238);

(statearr_24396[(15)] = inst_24237);

return statearr_24396;
})();
if(cljs.core.truth_(inst_24241)){
var statearr_24397_24482 = state_24387__$1;
(statearr_24397_24482[(1)] = (2));

} else {
var statearr_24398_24483 = state_24387__$1;
(statearr_24398_24483[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (24))){
var state_24387__$1 = state_24387;
var statearr_24399_24484 = state_24387__$1;
(statearr_24399_24484[(2)] = null);

(statearr_24399_24484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (39))){
var inst_24341 = (state_24387[(16)]);
var state_24387__$1 = state_24387;
var statearr_24400_24485 = state_24387__$1;
(statearr_24400_24485[(2)] = inst_24341);

(statearr_24400_24485[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (46))){
var inst_24382 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24401_24486 = state_24387__$1;
(statearr_24401_24486[(2)] = inst_24382);

(statearr_24401_24486[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (4))){
var inst_24285 = (state_24387[(2)]);
var inst_24286 = cljs.core.List.EMPTY;
var inst_24287 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24286);
var inst_24288 = (function (){return ((function (inst_24285,inst_24286,inst_24287,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23983_SHARP_){
var and__18358__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23983_SHARP_);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23983_SHARP_));
} else {
return and__18358__auto__;
}
});
;})(inst_24285,inst_24286,inst_24287,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24289 = cljs.core.filter.call(null,inst_24288,files);
var inst_24290 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24291 = cljs.core.concat.call(null,inst_24289,inst_24290);
var state_24387__$1 = (function (){var statearr_24402 = state_24387;
(statearr_24402[(17)] = inst_24285);

(statearr_24402[(18)] = inst_24287);

(statearr_24402[(12)] = inst_24291);

return statearr_24402;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24403_24487 = state_24387__$1;
(statearr_24403_24487[(1)] = (16));

} else {
var statearr_24404_24488 = state_24387__$1;
(statearr_24404_24488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (15))){
var inst_24275 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24405_24489 = state_24387__$1;
(statearr_24405_24489[(2)] = inst_24275);

(statearr_24405_24489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (21))){
var inst_24301 = (state_24387[(19)]);
var inst_24301__$1 = (state_24387[(2)]);
var inst_24302 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24301__$1);
var state_24387__$1 = (function (){var statearr_24406 = state_24387;
(statearr_24406[(19)] = inst_24301__$1);

return statearr_24406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(22),inst_24302);
} else {
if((state_val_24388 === (31))){
var inst_24385 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24387__$1,inst_24385);
} else {
if((state_val_24388 === (32))){
var inst_24341 = (state_24387[(16)]);
var inst_24346 = inst_24341.cljs$lang$protocol_mask$partition0$;
var inst_24347 = (inst_24346 & (64));
var inst_24348 = inst_24341.cljs$core$ISeq$;
var inst_24349 = (inst_24347) || (inst_24348);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24349)){
var statearr_24407_24490 = state_24387__$1;
(statearr_24407_24490[(1)] = (35));

} else {
var statearr_24408_24491 = state_24387__$1;
(statearr_24408_24491[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (40))){
var inst_24362 = (state_24387[(20)]);
var inst_24361 = (state_24387[(2)]);
var inst_24362__$1 = cljs.core.get.call(null,inst_24361,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24363 = cljs.core.get.call(null,inst_24361,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24364 = cljs.core.not_empty.call(null,inst_24362__$1);
var state_24387__$1 = (function (){var statearr_24409 = state_24387;
(statearr_24409[(21)] = inst_24363);

(statearr_24409[(20)] = inst_24362__$1);

return statearr_24409;
})();
if(cljs.core.truth_(inst_24364)){
var statearr_24410_24492 = state_24387__$1;
(statearr_24410_24492[(1)] = (41));

} else {
var statearr_24411_24493 = state_24387__$1;
(statearr_24411_24493[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (33))){
var state_24387__$1 = state_24387;
var statearr_24412_24494 = state_24387__$1;
(statearr_24412_24494[(2)] = false);

(statearr_24412_24494[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (13))){
var inst_24261 = (state_24387[(22)]);
var inst_24265 = cljs.core.chunk_first.call(null,inst_24261);
var inst_24266 = cljs.core.chunk_rest.call(null,inst_24261);
var inst_24267 = cljs.core.count.call(null,inst_24265);
var inst_24248 = inst_24266;
var inst_24249 = inst_24265;
var inst_24250 = inst_24267;
var inst_24251 = (0);
var state_24387__$1 = (function (){var statearr_24413 = state_24387;
(statearr_24413[(7)] = inst_24248);

(statearr_24413[(8)] = inst_24249);

(statearr_24413[(9)] = inst_24250);

(statearr_24413[(10)] = inst_24251);

return statearr_24413;
})();
var statearr_24414_24495 = state_24387__$1;
(statearr_24414_24495[(2)] = null);

(statearr_24414_24495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (22))){
var inst_24301 = (state_24387[(19)]);
var inst_24304 = (state_24387[(23)]);
var inst_24305 = (state_24387[(24)]);
var inst_24309 = (state_24387[(25)]);
var inst_24304__$1 = (state_24387[(2)]);
var inst_24305__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24304__$1);
var inst_24306 = (function (){var all_files = inst_24301;
var res_SINGLEQUOTE_ = inst_24304__$1;
var res = inst_24305__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24301,inst_24304,inst_24305,inst_24309,inst_24304__$1,inst_24305__$1,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23984_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23984_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24301,inst_24304,inst_24305,inst_24309,inst_24304__$1,inst_24305__$1,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24307 = cljs.core.filter.call(null,inst_24306,inst_24304__$1);
var inst_24308 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24309__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24308);
var inst_24310 = cljs.core.not_empty.call(null,inst_24309__$1);
var state_24387__$1 = (function (){var statearr_24415 = state_24387;
(statearr_24415[(26)] = inst_24307);

(statearr_24415[(23)] = inst_24304__$1);

(statearr_24415[(24)] = inst_24305__$1);

(statearr_24415[(25)] = inst_24309__$1);

return statearr_24415;
})();
if(cljs.core.truth_(inst_24310)){
var statearr_24416_24496 = state_24387__$1;
(statearr_24416_24496[(1)] = (23));

} else {
var statearr_24417_24497 = state_24387__$1;
(statearr_24417_24497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (36))){
var state_24387__$1 = state_24387;
var statearr_24418_24498 = state_24387__$1;
(statearr_24418_24498[(2)] = false);

(statearr_24418_24498[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (41))){
var inst_24362 = (state_24387[(20)]);
var inst_24366 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24367 = cljs.core.map.call(null,inst_24366,inst_24362);
var inst_24368 = cljs.core.pr_str.call(null,inst_24367);
var inst_24369 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24368)].join('');
var inst_24370 = figwheel.client.utils.log.call(null,inst_24369);
var state_24387__$1 = state_24387;
var statearr_24419_24499 = state_24387__$1;
(statearr_24419_24499[(2)] = inst_24370);

(statearr_24419_24499[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (43))){
var inst_24363 = (state_24387[(21)]);
var inst_24373 = (state_24387[(2)]);
var inst_24374 = cljs.core.not_empty.call(null,inst_24363);
var state_24387__$1 = (function (){var statearr_24420 = state_24387;
(statearr_24420[(27)] = inst_24373);

return statearr_24420;
})();
if(cljs.core.truth_(inst_24374)){
var statearr_24421_24500 = state_24387__$1;
(statearr_24421_24500[(1)] = (44));

} else {
var statearr_24422_24501 = state_24387__$1;
(statearr_24422_24501[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (29))){
var inst_24301 = (state_24387[(19)]);
var inst_24341 = (state_24387[(16)]);
var inst_24307 = (state_24387[(26)]);
var inst_24304 = (state_24387[(23)]);
var inst_24305 = (state_24387[(24)]);
var inst_24309 = (state_24387[(25)]);
var inst_24337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24340 = (function (){var all_files = inst_24301;
var res_SINGLEQUOTE_ = inst_24304;
var res = inst_24305;
var files_not_loaded = inst_24307;
var dependencies_that_loaded = inst_24309;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24301,inst_24341,inst_24307,inst_24304,inst_24305,inst_24309,inst_24337,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24339){
var map__24423 = p__24339;
var map__24423__$1 = ((((!((map__24423 == null)))?((((map__24423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24423):map__24423);
var namespace = cljs.core.get.call(null,map__24423__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24301,inst_24341,inst_24307,inst_24304,inst_24305,inst_24309,inst_24337,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24341__$1 = cljs.core.group_by.call(null,inst_24340,inst_24307);
var inst_24343 = (inst_24341__$1 == null);
var inst_24344 = cljs.core.not.call(null,inst_24343);
var state_24387__$1 = (function (){var statearr_24425 = state_24387;
(statearr_24425[(16)] = inst_24341__$1);

(statearr_24425[(28)] = inst_24337);

return statearr_24425;
})();
if(inst_24344){
var statearr_24426_24502 = state_24387__$1;
(statearr_24426_24502[(1)] = (32));

} else {
var statearr_24427_24503 = state_24387__$1;
(statearr_24427_24503[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (44))){
var inst_24363 = (state_24387[(21)]);
var inst_24376 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24363);
var inst_24377 = cljs.core.pr_str.call(null,inst_24376);
var inst_24378 = [cljs.core.str("not required: "),cljs.core.str(inst_24377)].join('');
var inst_24379 = figwheel.client.utils.log.call(null,inst_24378);
var state_24387__$1 = state_24387;
var statearr_24428_24504 = state_24387__$1;
(statearr_24428_24504[(2)] = inst_24379);

(statearr_24428_24504[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (6))){
var inst_24282 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24429_24505 = state_24387__$1;
(statearr_24429_24505[(2)] = inst_24282);

(statearr_24429_24505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (28))){
var inst_24307 = (state_24387[(26)]);
var inst_24334 = (state_24387[(2)]);
var inst_24335 = cljs.core.not_empty.call(null,inst_24307);
var state_24387__$1 = (function (){var statearr_24430 = state_24387;
(statearr_24430[(29)] = inst_24334);

return statearr_24430;
})();
if(cljs.core.truth_(inst_24335)){
var statearr_24431_24506 = state_24387__$1;
(statearr_24431_24506[(1)] = (29));

} else {
var statearr_24432_24507 = state_24387__$1;
(statearr_24432_24507[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (25))){
var inst_24305 = (state_24387[(24)]);
var inst_24321 = (state_24387[(2)]);
var inst_24322 = cljs.core.not_empty.call(null,inst_24305);
var state_24387__$1 = (function (){var statearr_24433 = state_24387;
(statearr_24433[(30)] = inst_24321);

return statearr_24433;
})();
if(cljs.core.truth_(inst_24322)){
var statearr_24434_24508 = state_24387__$1;
(statearr_24434_24508[(1)] = (26));

} else {
var statearr_24435_24509 = state_24387__$1;
(statearr_24435_24509[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (34))){
var inst_24356 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24356)){
var statearr_24436_24510 = state_24387__$1;
(statearr_24436_24510[(1)] = (38));

} else {
var statearr_24437_24511 = state_24387__$1;
(statearr_24437_24511[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (17))){
var state_24387__$1 = state_24387;
var statearr_24438_24512 = state_24387__$1;
(statearr_24438_24512[(2)] = recompile_dependents);

(statearr_24438_24512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (3))){
var state_24387__$1 = state_24387;
var statearr_24439_24513 = state_24387__$1;
(statearr_24439_24513[(2)] = null);

(statearr_24439_24513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (12))){
var inst_24278 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24440_24514 = state_24387__$1;
(statearr_24440_24514[(2)] = inst_24278);

(statearr_24440_24514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (2))){
var inst_24240 = (state_24387[(13)]);
var inst_24247 = cljs.core.seq.call(null,inst_24240);
var inst_24248 = inst_24247;
var inst_24249 = null;
var inst_24250 = (0);
var inst_24251 = (0);
var state_24387__$1 = (function (){var statearr_24441 = state_24387;
(statearr_24441[(7)] = inst_24248);

(statearr_24441[(8)] = inst_24249);

(statearr_24441[(9)] = inst_24250);

(statearr_24441[(10)] = inst_24251);

return statearr_24441;
})();
var statearr_24442_24515 = state_24387__$1;
(statearr_24442_24515[(2)] = null);

(statearr_24442_24515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (23))){
var inst_24301 = (state_24387[(19)]);
var inst_24307 = (state_24387[(26)]);
var inst_24304 = (state_24387[(23)]);
var inst_24305 = (state_24387[(24)]);
var inst_24309 = (state_24387[(25)]);
var inst_24312 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24314 = (function (){var all_files = inst_24301;
var res_SINGLEQUOTE_ = inst_24304;
var res = inst_24305;
var files_not_loaded = inst_24307;
var dependencies_that_loaded = inst_24309;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24301,inst_24307,inst_24304,inst_24305,inst_24309,inst_24312,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24313){
var map__24443 = p__24313;
var map__24443__$1 = ((((!((map__24443 == null)))?((((map__24443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24443):map__24443);
var request_url = cljs.core.get.call(null,map__24443__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24301,inst_24307,inst_24304,inst_24305,inst_24309,inst_24312,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24315 = cljs.core.reverse.call(null,inst_24309);
var inst_24316 = cljs.core.map.call(null,inst_24314,inst_24315);
var inst_24317 = cljs.core.pr_str.call(null,inst_24316);
var inst_24318 = figwheel.client.utils.log.call(null,inst_24317);
var state_24387__$1 = (function (){var statearr_24445 = state_24387;
(statearr_24445[(31)] = inst_24312);

return statearr_24445;
})();
var statearr_24446_24516 = state_24387__$1;
(statearr_24446_24516[(2)] = inst_24318);

(statearr_24446_24516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (35))){
var state_24387__$1 = state_24387;
var statearr_24447_24517 = state_24387__$1;
(statearr_24447_24517[(2)] = true);

(statearr_24447_24517[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (19))){
var inst_24291 = (state_24387[(12)]);
var inst_24297 = figwheel.client.file_reloading.expand_files.call(null,inst_24291);
var state_24387__$1 = state_24387;
var statearr_24448_24518 = state_24387__$1;
(statearr_24448_24518[(2)] = inst_24297);

(statearr_24448_24518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (11))){
var state_24387__$1 = state_24387;
var statearr_24449_24519 = state_24387__$1;
(statearr_24449_24519[(2)] = null);

(statearr_24449_24519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (9))){
var inst_24280 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24450_24520 = state_24387__$1;
(statearr_24450_24520[(2)] = inst_24280);

(statearr_24450_24520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (5))){
var inst_24250 = (state_24387[(9)]);
var inst_24251 = (state_24387[(10)]);
var inst_24253 = (inst_24251 < inst_24250);
var inst_24254 = inst_24253;
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24254)){
var statearr_24451_24521 = state_24387__$1;
(statearr_24451_24521[(1)] = (7));

} else {
var statearr_24452_24522 = state_24387__$1;
(statearr_24452_24522[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (14))){
var inst_24261 = (state_24387[(22)]);
var inst_24270 = cljs.core.first.call(null,inst_24261);
var inst_24271 = figwheel.client.file_reloading.eval_body.call(null,inst_24270,opts);
var inst_24272 = cljs.core.next.call(null,inst_24261);
var inst_24248 = inst_24272;
var inst_24249 = null;
var inst_24250 = (0);
var inst_24251 = (0);
var state_24387__$1 = (function (){var statearr_24453 = state_24387;
(statearr_24453[(7)] = inst_24248);

(statearr_24453[(8)] = inst_24249);

(statearr_24453[(32)] = inst_24271);

(statearr_24453[(9)] = inst_24250);

(statearr_24453[(10)] = inst_24251);

return statearr_24453;
})();
var statearr_24454_24523 = state_24387__$1;
(statearr_24454_24523[(2)] = null);

(statearr_24454_24523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (45))){
var state_24387__$1 = state_24387;
var statearr_24455_24524 = state_24387__$1;
(statearr_24455_24524[(2)] = null);

(statearr_24455_24524[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (26))){
var inst_24301 = (state_24387[(19)]);
var inst_24307 = (state_24387[(26)]);
var inst_24304 = (state_24387[(23)]);
var inst_24305 = (state_24387[(24)]);
var inst_24309 = (state_24387[(25)]);
var inst_24324 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24326 = (function (){var all_files = inst_24301;
var res_SINGLEQUOTE_ = inst_24304;
var res = inst_24305;
var files_not_loaded = inst_24307;
var dependencies_that_loaded = inst_24309;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24301,inst_24307,inst_24304,inst_24305,inst_24309,inst_24324,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24325){
var map__24456 = p__24325;
var map__24456__$1 = ((((!((map__24456 == null)))?((((map__24456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24456):map__24456);
var namespace = cljs.core.get.call(null,map__24456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24301,inst_24307,inst_24304,inst_24305,inst_24309,inst_24324,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24327 = cljs.core.map.call(null,inst_24326,inst_24305);
var inst_24328 = cljs.core.pr_str.call(null,inst_24327);
var inst_24329 = figwheel.client.utils.log.call(null,inst_24328);
var inst_24330 = (function (){var all_files = inst_24301;
var res_SINGLEQUOTE_ = inst_24304;
var res = inst_24305;
var files_not_loaded = inst_24307;
var dependencies_that_loaded = inst_24309;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24301,inst_24307,inst_24304,inst_24305,inst_24309,inst_24324,inst_24326,inst_24327,inst_24328,inst_24329,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24301,inst_24307,inst_24304,inst_24305,inst_24309,inst_24324,inst_24326,inst_24327,inst_24328,inst_24329,state_val_24388,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24331 = setTimeout(inst_24330,(10));
var state_24387__$1 = (function (){var statearr_24458 = state_24387;
(statearr_24458[(33)] = inst_24324);

(statearr_24458[(34)] = inst_24329);

return statearr_24458;
})();
var statearr_24459_24525 = state_24387__$1;
(statearr_24459_24525[(2)] = inst_24331);

(statearr_24459_24525[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (16))){
var state_24387__$1 = state_24387;
var statearr_24460_24526 = state_24387__$1;
(statearr_24460_24526[(2)] = reload_dependents);

(statearr_24460_24526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (38))){
var inst_24341 = (state_24387[(16)]);
var inst_24358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24341);
var state_24387__$1 = state_24387;
var statearr_24461_24527 = state_24387__$1;
(statearr_24461_24527[(2)] = inst_24358);

(statearr_24461_24527[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (30))){
var state_24387__$1 = state_24387;
var statearr_24462_24528 = state_24387__$1;
(statearr_24462_24528[(2)] = null);

(statearr_24462_24528[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (10))){
var inst_24261 = (state_24387[(22)]);
var inst_24263 = cljs.core.chunked_seq_QMARK_.call(null,inst_24261);
var state_24387__$1 = state_24387;
if(inst_24263){
var statearr_24463_24529 = state_24387__$1;
(statearr_24463_24529[(1)] = (13));

} else {
var statearr_24464_24530 = state_24387__$1;
(statearr_24464_24530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (18))){
var inst_24295 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24295)){
var statearr_24465_24531 = state_24387__$1;
(statearr_24465_24531[(1)] = (19));

} else {
var statearr_24466_24532 = state_24387__$1;
(statearr_24466_24532[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (42))){
var state_24387__$1 = state_24387;
var statearr_24467_24533 = state_24387__$1;
(statearr_24467_24533[(2)] = null);

(statearr_24467_24533[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (37))){
var inst_24353 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24468_24534 = state_24387__$1;
(statearr_24468_24534[(2)] = inst_24353);

(statearr_24468_24534[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (8))){
var inst_24248 = (state_24387[(7)]);
var inst_24261 = (state_24387[(22)]);
var inst_24261__$1 = cljs.core.seq.call(null,inst_24248);
var state_24387__$1 = (function (){var statearr_24469 = state_24387;
(statearr_24469[(22)] = inst_24261__$1);

return statearr_24469;
})();
if(inst_24261__$1){
var statearr_24470_24535 = state_24387__$1;
(statearr_24470_24535[(1)] = (10));

} else {
var statearr_24471_24536 = state_24387__$1;
(statearr_24471_24536[(1)] = (11));

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
}
});})(c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20587__auto__,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto____0 = (function (){
var statearr_24475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24475[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto__);

(statearr_24475[(1)] = (1));

return statearr_24475;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto____1 = (function (state_24387){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_24387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e24476){if((e24476 instanceof Object)){
var ex__20591__auto__ = e24476;
var statearr_24477_24537 = state_24387;
(statearr_24477_24537[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24538 = state_24387;
state_24387 = G__24538;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto__ = function(state_24387){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto____1.call(this,state_24387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20701__auto__ = (function (){var statearr_24478 = f__20700__auto__.call(null);
(statearr_24478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto__);

return statearr_24478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto__,map__24233,map__24233__$1,opts,before_jsload,on_jsload,reload_dependents,map__24234,map__24234__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20699__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24541,link){
var map__24544 = p__24541;
var map__24544__$1 = ((((!((map__24544 == null)))?((((map__24544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24544):map__24544);
var file = cljs.core.get.call(null,map__24544__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24544,map__24544__$1,file){
return (function (p1__24539_SHARP_,p2__24540_SHARP_){
if(cljs.core._EQ_.call(null,p1__24539_SHARP_,p2__24540_SHARP_)){
return p1__24539_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24544,map__24544__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24550){
var map__24551 = p__24550;
var map__24551__$1 = ((((!((map__24551 == null)))?((((map__24551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24551):map__24551);
var match_length = cljs.core.get.call(null,map__24551__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24551__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24546_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24546_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24553 = [];
var len__19428__auto___24556 = arguments.length;
var i__19429__auto___24557 = (0);
while(true){
if((i__19429__auto___24557 < len__19428__auto___24556)){
args24553.push((arguments[i__19429__auto___24557]));

var G__24558 = (i__19429__auto___24557 + (1));
i__19429__auto___24557 = G__24558;
continue;
} else {
}
break;
}

var G__24555 = args24553.length;
switch (G__24555) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24553.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24560_SHARP_,p2__24561_SHARP_){
return cljs.core.assoc.call(null,p1__24560_SHARP_,cljs.core.get.call(null,p2__24561_SHARP_,key),p2__24561_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24562){
var map__24565 = p__24562;
var map__24565__$1 = ((((!((map__24565 == null)))?((((map__24565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24565):map__24565);
var f_data = map__24565__$1;
var file = cljs.core.get.call(null,map__24565__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24567,files_msg){
var map__24574 = p__24567;
var map__24574__$1 = ((((!((map__24574 == null)))?((((map__24574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24574):map__24574);
var opts = map__24574__$1;
var on_cssload = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24576_24580 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24577_24581 = null;
var count__24578_24582 = (0);
var i__24579_24583 = (0);
while(true){
if((i__24579_24583 < count__24578_24582)){
var f_24584 = cljs.core._nth.call(null,chunk__24577_24581,i__24579_24583);
figwheel.client.file_reloading.reload_css_file.call(null,f_24584);

var G__24585 = seq__24576_24580;
var G__24586 = chunk__24577_24581;
var G__24587 = count__24578_24582;
var G__24588 = (i__24579_24583 + (1));
seq__24576_24580 = G__24585;
chunk__24577_24581 = G__24586;
count__24578_24582 = G__24587;
i__24579_24583 = G__24588;
continue;
} else {
var temp__4657__auto___24589 = cljs.core.seq.call(null,seq__24576_24580);
if(temp__4657__auto___24589){
var seq__24576_24590__$1 = temp__4657__auto___24589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24576_24590__$1)){
var c__19173__auto___24591 = cljs.core.chunk_first.call(null,seq__24576_24590__$1);
var G__24592 = cljs.core.chunk_rest.call(null,seq__24576_24590__$1);
var G__24593 = c__19173__auto___24591;
var G__24594 = cljs.core.count.call(null,c__19173__auto___24591);
var G__24595 = (0);
seq__24576_24580 = G__24592;
chunk__24577_24581 = G__24593;
count__24578_24582 = G__24594;
i__24579_24583 = G__24595;
continue;
} else {
var f_24596 = cljs.core.first.call(null,seq__24576_24590__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24596);

var G__24597 = cljs.core.next.call(null,seq__24576_24590__$1);
var G__24598 = null;
var G__24599 = (0);
var G__24600 = (0);
seq__24576_24580 = G__24597;
chunk__24577_24581 = G__24598;
count__24578_24582 = G__24599;
i__24579_24583 = G__24600;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24574,map__24574__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24574,map__24574__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map