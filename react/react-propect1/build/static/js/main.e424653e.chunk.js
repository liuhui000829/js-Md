(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),u=(n(27),n(3)),l=n(4),i=n(7),s=n(5),p=n(8),m=n(1),d=function(e){return{type:"increment",data:e}},h=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).operation=function(e){return function(t){var r=n.props,a=r.count,c=r.increment,o=r.decrement,u=r.incrementAsync,l=1*n.selectNumber.value;"increment"===e&&c(l),"decrement"===e&&o(l),"oddIncrement"===e&&a%2!==0&&c(l),"asycIncrement"===e&&u(l,1e3)}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h1",null,"\u5f53\u524d\u6c42\u548c\u4e3a: ",this.props.count),a.a.createElement("h2",null,"person\u7ec4\u4ef6\u7684\u4eba\u6570\u662f",this.props.person.length),a.a.createElement("br",null),a.a.createElement("select",{ref:function(t){return e.selectNumber=t},style:{width:100}},a.a.createElement("option",{value:"1"},"1"),a.a.createElement("option",{value:"2"},"2"),a.a.createElement("option",{value:"3"},"3")),"\xa0",a.a.createElement("button",{onClick:this.operation("increment"),style:{width:100}},"+"),"\xa0",a.a.createElement("button",{onClick:this.operation("decrement"),style:{width:100}},"-"),"\xa0",a.a.createElement("button",{onClick:this.operation("oddIncrement")},"\u5f53\u524d\u6c42\u548c\u4e3a\u5947\u6570\u518d\u52a0"),"\xa0",a.a.createElement("button",{onClick:this.operation("asycIncrement")},"\u5f02\u6b65\u52a0"))}}]),t}(a.a.Component),f=Object(m.b)(function(e){return{count:e.count,person:e.person}},{increment:d,decrement:function(e){return{type:"decrement",data:e}},incrementAsync:function(e,t){return function(n){setTimeout(function(){n(d(e))},t)}}})(h),b=n(18),v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).addPerson=function(){var e=n.name.value,t=n.age.value,r={id:Object(b.a)(),name:e,age:t};n.props.addPerson(r)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.person),a.a.createElement("div",null,a.a.createElement("h1",null,"\u6211\u662fPerson\u7ec4\u4ef6"),a.a.createElement("h2",null,"count\u7ec4\u4ef6\u6c42\u548c\u4e3a",this.props.count),a.a.createElement("input",{ref:function(t){return e.name=t},type:"text",placeholder:"\u8bf7\u8f93\u5165\u540d\u5b57"}),a.a.createElement("input",{ref:function(t){return e.age=t},type:"text",placeholder:"\u8bf7\u8f93\u5165\u5e74\u9f84"}),a.a.createElement("button",{onClick:this.addPerson},"\u6dfb\u52a0"),a.a.createElement("ul",null,this.props.person.map(function(e){return a.a.createElement("li",{key:e.id},e.name,"---",e.age)})))}}]),t}(r.Component),E=Object(m.b)(function(e){return{person:e.person,count:e.count}},{addPerson:function(e){return{type:"addperson",data:e}}})(v);n(34);function y(){return a.a.createElement("div",null,a.a.createElement(f,null),a.a.createElement(E,null))}var j=n(2),O=n(16),g=n(17),w=n(6),k=[{id:"001",name:"\u5f20\u4e09",age:18}],C=Object(j.combineReducers)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;void 0===e&&(e=0);var n=t.type,r=t.data;switch(n){case"increment":return e+r;case"decrement":return e-r;default:return e}},person:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;switch(n){case"addperson":return[r].concat(Object(w.a)(e));default:return e}}}),I=Object(j.legacy_createStore)(C,Object(O.composeWithDevTools)(Object(j.applyMiddleware)(g.a)));o.a.createRoot(document.getElementById("root")).render(a.a.createElement(m.a,{store:I},a.a.createElement(y,null)))}},[[19,2,1]]]);
//# sourceMappingURL=main.e424653e.chunk.js.map