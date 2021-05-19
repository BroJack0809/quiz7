(this.webpackJsonpquiz7=this.webpackJsonpquiz7||[]).push([[0],{69:function(e,t,n){},74:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);n(69);var a=n(0),o=n.n(a),i=n(10),c=n.n(i),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))},r=n(34),l=n(11),d=n(19),u=n(27),h=n(20),j=n(41),b=n(40),p=(n(74),n(4)),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={newText:e.todo.text,editing:!1},a}return Object(h.a)(n,[{key:"deleteTodo",value:function(){this.props.remove(this.props.todo.id)}},{key:"checkTodoToggle",value:function(){this.props.checkToggle(this.props.todo.id)}},{key:"showEditForm",value:function(){var e=this.state.editing;this.setState({newText:this.props.todo.text,editing:!e})}},{key:"getNewText",value:function(e){var t=e.target.value;this.setState({newText:t})}},{key:"saveEditedValue",value:function(){var e=this.state.newText;this.props.saveEditedValue(this.props.todo.id,e),this.setState({newText:this.props.todo.text,editing:!1})}},{key:"render",value:function(){var e=this,t=this.state.editing,n=this.props.todo;return Object(p.jsxs)("li",{className:"list-group-item list-row "+(n.completed?"done":""),children:[Object(p.jsx)("div",{className:"btn-circle checkbox",onClick:function(){return e.checkTodoToggle()},children:"\u2713"}),Object(p.jsxs)("div",{className:"list-text__container",onDoubleClick:function(){return e.showEditForm()},children:[!t&&Object(p.jsx)("span",{className:"list-text",children:n.text}),t&&Object(p.jsxs)("div",{className:"input-group",children:[Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:n.text,value:this.state.newText,onChange:function(t){return e.getNewText(t)}}),Object(p.jsxs)("div",{className:"input-group-append",children:[Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.showEditForm()},children:"\u53d6\u6d88"}),Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.saveEditedValue()},children:"\u5b8c\u6210\u7de8\u8f2f"})]})]})]}),Object(p.jsx)("div",{className:"btn-circle delete",onClick:function(){return e.deleteTodo()},children:"\u2715"})]})}}]),n}(o.a.Component),x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("h1",{style:{color:"#b0efeb"},children:"CGU Todo list"})}}]),n}(o.a.Component),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={todos:[{id:1,text:"\u75ab\u60c5",color:"red",completed:!0},{id:2,text:"\u505c\u96fb",completed:!1},{id:3,text:"\u505c\u6c34",completed:!1}],newId:4,newText:""},a}return Object(h.a)(n,[{key:"getNewValue",value:function(e){var t=e.target.value;this.setState({newText:t})}},{key:"addTodo",value:function(e){var t=this.state,n=t.todos,a=t.newText,o=t.newId;a?this.setState({todos:[].concat(Object(d.a)(n),[{id:o,text:a,completed:!1}]),newId:o+1,newText:""}):e.preventDefault()}},{key:"deleteTodo",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t})}},{key:"checkTodoToggle",value:function(e){var t=this.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));this.setState({todos:t})}},{key:"saveEditedValue",value:function(e,t){var n=this.state.todos.map((function(n){return n.id===e&&(n.text=t),n}));this.setState({todos:n})}},{key:"render",value:function(){var e=this,t=this.state.todos;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("header",{className:"header__container",children:Object(p.jsx)(x,{})}),Object(p.jsxs)("div",{className:"input-group mb-3",children:[Object(p.jsx)("input",{type:"text",className:"form-control",id:"input-add",placeholder:"add a new todo",value:this.state.newText,onChange:function(t){return e.getNewValue(t)}}),Object(p.jsx)("span",{className:"input-group-append",children:Object(p.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(t){return e.addTodo(t)},children:"Add"})})]}),Object(p.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(t){return Object(p.jsx)(m,{todo:t,remove:function(t){return e.deleteTodo(t)},checkToggle:function(t){return e.checkTodoToggle(t)},saveEditedValue:function(t,n){return e.saveEditedValue(t,n)}},t.id)}))})]})}}]),n}(o.a.Component),v=n(136),O=n(132),f=n(129),y=n(133),k=n(131),w=n(135),T=n(130),N=n(134),C=n(128),S=n(56),E=n.n(S),F=n(91),I=n(127);function V(){return Object(p.jsxs)(F.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(p.jsx)(r.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var q=Object(I.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));c.a.render(Object(p.jsx)(r.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:function(){var e=q();return Object(p.jsxs)(C.a,{container:!0,component:"main",className:e.root,children:[Object(p.jsx)(f.a,{}),Object(p.jsx)(C.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(p.jsx)(C.a,{item:!0,xs:12,sm:8,md:5,component:T.a,elevation:6,square:!0,children:Object(p.jsxs)("div",{className:e.paper,children:[Object(p.jsx)(v.a,{className:e.avatar,children:Object(p.jsx)(E.a,{})}),Object(p.jsx)(F.a,{component:"h1",variant:"h5",children:"Sign in CSIE@CGU"}),Object(p.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(p.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Your Email/\u5e33\u865f",name:"email",autoComplete:"email",autoFocus:!0}),Object(p.jsx)(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password/\u5bc6\u78bc",type:"password",id:"password",autoComplete:"current-password"}),Object(p.jsx)(k.a,{control:Object(p.jsx)(w.a,{value:"remember",color:"primary"}),label:"\u8a18\u4f4f\u6211"}),Object(p.jsx)("switch",{children:Object(p.jsx)(r.b,{to:"/about",children:Object(p.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,children:"Sign In"})})}),Object(p.jsxs)(C.a,{container:!0,children:[Object(p.jsx)(C.a,{item:!0,xs:!0,children:Object(p.jsx)(r.b,{href:"#",variant:"body2",children:"\u5fd8\u8a18\u5bc6\u78bc?"})}),Object(p.jsx)(C.a,{item:!0,children:Object(p.jsx)(r.b,{href:"#",variant:"body2",children:"\u6c92\u6709\u5e33\u865f? \u5efa\u7acb\u5e33\u865f"})})]}),Object(p.jsx)(N.a,{mt:5,children:Object(p.jsx)(V,{})})]})]})})]})}}),Object(p.jsx)(l.a,{path:"/about",children:Object(p.jsx)(g,{})})]})}),document.getElementById("root")),s()}},[[89,1,2]]]);
//# sourceMappingURL=main.25e7ea48.chunk.js.map