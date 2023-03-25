"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={id:"donation-fees",title:"Donations & Fees"},i=void 0,s={unversionedId:"features/donations/donation-fees",id:"features/donations/donation-fees",title:"Donations & Fees",description:"This section is a work in progress.",source:"@site/docs/features/donations/donation-fees.md",sourceDirName:"features/donations",slug:"/features/donations/donation-fees",permalink:"/tal/docs/features/donations/donation-fees",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/features/donations/donation-fees.md",tags:[],version:"current",frontMatter:{id:"donation-fees",title:"Donations & Fees"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/tal/docs/features/donations/donations-overview"},next:{title:"Overview",permalink:"/tal/docs/features/news feed/news-feed-overview"}},l={},p=[{value:"Code: DON-005",id:"code-don-005",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,o.kt)("h2",{id:"code-don-005"},"Code: DON-005"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Authored by")," ",(0,o.kt)("em",{parentName:"p"}," ",(0,o.kt)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",(0,o.kt)("em",{parentName:"p"},". Last updated on")," ",(0,o.kt)("em",{parentName:"p"}," ",(0,o.kt)("strong",{parentName:"em"},"4/04/21")," ")),(0,o.kt)("p",null,"This feature aims to ",(0,o.kt)("em",{parentName:"p"}," ",(0,o.kt)("strong",{parentName:"em"},"manage privileged access")," ")," by ",(0,o.kt)("em",{parentName:"p"}," ",(0,o.kt)("strong",{parentName:"em"},"use of fees associated with certain features/terms of use")," "),"."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("h3",{id:"problem"},"Problem"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Some organization","'","s require a means of generating revenue to fund their operations :"),"\nSince the target audience of the application would be those similar to non-profits if not non-profits themselves, a crucial part of their revenue would be from their members/participants. Therefore, a means to manage member contributions would need to be established and should be easy to configure.")),(0,o.kt)("h3",{id:"goals"},"Goals"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Allow for a secure method of receiving donations online")," :\nThrough the use of a payment gateway for ease of management and integrations, we can allow members to offer secure payments on fees to access exclusive events/features."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Differentiate the various fees associated with features/terms of use")," :\nCurrently, there are three main categories for fees within the application, namely: Donations and Membership Fees. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Donations: These are fees that can be contributed at any time by members/participants of an organization."),(0,o.kt)("li",{parentName:"ul"},"Membership Fees: Similar to donations, membership fees can be contributed at any time or can be associated with a certain event. These fees can also be one-time or recurring."),(0,o.kt)("li",{parentName:"ul"},"Plugin Fees: These are payments made to grant access to certain features of the application.")))),(0,o.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": clarify feature changes and assumptions.")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("h3",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For ease of managing transactions, external Billing Systems would need to be employed. Two recommendations are as follows:"),(0,o.kt)("p",{parentName:"li"},"\u25cb Stripe"),(0,o.kt)("p",{parentName:"li"},"\u25cb Paypal")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For ease of incorporation into the various endpoints a node/express middleware could be used to pre-validate requests."))),(0,o.kt)("h3",{id:"user-experience"},"User Experience"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,o.kt)("p",null,"Payments would be made online via credit/debit cards or contributions."),(0,o.kt)("h3",{id:"future-work"},"Future Work"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,o.kt)("p",null,"N/A"))}c.isMDXComponent=!0}}]);