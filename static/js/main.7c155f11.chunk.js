(this["webpackJsonpreact-test-deploy"]=this["webpackJsonpreact-test-deploy"]||[]).push([[0],{33:function(e,t,n){e.exports=n(61)},43:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n(14),l=n.n(c),i=n(19),d=n(7),s=n(8),u=n(10),p=n(9),m=n(11);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},h={color:"#fff",textDecoration:"none"},b=function(){return o.a.createElement(r.a,{basename:"/"},o.a.createElement("header",{style:f},o.a.createElement("h1",null,"TodoList"),o.a.createElement(r.b,{style:h,to:"/"},"Home")," | ",o.a.createElement(r.b,{style:h,to:"/about"},"About")))},y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:E},"X"))}}]),n}(a.Component),E={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},v=y,g=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(v,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),n}(a.Component),j=n(32),k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e.onChange=function(t){return e.setState(Object(j.a)({},t.target.name,t.target.value))},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(a.Component);var O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the TodoList App v1.0.0 "))},x=(n(43),n(15)),C=n.n(x);l.a.render(o.a.createElement(r.a,{basename:"/nicksessa.github.io/react-test-deploy01"},o.a.createElement(T,null)),document.getElementById("root"));var T=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){C.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(n){return e.setState({todos:Object(i.a)(e.state.todos.filter((function(e){return e.id!==t})))})}))},e.addTodo=function(t){C.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return e.setState({todos:[].concat(Object(i.a)(e.state.todos),[t.data])})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(r.a,{basename:"/"},o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(b,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:e.addTodo}),o.a.createElement(g,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(a.Component),S=T;l.a.render(o.a.createElement(r.a,{basename:"/nicksessa.github.io/react-test-deploy01"},o.a.createElement(S,null)),document.getElementById("root")),l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7c155f11.chunk.js.map