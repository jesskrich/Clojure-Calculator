// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25036 = cljs.core._EQ_;
var expr__25037 = (function (){var or__18370__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e25040){if((e25040 instanceof Error)){
var e = e25040;
return false;
} else {
throw e25040;

}
}})();
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25036.call(null,"true",expr__25037))){
return true;
} else {
if(cljs.core.truth_(pred__25036.call(null,"false",expr__25037))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25037)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e25042){if((e25042 instanceof Error)){
var e = e25042;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25042;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19435__auto__ = [];
var len__19428__auto___25044 = arguments.length;
var i__19429__auto___25045 = (0);
while(true){
if((i__19429__auto___25045 < len__19428__auto___25044)){
args__19435__auto__.push((arguments[i__19429__auto___25045]));

var G__25046 = (i__19429__auto___25045 + (1));
i__19429__auto___25045 = G__25046;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25043){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25043));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25047){
var map__25050 = p__25047;
var map__25050__$1 = ((((!((map__25050 == null)))?((((map__25050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25050):map__25050);
var message = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18370__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18358__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18358__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18358__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20699__auto___25212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___25212,ch){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___25212,ch){
return (function (state_25181){
var state_val_25182 = (state_25181[(1)]);
if((state_val_25182 === (7))){
var inst_25177 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25183_25213 = state_25181__$1;
(statearr_25183_25213[(2)] = inst_25177);

(statearr_25183_25213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (1))){
var state_25181__$1 = state_25181;
var statearr_25184_25214 = state_25181__$1;
(statearr_25184_25214[(2)] = null);

(statearr_25184_25214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (4))){
var inst_25134 = (state_25181[(7)]);
var inst_25134__$1 = (state_25181[(2)]);
var state_25181__$1 = (function (){var statearr_25185 = state_25181;
(statearr_25185[(7)] = inst_25134__$1);

return statearr_25185;
})();
if(cljs.core.truth_(inst_25134__$1)){
var statearr_25186_25215 = state_25181__$1;
(statearr_25186_25215[(1)] = (5));

} else {
var statearr_25187_25216 = state_25181__$1;
(statearr_25187_25216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (15))){
var inst_25141 = (state_25181[(8)]);
var inst_25156 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25141);
var inst_25157 = cljs.core.first.call(null,inst_25156);
var inst_25158 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25157);
var inst_25159 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25158)].join('');
var inst_25160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25159);
var state_25181__$1 = state_25181;
var statearr_25188_25217 = state_25181__$1;
(statearr_25188_25217[(2)] = inst_25160);

(statearr_25188_25217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (13))){
var inst_25165 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25189_25218 = state_25181__$1;
(statearr_25189_25218[(2)] = inst_25165);

(statearr_25189_25218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (6))){
var state_25181__$1 = state_25181;
var statearr_25190_25219 = state_25181__$1;
(statearr_25190_25219[(2)] = null);

(statearr_25190_25219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (17))){
var inst_25163 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25191_25220 = state_25181__$1;
(statearr_25191_25220[(2)] = inst_25163);

(statearr_25191_25220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (3))){
var inst_25179 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25181__$1,inst_25179);
} else {
if((state_val_25182 === (12))){
var inst_25140 = (state_25181[(9)]);
var inst_25154 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25140,opts);
var state_25181__$1 = state_25181;
if(cljs.core.truth_(inst_25154)){
var statearr_25192_25221 = state_25181__$1;
(statearr_25192_25221[(1)] = (15));

} else {
var statearr_25193_25222 = state_25181__$1;
(statearr_25193_25222[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (2))){
var state_25181__$1 = state_25181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25181__$1,(4),ch);
} else {
if((state_val_25182 === (11))){
var inst_25141 = (state_25181[(8)]);
var inst_25146 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25147 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25141);
var inst_25148 = cljs.core.async.timeout.call(null,(1000));
var inst_25149 = [inst_25147,inst_25148];
var inst_25150 = (new cljs.core.PersistentVector(null,2,(5),inst_25146,inst_25149,null));
var state_25181__$1 = state_25181;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25181__$1,(14),inst_25150);
} else {
if((state_val_25182 === (9))){
var inst_25141 = (state_25181[(8)]);
var inst_25167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25168 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25141);
var inst_25169 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25168);
var inst_25170 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25169)].join('');
var inst_25171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25170);
var state_25181__$1 = (function (){var statearr_25194 = state_25181;
(statearr_25194[(10)] = inst_25167);

return statearr_25194;
})();
var statearr_25195_25223 = state_25181__$1;
(statearr_25195_25223[(2)] = inst_25171);

(statearr_25195_25223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (5))){
var inst_25134 = (state_25181[(7)]);
var inst_25136 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25137 = (new cljs.core.PersistentArrayMap(null,2,inst_25136,null));
var inst_25138 = (new cljs.core.PersistentHashSet(null,inst_25137,null));
var inst_25139 = figwheel.client.focus_msgs.call(null,inst_25138,inst_25134);
var inst_25140 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25139);
var inst_25141 = cljs.core.first.call(null,inst_25139);
var inst_25142 = figwheel.client.autoload_QMARK_.call(null);
var state_25181__$1 = (function (){var statearr_25196 = state_25181;
(statearr_25196[(9)] = inst_25140);

(statearr_25196[(8)] = inst_25141);

return statearr_25196;
})();
if(cljs.core.truth_(inst_25142)){
var statearr_25197_25224 = state_25181__$1;
(statearr_25197_25224[(1)] = (8));

} else {
var statearr_25198_25225 = state_25181__$1;
(statearr_25198_25225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (14))){
var inst_25152 = (state_25181[(2)]);
var state_25181__$1 = state_25181;
var statearr_25199_25226 = state_25181__$1;
(statearr_25199_25226[(2)] = inst_25152);

(statearr_25199_25226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (16))){
var state_25181__$1 = state_25181;
var statearr_25200_25227 = state_25181__$1;
(statearr_25200_25227[(2)] = null);

(statearr_25200_25227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (10))){
var inst_25173 = (state_25181[(2)]);
var state_25181__$1 = (function (){var statearr_25201 = state_25181;
(statearr_25201[(11)] = inst_25173);

return statearr_25201;
})();
var statearr_25202_25228 = state_25181__$1;
(statearr_25202_25228[(2)] = null);

(statearr_25202_25228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25182 === (8))){
var inst_25140 = (state_25181[(9)]);
var inst_25144 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25140,opts);
var state_25181__$1 = state_25181;
if(cljs.core.truth_(inst_25144)){
var statearr_25203_25229 = state_25181__$1;
(statearr_25203_25229[(1)] = (11));

} else {
var statearr_25204_25230 = state_25181__$1;
(statearr_25204_25230[(1)] = (12));

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
});})(c__20699__auto___25212,ch))
;
return ((function (switch__20587__auto__,c__20699__auto___25212,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20588__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20588__auto____0 = (function (){
var statearr_25208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25208[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20588__auto__);

(statearr_25208[(1)] = (1));

return statearr_25208;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20588__auto____1 = (function (state_25181){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_25181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e25209){if((e25209 instanceof Object)){
var ex__20591__auto__ = e25209;
var statearr_25210_25231 = state_25181;
(statearr_25210_25231[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25232 = state_25181;
state_25181 = G__25232;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20588__auto__ = function(state_25181){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20588__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20588__auto____1.call(this,state_25181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20588__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20588__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___25212,ch))
})();
var state__20701__auto__ = (function (){var statearr_25211 = f__20700__auto__.call(null);
(statearr_25211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___25212);

return statearr_25211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___25212,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25233_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25233_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25240 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25240){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25238 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25239 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25239;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25238;
}}catch (e25237){if((e25237 instanceof Error)){
var e = e25237;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25240], null));
} else {
var e = e25237;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25240))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25241){
var map__25248 = p__25241;
var map__25248__$1 = ((((!((map__25248 == null)))?((((map__25248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25248):map__25248);
var opts = map__25248__$1;
var build_id = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25248,map__25248__$1,opts,build_id){
return (function (p__25250){
var vec__25251 = p__25250;
var map__25252 = cljs.core.nth.call(null,vec__25251,(0),null);
var map__25252__$1 = ((((!((map__25252 == null)))?((((map__25252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25252):map__25252);
var msg = map__25252__$1;
var msg_name = cljs.core.get.call(null,map__25252__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25251,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25251,map__25252,map__25252__$1,msg,msg_name,_,map__25248,map__25248__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25251,map__25252,map__25252__$1,msg,msg_name,_,map__25248,map__25248__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25248,map__25248__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25258){
var vec__25259 = p__25258;
var map__25260 = cljs.core.nth.call(null,vec__25259,(0),null);
var map__25260__$1 = ((((!((map__25260 == null)))?((((map__25260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25260):map__25260);
var msg = map__25260__$1;
var msg_name = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25259,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25262){
var map__25272 = p__25262;
var map__25272__$1 = ((((!((map__25272 == null)))?((((map__25272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25272):map__25272);
var on_compile_warning = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25272__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25272,map__25272__$1,on_compile_warning,on_compile_fail){
return (function (p__25274){
var vec__25275 = p__25274;
var map__25276 = cljs.core.nth.call(null,vec__25275,(0),null);
var map__25276__$1 = ((((!((map__25276 == null)))?((((map__25276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25276):map__25276);
var msg = map__25276__$1;
var msg_name = cljs.core.get.call(null,map__25276__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25275,(1));
var pred__25278 = cljs.core._EQ_;
var expr__25279 = msg_name;
if(cljs.core.truth_(pred__25278.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25279))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25278.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25279))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25272,map__25272__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto__,msg_hist,msg_names,msg){
return (function (state_25495){
var state_val_25496 = (state_25495[(1)]);
if((state_val_25496 === (7))){
var inst_25419 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25419)){
var statearr_25497_25543 = state_25495__$1;
(statearr_25497_25543[(1)] = (8));

} else {
var statearr_25498_25544 = state_25495__$1;
(statearr_25498_25544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (20))){
var inst_25489 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25499_25545 = state_25495__$1;
(statearr_25499_25545[(2)] = inst_25489);

(statearr_25499_25545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (27))){
var inst_25485 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25500_25546 = state_25495__$1;
(statearr_25500_25546[(2)] = inst_25485);

(statearr_25500_25546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (1))){
var inst_25412 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25412)){
var statearr_25501_25547 = state_25495__$1;
(statearr_25501_25547[(1)] = (2));

} else {
var statearr_25502_25548 = state_25495__$1;
(statearr_25502_25548[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (24))){
var inst_25487 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25503_25549 = state_25495__$1;
(statearr_25503_25549[(2)] = inst_25487);

(statearr_25503_25549[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (4))){
var inst_25493 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25495__$1,inst_25493);
} else {
if((state_val_25496 === (15))){
var inst_25491 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25504_25550 = state_25495__$1;
(statearr_25504_25550[(2)] = inst_25491);

(statearr_25504_25550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (21))){
var inst_25450 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25505_25551 = state_25495__$1;
(statearr_25505_25551[(2)] = inst_25450);

(statearr_25505_25551[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (31))){
var inst_25474 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25474)){
var statearr_25506_25552 = state_25495__$1;
(statearr_25506_25552[(1)] = (34));

} else {
var statearr_25507_25553 = state_25495__$1;
(statearr_25507_25553[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (32))){
var inst_25483 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25508_25554 = state_25495__$1;
(statearr_25508_25554[(2)] = inst_25483);

(statearr_25508_25554[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (33))){
var inst_25472 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25509_25555 = state_25495__$1;
(statearr_25509_25555[(2)] = inst_25472);

(statearr_25509_25555[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (13))){
var inst_25433 = figwheel.client.heads_up.clear.call(null);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(16),inst_25433);
} else {
if((state_val_25496 === (22))){
var inst_25454 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25455 = figwheel.client.heads_up.append_message.call(null,inst_25454);
var state_25495__$1 = state_25495;
var statearr_25510_25556 = state_25495__$1;
(statearr_25510_25556[(2)] = inst_25455);

(statearr_25510_25556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (36))){
var inst_25481 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25511_25557 = state_25495__$1;
(statearr_25511_25557[(2)] = inst_25481);

(statearr_25511_25557[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (29))){
var inst_25465 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25512_25558 = state_25495__$1;
(statearr_25512_25558[(2)] = inst_25465);

(statearr_25512_25558[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (6))){
var inst_25414 = (state_25495[(7)]);
var state_25495__$1 = state_25495;
var statearr_25513_25559 = state_25495__$1;
(statearr_25513_25559[(2)] = inst_25414);

(statearr_25513_25559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (28))){
var inst_25461 = (state_25495[(2)]);
var inst_25462 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25463 = figwheel.client.heads_up.display_warning.call(null,inst_25462);
var state_25495__$1 = (function (){var statearr_25514 = state_25495;
(statearr_25514[(8)] = inst_25461);

return statearr_25514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(29),inst_25463);
} else {
if((state_val_25496 === (25))){
var inst_25459 = figwheel.client.heads_up.clear.call(null);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(28),inst_25459);
} else {
if((state_val_25496 === (34))){
var inst_25476 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(37),inst_25476);
} else {
if((state_val_25496 === (17))){
var inst_25441 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25515_25560 = state_25495__$1;
(statearr_25515_25560[(2)] = inst_25441);

(statearr_25515_25560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (3))){
var inst_25431 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25431)){
var statearr_25516_25561 = state_25495__$1;
(statearr_25516_25561[(1)] = (13));

} else {
var statearr_25517_25562 = state_25495__$1;
(statearr_25517_25562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (12))){
var inst_25427 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25518_25563 = state_25495__$1;
(statearr_25518_25563[(2)] = inst_25427);

(statearr_25518_25563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (2))){
var inst_25414 = (state_25495[(7)]);
var inst_25414__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25495__$1 = (function (){var statearr_25519 = state_25495;
(statearr_25519[(7)] = inst_25414__$1);

return statearr_25519;
})();
if(cljs.core.truth_(inst_25414__$1)){
var statearr_25520_25564 = state_25495__$1;
(statearr_25520_25564[(1)] = (5));

} else {
var statearr_25521_25565 = state_25495__$1;
(statearr_25521_25565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (23))){
var inst_25457 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25457)){
var statearr_25522_25566 = state_25495__$1;
(statearr_25522_25566[(1)] = (25));

} else {
var statearr_25523_25567 = state_25495__$1;
(statearr_25523_25567[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (35))){
var state_25495__$1 = state_25495;
var statearr_25524_25568 = state_25495__$1;
(statearr_25524_25568[(2)] = null);

(statearr_25524_25568[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (19))){
var inst_25452 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25452)){
var statearr_25525_25569 = state_25495__$1;
(statearr_25525_25569[(1)] = (22));

} else {
var statearr_25526_25570 = state_25495__$1;
(statearr_25526_25570[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (11))){
var inst_25423 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25527_25571 = state_25495__$1;
(statearr_25527_25571[(2)] = inst_25423);

(statearr_25527_25571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (9))){
var inst_25425 = figwheel.client.heads_up.clear.call(null);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(12),inst_25425);
} else {
if((state_val_25496 === (5))){
var inst_25416 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25495__$1 = state_25495;
var statearr_25528_25572 = state_25495__$1;
(statearr_25528_25572[(2)] = inst_25416);

(statearr_25528_25572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (14))){
var inst_25443 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25443)){
var statearr_25529_25573 = state_25495__$1;
(statearr_25529_25573[(1)] = (18));

} else {
var statearr_25530_25574 = state_25495__$1;
(statearr_25530_25574[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (26))){
var inst_25467 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25495__$1 = state_25495;
if(cljs.core.truth_(inst_25467)){
var statearr_25531_25575 = state_25495__$1;
(statearr_25531_25575[(1)] = (30));

} else {
var statearr_25532_25576 = state_25495__$1;
(statearr_25532_25576[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (16))){
var inst_25435 = (state_25495[(2)]);
var inst_25436 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25437 = figwheel.client.format_messages.call(null,inst_25436);
var inst_25438 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25439 = figwheel.client.heads_up.display_error.call(null,inst_25437,inst_25438);
var state_25495__$1 = (function (){var statearr_25533 = state_25495;
(statearr_25533[(9)] = inst_25435);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(17),inst_25439);
} else {
if((state_val_25496 === (30))){
var inst_25469 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25470 = figwheel.client.heads_up.display_warning.call(null,inst_25469);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(33),inst_25470);
} else {
if((state_val_25496 === (10))){
var inst_25429 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25534_25577 = state_25495__$1;
(statearr_25534_25577[(2)] = inst_25429);

(statearr_25534_25577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (18))){
var inst_25445 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25446 = figwheel.client.format_messages.call(null,inst_25445);
var inst_25447 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25448 = figwheel.client.heads_up.display_error.call(null,inst_25446,inst_25447);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(21),inst_25448);
} else {
if((state_val_25496 === (37))){
var inst_25478 = (state_25495[(2)]);
var state_25495__$1 = state_25495;
var statearr_25535_25578 = state_25495__$1;
(statearr_25535_25578[(2)] = inst_25478);

(statearr_25535_25578[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25496 === (8))){
var inst_25421 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25495__$1 = state_25495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25495__$1,(11),inst_25421);
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
});})(c__20699__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20587__auto__,c__20699__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto____0 = (function (){
var statearr_25539 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25539[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto__);

(statearr_25539[(1)] = (1));

return statearr_25539;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto____1 = (function (state_25495){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_25495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e25540){if((e25540 instanceof Object)){
var ex__20591__auto__ = e25540;
var statearr_25541_25579 = state_25495;
(statearr_25541_25579[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25580 = state_25495;
state_25495 = G__25580;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto__ = function(state_25495){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto____1.call(this,state_25495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto__,msg_hist,msg_names,msg))
})();
var state__20701__auto__ = (function (){var statearr_25542 = f__20700__auto__.call(null);
(statearr_25542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto__);

return statearr_25542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto__,msg_hist,msg_names,msg))
);

return c__20699__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20699__auto___25643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto___25643,ch){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto___25643,ch){
return (function (state_25626){
var state_val_25627 = (state_25626[(1)]);
if((state_val_25627 === (1))){
var state_25626__$1 = state_25626;
var statearr_25628_25644 = state_25626__$1;
(statearr_25628_25644[(2)] = null);

(statearr_25628_25644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (2))){
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(4),ch);
} else {
if((state_val_25627 === (3))){
var inst_25624 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25626__$1,inst_25624);
} else {
if((state_val_25627 === (4))){
var inst_25614 = (state_25626[(7)]);
var inst_25614__$1 = (state_25626[(2)]);
var state_25626__$1 = (function (){var statearr_25629 = state_25626;
(statearr_25629[(7)] = inst_25614__$1);

return statearr_25629;
})();
if(cljs.core.truth_(inst_25614__$1)){
var statearr_25630_25645 = state_25626__$1;
(statearr_25630_25645[(1)] = (5));

} else {
var statearr_25631_25646 = state_25626__$1;
(statearr_25631_25646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (5))){
var inst_25614 = (state_25626[(7)]);
var inst_25616 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25614);
var state_25626__$1 = state_25626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25626__$1,(8),inst_25616);
} else {
if((state_val_25627 === (6))){
var state_25626__$1 = state_25626;
var statearr_25632_25647 = state_25626__$1;
(statearr_25632_25647[(2)] = null);

(statearr_25632_25647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (7))){
var inst_25622 = (state_25626[(2)]);
var state_25626__$1 = state_25626;
var statearr_25633_25648 = state_25626__$1;
(statearr_25633_25648[(2)] = inst_25622);

(statearr_25633_25648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25627 === (8))){
var inst_25618 = (state_25626[(2)]);
var state_25626__$1 = (function (){var statearr_25634 = state_25626;
(statearr_25634[(8)] = inst_25618);

return statearr_25634;
})();
var statearr_25635_25649 = state_25626__$1;
(statearr_25635_25649[(2)] = null);

(statearr_25635_25649[(1)] = (2));


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
});})(c__20699__auto___25643,ch))
;
return ((function (switch__20587__auto__,c__20699__auto___25643,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20588__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20588__auto____0 = (function (){
var statearr_25639 = [null,null,null,null,null,null,null,null,null];
(statearr_25639[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20588__auto__);

(statearr_25639[(1)] = (1));

return statearr_25639;
});
var figwheel$client$heads_up_plugin_$_state_machine__20588__auto____1 = (function (state_25626){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_25626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e25640){if((e25640 instanceof Object)){
var ex__20591__auto__ = e25640;
var statearr_25641_25650 = state_25626;
(statearr_25641_25650[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25651 = state_25626;
state_25626 = G__25651;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20588__auto__ = function(state_25626){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20588__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20588__auto____1.call(this,state_25626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20588__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20588__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto___25643,ch))
})();
var state__20701__auto__ = (function (){var statearr_25642 = f__20700__auto__.call(null);
(statearr_25642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto___25643);

return statearr_25642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto___25643,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20699__auto__){
return (function (){
var f__20700__auto__ = (function (){var switch__20587__auto__ = ((function (c__20699__auto__){
return (function (state_25672){
var state_val_25673 = (state_25672[(1)]);
if((state_val_25673 === (1))){
var inst_25667 = cljs.core.async.timeout.call(null,(3000));
var state_25672__$1 = state_25672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25672__$1,(2),inst_25667);
} else {
if((state_val_25673 === (2))){
var inst_25669 = (state_25672[(2)]);
var inst_25670 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25672__$1 = (function (){var statearr_25674 = state_25672;
(statearr_25674[(7)] = inst_25669);

return statearr_25674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25672__$1,inst_25670);
} else {
return null;
}
}
});})(c__20699__auto__))
;
return ((function (switch__20587__auto__,c__20699__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20588__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20588__auto____0 = (function (){
var statearr_25678 = [null,null,null,null,null,null,null,null];
(statearr_25678[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20588__auto__);

(statearr_25678[(1)] = (1));

return statearr_25678;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20588__auto____1 = (function (state_25672){
while(true){
var ret_value__20589__auto__ = (function (){try{while(true){
var result__20590__auto__ = switch__20587__auto__.call(null,state_25672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20590__auto__;
}
break;
}
}catch (e25679){if((e25679 instanceof Object)){
var ex__20591__auto__ = e25679;
var statearr_25680_25682 = state_25672;
(statearr_25680_25682[(5)] = ex__20591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25683 = state_25672;
state_25672 = G__25683;
continue;
} else {
return ret_value__20589__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20588__auto__ = function(state_25672){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20588__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20588__auto____1.call(this,state_25672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20588__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20588__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20588__auto__;
})()
;})(switch__20587__auto__,c__20699__auto__))
})();
var state__20701__auto__ = (function (){var statearr_25681 = f__20700__auto__.call(null);
(statearr_25681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20699__auto__);

return statearr_25681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20701__auto__);
});})(c__20699__auto__))
);

return c__20699__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25684){
var map__25691 = p__25684;
var map__25691__$1 = ((((!((map__25691 == null)))?((((map__25691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25691):map__25691);
var ed = map__25691__$1;
var formatted_exception = cljs.core.get.call(null,map__25691__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25691__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25691__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25693_25697 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25694_25698 = null;
var count__25695_25699 = (0);
var i__25696_25700 = (0);
while(true){
if((i__25696_25700 < count__25695_25699)){
var msg_25701 = cljs.core._nth.call(null,chunk__25694_25698,i__25696_25700);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25701);

var G__25702 = seq__25693_25697;
var G__25703 = chunk__25694_25698;
var G__25704 = count__25695_25699;
var G__25705 = (i__25696_25700 + (1));
seq__25693_25697 = G__25702;
chunk__25694_25698 = G__25703;
count__25695_25699 = G__25704;
i__25696_25700 = G__25705;
continue;
} else {
var temp__4657__auto___25706 = cljs.core.seq.call(null,seq__25693_25697);
if(temp__4657__auto___25706){
var seq__25693_25707__$1 = temp__4657__auto___25706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25693_25707__$1)){
var c__19173__auto___25708 = cljs.core.chunk_first.call(null,seq__25693_25707__$1);
var G__25709 = cljs.core.chunk_rest.call(null,seq__25693_25707__$1);
var G__25710 = c__19173__auto___25708;
var G__25711 = cljs.core.count.call(null,c__19173__auto___25708);
var G__25712 = (0);
seq__25693_25697 = G__25709;
chunk__25694_25698 = G__25710;
count__25695_25699 = G__25711;
i__25696_25700 = G__25712;
continue;
} else {
var msg_25713 = cljs.core.first.call(null,seq__25693_25707__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25713);

var G__25714 = cljs.core.next.call(null,seq__25693_25707__$1);
var G__25715 = null;
var G__25716 = (0);
var G__25717 = (0);
seq__25693_25697 = G__25714;
chunk__25694_25698 = G__25715;
count__25695_25699 = G__25716;
i__25696_25700 = G__25717;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25718){
var map__25721 = p__25718;
var map__25721__$1 = ((((!((map__25721 == null)))?((((map__25721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25721):map__25721);
var w = map__25721__$1;
var message = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18358__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18358__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18358__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25729 = cljs.core.seq.call(null,plugins);
var chunk__25730 = null;
var count__25731 = (0);
var i__25732 = (0);
while(true){
if((i__25732 < count__25731)){
var vec__25733 = cljs.core._nth.call(null,chunk__25730,i__25732);
var k = cljs.core.nth.call(null,vec__25733,(0),null);
var plugin = cljs.core.nth.call(null,vec__25733,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25735 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25729,chunk__25730,count__25731,i__25732,pl_25735,vec__25733,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25735.call(null,msg_hist);
});})(seq__25729,chunk__25730,count__25731,i__25732,pl_25735,vec__25733,k,plugin))
);
} else {
}

var G__25736 = seq__25729;
var G__25737 = chunk__25730;
var G__25738 = count__25731;
var G__25739 = (i__25732 + (1));
seq__25729 = G__25736;
chunk__25730 = G__25737;
count__25731 = G__25738;
i__25732 = G__25739;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25729);
if(temp__4657__auto__){
var seq__25729__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25729__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__25729__$1);
var G__25740 = cljs.core.chunk_rest.call(null,seq__25729__$1);
var G__25741 = c__19173__auto__;
var G__25742 = cljs.core.count.call(null,c__19173__auto__);
var G__25743 = (0);
seq__25729 = G__25740;
chunk__25730 = G__25741;
count__25731 = G__25742;
i__25732 = G__25743;
continue;
} else {
var vec__25734 = cljs.core.first.call(null,seq__25729__$1);
var k = cljs.core.nth.call(null,vec__25734,(0),null);
var plugin = cljs.core.nth.call(null,vec__25734,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25744 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25729,chunk__25730,count__25731,i__25732,pl_25744,vec__25734,k,plugin,seq__25729__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25744.call(null,msg_hist);
});})(seq__25729,chunk__25730,count__25731,i__25732,pl_25744,vec__25734,k,plugin,seq__25729__$1,temp__4657__auto__))
);
} else {
}

var G__25745 = cljs.core.next.call(null,seq__25729__$1);
var G__25746 = null;
var G__25747 = (0);
var G__25748 = (0);
seq__25729 = G__25745;
chunk__25730 = G__25746;
count__25731 = G__25747;
i__25732 = G__25748;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25749 = [];
var len__19428__auto___25752 = arguments.length;
var i__19429__auto___25753 = (0);
while(true){
if((i__19429__auto___25753 < len__19428__auto___25752)){
args25749.push((arguments[i__19429__auto___25753]));

var G__25754 = (i__19429__auto___25753 + (1));
i__19429__auto___25753 = G__25754;
continue;
} else {
}
break;
}

var G__25751 = args25749.length;
switch (G__25751) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25749.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19435__auto__ = [];
var len__19428__auto___25760 = arguments.length;
var i__19429__auto___25761 = (0);
while(true){
if((i__19429__auto___25761 < len__19428__auto___25760)){
args__19435__auto__.push((arguments[i__19429__auto___25761]));

var G__25762 = (i__19429__auto___25761 + (1));
i__19429__auto___25761 = G__25762;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25757){
var map__25758 = p__25757;
var map__25758__$1 = ((((!((map__25758 == null)))?((((map__25758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25758):map__25758);
var opts = map__25758__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25756){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25756));
});

//# sourceMappingURL=client.js.map