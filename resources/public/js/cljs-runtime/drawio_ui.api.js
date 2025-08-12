goog.provide('drawio_ui.api');
drawio_ui.api.api_base = "/api/v1";
drawio_ui.api.api_url = (function drawio_ui$api$api_url(endpoint){
return [drawio_ui.api.api_base,cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)].join('');
});
drawio_ui.api.handle_response = (function drawio_ui$api$handle_response(response_chan){
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(response_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"data","data",-232669377),response], null));
});
});
drawio_ui.api.handle_error = (function drawio_ui$api$handle_error(response_chan){
return (function (error){
var message = (function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"error","error",-978969032)], null));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return "Unknown error occurred";
}
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(response_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),message], null));
});
});
/**
 * Parse Draw.io XML export data
 */
drawio_ui.api.parse_export = (function drawio_ui$api$parse_export(xml_data){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(drawio_ui.api.api_url("/parse/export"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"body","body",-2049205669),xml_data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),drawio_ui.api.handle_response(response_chan),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),drawio_ui.api.handle_error(response_chan)], null)], 0));

return response_chan;
});
/**
 * Parse Draw.io paste data (URL-encoded)
 */
drawio_ui.api.parse_paste = (function drawio_ui$api$parse_paste(paste_data){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(drawio_ui.api.api_url("/parse/paste"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"body","body",-2049205669),paste_data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),drawio_ui.api.handle_response(response_chan),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),drawio_ui.api.handle_error(response_chan)], null)], 0));

return response_chan;
});
/**
 * Parse PNG file with embedded Draw.io data
 */
drawio_ui.api.parse_png = (function drawio_ui$api$parse_png(png_file){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var form_data = (new FormData());
form_data.append("file",png_file);

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(drawio_ui.api.api_url("/parse/png"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"body","body",-2049205669),png_file,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),drawio_ui.api.handle_response(response_chan),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),drawio_ui.api.handle_error(response_chan)], null)], 0));

return response_chan;
});
/**
 * Render Draw.io XML to PNG using headless Chrome
 */
drawio_ui.api.render_png = (function drawio_ui$api$render_png(xml_data,options){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var body = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xml","xml",-1170142052),xml_data,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(options,(800)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(options,(600)),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$2(options,"white")], null);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(drawio_ui.api.api_url("/render/png"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),body,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),drawio_ui.api.handle_response(response_chan),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),drawio_ui.api.handle_error(response_chan)], null)], 0));

return response_chan;
});
/**
 * Render Draw.io XML to SVG using headless Chrome
 */
drawio_ui.api.render_svg = (function drawio_ui$api$render_svg(xml_data,options){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var body = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xml","xml",-1170142052),xml_data,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(options,(800)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(options,(600)),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$2(options,"white")], null);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(drawio_ui.api.api_url("/render/svg"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),body,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),drawio_ui.api.handle_response(response_chan),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),drawio_ui.api.handle_error(response_chan)], null)], 0));

return response_chan;
});
/**
 * Check API and rendering service health
 */
drawio_ui.api.health_check = (function drawio_ui$api$health_check(){
var response_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(drawio_ui.api.api_url("/health"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),drawio_ui.api.handle_response(response_chan),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),drawio_ui.api.handle_error(response_chan)], null)], 0));

return response_chan;
});
/**
 * Upload file and parse based on type
 */
drawio_ui.api.upload_and_parse = (function drawio_ui$api$upload_and_parse(file,source_type){
var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_23189){
var state_val_23190 = (state_23189[(1)]);
if((state_val_23190 === (7))){
var inst_23155 = (function (){return (function (resolve,reject){
var reader = (new FileReader());
(reader.onload = (function (p1__23140_SHARP_){
var G__23191 = p1__23140_SHARP_.target.result;
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__23191) : resolve.call(null,G__23191));
}));

(reader.onerror = reject);

return reader.readAsText(file);
});
})();
var inst_23156 = (new Promise(inst_23155));
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23189__$1,(9),inst_23156);
} else {
if((state_val_23190 === (20))){
var inst_23173 = (state_23189[(7)]);
var inst_23174 = (state_23189[(8)]);
var inst_23179 = (state_23189[(2)]);
var inst_23180 = [true,inst_23174,inst_23179];
var inst_23181 = cljs.core.PersistentHashMap.fromArrays(inst_23173,inst_23180);
var state_23189__$1 = state_23189;
var statearr_23192_23253 = state_23189__$1;
(statearr_23192_23253[(2)] = inst_23181);

(statearr_23192_23253[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (1))){
var state_23189__$1 = state_23189;
var statearr_23193_23254 = state_23189__$1;
(statearr_23193_23254[(2)] = null);

(statearr_23193_23254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (4))){
var inst_23141 = (state_23189[(2)]);
var inst_23142 = [new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_23143 = inst_23141.message;
var inst_23144 = ["File processing failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23143)].join('');
var inst_23145 = [false,inst_23144];
var inst_23146 = cljs.core.PersistentHashMap.fromArrays(inst_23142,inst_23145);
var state_23189__$1 = state_23189;
var statearr_23194_23255 = state_23189__$1;
(statearr_23194_23255[(2)] = inst_23146);

(statearr_23194_23255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (15))){
var inst_23170 = (state_23189[(9)]);
var inst_23173 = [new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"raw-content","raw-content",-1509321159)];
var inst_23174 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_23170);
var inst_23175 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_type,new cljs.core.Keyword(null,"png","png",551930691));
var state_23189__$1 = (function (){var statearr_23195 = state_23189;
(statearr_23195[(7)] = inst_23173);

(statearr_23195[(8)] = inst_23174);

return statearr_23195;
})();
if(inst_23175){
var statearr_23196_23256 = state_23189__$1;
(statearr_23196_23256[(1)] = (18));

} else {
var statearr_23197_23257 = state_23189__$1;
(statearr_23197_23257[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (13))){
var inst_23160 = (state_23189[(10)]);
var inst_23165 = drawio_ui.api.parse_paste(inst_23160);
var state_23189__$1 = state_23189;
var statearr_23198_23258 = state_23189__$1;
(statearr_23198_23258[(2)] = inst_23165);

(statearr_23198_23258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (6))){
var state_23189__$1 = state_23189;
var statearr_23199_23259 = state_23189__$1;
(statearr_23199_23259[(2)] = file);

(statearr_23199_23259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (17))){
var inst_23184 = (state_23189[(2)]);
var _ = (function (){var statearr_23200 = state_23189;
(statearr_23200[(4)] = cljs.core.rest((state_23189[(4)])));

return statearr_23200;
})();
var state_23189__$1 = state_23189;
var statearr_23201_23260 = state_23189__$1;
(statearr_23201_23260[(2)] = inst_23184);

(statearr_23201_23260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (3))){
var inst_23187 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23189__$1,inst_23187);
} else {
if((state_val_23190 === (12))){
var inst_23160 = (state_23189[(10)]);
var inst_23163 = drawio_ui.api.parse_export(inst_23160);
var state_23189__$1 = state_23189;
var statearr_23202_23261 = state_23189__$1;
(statearr_23202_23261[(2)] = inst_23163);

(statearr_23202_23261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (2))){
var _ = (function (){var statearr_23203 = state_23189;
(statearr_23203[(4)] = cljs.core.cons((5),(state_23189[(4)])));

return statearr_23203;
})();
var inst_23152 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_type,new cljs.core.Keyword(null,"png","png",551930691));
var state_23189__$1 = state_23189;
if(inst_23152){
var statearr_23204_23262 = state_23189__$1;
(statearr_23204_23262[(1)] = (6));

} else {
var statearr_23205_23263 = state_23189__$1;
(statearr_23205_23263[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (19))){
var inst_23160 = (state_23189[(10)]);
var state_23189__$1 = state_23189;
var statearr_23206_23264 = state_23189__$1;
(statearr_23206_23264[(2)] = inst_23160);

(statearr_23206_23264[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (11))){
var inst_23161 = drawio_ui.api.parse_png(file);
var state_23189__$1 = state_23189;
var statearr_23208_23265 = state_23189__$1;
(statearr_23208_23265[(2)] = inst_23161);

(statearr_23208_23265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (9))){
var inst_23158 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
var statearr_23209_23266 = state_23189__$1;
(statearr_23209_23266[(2)] = inst_23158);

(statearr_23209_23266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (5))){
var _ = (function (){var statearr_23210 = state_23189;
(statearr_23210[(4)] = cljs.core.rest((state_23189[(4)])));

return statearr_23210;
})();
var state_23189__$1 = state_23189;
var ex23207 = (state_23189__$1[(2)]);
var statearr_23211_23267 = state_23189__$1;
(statearr_23211_23267[(5)] = ex23207);


if((ex23207 instanceof Error)){
var statearr_23212_23268 = state_23189__$1;
(statearr_23212_23268[(1)] = (4));

(statearr_23212_23268[(5)] = null);

} else {
throw ex23207;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (14))){
var inst_23170 = (state_23189[(9)]);
var inst_23170__$1 = (state_23189[(2)]);
var inst_23171 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_23170__$1);
var state_23189__$1 = (function (){var statearr_23213 = state_23189;
(statearr_23213[(9)] = inst_23170__$1);

return statearr_23213;
})();
if(cljs.core.truth_(inst_23171)){
var statearr_23214_23269 = state_23189__$1;
(statearr_23214_23269[(1)] = (15));

} else {
var statearr_23215_23270 = state_23189__$1;
(statearr_23215_23270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (16))){
var inst_23170 = (state_23189[(9)]);
var state_23189__$1 = state_23189;
var statearr_23216_23271 = state_23189__$1;
(statearr_23216_23271[(2)] = inst_23170);

(statearr_23216_23271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (10))){
var inst_23168 = (state_23189[(2)]);
var state_23189__$1 = state_23189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23189__$1,(14),inst_23168);
} else {
if((state_val_23190 === (18))){
var state_23189__$1 = state_23189;
var statearr_23217_23272 = state_23189__$1;
(statearr_23217_23272[(2)] = null);

(statearr_23217_23272[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23190 === (8))){
var inst_23160 = (state_23189[(2)]);
var state_23189__$1 = (function (){var statearr_23218 = state_23189;
(statearr_23218[(10)] = inst_23160);

return statearr_23218;
})();
var G__23219_23273 = source_type;
var G__23219_23274__$1 = (((G__23219_23273 instanceof cljs.core.Keyword))?G__23219_23273.fqn:null);
switch (G__23219_23274__$1) {
case "png":
var statearr_23220_23276 = state_23189__$1;
(statearr_23220_23276[(1)] = (11));


break;
case "export":
var statearr_23221_23277 = state_23189__$1;
(statearr_23221_23277[(1)] = (12));


break;
case "paste":
var statearr_23222_23278 = state_23189__$1;
(statearr_23222_23278[(1)] = (13));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23219_23274__$1)].join('')));

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
});
return (function() {
var drawio_ui$api$upload_and_parse_$_state_machine__14331__auto__ = null;
var drawio_ui$api$upload_and_parse_$_state_machine__14331__auto____0 = (function (){
var statearr_23223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23223[(0)] = drawio_ui$api$upload_and_parse_$_state_machine__14331__auto__);

(statearr_23223[(1)] = (1));

return statearr_23223;
});
var drawio_ui$api$upload_and_parse_$_state_machine__14331__auto____1 = (function (state_23189){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_23189);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e23224){var ex__14334__auto__ = e23224;
var statearr_23225_23279 = state_23189;
(statearr_23225_23279[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_23189[(4)]))){
var statearr_23226_23280 = state_23189;
(statearr_23226_23280[(1)] = cljs.core.first((state_23189[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23281 = state_23189;
state_23189 = G__23281;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
drawio_ui$api$upload_and_parse_$_state_machine__14331__auto__ = function(state_23189){
switch(arguments.length){
case 0:
return drawio_ui$api$upload_and_parse_$_state_machine__14331__auto____0.call(this);
case 1:
return drawio_ui$api$upload_and_parse_$_state_machine__14331__auto____1.call(this,state_23189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drawio_ui$api$upload_and_parse_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = drawio_ui$api$upload_and_parse_$_state_machine__14331__auto____0;
drawio_ui$api$upload_and_parse_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = drawio_ui$api$upload_and_parse_$_state_machine__14331__auto____1;
return drawio_ui$api$upload_and_parse_$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_23227 = f__14653__auto__();
(statearr_23227[(6)] = c__14652__auto__);

return statearr_23227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
});
/**
 * Generate thumbnail image for diagram
 */
drawio_ui.api.generate_thumbnail = (function drawio_ui$api$generate_thumbnail(xml_data){
var c__14652__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14653__auto__ = (function (){var switch__14330__auto__ = (function (state_23241){
var state_val_23242 = (state_23241[(1)]);
if((state_val_23242 === (1))){
var inst_23228 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"theme","theme",-1247880880)];
var inst_23229 = [(200),(150),"white"];
var inst_23230 = cljs.core.PersistentHashMap.fromArrays(inst_23228,inst_23229);
var inst_23231 = drawio_ui.api.render_png(xml_data,inst_23230);
var state_23241__$1 = state_23241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23241__$1,(2),inst_23231);
} else {
if((state_val_23242 === (2))){
var inst_23233 = (state_23241[(7)]);
var inst_23233__$1 = (state_23241[(2)]);
var inst_23234 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_23233__$1);
var state_23241__$1 = (function (){var statearr_23243 = state_23241;
(statearr_23243[(7)] = inst_23233__$1);

return statearr_23243;
})();
if(cljs.core.truth_(inst_23234)){
var statearr_23244_23282 = state_23241__$1;
(statearr_23244_23282[(1)] = (3));

} else {
var statearr_23245_23283 = state_23241__$1;
(statearr_23245_23283[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23242 === (3))){
var inst_23233 = (state_23241[(7)]);
var inst_23236 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_23233);
var state_23241__$1 = state_23241;
var statearr_23246_23284 = state_23241__$1;
(statearr_23246_23284[(2)] = inst_23236);

(statearr_23246_23284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23242 === (4))){
var state_23241__$1 = state_23241;
var statearr_23247_23285 = state_23241__$1;
(statearr_23247_23285[(2)] = null);

(statearr_23247_23285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23242 === (5))){
var inst_23239 = (state_23241[(2)]);
var state_23241__$1 = state_23241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23241__$1,inst_23239);
} else {
return null;
}
}
}
}
}
});
return (function() {
var drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto__ = null;
var drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto____0 = (function (){
var statearr_23248 = [null,null,null,null,null,null,null,null];
(statearr_23248[(0)] = drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto__);

(statearr_23248[(1)] = (1));

return statearr_23248;
});
var drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto____1 = (function (state_23241){
while(true){
var ret_value__14332__auto__ = (function (){try{while(true){
var result__14333__auto__ = switch__14330__auto__(state_23241);
if(cljs.core.keyword_identical_QMARK_(result__14333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14333__auto__;
}
break;
}
}catch (e23249){var ex__14334__auto__ = e23249;
var statearr_23250_23286 = state_23241;
(statearr_23250_23286[(2)] = ex__14334__auto__);


if(cljs.core.seq((state_23241[(4)]))){
var statearr_23251_23287 = state_23241;
(statearr_23251_23287[(1)] = cljs.core.first((state_23241[(4)])));

} else {
throw ex__14334__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14332__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23288 = state_23241;
state_23241 = G__23288;
continue;
} else {
return ret_value__14332__auto__;
}
break;
}
});
drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto__ = function(state_23241){
switch(arguments.length){
case 0:
return drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto____0.call(this);
case 1:
return drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto____1.call(this,state_23241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$0 = drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto____0;
drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto__.cljs$core$IFn$_invoke$arity$1 = drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto____1;
return drawio_ui$api$generate_thumbnail_$_state_machine__14331__auto__;
})()
})();
var state__14654__auto__ = (function (){var statearr_23252 = f__14653__auto__();
(statearr_23252[(6)] = c__14652__auto__);

return statearr_23252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14654__auto__);
}));

return c__14652__auto__;
});

//# sourceMappingURL=drawio_ui.api.js.map
