(this.webpackJsonpsendsay=this.webpackJsonpsendsay||[]).push([[0],{127:function(e,t,a){e.exports=a.p+"static/media/logo.54299101.svg"},139:function(e,t,a){e.exports=a(278)},147:function(e,t,a){},22:function(e,t,a){e.exports={data:"SentMessagesItem_data__3Y-6B",success:"SentMessagesItem_success__3Jr56",waiting:"SentMessagesItem_waiting__27Blw",warning:"SentMessagesItem_warning__2-kO6"}},278:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(30),i=a.n(r),l=a(8),c=a(20),o=a(126),m=a(83),u=a(5),d={sentMessages:[],attachedFiles:[],filesError:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":return Object(u.a)({},e,{sentMessages:[].concat(Object(m.a)(e.sentMessages),[{values:Object(u.a)({},t.data),id:t.res["track.id"]}])});case"UPDATE_MESSAGE_STATUS":return Object(u.a)({},e,{sentMessages:e.sentMessages.map((function(e){return e.id===t.id?Object(u.a)({},e,{result:{date:t.date,status:parseFloat(t.status)}}):e}))});case"ADD_ATTACHED_FILE":return Object(u.a)({},e,{filesError:null,attachedFiles:[].concat(Object(m.a)(e.attachedFiles),[{name:t.payload.name,base64:t.payload.base64,size:t.payload.size,encoding:"base64"}])});case"REMOVE_ATTACHED_FILE":return Object(u.a)({},e,{filesError:null,attachedFiles:e.attachedFiles.filter((function(e){return e.name!==t.payload.name}))});case"CLEAN_ATTACHED_FILES":return Object(u.a)({},e,{attachedFiles:[]});case"SET_FILES_ERROR":return Object(u.a)({},e,{filesError:t.payload.msg});default:return e}},_={isShow:!1,email:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_THANKSGIVING_MESSAGE":return Object(u.a)({},e,{isShow:!0,email:t.email});case"HIDE_THANKSGIVING_MESSAGE":return Object(u.a)({},e,{isShow:!1,email:null});default:return e}},f=Object(c.c)({form:g,thanksgivingMessage:E}),b=Object(c.d)(f,Object(c.a)(o.a));window.store=b;var p=b,h=(a(147),a(281)),v=a(280),S=a(127),N=a.n(S),M=function(e){return s.a.createElement("div",null,s.a.createElement("img",{src:N.a,alt:"Logo"}))},F=a(15),A=a(135),O=a(129),j=new(a.n(O).a)({apiKey:"192D7YRfBa7DSUVVQIJ1m-KsCxOsTp0qum0tKw3SlO8XShNe2xLDWtd2LA6GVxJiQmR07ouhOtA"}),x=a(55),T=a(56),w=a(32),y=a(57),I=a.n(y),D=function(e){var t=e.label,a=(e.component,e.isSubmitting),n=Object(T.a)(e,["label","component","isSubmitting"]),r=n.id,i=n.name,l=Object(w.b)(n),c=Object(x.a)(l,2),o=c[0],m=c[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:r||i,className:I.a.label},t),s.a.createElement("textarea",Object.assign({className:I.a.field,disabled:a},o,n)),m.touched&&m.error?s.a.createElement("div",{className:I.a.warning},m.error):null)},k=a(38),R=a.n(k),G=function(e){var t=e.label,a=e.position,n=e.isSubmitting,r=Object(T.a)(e,["label","position","isSubmitting"]),i=r.id,l=r.name,c=Object(w.b)(r),o=Object(x.a)(c,2),m=o[0],u=o[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",{htmlFor:i||l,className:R.a.label},t),s.a.createElement("input",Object.assign({className:"".concat(R.a.field," ").concat(a?R.a[a]:""),disabled:n},m,r)),u.touched&&u.error?s.a.createElement("div",{className:R.a.warning},u.error):null)},L=a(81),C=a.n(L),q=function(e){var t=e.getInputProps,a=e.isSubmitting;return s.a.createElement("label",{htmlFor:"btn-file",className:C.a.btnLabel},"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u0430\u0439\u043b",s.a.createElement("input",Object.assign({type:"file",name:"btn-file",id:"btn-file",className:C.a.btnFile,disabled:a},t())))},H=a(39),V=a.n(H),z=function(e){var t=e.attachedFiles,a=e.removeAttachedFile,n=e.isSubmitting;return s.a.createElement("div",{className:V.a.attachedFiles},t.map((function(e){var t=e.name;return s.a.createElement("div",{className:V.a.file,key:t},s.a.createElement("div",{className:V.a.fileName},t),s.a.createElement("button",{type:"button",className:V.a.btnDelete,disabled:n,onClick:function(){return a(t)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})))},J=a(40),P=a.n(J),U=function(e){var t=e.isDragActive;return s.a.createElement("div",{className:"".concat(P.a.dragndropZone," ").concat(t?P.a.active:"")},s.a.createElement("div",{className:P.a.title},"\u0411\u0440\u043e\u0441\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430, \u044f \u043b\u043e\u0432\u043b\u044e"),s.a.createElement("div",{className:P.a.text},"\u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 (jpg, png, gif), \u043e\u0444\u0438\u0441\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b (doc, xls, pdf) \u0438 zip-\u0430\u0440\u0445\u0438\u0432\u044b. \u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u0430\u0439\u043b\u0430 \u0434\u043e 5 \u041c\u0411"))},Z=a(4),K=a.n(Z),B=function(e){var t=e.isSubmitting,a=e.handleSubmit,n=e.attachedFiles,r=e.getRootProps,i=e.getInputProps,l=e.isDragActive,c=e.removeAttachedFile,o=e.filesError;return s.a.createElement("form",Object.assign({className:K.a.form,onSubmit:a},r()),s.a.createElement("div",{className:K.a.title},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"),s.a.createElement("div",{className:K.a.row},s.a.createElement("div",{className:K.a.group},s.a.createElement(G,{label:"\u041e\u0442 \u043a\u043e\u0433\u043e",name:"fromName",type:"text",placeholder:"\u0418\u043c\u044f",position:"left",isSubmitting:t})),s.a.createElement("div",{className:K.a.group},s.a.createElement(G,{name:"fromEmail",type:"text",placeholder:"Email",position:"right",isSubmitting:t}))),s.a.createElement("div",{className:K.a.row},s.a.createElement("div",{className:K.a.group},s.a.createElement(G,{label:"\u041a\u043e\u043c\u0443",name:"toName",type:"text",placeholder:"\u0418\u043c\u044f",position:"left",isSubmitting:t})),s.a.createElement("div",{className:K.a.group},s.a.createElement(G,{name:"toEmail",type:"text",placeholder:"Email",position:"right",isSubmitting:t}))),s.a.createElement("div",{className:K.a.row},s.a.createElement("div",{className:K.a.group},s.a.createElement(G,{label:"\u0422\u0435\u043c\u0430 \u043f\u0438\u0441\u044c\u043c\u0430",name:"subject",type:"text",isSubmitting:t}))),s.a.createElement("div",{className:K.a.row},s.a.createElement("div",{className:K.a.group},s.a.createElement(D,{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",name:"message",type:"text",isSubmitting:t}),!!n.length&&s.a.createElement(z,{attachedFiles:n,removeAttachedFile:c,isSubmitting:t}),s.a.createElement(q,{getInputProps:i,isSubmitting:t}),o&&s.a.createElement("span",{className:K.a.warning},o))),s.a.createElement("button",{type:"submit",className:K.a.btnSend,disabled:t},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),s.a.createElement(U,{isDragActive:l}))},W=F.object({fromName:F.string().required("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),fromEmail:F.string().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email").required("Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),toName:F.string().required("\u0418\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),toEmail:F.string().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email").required("Email \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),subject:F.string().max(30,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").min(10,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0442\u0435\u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"),message:F.string().max(500,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 500 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").min(30,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u0435\u0435 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c")}),Y={fromName:"",fromEmail:"",toName:"",toEmail:"",subject:"",message:""},Q=Object(l.b)((function(e){var t=e.form;return{attachedFiles:t.attachedFiles,filesError:t.filesError}}),{sendMessage:function(e){return function(t){return function(e){return j.request(function(e){var t=e.subject,a=e.fromName,n=e.fromEmail,s=e.toName,r=e.toEmail;return{action:"issue.send.test",letter:{subject:t,"from.name":a,"from.email":n,"to.name":s,message:{text:e.message},attaches:e.attaches.map((function(e){return{name:e.name,base64:e.base64,encoding:e.encoding}}))},sendwhen:"test",mca:[r]}}(e)).then((function(e){return e})).catch((function(e){return e}))}(e).then((function(a){t(function(e,t){return{type:"SEND_MESSAGE",res:e,data:t}}(a,e))}))}},showThanksgivingMessage:function(e){return{type:"SHOW_THANKSGIVING_MESSAGE",email:e}},addAttachedFile:function(e,t,a){return{type:"ADD_ATTACHED_FILE",payload:{name:e,base64:t,size:a}}},removeAttachedFile:function(e){return{type:"REMOVE_ATTACHED_FILE",payload:{name:e}}},cleanAttachedFiles:function(){return{type:"CLEAN_ATTACHED_FILES"}},setFilesError:function(e){return{type:"SET_FILES_ERROR",payload:{msg:e}}}})((function(e){var t=e.sendMessage,a=e.showThanksgivingMessage,r=e.attachedFiles,i=e.addAttachedFile,l=e.cleanAttachedFiles,c=e.removeAttachedFile,o=e.setFilesError,m=e.filesError,d=Object(n.useCallback)((function(e){e.reduce((function(e,t){return t.size+e}),0)+r.reduce((function(e,t){return t.size+e}),0)>2e7?o("\u041e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c ".concat(20," \u041c\u0411")):e.forEach((function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return o("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430")},t.onload=function(){var a=e.name,n=e.size,s=r.reduce((function(e,t){return e+t.size}),n);!r.some((function(e){return e.name===a}))&&s<2e7&&i(a,t.result,n),s>2e7&&o("\u041e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c ".concat(20," \u041c\u0411"))},t.readAsDataURL(e)}))}),[r,o,i]),g=Object(n.useCallback)((function(e){e.forEach((function(e){var t=e.size;o(t>5e6?"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u0434\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c ".concat(5," \u041c\u0411"):"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0444\u0430\u0439\u043b\u0430")}))}),[o]),_=Object(A.a)({onDrop:d,onDropRejected:g,noClick:!0,maxSize:5e6}),E=_.getRootProps,f=_.getInputProps,b=_.isDragActive;return s.a.createElement(w.a,{initialValues:Y,validationSchema:W,onSubmit:function(e,n){var s=n.setSubmitting,i=n.resetForm;t(Object(u.a)({},e,{attaches:r})).then((function(){s(!1),i(),l(),o(null),a(e.toEmail)}))}},(function(e){var t=e.isSubmitting,a=e.handleSubmit;return s.a.createElement(B,{isSubmitting:t,handleSubmit:a,attachedFiles:r,getRootProps:E,getInputProps:f,isDragActive:b,removeAttachedFile:c,filesError:m})}))})),X=a(132),$=a(133),ee=a(136),te=a(134),ae=a(137),ne=a(78),se=a.n(ne),re=(a(277),a(22)),ie=a.n(re),le=function(e){var t=e.message,a=e.date,n=e.status;return s.a.createElement("tr",null,s.a.createElement("td",{className:ie.a.data},a&&se()(a).locale("ru").format("DD MMMM")),s.a.createElement("td",{className:ie.a.data,title:t},t),s.a.createElement("td",{className:ie.a.data},-1===n&&s.a.createElement("span",{className:ie.a.success},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"),n<-1&&s.a.createElement("span",{className:ie.a.warning},"\u041e\u0448\u0438\u0431\u043a\u0430"),n>-1&&s.a.createElement("span",{className:ie.a.waiting},"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435")))},ce=function(e){function t(){return Object(X.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(ae.a)(t,e),Object($.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateMessageStatus,a=e.id;t(a),this.timer=setInterval((function(){t(a)}),3e3)}},{key:"componentDidUpdate",value:function(e){e.status!==this.props.status&&clearInterval(this.timer)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return s.a.createElement(le,this.props)}}]),t}(n.Component),oe=Object(l.b)((function(){return{}}),{updateMessageStatus:function(e){return function(t){(function(e){return j.request({action:"track.get",id:e}).then((function(e){return e})).catch((function(e){return e}))})(e).then((function(a){var n=a.obj,s=n.dt,r=n.status;t(function(e,t,a){return{type:"UPDATE_MESSAGE_STATUS",id:e,status:a,date:t}}(e,s,r))}))}}})(ce),me=a(34),ue=a.n(me),de=function(e){var t=e.sentMessages;return s.a.createElement("table",{className:ue.a.table},s.a.createElement("thead",null,s.a.createElement("tr",{className:ue.a.header},s.a.createElement("th",{className:ue.a.heading},"\u0414\u0430\u0442\u0430"),s.a.createElement("th",{className:ue.a.heading},"\u0422\u0435\u043c\u0430"),s.a.createElement("th",{className:ue.a.heading},"\u0421\u0442\u0430\u0442\u0443\u0441"))),s.a.createElement("tbody",null,t.map((function(e){var t=e.id,a=e.values.message,n=e.result,r=(n=void 0===n?{}:n).status,i=void 0===r?0:r,l=n.date,c=void 0===l?null:l;return s.a.createElement(oe,{key:t,message:a,id:t,status:i,date:c})}))))},ge=a(82),_e=a.n(ge),Ee=Object(l.b)((function(e){return{sentMessages:e.form.sentMessages}}))((function(e){var t=e.sentMessages;return s.a.createElement("div",{className:_e.a.sentMessages},s.a.createElement("div",{className:_e.a.title},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),!!t.length&&s.a.createElement(de,{sentMessages:t}),!t.length&&s.a.createElement("div",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0435\u0449\u0451 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u0438\u0441\u044c"))})),fe=a(58),be=a.n(fe),pe=Object(l.b)((function(e){return{email:e.thanksgivingMessage.email}}),{hideThanksgivingMessage:function(){return{type:"HIDE_THANKSGIVING_MESSAGE"}}})((function(e){var t=e.email,a=e.hideThanksgivingMessage;return Object(n.useEffect)((function(){var e=setTimeout(a,7e3);return function(){return clearTimeout(e)}})),s.a.createElement("div",{className:be.a.thanksgivingMessage},s.a.createElement("div",{className:be.a.title},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443"),s.a.createElement("div",{className:be.a.text},"\u0421\u043e\u0432\u0441\u0435\u043c \u0441\u043a\u043e\u0440\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432\u044b\u043b\u0435\u0442\u0438\u0442 \u0438\u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043f\u043e\u0447\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \xab",t,"\xbb \u0441\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043e\u0432."))})),he=a(59),ve=a.n(he),Se=Object(l.b)((function(e){return{isShowThanksgivingMessage:e.thanksgivingMessage.isShow}}))((function(e){var t=e.isShowThanksgivingMessage;return s.a.createElement("div",{className:ve.a.app},s.a.createElement(M,null),s.a.createElement("div",{className:ve.a.form},s.a.createElement(h.a,null,!t&&s.a.createElement(v.a,{classNames:"fade",timeout:0},s.a.createElement(Q,null)),t&&s.a.createElement(v.a,{classNames:"fade",timeout:0},s.a.createElement(pe,null)))),s.a.createElement("div",{className:ve.a.messages},s.a.createElement(Ee,null)))}));i.a.render(s.a.createElement(l.a,{store:p},s.a.createElement(Se,null)),document.getElementById("root"))},34:function(e,t,a){e.exports={table:"TableSentMessages_table__Iy7kP",header:"TableSentMessages_header__38QlS",heading:"TableSentMessages_heading__2JFil"}},38:function(e,t,a){e.exports={field:"TextInput_field__3tu5z MessageForm_field__3CRJl",left:"TextInput_left__2driE",right:"TextInput_right__2-lAJ",label:"TextInput_label__3_dx7 MessageForm_label__2Iw6N",warning:"TextInput_warning__3RZ41 MessageForm_warning__3f_V5"}},39:function(e,t,a){e.exports={attachedFiles:"AttachedFiles_attachedFiles__1pfYt",file:"AttachedFiles_file__IqU0m",fileName:"AttachedFiles_fileName__18gE2",btnDelete:"AttachedFiles_btnDelete__88Dk6"}},4:function(e,t,a){e.exports={form:"MessageForm_form__274-I",title:"MessageForm_title__3KAGi",row:"MessageForm_row__2DktO",group:"MessageForm_group__1Zk9u",field:"MessageForm_field__3CRJl",label:"MessageForm_label__2Iw6N",btnSend:"MessageForm_btnSend__2Mq0l",warning:"MessageForm_warning__3f_V5"}},40:function(e,t,a){e.exports={dragndropZone:"DragndropZone_dragndropZone__12E3q",active:"DragndropZone_active__3Yxz6",title:"DragndropZone_title__eu3Ey",text:"DragndropZone_text__1G6N7"}},57:function(e,t,a){e.exports={field:"TextArea_field__GZum7 MessageForm_field__3CRJl",label:"TextArea_label__qj94L MessageForm_label__2Iw6N",warning:"TextArea_warning__3eSOh MessageForm_warning__3f_V5"}},58:function(e,t,a){e.exports={thanksgivingMessage:"ThanksgivingMessage_thanksgivingMessage__2Is2e",title:"ThanksgivingMessage_title__16yAx",text:"ThanksgivingMessage_text__21gqo"}},59:function(e,t,a){e.exports={app:"App_app__3j3NM",form:"App_form__2qEx6",messages:"App_messages__2SkfK"}},81:function(e,t,a){e.exports={btnLabel:"ButtonUploadFile_btnLabel__2VXAg",btnFile:"ButtonUploadFile_btnFile__3ArXF"}},82:function(e,t,a){e.exports={sentMessages:"SentMessages_sentMessages__2wsid",title:"SentMessages_title__3J_8T","sent-messages-text-empty":"SentMessages_sent-messages-text-empty__35MoR"}}},[[139,1,2]]]);
//# sourceMappingURL=main.2554c0cd.chunk.js.map