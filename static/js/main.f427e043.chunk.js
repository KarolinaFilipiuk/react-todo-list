(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(6),o=n.n(i),r=(n(12),n(7)),s=n(4),l=(n(13),n(14),n(15),n(0)),u=function(t){return Object(l.jsx)("li",{className:"goal-item",onClick:function(){t.onDelete(t.id)},children:t.children})},a=function(t){return Object(l.jsx)("ul",{className:"goal-list",children:t.items.map((function(e){return Object(l.jsx)(u,{id:e.id,onDelete:t.onDeleteItem,children:e.text},e.id)}))})},d=function(t){return Object(l.jsx)("button",{type:t.type,className:"button",children:t.children})},j=(n(17),function(t){var e=Object(c.useState)(""),n=Object(s.a)(e,2),i=n[0],o=n[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onAddGoal(i),o("")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Course Goal"}),Object(l.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})]}),Object(l.jsx)(d,{type:"submit",children:"Add Goal"})]})});var b=function(){var t=Object(c.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),e=Object(s.a)(t,2),n=e[0],i=e[1],o=Object(l.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one? :)"});return n.length>0&&(o=Object(l.jsx)(a,{items:n,onDeleteItem:function(t){i((function(e){return e.filter((function(e){return e.id!==t}))})),console.log(t)}})),Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{id:"goal-form",children:Object(l.jsx)(j,{onAddGoal:function(t){i((function(e){var n=Object(r.a)(e);return n.unshift({text:t,id:Math.random().toString()}),n}))}})}),Object(l.jsx)("section",{id:"goals",children:o})]})};o.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f427e043.chunk.js.map