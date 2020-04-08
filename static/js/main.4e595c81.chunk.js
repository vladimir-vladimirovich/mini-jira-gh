(this["webpackJsonpmini-jira"]=this["webpackJsonpmini-jira"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){t.exports=a(31)},21:function(t,e,a){},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),o=(a(21),a(1)),c=a.n(o),u=a(5),m=a(2),l=a(3),p=a(7),g=a(8),f=a(4),d=(a(29),function(t){return r.a.createElement("div",{className:"task",draggable:"true",onDragStart:t.onDragStart},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,t.id),r.a.createElement("li",null,t.summary),r.a.createElement("li",null,t.assignee),r.a.createElement("li",null,r.a.createElement("div",{className:"item-status-div"},r.a.createElement("p",null,t.project))),r.a.createElement("li",null,r.a.createElement("img",{className:"image",src:t.img,alt:""}))))}),v=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onDragStart=function(e){e.dataTransfer.setData("taskId",t.props.id)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.id,a=t.summary,n=t.assignee,s=t.project,i=t.img;return r.a.createElement(d,{id:e,summary:a,assignee:n,project:s,img:i,onDragStart:this.onDragStart})}}]),a}(r.a.Component),h=(a(14),function(t){var e=t.status,a=t.onDragOver,n=t.onDrop,s=Object(f.c)((function(t){return t.tasksReducer}));return r.a.createElement("div",{className:"taskbar"},r.a.createElement("div",{className:"taskbar-title"},r.a.createElement("p",null,e)),r.a.createElement("div",{className:"taskbar-list",onDragOver:a,onDrop:n},s.map((function(t){if(t.status===e)return r.a.createElement(v,{key:t.id,id:t.id,summary:t.summary,assignee:t.assignee,status:t.status,project:t.project,img:t.img})}))))}),k=[{id:"MJ-1",summary:"Learn React",assignee:"None",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/2731/2731461.svg"},{id:"MJ-2",summary:"Learn Redux",assignee:"Konstantin",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/2714/2714068.svg"},{id:"MJ-3",summary:"Log time",assignee:"Diana",status:"To Do",project:"Routine",img:"https://image.flaticon.com/icons/svg/145/145852.svg"},{id:"MJ-4",summary:"Create mini-jira",assignee:"Artem",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/145/145843.svg"},{id:"MJ-5",summary:"Feed the cat",assignee:"Julia",status:"To Do",project:"Ungreatful tasks",img:"https://image.flaticon.com/icons/svg/2741/2741163.svg"},{id:"MJ-6",summary:"Play games",assignee:"Eugene",status:"To Do",project:"Recreation",img:"https://image.flaticon.com/icons/svg/2741/2741111.svg"},{id:"MJ-7",summary:"Do sport",assignee:"Lera",status:"To Do",project:"Health",img:"https://image.flaticon.com/icons/svg/163/163802.svg"},{id:"MJ-8",summary:"Cook",assignee:"Yuri",status:"To Do",project:"Routine",img:"https://image.flaticon.com/icons/svg/163/163804.svg"}],b=[{columnStatus:"To Do"},{columnStatus:"In Progress"},{columnStatus:"Ready for testing"},{columnStatus:"Completed"}],y=new(function(){function t(){Object(m.a)(this,t),this.tasksData=k,this.taskbarConfig=b}return Object(l.a)(t,[{key:"getTasksData",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t(e.tasksData)}),1500)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getTaskbarConfig",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t(e.taskbarConfig)}),1e3)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),t}()),j=function(t){return{type:"UPDATE_TASKBAR",payload:t}},D=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onDragOver=function(t){t.preventDefault()},t.onDrop=function(e){var a=t.props.status,n=t.props.tasksStore.tasksReducer,r=e.dataTransfer.getData("taskId"),s=n.map((function(t){return t.id===r?(t.status=a,t):t}));t.props.updateTasks(s)},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateTasks()}},{key:"updateTasks",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getTasksData();case 2:e=t.sent,this.props.updateTasks(e);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(h,{onDragOver:this.onDragOver,onDrop:this.onDrop,status:this.props.status})}}]),a}(r.a.Component),E=Object(f.b)((function(t){return{tasksStore:t}}),(function(t){return{updateTasks:function(e){t(function(t){return{type:"UPDATE_TASKS",payload:t}}(e))}}}))(D),T=(a(30),function(){var t=Object(f.c)((function(t){return t.taskbarReducer}));return r.a.createElement("div",{className:"board"},r.a.createElement("div",{className:"board-taskbar-container"},t.map((function(t){return r.a.createElement(E,{key:t.columnStatus,status:t.columnStatus})}))))}),O=a(6),S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_TASKBAR":return e.payload;default:return t}},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE_TASKS":return e.payload;default:return t}},A=Object(O.b)({taskbarReducer:S,tasksReducer:w}),R=Object(O.c)(A),J=function(t){Object(g.a)(a,t);var e=Object(p.a)(a);function a(){return Object(m.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateTaskbar()}},{key:"updateTaskbar",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getTaskbarConfig();case 2:e=t.sent,R.dispatch(j(e));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(f.a,{store:R},r.a.createElement(T,null))}}]),a}(r.a.Component);i.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4e595c81.chunk.js.map