(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),c=a(2),s=a(6),l=a(1),o=(a(13),a(0)),d=function(e){var t=e.user,a=t.email,n=t.name;return Object(o.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},u=function(e){var t=e.todo,a=t.id,n=t.title,i=t.user,r=t.completed;return Object(o.jsxs)("article",{"data-id":a,className:"TodoInfo ".concat(r&&"TodoInfo--completed"),children:[Object(o.jsx)("h2",{className:"TodoInfo__title",children:n}),i?Object(o.jsx)(d,{user:i}):void 0]})},m=function(e){var t=e.todos;return Object(o.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(o.jsx)(u,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];function h(e){return j.find((function(t){return t.id===e}))||null}var p=Math.max.apply(Math,Object(s.a)(b.map((function(e){return e.id})))),O=function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(0),d=Object(c.a)(i,2),u=d[0],O=d[1],f=Object(l.useState)(!1),x=Object(c.a)(f,2),v=x[0],S=x[1],y=Object(l.useState)(!1),I=Object(c.a)(y,2),N=I[0],g=I[1],C=Object(l.useState)(b.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:h(e.userId)})}))),_=Object(c.a)(C,2),k=_[0],D=_[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Add todo form"}),Object(o.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),S(!a),g(!u),a&&u&&(p+=1,D([].concat(Object(s.a)(k),[{title:a,completed:!1,userId:u,id:p,user:h(u)}])),n(""),O(0))},children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{id:"titleInput",htmlFor:"titleInput",children:"Title: "}),Object(o.jsx)("input",{name:"titleInput",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){S(!1);var t=e.target.value.replace(/([^a-z0-9\u0430-\u044f\s])/gi,"");n(t)}}),v&&Object(o.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{id:"userSelect",htmlFor:"userSelect",children:"User: "}),Object(o.jsxs)("select",{name:"userSelect","data-cy":"userSelect",defaultValue:0,value:u,onChange:function(e){g(!1),O(Number(e.target.value))},children:[Object(o.jsx)("option",{value:0,disabled:!0,children:"Choose a user"}),j.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),N&&Object(o.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(o.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(o.jsx)(m,{todos:k})]})};i.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7babc2c2.chunk.js.map