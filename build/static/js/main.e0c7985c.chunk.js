(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c=n(16),r=n.n(c),o=n(4),u=n(2),i=n(0),s=function(e){var t=e.user,n=e.handleDelete;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.name}),Object(i.jsx)("td",{children:t.number}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:function(){return n(t.id)},children:"Delete"})})]})},a=function(e){var t=e.users,n=e.onDelete;return Object(i.jsx)("table",{children:Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(s,{user:e,handleDelete:n},e.id)}))})})},d=n(3),l=function(e){var t=e.message,n=e.style,c=Object(d.a)(Object(d.a)({},n),{},{color:"green"});return"success"in t?Object(i.jsx)("div",{style:c,children:t.success}):null},j=function(e){var t=e.message,n=e.style,c=Object(d.a)(Object(d.a)({},n),{},{color:"red"});return"error"in t?Object(i.jsx)("div",{style:c,children:Object(i.jsx)("p",{children:t.error})}):null},f=function(e){var t=e.message,n={color:"black",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:5,marginBottom:10};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{message:t,style:n}),Object(i.jsx)(j,{message:t,style:n})]})},h=n(5),b=n.n(h),O="/api/persons",m=function(){return b.a.get(O).then((function(e){return e.data})).catch((function(e){return e}))},x=function(e){return b.a.post(O,e).then((function(e){return e.data})).catch((function(e){throw e}))},p=function(e){return b.a.delete("".concat(O,"/").concat(e)).then((function(e){return e.data})).catch((function(e){throw e}))},v=function(e,t){return b.a.put("".concat(O,"/").concat(e),t).then((function(e){return e.data})).catch((function(e){throw e}))},g=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(u.useState)(""),s=Object(o.a)(r,2),d=s[0],l=s[1],j=Object(u.useState)(""),h=Object(o.a)(j,2),b=h[0],O=h[1],g=Object(u.useState)([]),y=Object(o.a)(g,2),w=y[0],C=y[1],D=Object(u.useState)({}),S=Object(o.a)(D,2),k=S[0],L=S[1];Object(u.useEffect)((function(){m().then((function(e){return c(e)})).catch((function(e){return alert("Could not fetch person details: ",e)}))}),[]);var T=function(e){var t=n.find((function(t){return t.id===e})).name;p(e).then((function(){c(n.filter((function(t){return t.id!==e}))),C(w.filter((function(t){return t.id!==e}))),L({success:"".concat(t," deleted successfully")}),setTimeout((function(){return L({})}),5e3)})).catch((function(e){m().then((function(e){return c(e)})).catch((function(e){return alert("Could not fetch person details: ",e)})),L({error:"".concat(t," has already been deleted")}),setTimeout((function(){return L({})}),5e3)}))};return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(f,{message:k}),"filter shown with ",Object(i.jsx)("input",{onChange:function(e){""!==e.target.value?C(n.filter((function(t){return t.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1}))):C([])}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)("div",{children:Object(i.jsx)(a,{users:w,onDelete:T})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:d,number:b};if(n.filter((function(e){return e.name.toLowerCase().trim()===d.toLowerCase().trim()})).length>0){if(window.confirm("".concat(d," is already added to phonebook. Do you want to replace it with the current details ?"))){var r=n.find((function(e){return e.name.toLowerCase().trim()===d.toLowerCase().trim()})).id;v(r,t).then((function(){m().then((function(e){c(e),L({success:"".concat(d," updated successfully")}),setTimeout((function(){return L({})}),5e3)})).catch((function(e){return alert("Could not fetch person details: ",e)}))})).catch((function(e){m().then((function(e){return c(e)})).catch((function(e){return alert("Could not fetch person details: ",e)})),L({error:"Error updating item: ".concat(e.response.data)}),setTimeout((function(){return L({})}),5e3)}))}}else x(t).then((function(){m().then((function(e){c(e),L({success:"".concat(d," created successfully")}),setTimeout((function(){return L({})}),5e3)})).catch((function(e){return alert("Could not fetch person details: ",e)}))})).catch((function(e){m().then((function(e){return c(e)})).catch((function(e){return alert("Could not fetch person details: ",e)})),L({error:"Error creating item : ".concat(e.response.data)}),setTimeout((function(){return L({})}),5e3)}))},children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:d,onChange:function(e){l(e.target.value)}})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:b,onChange:function(e){O(e.target.value)}})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(a,{users:n,onDelete:T})]})]})};r.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e0c7985c.chunk.js.map