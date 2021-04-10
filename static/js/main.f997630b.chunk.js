(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),s=n.n(c),o=n(14),i=n.n(o),r=(n(20),n(6)),d=n(7),l=n(5),j=n(10),h=n(9),u=(n(21),n(22),n(3)),m=n(4),b=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onSwitchThemeMode=function(t){e.props.onChangeThemeMode(t.target.checked)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"theme-switch-wrapper",children:[this.props.darkModeOn?Object(a.jsxs)("span",{id:"toggle-icon",children:[Object(a.jsx)("span",{className:"toggle-text",children:"Dark Mode"}),Object(a.jsx)(u.a,{icon:m.b,className:"fs-moon"})]}):Object(a.jsxs)("span",{id:"toggle-icon",children:[Object(a.jsx)("span",{className:"toggle-text",children:"Light Mode"}),Object(a.jsx)(u.a,{icon:m.d,className:"fs-sun"})]}),Object(a.jsxs)("label",{className:"theme-switch",children:[Object(a.jsx)("input",{type:"checkbox",onChange:this.onSwitchThemeMode}),Object(a.jsx)("div",{className:"slider round"})]})]})}}]),n}(c.Component),g=(n(28),function(){document.querySelector(".menu-items").classList.toggle("show")}),O=function(){return Object(a.jsxs)("div",{id:"nav",children:[Object(a.jsx)(u.a,{icon:m.a,className:"toggleMenu",onClick:g}),Object(a.jsxs)("div",{id:"menu-items",className:"menu-items",children:[Object(a.jsx)("a",{href:"#home",children:"HOME"}),Object(a.jsx)("a",{href:"#about",children:"ABOUT"}),Object(a.jsx)("a",{href:"#projects",children:"PROJECTS"}),Object(a.jsx)("a",{href:"#quoteGenerator",children:"QUOTE GENERATOR"}),Object(a.jsx)("a",{href:"#contact",children:"CONTACT"})]})]})},x=(n(29),function(){return Object(a.jsxs)("div",{id:"home",className:"section title-group",children:[Object(a.jsx)("h1",{children:"ROY'S SITE"}),Object(a.jsx)("h2",{children:"FRONTEND PROJECTS"})]})}),f=(n(30),n.p+"static/media/process_thinker_light.28e6cfbf.svg"),k=n.p+"static/media/process_thinker_dark.f0ff6439.svg",p=n.p+"static/media/self_learner_light.a18d9b3d.svg",v=n.p+"static/media/self_learner_dark.50345e4f.svg",N=n.p+"static/media/team_player_light.ace674ff.svg",M=n.p+"static/media/team_player_dark.48910fbe.svg",y=function(e){var t=e.darkModeOn;return Object(a.jsxs)("div",{id:"about",className:"section",children:[Object(a.jsx)("h1",{children:"About Me"}),Object(a.jsxs)("div",{className:"about-container",children:[Object(a.jsxs)("div",{className:"image-container",children:[Object(a.jsx)("h2",{children:"Fullstack Developer"}),t?Object(a.jsx)("img",{src:k,alt:"process thinker",id:"leftImage"}):Object(a.jsx)("img",{src:f,alt:"process thinker",id:"leftImage"})]}),Object(a.jsxs)("div",{className:"image-container",children:[Object(a.jsx)("h2",{children:"Self Learner"}),t?Object(a.jsx)("img",{src:v,alt:"self learner",id:"centerImage"}):Object(a.jsx)("img",{src:p,alt:"self learner",id:"centerImage"})]}),Object(a.jsxs)("div",{className:"image-container",children:[Object(a.jsx)("h2",{children:"Team Player"}),t?Object(a.jsx)("img",{src:M,alt:"team player",id:"rightImage"}):Object(a.jsx)("img",{src:N,alt:"team player",id:"rightImage"})]})]})]})},q=(n(31),n.p+"static/media/task_management_light.3a66239b.svg"),w=n.p+"static/media/task_management_dark.a007e741.svg",S=function(e){var t=e.darkModeOn;return Object(a.jsxs)("div",{id:"projects",className:"section",children:[Object(a.jsx)("h1",{children:"My Projects"}),Object(a.jsx)("div",{className:"projects-container",children:Object(a.jsxs)("div",{className:"image-container",children:[Object(a.jsx)("h2",{children:"Task Management"}),t?Object(a.jsx)("img",{src:w,alt:"task manangement",id:"taskManagementLightImage"}):Object(a.jsx)("img",{src:q,alt:"task manangement",id:"taskManagementDarkImage"})]})})]})},C=(n(32),n(8)),T=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).state={quote:"To be or not to be.",quoteAuthor:"William Shakespeare",longQuote:!1,loading:!1},a.getNewQuote=a.getNewQuote.bind(Object(l.a)(a)),a.tweetQuote=a.tweetQuote.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"getNewQuote",value:function(){var e=this;this.setState({loading:!0});fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(t){var n=t[Math.floor(Math.random()*t.length)];n.author?e.setState({quoteAuthor:n.author}):e.setState({quoteAuthor:"Unknown"}),n.text.length>120?e.setState({longQuote:!0}):e.setState({longQuote:!1}),e.setState({quote:n.text}),e.setState({loading:!1})})).catch((function(e){return console.log("whoops, no quote",e)}))}},{key:"tweetQuote",value:function(){var e=this.state.quote,t=this.state.quoteAuthor,n="https://twitter.com/intent/tweet?text=".concat(e," - ").concat(t);window.open(n,"_blank")}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"quoteGenerator",className:"section",children:this.state.loading?Object(a.jsx)("div",{className:"loader"}):Object(a.jsxs)("div",{className:"quote-container",id:"quote-container",children:[Object(a.jsxs)("div",{className:"quote-text ".concat(this.state.longQuote?" long-quote":""),children:[Object(a.jsx)(u.a,{className:"fa-quote-left",icon:m.c}),Object(a.jsx)("span",{id:"quote",children:this.state.quote})]}),Object(a.jsx)("div",{className:"quote-author",children:Object(a.jsx)("span",{id:"author",children:this.state.quoteAuthor})}),Object(a.jsxs)("div",{className:"button-container",id:"button-container",children:[Object(a.jsx)("button",{className:"twitter-button",id:"twitter",title:"Tweet This!",onClick:this.tweetQuote,children:Object(a.jsx)(u.a,{icon:C.c})}),Object(a.jsx)("button",{id:"new-quote",onClick:this.getNewQuote,children:"New Quote"})]})]})})}}]),n}(c.Component),I=(n(33),function(){return Object(a.jsxs)("div",{id:"contact",className:"section title-group",children:[Object(a.jsx)("h1",{children:"Contact"}),Object(a.jsxs)("div",{className:"social-icons",children:[Object(a.jsx)(u.a,{icon:C.a,className:"icon"}),Object(a.jsx)(u.a,{icon:C.b,className:"icon"})]})]})}),_=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).onChangeThemeMode=function(e){e?a.setState({darkModeOn:!0}):a.setState({darkModeOn:!1}),e?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light"),document.getElementById("nav").style.backgroundColor=e?"rgb(0 0 0 / 50%)":"rgb(255 255 255 / 50%)",document.getElementById("quote-container").style.backgroundColor=e?"rgba(0, 0, 0, 0.4)":"rgba(255, 255, 255, 0.4)",e?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")},a.state={darkModeOn:!1},a.onChangeThemeMode=a.onChangeThemeMode.bind(Object(l.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("theme");e&&"dark"===e&&(this.setState({darkModeOn:!0}),document.documentElement.setAttribute("data-theme","dark"),document.getElementById("nav").style.backgroundColor="rgb(0 0 0 / 50%)",document.querySelector(".menu-items").style.backgroundColor="rgb(0 0 0 / 50%)",document.getElementById("quote-container").style.background="rgba(0, 0, 0, 0.4)",document.querySelector('input[type="checkbox"]').checked=!0)}},{key:"render",value:function(){var e=this.state.darkModeOn;return Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{onChangeThemeMode:this.onChangeThemeMode,darkModeOn:e}),Object(a.jsx)(O,{}),Object(a.jsx)(x,{}),Object(a.jsx)(y,{darkModeOn:e}),Object(a.jsx)(S,{darkModeOn:e}),Object(a.jsx)(T,{}),Object(a.jsx)(I,{})]})}}]),n}(c.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),E()}},[[34,1,2]]]);
//# sourceMappingURL=main.f997630b.chunk.js.map