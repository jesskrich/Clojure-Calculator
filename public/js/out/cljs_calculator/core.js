// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs_calculator.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
cljs_calculator.core.initial_db = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"op1","op1",-170360693),"",new cljs.core.Keyword(null,"op2","op2",935389141),"",new cljs.core.Keyword(null,"operator1","operator1",41156043),"",new cljs.core.Keyword(null,"operator2","operator2",-807367581),"",new cljs.core.Keyword(null,"result","result",1415092211),"",new cljs.core.Keyword(null,"zeroes-blocked","zeroes-blocked",-1886215188),true], null);
cljs_calculator.core.app_db = reagent.core.atom.call(null,cljs_calculator.core.initial_db);
cljs_calculator.core.header = (function cljs_calculator$core$header(color,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue"], null)], null),text], null);
});
cljs_calculator.core.px = (function cljs_calculator$core$px(num){
return [cljs.core.str(num),cljs.core.str("px")].join('');
});
cljs_calculator.core.ops = new cljs.core.PersistentArrayMap(null, 4, ["+",cljs.core._PLUS_,"-",cljs.core._,"*",cljs.core._STAR_,"/",cljs.core._SLASH_], null);
cljs_calculator.core.operate = (function cljs_calculator$core$operate(){
var db = cljs.core.deref.call(null,cljs_calculator.core.app_db);
var op1 = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"op1","op1",-170360693));
var op2 = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"op2","op2",935389141));
var op1_n = cljs.reader.read_string.call(null,op1);
var op2_n = cljs.reader.read_string.call(null,op2);
var operator1 = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"operator1","operator1",41156043));
var operator2 = db.call(null,new cljs.core.Keyword(null,"operator2","operator2",-807367581));
var op_fn = cljs.core.get.call(null,cljs_calculator.core.ops,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"operator1","operator1",41156043)));
var result = op_fn.call(null,op1_n,op2_n);
return cljs.core.reset_BANG_.call(null,cljs_calculator.core.app_db,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op1","op1",-170360693),[cljs.core.str(result)].join(''),new cljs.core.Keyword(null,"op2","op2",935389141),"",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"operator1","operator1",41156043),operator2,new cljs.core.Keyword(null,"operator2","operator2",-807367581),"",new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"op1","op1",-170360693),new cljs.core.Keyword(null,"zeroes-blocked","zeroes-blocked",-1886215188),true], null));
});
cljs_calculator.core.clear = (function cljs_calculator$core$clear(){
return cljs.core.reset_BANG_.call(null,cljs_calculator.core.app_db,cljs_calculator.core.initial_db);
});
cljs_calculator.core.buttons = (function cljs_calculator$core$buttons(btn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,cljs.core.gensym.call(null,"button-key-")),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var db = cljs.core.deref.call(null,cljs_calculator.core.app_db);
var zb = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"zeroes-blocked","zeroes-blocked",-1886215188));
var display_key = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"display","display",242065432));
var display_str = cljs.core.get.call(null,db,display_key);
var operator1 = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"operator1","operator1",41156043));
var result = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"result","result",1415092211));
var op2 = cljs.core.get.call(null,db,new cljs.core.Keyword(null,"op2","op2",935389141));
if((cljs.core._EQ_.call(null,btn,(0))) && (cljs.core._EQ_.call(null,zb,true))){
return null;
} else {
if((cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["=",null,"*",null,"/",null,"-",null,"+",null,"c",null], null), null),[cljs.core.str(btn)].join('')))) && ((cljs.core.count.call(null,display_str) < (5))) && (cljs.core.not_EQ_.call(null,result,new cljs.core.Keyword(null,"op1","op1",-170360693)))){
cljs.core.swap_BANG_.call(null,cljs_calculator.core.app_db,cljs.core.update,display_key,cljs.core.str,btn);

return cljs.core.swap_BANG_.call(null,cljs_calculator.core.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"zeroes-blocked","zeroes-blocked",-1886215188),false);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["*",null,"/",null,"-",null,"+",null], null), null),[cljs.core.str(btn)].join('')))){
cljs.core.swap_BANG_.call(null,cljs_calculator.core.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"zeroes-blocked","zeroes-blocked",-1886215188),true);

cljs.core.swap_BANG_.call(null,cljs_calculator.core.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211),"");

cljs.core.swap_BANG_.call(null,cljs_calculator.core.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"operator1","operator1",41156043),btn);

return cljs.core.swap_BANG_.call(null,cljs_calculator.core.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"op2","op2",935389141));
} else {
if(cljs.core._EQ_.call(null,btn,"=")){
return cljs_calculator.core.operate.call(null);
} else {
if(cljs.core._EQ_.call(null,btn,"c")){
return cljs_calculator.core.clear.call(null);
} else {
return null;
}
}
}
}
}
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["red","center","bold","left",cljs_calculator.core.px.call(null,(20)),"blue",cljs_calculator.core.px.call(null,(5)),cljs_calculator.core.px.call(null,(40)),"relative","1px solid black",cljs_calculator.core.px.call(null,(5)),cljs_calculator.core.px.call(null,(40))])], null),btn], null);
});
cljs_calculator.core.calculator = (function cljs_calculator$core$calculator(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,cljs.core.gensym.call(null,"calculator-")),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["yellow","0px",cljs_calculator.core.px.call(null,(300)),cljs_calculator.core.px.call(null,(10)),"relative","3px solid",cljs_calculator.core.px.call(null,(25)),cljs_calculator.core.px.call(null,(300)),"auto"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,cljs.core.gensym.call(null,"display-")),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["right",cljs_calculator.core.px.call(null,(-100)),"white",cljs_calculator.core.px.call(null,(15)),cljs_calculator.core.px.call(null,(200)),cljs_calculator.core.px.call(null,(5)),"relative","1px solid",cljs_calculator.core.px.call(null,(5)),cljs_calculator.core.px.call(null,(15)),cljs_calculator.core.px.call(null,(30)),"50%"])], null),(function (){var ro = cljs.core.deref.call(null,cljs_calculator.core.app_db).call(null,cljs.core.deref.call(null,cljs_calculator.core.app_db).call(null,new cljs.core.Keyword(null,"display","display",242065432)));
if(cljs.core._EQ_.call(null,ro,"")){
return "0";
} else {
return cljs.core.apply.call(null,cljs.core.str,ro);
}
})()], null),cljs.core.map.call(null,(function (n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_calculator.core.buttons,n], null);
}),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8),(9),"+","*","/","-","=","c"], null))], null);
});
cljs_calculator.core.home_page = (function cljs_calculator$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_calculator.core.header,"red","Calculator"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"green",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),cljs_calculator.core.px.call(null,(20)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),cljs_calculator.core.px.call(null,(0))], null)], null),"Made with Clojure"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_calculator.core.calculator], null)], null);
});
cljs_calculator.core.mount_root = (function cljs_calculator$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_calculator.core.home_page], null),document.getElementById("app"));
});
cljs_calculator.core.init_BANG_ = (function cljs_calculator$core$init_BANG_(){
return cljs_calculator.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map