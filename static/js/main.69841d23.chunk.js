(this["webpackJsonpmini-jira"]=this["webpackJsonpmini-jira"]||[]).push([[0],{16:function(t,e,a){},19:function(t,e,a){t.exports=a(34)},24:function(t,e,a){},26:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),o=(a(24),a(1)),c=a.n(o),u=a(5),m=a(2),l=a(3),p=a(7),f=a(8),g=(a(26),function(t){var e=t.id,a=t.summary,n=t.assignee,s=t.project,i=t.img,o=t.onDragStart;return r.a.createElement("div",{className:"task",draggable:"true",onDragStart:o},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,e),r.a.createElement("li",null,a),r.a.createElement("li",null,n),r.a.createElement("li",null,r.a.createElement("div",{className:"item-status-div"},r.a.createElement("p",null,s))),r.a.createElement("li",null,r.a.createElement("img",{className:"image",src:i,alt:""}))))}),d=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onDragStart=function(e){e.dataTransfer.setData("taskId",t.props.id)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.summary,n=t.assignee,s=t.project,i=t.img;return r.a.createElement(g,{id:e,summary:a,assignee:n,project:s,img:i,onDragStart:this.onDragStart})}}]),a}(r.a.Component),v=(a(16),function(t){var e=t.status,a=t.onDragOver,n=t.onDrop,s=t.tasksData;return r.a.createElement("div",{className:"taskbar"},r.a.createElement("div",{className:"taskbar-title"},r.a.createElement("p",null,e)),r.a.createElement("div",{className:"taskbar-list",onDragOver:a,onDrop:n},s.map((function(t){return r.a.createElement(d,{key:t.id,id:t.id,summary:t.summary,assignee:t.assignee,status:t.status,project:t.project,img:t.img})}))))}),h=a(6),b=[{id:"MJ-1",summary:"Learn React",assignee:"None",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/2731/2731461.svg"},{id:"MJ-2",summary:"Learn Redux",assignee:"Konstantin",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/2714/2714068.svg"},{id:"MJ-3",summary:"Log time",assignee:"Diana",status:"To Do",project:"Routine",img:"https://image.flaticon.com/icons/svg/145/145852.svg"},{id:"MJ-4",summary:"Create mini-jira",assignee:"Artem",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/145/145843.svg"},{id:"MJ-5",summary:"Feed the cat",assignee:"Julia",status:"To Do",project:"Ungreatful tasks",img:"https://image.flaticon.com/icons/svg/2741/2741163.svg"},{id:"MJ-6",summary:"Play games",assignee:"Eugene",status:"To Do",project:"Recreation",img:"https://image.flaticon.com/icons/svg/2741/2741111.svg"},{id:"MJ-7",summary:"Do sport",assignee:"Lera",status:"To Do",project:"Health",img:"https://image.flaticon.com/icons/svg/163/163802.svg"},{id:"MJ-8",summary:"Cook",assignee:"Yuri",status:"To Do",project:"Routine",img:"https://image.flaticon.com/icons/svg/163/163804.svg"}],y=[{columnName:"To Do"},{columnName:"In Progress"},{columnName:"Ready for testing"},{columnName:"Completed"}],D=new(function(){function t(){Object(m.a)(this,t),this.tasksData=b,this.taskbarConfig=y}return Object(l.a)(t,[{key:"getTasksData",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t(e.tasksData)}),100)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getTaskbarConfig",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t(e.taskbarConfig)}),100)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),t}()),k=a(11),j=function(t){return{type:"TASKS:UPDATE_ITEM",payload:Object(k.a)({},t)}},E=a(10),O=Object(E.a)([function(t,e){return t.tasksReducer.filter((function(t){return t.status===e.status}))}],(function(t){return t})),T=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onDragOver=function(t){t.preventDefault()},t.onDrop=function(e){var a=t.props,n=a.status,r=a.dispatch,s=e.dataTransfer.getData("taskId");r(j({id:s,status:n}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateTasks()}},{key:"updateTasks",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.dispatch,t.next=3,D.getTasksData();case 3:a=t.sent,e({type:"TASKS:UPDATE_ALL",payload:a});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.onDragOver,e=this.onDrop,a=this.props,n=a.status,s=a.tasksFilteredByStatus;return r.a.createElement(v,{onDragOver:t,onDrop:e,status:n,tasksData:s})}}]),a}(r.a.Component),N=Object(h.b)((function(t,e){return{tasksFilteredByStatus:O(t,e)}}))(T),w=(a(33),function(t){var e=t.columnNames;return r.a.createElement("div",{className:"board"},r.a.createElement("div",{className:"board-taskbar-container"},e.map((function(t){return r.a.createElement(N,{key:t,status:t})}))))}),A=function(t){return{type:"TASKBAR:UPDATE_ALL",payload:t}},S=a(4),_=Object(E.a)((function(t){return t.taskbarReducer}),(function(t){return t.map((function(t){return t.columnName}))})),L=function(t){Object(f.a)(a,t);var e=Object(p.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateTaskbar()}},{key:"updateTaskbar",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.dispatch,t.next=3,D.getTaskbarConfig();case 3:a=t.sent,e(A(a));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.columnNames;return r.a.createElement(w,{columnNames:t})}}]),a}(r.a.Component),R=Object(S.c)(Object(h.b)((function(t){return{columnNames:_(t)}})))(L),M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TASKBAR:UPDATE_ALL":return e.payload;default:return t}},J=a(18),C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TASKS:UPDATE_ALL":return e.payload;case"TASKS:UPDATE_ITEM":var a=Object(J.a)(t),n=a.findIndex((function(t){return t.id===e.payload.id}));return a[n]=Object(k.a)({},a[n],{},e.payload),a;default:return t}},P=Object(S.b)({taskbarReducer:M,tasksReducer:C}),x=Object(S.d)(P,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(h.a,{store:x},r.a.createElement(R,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.69841d23.chunk.js.map