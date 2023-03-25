"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"members-banning",title:"Access Banning"},i=void 0,s={unversionedId:"features/members/members-banning",id:"features/members/members-banning",title:"Access Banning",description:"This section is a work in progress.",source:"@site/docs/features/members/banning.md",sourceDirName:"features/members",slug:"/features/members/members-banning",permalink:"/tal/docs/features/members/members-banning",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/members/banning.md",tags:[],version:"current",frontMatter:{id:"members-banning",title:"Access Banning"},sidebar:"someSidebar",previous:{title:"Registration",permalink:"/tal/docs/features/members/members-registration"},next:{title:"Access Recovery",permalink:"/tal/docs/features/members/members-recovery"}},l={},c=[{value:"Code: MEM-005",id:"code-mem-005",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,a.kt)("h2",{id:"code-mem-005"},"Code: MEM-005"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Authored by")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",(0,a.kt)("em",{parentName:"p"},". Last updated on")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"14/03/21")," ")),(0,a.kt)("p",null,"This feature aims to ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"limit unwanted access")," ")," by ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"allowing admins to ban accounts, numbers or phone ids from accessing the application")," "),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Access to an organization","'","s information is sensitive :"),"\nAs such if a member","'","s intentions is deemed as malicious or of no benefit to the organization, or if a member loses access to his/her device/account, there needs to be a method for limiting access for that device/account.")),(0,a.kt)("h3",{id:"goals"},"Goals"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": clarify feature changes and assumptions.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("h3",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"user-experience"},"User Experience"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#_1jkn6vnliixl"},"Pre-Approvals UX Section"),"(Solution 1)"),(0,a.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,a.kt)("p",null,"Banned accounts should only be prevented from accessing the organization from which it is banned."),(0,a.kt)("h3",{id:"future-work"},"Future Work"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,a.kt)("p",null,"N/A"))}u.isMDXComponent=!0}}]);