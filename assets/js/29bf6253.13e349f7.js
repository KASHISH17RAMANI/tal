"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[6132],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={id:"talawa-admin-introduction",title:"Overview"},o=void 0,l={unversionedId:"developers/talawa-admin/talawa-admin-introduction",id:"developers/talawa-admin/talawa-admin-introduction",title:"Overview",description:"Talawa Admin is the web based administrative dashboard for the Talawa mobile app.",source:"@site/docs/developers/talawa-admin/introduction.md",sourceDirName:"developers/talawa-admin",slug:"/developers/talawa-admin/talawa-admin-introduction",permalink:"/tal/docs/developers/talawa-admin/talawa-admin-introduction",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/developers/talawa-admin/introduction.md",tags:[],version:"current",frontMatter:{id:"talawa-admin-introduction",title:"Overview"},sidebar:"someSidebar",previous:{title:"Expectations",permalink:"/tal/docs/developers/talawa-api/expectations"},next:{title:"Plugin Architecture",permalink:"/tal/docs/developers/talawa-admin/plugins/plugin-architecture"}},s={},d=[{value:"Core features:",id:"core-features",level:3},{value:"1. Admin Dashboard",id:"1-admin-dashboard",level:4},{value:"2. <code>People</code> Page",id:"2-people-page",level:4},{value:"3. <code>Events</code> Page",id:"3-events-page",level:4},{value:"4. <code>Contributions</code> Page",id:"4-contributions-page",level:4},{value:"5. <code>Posts</code> Page",id:"5-posts-page",level:4},{value:"6. <code>Plugins</code> Page",id:"6-plugins-page",level:4}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Talawa Admin")," is the web based administrative dashboard for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Talawa")," mobile app."),(0,i.kt)("h3",{id:"core-features"},"Core features:"),(0,i.kt)("h4",{id:"1-admin-dashboard"},"1. Admin Dashboard"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dashboard Provides Overview about the Admin's Organization."),(0,i.kt)("li",{parentName:"ul"},"Displays Statistics like number of Members, Admins, Blocked Users & Membership Requests,etc.")),(0,i.kt)("h4",{id:"2-people-page"},"2. ",(0,i.kt)("inlineCode",{parentName:"h4"},"People")," Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This shows the list of people who have joined the organization."),(0,i.kt)("li",{parentName:"ul"},"Admins can also approve membership requests from here and can also set the members permissions.")),(0,i.kt)("h4",{id:"3-events-page"},"3. ",(0,i.kt)("inlineCode",{parentName:"h4"},"Events")," Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These shows list of active ",(0,i.kt)("inlineCode",{parentName:"li"},"Events")," in the organization."),(0,i.kt)("li",{parentName:"ul"},"Admins can also post new events from this page.")),(0,i.kt)("h4",{id:"4-contributions-page"},"4. ",(0,i.kt)("inlineCode",{parentName:"h4"},"Contributions")," Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These shows a list of Members of ",(0,i.kt)("inlineCode",{parentName:"li"},"Contributors")," who've donated to the Organization."),(0,i.kt)("li",{parentName:"ul"},"Donations can be made from ",(0,i.kt)("inlineCode",{parentName:"li"},"Talawa")," app and can be recurring or One time.")),(0,i.kt)("h4",{id:"5-posts-page"},"5. ",(0,i.kt)("inlineCode",{parentName:"h4"},"Posts")," Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shows a list of Posts posted within an Organization along with their likes and comments."),(0,i.kt)("li",{parentName:"ul"},"Posts are posted by Members from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Talawa")," App."),(0,i.kt)("li",{parentName:"ul"},"Admins can decide whether to keep or delete those posts.")),(0,i.kt)("h4",{id:"6-plugins-page"},"6. ",(0,i.kt)("inlineCode",{parentName:"h4"},"Plugins")," Page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contains ",(0,i.kt)("inlineCode",{parentName:"li"},"Plugin Store")," from which the Admin can decide the features for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Talawa")," Mobile App."),(0,i.kt)("li",{parentName:"ul"},"Admins can ",(0,i.kt)("inlineCode",{parentName:"li"},"Install")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Uninstall")," the Plugins and can also see the list of installed plugins separately.")))}u.isMDXComponent=!0}}]);