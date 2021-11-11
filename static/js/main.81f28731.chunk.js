(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{18:function(t,e,c){t.exports={filter:"Filter_filter__m09Qc",label:"Filter_label__2TVyZ",input:"Filter_input__1eTzD"}},19:function(t,e,c){t.exports={item:"ContactItem_item__3veW5",tel:"ContactItem_tel__3kUkN",btn:"ContactItem_btn__2937y",loader:"ContactItem_loader__kArjO"}},31:function(t,e,c){t.exports={list:"ContactsList_list__2viaN"}},44:function(t,e,c){},64:function(t,e,c){},67:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(15),o=c.n(r),s=c(2),u=(c(44),c(9)),i=c.n(u),b=c(8),l=c(12),j=c.n(l),d=c(3),f=Object(d.b)("contacts/fetchContactsRequest"),O=Object(d.b)("contacts/fetchContactsSuccess"),m=Object(d.b)("contacts/fetchContactsError"),h=Object(d.b)("contacts/addContactsRequest"),p=Object(d.b)("contacts/addContactsSuccess"),x=Object(d.b)("contacts/addContactsError"),_=Object(d.b)("contacts/delContactsRequest"),v=Object(d.b)("contacts/delContactsSuccess"),C=Object(d.b)("contacts/delContactsError"),g=Object(d.b)("contacts/filter");j.a.defaults.baseURL="http://localhost:4140";var N=c(11),y=c(68),k=c(16),F=function(t){return t.contacts.items},T=function(t){return t.contacts.filter},w=function(t){return t.contacts.loading},A=function(t){return t.contacts.error},S=Object(k.a)([F,T],(function(t,e){var c=e.toLowerCase().trim(" ");return t.filter((function(t){return t.name.toLowerCase().includes(c)}))})),R=c(7),E=c.n(R),I=c(1);var L=function(){var t=Object(n.useState)(""),e=Object(N.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(""),o=Object(N.a)(r,2),u=o[0],l=o[1],d=Object(s.c)(w),f=Object(n.useRef)(""),O=Object(n.useRef)(""),m=Object(s.c)(F),_=Object(s.b)();Object(n.useEffect)((function(){f.current=Object(y.a)(),O.current=Object(y.a)()}),[]);var v=function(t){switch(t.currentTarget.name){case"name":a(t.currentTarget.value);break;case"number":l(t.currentTarget.value);break;default:return}},C=function(t,e){_(function(t,e,c){return function(n){var a={name:t,number:e};n(h()),j.a.post("/contacts",a).then((function(e){var a=e.data;b.b.success("Contact ".concat(t," successfully added.")),console.log("\u041d\u0443\u0436\u043d\u043e \u0443\u0431\u0440\u0430\u0442\u044c \u043b\u043e\u0430\u0434\u0435\u0440"),console.log(c),n(p(a))})).catch((function(t){return n(x(t))}))}}(t,e))};return Object(I.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault(),m.find((function(t){return t.name===c}))?b.b.error("".concat(c," is already in contacts.")):(C(c,u),a(""),l(""))},name:"adding_contacts_form",children:[Object(I.jsx)("label",{className:E.a.label,htmlFor:f.current,children:"Name"}),Object(I.jsx)("input",{className:E.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,id:f.current,onChange:v}),Object(I.jsx)("label",{className:E.a.label,htmlFor:O.current,children:"Number"}),Object(I.jsx)("input",{className:E.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,id:O.current,onChange:v}),Object(I.jsxs)("div",{className:E.a.box,children:[Object(I.jsx)("button",{className:E.a.btn,type:"submit",disabled:d,children:"Add contact"}),d&&Object(I.jsx)(i.a,{className:"s.loader",type:"spinningBubbles",color:"#2b2626",height:25,width:25})]})]})},q=c(18),z=c.n(q);var B=function(){var t=Object(s.c)(T),e=Object(s.b)(),c=Object(y.a)();return Object(I.jsxs)("div",{className:z.a.filter,children:[Object(I.jsx)("label",{className:z.a.label,htmlFor:c,children:"Find contacts by name:"}),Object(I.jsx)("input",{className:z.a.input,type:"text",name:"filter",value:t,id:c,onChange:function(t){return e(g(t.currentTarget.value))},autoComplete:"off"})]})},Z=c(19),D=c.n(Z);var J=function(t){var e=t.id,c=t.name,a=t.number,r=Object(s.c)(w),o=Object(n.useState)(r),u=Object(N.a)(o,2),l=u[0],d=u[1],f=Object(s.b)(),O=function(t,e){var c,n;d(!r),f((c=t,n=e,function(t){t(_()),j.a.delete("/contacts/".concat(c)).then((function(){b.b.success("Contact ".concat(n," successfully deleted.")),t(v(c))})).catch((function(e){return t(C(e))}))}))};return Object(I.jsxs)("li",{className:D.a.item,children:[c,": ",Object(I.jsx)("span",{className:D.a.tel,children:a}),l&&Object(I.jsx)(i.a,{className:"s.loader",type:"spinningBubbles",color:"#2b2626",height:15,width:15}),Object(I.jsx)("button",{className:D.a.btn,onClick:function(){O(e,c)},type:"button",disabled:l,children:"Delete"})]})},M=c(31),U=c.n(M);var W=function(){var t=Object(s.c)(S);return Object(I.jsx)("ul",{className:U.a.list,children:t.map((function(t){var e=t.id,c=t.name,n=t.number;return Object(I.jsx)(J,{id:e,name:c,number:n},e)}))})};c(64);var G,H,P,Q=function(){var t=Object(s.c)(S),e=Object(s.c)(T),c=Object(s.c)(w),a=Object(s.c)(A),r=Object(s.b)();return Object(n.useEffect)((function(){r((function(t){t(f()),j.a.get("/contacts").then((function(e){var c=e.data;return t(O(c))})).catch((function(e){return t(m(e))}))}))}),[r]),Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)("h1",{children:"Phonebook"}),Object(I.jsx)(L,{}),Object(I.jsx)("h2",{className:"listTitle",children:"Contacts"}),Object(I.jsx)(B,{}),0===t.length?c?Object(I.jsx)(i.a,{className:"ContactsLoader",type:"spinningBubbles",color:"#2b2626",height:80,width:80}):Object(I.jsx)("p",{className:"notifyText",children:e.length>0?"No results for your search":"No contacts yet"}):Object(I.jsx)(W,{}),a&&Object(I.jsx)("p",{className:"notifyText",children:a}),Object(I.jsx)(b.a,{position:"top-center",reverseOrder:!0,gutter:10,toastOptions:{className:"Toaster",duration:3e3,style:{background:"#363636",color:"#fff"}}})]})},V=(c(65),c(4)),X=c(32),Y=c(6),$=Object(d.c)([],(G={},Object(V.a)(G,O,(function(t,e){return e.payload.reverse()})),Object(V.a)(G,p,(function(t,e){return[e.payload].concat(Object(X.a)(t))})),Object(V.a)(G,v,(function(t,e){var c=e.payload;return t.filter((function(t){return t.id!==c}))})),G)),K=Object(d.c)(!1,(H={},Object(V.a)(H,f,(function(){return!0})),Object(V.a)(H,O,(function(){return!1})),Object(V.a)(H,m,(function(){return!1})),Object(V.a)(H,h,(function(){return!0})),Object(V.a)(H,p,(function(){return!1})),Object(V.a)(H,x,(function(){return!1})),Object(V.a)(H,_,(function(){return!0})),Object(V.a)(H,v,(function(){return!1})),Object(V.a)(H,C,(function(){return!1})),H)),tt=Object(d.c)(null,(P={},Object(V.a)(P,m,(function(t,e){return e.payload.message})),Object(V.a)(P,x,(function(t,e){return e.payload.message})),Object(V.a)(P,C,(function(t,e){return e.payload.message})),P)),et=Object(d.c)("",Object(V.a)({},g,(function(t,e){return e.payload}))),ct=Object(Y.b)({items:$,filter:et,loading:K,error:tt}),nt=Object(d.a)({reducer:{contacts:ct},devTools:!1,middleware:function(t){return t()}});o.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(s.a,{store:nt,children:Object(I.jsx)(Q,{})})}),document.getElementById("root"))},7:function(t,e,c){t.exports={form:"ContactForm_form__3cuYG",input:"ContactForm_input__3T6LH",label:"ContactForm_label__10R3X",btn:"ContactForm_btn__jaIWc",box:"ContactForm_box__tM6m7"}}},[[67,1,2]]]);
//# sourceMappingURL=main.81f28731.chunk.js.map