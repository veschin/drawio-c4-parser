goog.provide('drawio_ui.upload');
if((typeof drawio_ui !== 'undefined') && (typeof drawio_ui.upload !== 'undefined') && (typeof drawio_ui.upload.upload_state !== 'undefined')){
} else {
drawio_ui.upload.upload_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"message","message",-406056002),"",new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
}
drawio_ui.upload.reset_upload_state_BANG_ = (function drawio_ui$upload$reset_upload_state_BANG_(){
return cljs.core.reset_BANG_(drawio_ui.upload.upload_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"message","message",-406056002),"",new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"result","result",1415092211),null], null));
});
drawio_ui.upload.set_upload_status_BANG_ = (function drawio_ui$upload$set_upload_status_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23594 = arguments.length;
var i__5727__auto___23595 = (0);
while(true){
if((i__5727__auto___23595 < len__5726__auto___23594)){
args__5732__auto__.push((arguments[i__5727__auto___23595]));

var G__23596 = (i__5727__auto___23595 + (1));
i__5727__auto___23595 = G__23596;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (status,p__23462){
var map__23463 = p__23462;
var map__23463__$1 = cljs.core.__destructure_map(map__23463);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23463__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23463__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23463__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(drawio_ui.upload.upload_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),status,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__5002__auto__ = message;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawio_ui.upload.upload_state));
}
})(),new cljs.core.Keyword(null,"progress","progress",244323547),(function (){var or__5002__auto__ = progress;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawio_ui.upload.upload_state));
}
})(),new cljs.core.Keyword(null,"result","result",1415092211),(function (){var or__5002__auto__ = result;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawio_ui.upload.upload_state));
}
})()], 0));
}));

(drawio_ui.upload.set_upload_status_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(drawio_ui.upload.set_upload_status_BANG_.cljs$lang$applyTo = (function (seq23460){
var G__23461 = cljs.core.first(seq23460);
var seq23460__$1 = cljs.core.next(seq23460);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23461,seq23460__$1);
}));

drawio_ui.upload.get_file_type = (function drawio_ui$upload$get_file_type(file){
var name = file.name;
var type = file.type;
if(cljs.core.truth_(name.endsWith(".xml"))){
return new cljs.core.Keyword(null,"export","export",214356590);
} else {
if(cljs.core.truth_(name.endsWith(".drawio"))){
return new cljs.core.Keyword(null,"export","export",214356590);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"image/png")){
return new cljs.core.Keyword(null,"png","png",551930691);
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
}
}
});
drawio_ui.upload.handle_file_upload = (function drawio_ui$upload$handle_file_upload(file,diagram_name){
var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_23510){
var state_val_23511 = (state_23510[(1)]);
if((state_val_23511 === (7))){
var inst_23473 = (state_23510[(7)]);
var inst_23503 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_23473);
var inst_23504 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),inst_23503], 0));
var state_23510__$1 = state_23510;
var statearr_23512_23597 = state_23510__$1;
(statearr_23512_23597[(2)] = inst_23504);

(statearr_23512_23597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (1))){
var inst_23465 = (state_23510[(8)]);
var inst_23464 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uploading","uploading",1069939393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Processing file..."], 0));
var inst_23465__$1 = drawio_ui.upload.get_file_type(file);
var inst_23466 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23465__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_23510__$1 = (function (){var statearr_23513 = state_23510;
(statearr_23513[(9)] = inst_23464);

(statearr_23513[(8)] = inst_23465__$1);

return statearr_23513;
})();
if(inst_23466){
var statearr_23514_23598 = state_23510__$1;
(statearr_23514_23598[(1)] = (2));

} else {
var statearr_23515_23599 = state_23510__$1;
(statearr_23515_23599[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (4))){
var inst_23508 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23510__$1,inst_23508);
} else {
if((state_val_23511 === (15))){
var inst_23501 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
var statearr_23516_23600 = state_23510__$1;
(statearr_23516_23600[(2)] = inst_23501);

(statearr_23516_23600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (13))){
var inst_23491 = (state_23510[(10)]);
var inst_23488 = (state_23510[(11)]);
var inst_23493 = ["Successfully uploaded: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(diagram_name)].join('');
var inst_23494 = [new cljs.core.Keyword(null,"diagram-id","diagram-id",-537027599),new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798)];
var inst_23495 = [inst_23491,inst_23488];
var inst_23496 = cljs.core.PersistentHashMap.fromArrays(inst_23494,inst_23495);
var inst_23497 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"success","success",1890645906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),inst_23493,new cljs.core.Keyword(null,"progress","progress",244323547),(100),new cljs.core.Keyword(null,"result","result",1415092211),inst_23496], 0));
var state_23510__$1 = state_23510;
var statearr_23517_23601 = state_23510__$1;
(statearr_23517_23601[(2)] = inst_23497);

(statearr_23517_23601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (6))){
var inst_23477 = (state_23510[(12)]);
var inst_23473 = (state_23510[(7)]);
var inst_23476 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uploading","uploading",1069939393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Saving to storage...",new cljs.core.Keyword(null,"progress","progress",244323547),(75)], 0));
var inst_23477__$1 = new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159).cljs$core$IFn$_invoke$arity$1(inst_23473);
var state_23510__$1 = (function (){var statearr_23518 = state_23510;
(statearr_23518[(12)] = inst_23477__$1);

(statearr_23518[(13)] = inst_23476);

return statearr_23518;
})();
if(cljs.core.truth_(inst_23477__$1)){
var statearr_23519_23602 = state_23510__$1;
(statearr_23519_23602[(1)] = (9));

} else {
var statearr_23520_23603 = state_23510__$1;
(statearr_23520_23603[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (3))){
var inst_23465 = (state_23510[(8)]);
var inst_23470 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uploading","uploading",1069939393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Parsing diagram...",new cljs.core.Keyword(null,"progress","progress",244323547),(25)], 0));
var inst_23471 = drawio_ui.api.upload_and_parse(file,inst_23465);
var state_23510__$1 = (function (){var statearr_23521 = state_23510;
(statearr_23521[(14)] = inst_23470);

return statearr_23521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23510__$1,(5),inst_23471);
} else {
if((state_val_23511 === (12))){
var inst_23491 = (state_23510[(10)]);
var inst_23485 = (state_23510[(15)]);
var inst_23465 = (state_23510[(8)]);
var inst_23473 = (state_23510[(7)]);
var inst_23488 = (state_23510[(2)]);
var inst_23489 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_23473);
var inst_23490 = file.name;
var inst_23491__$1 = drawio_ui.storage.add_diagram.cljs$core$IFn$_invoke$arity$variadic(diagram_name,inst_23485,inst_23489,inst_23465,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filename","filename",-1428840783),inst_23490,new cljs.core.Keyword(null,"description","description",-1428560544),"Uploaded diagram"], 0));
var state_23510__$1 = (function (){var statearr_23522 = state_23510;
(statearr_23522[(10)] = inst_23491__$1);

(statearr_23522[(11)] = inst_23488);

return statearr_23522;
})();
if(cljs.core.truth_(inst_23491__$1)){
var statearr_23523_23604 = state_23510__$1;
(statearr_23523_23604[(1)] = (13));

} else {
var statearr_23524_23605 = state_23510__$1;
(statearr_23524_23605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (2))){
var inst_23468 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Unsupported file type. Please upload PNG, XML, or .drawio files."], 0));
var state_23510__$1 = state_23510;
var statearr_23525_23606 = state_23510__$1;
(statearr_23525_23606[(2)] = inst_23468);

(statearr_23525_23606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (11))){
var inst_23485 = (state_23510[(15)]);
var inst_23485__$1 = (state_23510[(2)]);
var inst_23486 = drawio_ui.api.generate_thumbnail(inst_23485__$1);
var state_23510__$1 = (function (){var statearr_23526 = state_23510;
(statearr_23526[(15)] = inst_23485__$1);

return statearr_23526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23510__$1,(12),inst_23486);
} else {
if((state_val_23511 === (9))){
var inst_23477 = (state_23510[(12)]);
var state_23510__$1 = state_23510;
var statearr_23527_23607 = state_23510__$1;
(statearr_23527_23607[(2)] = inst_23477);

(statearr_23527_23607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (5))){
var inst_23473 = (state_23510[(7)]);
var inst_23473__$1 = (state_23510[(2)]);
var inst_23474 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_23473__$1);
var state_23510__$1 = (function (){var statearr_23528 = state_23510;
(statearr_23528[(7)] = inst_23473__$1);

return statearr_23528;
})();
if(cljs.core.truth_(inst_23474)){
var statearr_23529_23608 = state_23510__$1;
(statearr_23529_23608[(1)] = (6));

} else {
var statearr_23530_23609 = state_23510__$1;
(statearr_23530_23609[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (14))){
var inst_23499 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Failed to save diagram to storage"], 0));
var state_23510__$1 = state_23510;
var statearr_23531_23610 = state_23510__$1;
(statearr_23531_23610[(2)] = inst_23499);

(statearr_23531_23610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (10))){
var inst_23473 = (state_23510[(7)]);
var inst_23480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23481 = [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"raw-xml","raw-xml",-420038290)];
var inst_23482 = (new cljs.core.PersistentVector(null,2,(5),inst_23480,inst_23481,null));
var inst_23483 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_23473,inst_23482);
var state_23510__$1 = state_23510;
var statearr_23532_23611 = state_23510__$1;
(statearr_23532_23611[(2)] = inst_23483);

(statearr_23532_23611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23511 === (8))){
var inst_23506 = (state_23510[(2)]);
var state_23510__$1 = state_23510;
var statearr_23533_23612 = state_23510__$1;
(statearr_23533_23612[(2)] = inst_23506);

(statearr_23533_23612[(1)] = (4));


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
var drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto__ = null;
var drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto____0 = (function (){
var statearr_23534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23534[(0)] = drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto__);

(statearr_23534[(1)] = (1));

return statearr_23534;
});
var drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto____1 = (function (state_23510){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_23510);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e23535){var ex__14334__auto__ = e23535;
var statearr_23536_23614 = state_23510;
(statearr_23536_23614[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_23510[(4)]))){
var statearr_23537_23615 = state_23510;
(statearr_23537_23615[(1)] = cljs.core.first((state_23510[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23616 = state_23510;
state_23510 = G__23616;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto__ = function(state_23510){
switch(arguments.length){
case 0:
return drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto____0.call(this);
case 1:
return drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto____1.call(this,state_23510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto____0;
drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto____1;
return drawio_ui$upload$handle_file_upload_$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_23538 = f__14653__auto__();
(statearr_23538[(6)] = c__14652__auto__);

return statearr_23538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
});
drawio_ui.upload.handle_paste_upload = (function drawio_ui$upload$handle_paste_upload(paste_data,diagram_name){
var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_23567){
var state_val_23568 = (state_23567[(1)]);
if((state_val_23568 === (7))){
var inst_23550 = (state_23567[(7)]);
var inst_23548 = (state_23567[(8)]);
var inst_23552 = ["Successfully saved: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(diagram_name)].join('');
var inst_23553 = [new cljs.core.Keyword(null,"diagram-id","diagram-id",-537027599),new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798)];
var inst_23554 = [inst_23550,inst_23548];
var inst_23555 = cljs.core.PersistentHashMap.fromArrays(inst_23553,inst_23554);
var inst_23556 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"success","success",1890645906),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),inst_23552,new cljs.core.Keyword(null,"progress","progress",244323547),(100),new cljs.core.Keyword(null,"result","result",1415092211),inst_23555], 0));
var state_23567__$1 = state_23567;
var statearr_23569_23617 = state_23567__$1;
(statearr_23569_23617[(2)] = inst_23556);

(statearr_23569_23617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (1))){
var inst_23539 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uploading","uploading",1069939393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Processing paste data..."], 0));
var inst_23540 = drawio_ui.api.parse_paste(paste_data);
var state_23567__$1 = (function (){var statearr_23570 = state_23567;
(statearr_23570[(9)] = inst_23539);

return statearr_23570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23567__$1,(2),inst_23540);
} else {
if((state_val_23568 === (4))){
var inst_23542 = (state_23567[(10)]);
var inst_23562 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_23542);
var inst_23563 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),inst_23562], 0));
var state_23567__$1 = state_23567;
var statearr_23571_23619 = state_23567__$1;
(statearr_23571_23619[(2)] = inst_23563);

(statearr_23571_23619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (6))){
var inst_23542 = (state_23567[(10)]);
var inst_23550 = (state_23567[(7)]);
var inst_23548 = (state_23567[(2)]);
var inst_23549 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_23542);
var inst_23550__$1 = drawio_ui.storage.add_diagram.cljs$core$IFn$_invoke$arity$variadic(diagram_name,paste_data,inst_23549,new cljs.core.Keyword(null,"paste","paste",1975741548),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),"Pasted diagram"], 0));
var state_23567__$1 = (function (){var statearr_23572 = state_23567;
(statearr_23572[(7)] = inst_23550__$1);

(statearr_23572[(8)] = inst_23548);

return statearr_23572;
})();
if(cljs.core.truth_(inst_23550__$1)){
var statearr_23573_23620 = state_23567__$1;
(statearr_23573_23620[(1)] = (7));

} else {
var statearr_23574_23621 = state_23567__$1;
(statearr_23574_23621[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (3))){
var inst_23545 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"uploading","uploading",1069939393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Saving to storage...",new cljs.core.Keyword(null,"progress","progress",244323547),(75)], 0));
var inst_23546 = drawio_ui.api.generate_thumbnail(paste_data);
var state_23567__$1 = (function (){var statearr_23575 = state_23567;
(statearr_23575[(11)] = inst_23545);

return statearr_23575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23567__$1,(6),inst_23546);
} else {
if((state_val_23568 === (2))){
var inst_23542 = (state_23567[(10)]);
var inst_23542__$1 = (state_23567[(2)]);
var inst_23543 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_23542__$1);
var state_23567__$1 = (function (){var statearr_23576 = state_23567;
(statearr_23576[(10)] = inst_23542__$1);

return statearr_23576;
})();
if(cljs.core.truth_(inst_23543)){
var statearr_23577_23622 = state_23567__$1;
(statearr_23577_23622[(1)] = (3));

} else {
var statearr_23578_23623 = state_23567__$1;
(statearr_23578_23623[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (9))){
var inst_23560 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23579_23624 = state_23567__$1;
(statearr_23579_23624[(2)] = inst_23560);

(statearr_23579_23624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (5))){
var inst_23565 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23567__$1,inst_23565);
} else {
if((state_val_23568 === (8))){
var inst_23558 = drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Failed to save diagram to storage"], 0));
var state_23567__$1 = state_23567;
var statearr_23580_23625 = state_23567__$1;
(statearr_23580_23625[(2)] = inst_23558);

(statearr_23580_23625[(1)] = (9));


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
});
return (function() {
var drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto__ = null;
var drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto____0 = (function (){
var statearr_23581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23581[(0)] = drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto__);

(statearr_23581[(1)] = (1));

return statearr_23581;
});
var drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto____1 = (function (state_23567){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_23567);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e23582){var ex__14334__auto__ = e23582;
var statearr_23583_23626 = state_23567;
(statearr_23583_23626[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_23567[(4)]))){
var statearr_23584_23627 = state_23567;
(statearr_23584_23627[(1)] = cljs.core.first((state_23567[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23628 = state_23567;
state_23567 = G__23628;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto__ = function(state_23567){
switch(arguments.length){
case 0:
return drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto____0.call(this);
case 1:
return drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto____1.call(this,state_23567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto____0;
drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto____1;
return drawio_ui$upload$handle_paste_upload_$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_23585 = f__14653__auto__();
(statearr_23585[(6)] = c__14652__auto__);

return statearr_23585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
});
drawio_ui.upload.file_upload_area = (function drawio_ui$upload$file_upload_area(){
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var file_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.upload-area","div.upload-area",-1641602258),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))?"dragging":null),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (p1__23586_SHARP_){
p1__23586_SHARP_.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (p1__23587_SHARP_){
p1__23587_SHARP_.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,false);
}),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (p1__23588_SHARP_){
return p1__23588_SHARP_.preventDefault();
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (e){
e.preventDefault();

cljs.core.reset_BANG_(dragging_QMARK_,false);

var files = e.dataTransfer.files;
if((files.length > (0))){
return cljs.core.reset_BANG_(file_input,(files[(0)]));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.upload-content","div.upload-content",980488228),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.upload-icon","div.upload-icon",-334027810),"\uD83D\uDCC1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Drop files here or click to browse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Supports: PNG with embedded Draw.io data, XML exports, .drawio files"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".png,.xml,.drawio",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23589_SHARP_){
return cljs.core.reset_BANG_(file_input,(p1__23589_SHARP_.target.files[(0)]));
})], null)], null),(cljs.core.truth_(cljs.core.deref(file_input))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selected-file","div.selected-file",-2036542573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Selected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(file_input).name)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary","button.btn.btn-secondary",-2100184270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(file_input,null);
})], null),"Clear"], null)], null):null)], null)], null);
});
});
drawio_ui.upload.paste_upload_area = (function drawio_ui$upload$paste_upload_area(){
var paste_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.paste-area","div.paste-area",-502149852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Or paste Draw.io data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.paste-input","textarea.paste-input",-2084688442),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Paste URL-encoded Draw.io data here...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(paste_data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23590_SHARP_){
return cljs.core.reset_BANG_(paste_data,p1__23590_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary","button.btn.btn-secondary",-2100184270),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_(cljs.core.deref(paste_data)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(paste_data,"");
})], null),"Clear"], null)], null);
});
});
drawio_ui.upload.upload_form = (function drawio_ui$upload$upload_form(){
var diagram_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var file_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var paste_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.upload-form","form.upload-form",-1773940187),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(cljs.core.deref(file_input))){
return drawio_ui.upload.handle_file_upload(cljs.core.deref(file_input),cljs.core.deref(diagram_name));
} else {
if(cljs.core.seq(cljs.core.deref(paste_data))){
return drawio_ui.upload.handle_paste_upload(cljs.core.deref(paste_data),cljs.core.deref(diagram_name));
} else {
return drawio_ui.upload.set_upload_status_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),"Please select a file or paste data"], 0));

}
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form-label","label.form-label",1421537292),"Diagram Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-input","input.form-input",-1259370157),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter diagram name...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(diagram_name),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23591_SHARP_){
return cljs.core.reset_BANG_(diagram_name,p1__23591_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.upload.file_upload_area,file_input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.upload.paste_upload_area,paste_data], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-actions","div.form-actions",-1591938098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uploading","uploading",1069939393),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawio_ui.upload.upload_state)))) || (((cljs.core.empty_QMARK_(cljs.core.deref(diagram_name))) || ((((cljs.core.deref(file_input) == null)) && (cljs.core.empty_QMARK_(cljs.core.deref(paste_data))))))))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uploading","uploading",1069939393),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawio_ui.upload.upload_state))))?"Processing...":"Upload Diagram")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary","button.btn.btn-secondary",-2100184270),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),drawio_ui.upload.reset_upload_state_BANG_], null),"Reset"], null)], null)], null);
});
});
drawio_ui.upload.upload_status = (function drawio_ui$upload$upload_status(){
var map__23592 = cljs.core.deref(drawio_ui.upload.upload_state);
var map__23592__$1 = cljs.core.__destructure_map(map__23592);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23592__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23592__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23592__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23592__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"idle","idle",-2007156861))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.upload-status","div.upload-status",61650010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.name(status)], null),(function (){var G__23593 = status;
var G__23593__$1 = (((G__23593 instanceof cljs.core.Keyword))?G__23593.fqn:null);
switch (G__23593__$1) {
case "uploading":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar","div.progress-bar",929518721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(progress),"%"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-text","div.progress-text",1937121833),message], null)], null);

break;
case "success":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.success-message","div.success-message",-374388414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.success-icon","div.success-icon",-990197593),"\u2705"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.success-text","div.success-text",1686192489),message], null),(cljs.core.truth_(result)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.success-actions","div.success-actions",1944535110),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/diagram/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diagram-id","diagram-id",-537027599).cljs$core$IFn$_invoke$arity$1(result))].join('')], null),"View Diagram"], null)], null):null)], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error-message","div.error-message",926006572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error-icon","div.error-icon",-2039595975),"\u274C"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error-text","div.error-text",-1928114148),message], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23593__$1)].join('')));

}
})()], null);
} else {
return null;
}
});
drawio_ui.upload.upload_component = (function drawio_ui$upload$upload_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.upload-component","div.upload-component",-1240591022),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.upload-header","div.upload-header",1346429268),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Upload Draw.io Diagram"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Upload PNG files with embedded Draw.io data, XML exports, or paste clipboard data"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.upload.upload_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawio_ui.upload.upload_status], null)], null);
});

//# sourceMappingURL=drawio_ui.upload.js.map
