(this["webpackJsonpmini-jira"]=this["webpackJsonpmini-jira"]||[]).push([[0],{38:function(e,t,a){},54:function(e,t,a){},66:function(e,t,a){e.exports=a(82)},71:function(e,t,a){},73:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),c=(a(71),a(25)),o=a.n(c),u=a(47),l=a(10),d=a(11),m=a(16),p=a(17),f=(a(73),function(e){var t=e.id,a=e.summary,n=e.assignee,i=e.project,s=e.img,c=e.onDragStart,o=e.onClick;return r.a.createElement("div",{className:"task",draggable:"true",onDragStart:c,onClick:o,id:t},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,t),r.a.createElement("li",null,a),r.a.createElement("li",null,n),r.a.createElement("li",null,r.a.createElement("div",{className:"item-status-div"},r.a.createElement("p",null,i))),r.a.createElement("li",null,r.a.createElement("img",{className:"image",src:s,alt:""}))))}),g=function(e){return{type:"SIDEBAR:SET_VISIBILITY",payload:e}},E=function(e){return{type:"SIDEBAR:SET_TASKID",payload:e}},b=a(12),v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onDragStart=function(t){t.dataTransfer.setData("taskId",e.props.id)},e.onClick=function(t){var a=e.props.dispatch;a(g(!0)),a(E(t.currentTarget.id))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.summary,n=e.assignee,i=e.project,s=e.img;return r.a.createElement(f,{id:t,summary:a,assignee:n,project:i,img:s,onDragStart:this.onDragStart,onClick:this.onClick})}}]),a}(r.a.Component),h=Object(b.b)()(v),y=(a(54),function(e){var t=e.status,a=e.onDragOver,n=e.onDrop,i=e.tasksData;return r.a.createElement("div",{className:"taskbar"},r.a.createElement("div",{className:"taskbar-title"},r.a.createElement("p",null,t)),r.a.createElement("div",{className:"taskbar-list",onDragOver:a,onDrop:n},i.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,summary:e.summary,assignee:e.assignee,status:e.status,project:e.project,img:e.img})}))))}),k=a(60),j=function(e){return{type:"TASKS:UPDATE_ITEM",payload:Object(k.a)({},e)}},T=a(33),O=Object(T.a)([function(e,t){return e.tasks.filter((function(e){return e.status===t.status}))},function(e){return e.filters.find((function(e){return e.active}))},function(e){return e.searchQuery.toLowerCase()}],(function(e,t,a){return(null===t||void 0===t?void 0:t.assignee)&&(e=e.filter((function(e){return e.assignee===t.assignee}))),(null===t||void 0===t?void 0:t.project)&&(e=e.filter((function(e){return e.project===t.project}))),a&&(e=e.filter((function(e){return e.summary.toLowerCase().includes(a)||e.assignee.toLowerCase().includes(a)||e.project.toLowerCase().includes(a)||e.status.toLowerCase().includes(a)}))),e})),D=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onDragOver=function(e){e.preventDefault()},e.onDrop=function(t){var a=e.props,n=a.status,r=a.dispatch,i=t.dataTransfer.getData("taskId");r(j({id:i,status:n}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.status,a=e.tasks;return r.a.createElement(y,{onDragOver:this.onDragOver,onDrop:this.onDrop,status:t,tasksData:a})}}]),a}(r.a.Component),S=Object(b.b)((function(e,t){return{tasks:O(e,t)}}))(D),C=(a(78),a(38),function(e){var t=e.onChange;return r.a.createElement("input",{type:"text",className:"quick-search",onChange:function(e){return t(e.target.value)},placeholder:"Search..."})}),A=a(46),I=function(e){return{type:"SEARCH:SET_QUERY",payload:e}},R=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){(0,e.props.dispatch)(I(t))},e.onChangeDebounced=A.a.debounce(e.onChange,200),e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(C,{onChange:this.onChangeDebounced})}}]),a}(r.a.Component),N=Object(b.b)()(R),w=function(e){var t=e.filters,a=e.applyFilter;return r.a.createElement("div",{className:"filtersPanel"},r.a.createElement("div",{className:"quick-filters-container"},r.a.createElement("dt",null,"QUICK FILTERS:"),t.map((function(e){return r.a.createElement("dd",{key:e.id},r.a.createElement("button",{type:"submit",id:e.id,className:"filter-button",onClick:a},e.name))}))),r.a.createElement("div",{className:"quick-search-container"},r.a.createElement(N,null)))},L=Object(T.b)(T.c,A.b),J=L([function(e){return e.filters}],(function(e){return e})),_=function(e){return{type:"FILTERS:SET_ACTIVE",payload:e}},M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).applyFilter=function(t){t.preventDefault(),(0,e.props.dispatch)(_(t.target.id))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.filters;return r.a.createElement(w,{filters:e,applyFilter:this.applyFilter})}}]),a}(r.a.Component),P=Object(b.b)((function(e){return{filters:J(e)}}))(M),F=a(125),V=a(123),x=a(127),U=a(58),K=a.n(U),B=a(122),Q=a(128),Y=a(117),X=(a(79),Object(Y.a)((function(e){return{small:{width:e.spacing(3),height:e.spacing(3)}}}))),q=function(e){var t=e.closeSidebar,a=e.isVisible,n=e.task,i=X();return r.a.createElement("div",null,r.a.createElement(F.a,{anchor:"right",open:a,onClose:t},r.a.createElement("div",{className:"sidebar"},r.a.createElement(B.a,{container:!0,spacing:2},r.a.createElement(B.a,{item:!0,xs:12},r.a.createElement(V.a,{id:"standard-basic",defaultValue:n.summary,label:n.id,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(x.a,{position:"start"},r.a.createElement(K.a,null))}})),r.a.createElement(B.a,{item:!0,xs:12,sm:6},r.a.createElement(V.a,{disabled:!0,defaultValue:n.status,InputProps:{startAdornment:r.a.createElement(x.a,{position:"start"},"Status:")}})),r.a.createElement(B.a,{item:!0,xs:12,sm:6},r.a.createElement(V.a,{disabled:!0,defaultValue:n.assignee,InputProps:{startAdornment:r.a.createElement(x.a,{position:"start"},"Assignee:",r.a.createElement(Q.a,{alt:"Remy Sharp",src:n.img,className:i.small}))}})),r.a.createElement(B.a,{item:!0,xs:12,sm:6},r.a.createElement(V.a,{disabled:!0,defaultValue:n.project,InputProps:{startAdornment:r.a.createElement(x.a,{position:"start"},"Project:")}}))))))},H=L([function(e){return e.sidebar.visible}],(function(e){return e})),W=L([function(e){return e.sidebar.loading}],(function(e){return e})),z=L([function(e){return e.sidebar.taskId?e.tasks.find((function(t){return t.id===e.sidebar.taskId})):e.sidebar.defaultTaskData}],(function(e){return e})),G=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).closeSidebar=function(){(0,e.props.dispatch)(g(!1))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.isVisible,n=e.task;return r.a.createElement("div",null,r.a.createElement(q,{closeSidebar:this.closeSidebar,isVisible:a,isLoading:t,task:n}))}}]),a}(r.a.Component),Z=Object(b.b)((function(e){return{isVisible:H(e),isLoading:W(e),task:z(e)}}))(G),$=function(e){var t=e.columnNames;return r.a.createElement("div",{className:"board"},r.a.createElement(Z,null),r.a.createElement(P,null),r.a.createElement("div",{className:"board-taskbar-container"},t.map((function(e){return r.a.createElement(S,{key:e,status:e})}))))},ee=function(e){return{type:"TASKBAR:UPDATE_ALL",payload:e}},te=L([function(e){return e.taskbar}],(function(e){return e.map((function(e){return e.columnName}))})),ae=[{id:"MJ-1",summary:"Learn React",assignee:"None",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/2731/2731461.svg",description:'1. Open JIRA MJ-12. Enter "Education"3. Check if only education tasks are displayed'},{id:"MJ-2",summary:"Learn Redux",assignee:"Konstantin",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/2714/2714068.svg",description:'1. Open JIRA MJ-22. Enter "Education"3. Check if only education tasks are displayed'},{id:"MJ-3",summary:"Log time",assignee:"Diana",status:"To Do",project:"Routine",img:"https://image.flaticon.com/icons/svg/145/145852.svg",description:'1. Open JIRA MJ-32. Enter "Education"3. Check if only education tasks are displayed'},{id:"MJ-4",summary:"Create mini-jira",assignee:"Artem",status:"To Do",project:"Education",img:"https://image.flaticon.com/icons/svg/145/145843.svg",description:'1. Open JIRA MJ-42. Enter "Education"3. Check if only education tasks are displayed'},{id:"MJ-5",summary:"Feed the cat",assignee:"Julia",status:"To Do",project:"Ungreatful tasks",img:"https://image.flaticon.com/icons/svg/2741/2741163.svg",description:'1. Open JIRA MJ-52. Enter "Education"3. Check if only education tasks are displayed'},{id:"MJ-6",summary:"Play games",assignee:"Eugene",status:"To Do",project:"Recreation",img:"https://image.flaticon.com/icons/svg/2741/2741111.svg",description:'1. Open JIRA MJ-62. Enter "Education"3. Check if only education tasks are displayed'},{id:"MJ-7",summary:"Do sport",assignee:"Lera",status:"To Do",project:"Health",img:"https://image.flaticon.com/icons/svg/163/163802.svg",description:'1. Open JIRA MJ-72. Enter "Education"3. Check if only education tasks are displayed'},{id:"MJ-8",summary:"Cook",assignee:"Yuri",status:"To Do",project:"Routine",img:"https://image.flaticon.com/icons/svg/163/163804.svg",description:'1. Open JIRA MJ-82. Enter "Education"3. Check if only education tasks are displayed'}],ne=[{columnName:"To Do"},{columnName:"In Progress"},{columnName:"Ready for testing"},{columnName:"Completed"}],re=[{id:"all-filter",name:"All",project:"",assignee:"",summary:""},{id:"education-filter",name:"Education",project:"Education",assignee:"",summary:""},{id:"routine-filter",name:"Routine",project:"Routine",assignee:"",summary:""},{id:"recreation-filter",name:"Recreation",project:"Recreation",assignee:"",summary:""}],ie=new(function(){function e(){Object(l.a)(this,e),this.tasksData=ae,this.taskbarConfig=ne,this.filtersConfig=re}return Object(d.a)(e,[{key:"getTasksData",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){t(e.tasksData)}),100)}))}},{key:"getTaskData",value:function(e){var t=this;return new Promise((function(a,n){setTimeout((function(){e?a(t.tasksData.find((function(t){return t.id===e}))):n(null)}),4e3)}))}},{key:"getTaskbarConfig",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){t(e.taskbarConfig)}),100)}))}},{key:"getFiltersConfig",value:function(){var e=this;return new Promise((function(t){setTimeout((function(){t(e.filtersConfig)}),100)}))}}]),e}()),se=a(28),ce=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.updateTaskbar(),this.updateTasks(),this.updateFilters()}},{key:"updateTaskbar",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,ie.getTaskbarConfig();case 3:a=e.sent,t(ee(a));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateTasks",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,ie.getTasksData();case 3:a=e.sent,t({type:"TASKS:UPDATE_ALL",payload:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateFilters",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,ie.getFiltersConfig();case 3:a=e.sent,t({type:"FILTERS:SET",payload:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.columnNames;return r.a.createElement($,{columnNames:e})}}]),a}(r.a.Component),oe=Object(se.b)(Object(b.b)((function(e){return{columnNames:te(e)}})))(ce),ue=a(59),le={taskbar:[],tasks:[],filters:[],searchQuery:"",sidebar:{visible:!1,taskId:"",loading:!0,defaultTaskData:{id:"",summary:"",assignee:"",status:"",project:"",img:"",desciption:""}}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return Object(ue.a)(e,(function(e){switch(t.type){case"TASKBAR:UPDATE_ALL":Object.assign(e,{taskbar:t.payload});break;case"TASKS:UPDATE_ALL":Object.assign(e,{tasks:t.payload});break;case"TASKS:UPDATE_ITEM":var a=e.tasks.find((function(e){return e.id===t.payload.id}));Object.assign(a,t.payload);break;case"FILTERS:SET":t.payload.forEach((function(e){e.active=!1})),Object.assign(e,{filters:t.payload});break;case"FILTERS:SET_ACTIVE":var n=e.filters.find((function(e){return e.id===t.payload}));e.filters.forEach((function(e){e.active=!1})),n.active=!0;break;case"SEARCH:SET_QUERY":e.searchQuery=t.payload;break;case"SIDEBAR:SET_VISIBILITY":e.sidebar.visible=t.payload;break;case"SIDEBAR:SET_TASKID":e.sidebar.taskId=t.payload}}))},me=Object(se.c)(de,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(b.a,{store:me},r.a.createElement(oe,null)),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0ce956d8.chunk.js.map