(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),l=a(1),o=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},b=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.user,r=t.id;return Object(m.jsxs)("article",{"data-id":r,className:u()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:a}),i&&Object(m.jsx)(j,{user:i})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:(t=e.userId,o.find((function(e){return e.id===t}))||null)});var t})),f=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(0),c=Object(s.a)(i,2),d=c[0],u=c[1],j=Object(l.useState)(O),b=Object(s.a)(j,2),f=b[0],p=b[1],x=Object(l.useState)(!0),v=Object(s.a)(x,2),y=v[0],S=v[1],N=Object(l.useState)(!0),I=Object(s.a)(N,2),g=I[0],C=I[1],_=Math.max.apply(Math,Object(r.a)(f.map((function(e){return e.id}))));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),a||S(!1),d||C(!1),a&&d){var t=o.find((function(e){return e.id===d}))||null,i={id:_+1,title:a,completed:!1,userId:(null===t||void 0===t?void 0:t.id)||null,user:t};p((function(e){return[].concat(Object(r.a)(e),[i])})),n(""),u(0)}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Title: "}),Object(m.jsx)("input",{type:"text","data-cy":"titleInput",value:a,placeholder:"Enter a title",onChange:function(e){n(e.target.value),S(!0)}})]}),!y&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",value:d,onChange:function(e){u(+e.target.value),C(!0)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),!g&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:f})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5e5ec0ba.chunk.js.map