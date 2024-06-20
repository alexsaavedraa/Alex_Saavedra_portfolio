(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c(1),a=c(0);const l=Object(s.createContext)(),i=e=>{let{children:t}=e;const[c,n]=Object(s.useState)("light");Object(s.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");n(e.matches?"dark":"light"),e.addEventListener("change",(e=>{n(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),n(e)}}],children:t})},r={},o={name:"Alexander Saavedra",role:"Full Stack Software Engineer",description:"Full-stack software developer with a strong foundation in data science and artificial intelligence, holding a B.A. in Computer Science from Northwestern University. Proven expertise in developing and deploying innovative solutions, such as financial report parsers and alternative credit scoring models, using a diverse technology stack including Python, Java, Go, React, and Kubernetes.",resume:"https://drive.google.com/file/d/1SjV0E30j-DM_oglbJ51f4t8XW2AD_jwH/view?usp=sharing",social:{linkedin:"https://www.linkedin.com/in/saavedraa/",github:"https://github.com/alexsaavedraa"}},j=[{name:"Gold Medal Submission in Google's Prompt Recovery Challenge",description:"Given some text generated by a large language model, how do you predict what the input to that model was? Our model placed 13th/2175. Click the link to see a full length writeup and explanation",stack:["Python","Genetic Algorithms","LLMS","Vectorizors"],sourceCode:"https://github.com/alexsaavedraa/Prompt-Recovery-Challenge",livePreview:"https://www.kaggle.com/competitions/llm-prompt-recovery"}],d=["Python","C++","JavaScript","TypeScript","React","Pandas","Transformers","Material UI","Git","CI/CD","Google Cloud","NextJS","AWS","Kubernetes","Docker"],h="alexander.jsaavedra@gmail.com";var b=c(13),m=c.n(b),u=c(11),x=c.n(u),O=c(15),p=c.n(O),v=c(14),g=c.n(v);c(25);var k=()=>{const[{themeName:e,toggleTheme:t}]=Object(s.useContext)(l),[c,n]=Object(s.useState)(!1),i=()=>n(!c);return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[j.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:i,className:"link link--nav",children:"Projects"})}):null,d.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:i,className:"link link--nav",children:"Skills"})}):null,h?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:i,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(a.jsx)(x.a,{}):Object(a.jsx)(m.a,{})}),Object(a.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(a.jsx)(g.a,{}):Object(a.jsx)(p.a,{})})]})};c(29);var f=()=>{const{homepage:e,title:t}=r;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(k,{})]})},N=c(8),_=c.n(N),w=c(16),C=c.n(w);c(30);var y=()=>{const{name:e,role:t,description:c,resume:n,social:s}=o;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(_.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(C.a,{})})]})]})]})},S=c(6),P=c.n(S),E=c(17),G=c.n(E);c(32);var A=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},P()())))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code and write up",className:"link link--icon",children:Object(a.jsx)(_.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"Competition Website",className:"link link--icon",children:Object(a.jsx)(G.a,{})})]})};c(33);var J=()=>j.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(a.jsx)(A,{project:e},P()())))})]}):null;c(34);var R=()=>d.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:d.map((e=>Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},P()())))})]}):null,I=c(18),L=c.n(I);c(35);var M=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(L.a,{fontSize:"large"})})}):null};c(36);var D=()=>h?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(h),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;c(37);var T=()=>Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})});c(38);var B=()=>{const[{themeName:e}]=Object(s.useContext)(l);return Object(a.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(a.jsx)(f,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(y,{}),Object(a.jsx)(J,{}),Object(a.jsx)(R,{}),Object(a.jsx)(D,{})]}),Object(a.jsx)(M,{}),Object(a.jsx)(T,{})]})};c(39);Object(n.render)(Object(a.jsx)(i,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d1571cd7.chunk.js.map