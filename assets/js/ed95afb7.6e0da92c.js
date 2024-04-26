"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7070],{3601:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var r=n(4848),t=n(8453);const a={sidebar_label:"manager",title:"server.session.manager"},o=void 0,d={id:"python/server/session/manager",title:"server.session.manager",description:"SessionManager Objects",source:"@site/docs/python/server/session/manager.md",sourceDirName:"python/server/session",slug:"/python/server/session/manager",permalink:"/OpenDevin/docs/python/server/session/manager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"manager",title:"server.session.manager"}},c={},i=[{value:"SessionManager Objects",id:"sessionmanager-objects",level:2},{value:"send",id:"send",level:4},{value:"send_error",id:"send_error",level:4},{value:"send_message",id:"send_message",level:4}];function l(e){const s={code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"sessionmanager-objects",children:"SessionManager Objects"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"class SessionManager()\n"})}),"\n",(0,r.jsx)(s.h4,{id:"send",children:"send"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"async def send(sid: str, data: Dict[str, object]) -> bool\n"})}),"\n",(0,r.jsx)(s.p,{children:"Sends data to the client."}),"\n",(0,r.jsx)(s.h4,{id:"send_error",children:"send_error"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"async def send_error(sid: str, message: str) -> bool\n"})}),"\n",(0,r.jsx)(s.p,{children:"Sends an error message to the client."}),"\n",(0,r.jsx)(s.h4,{id:"send_message",children:"send_message"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"async def send_message(sid: str, message: str) -> bool\n"})}),"\n",(0,r.jsx)(s.p,{children:"Sends a message to the client."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var r=n(6540);const t={},a=r.createContext(t);function o(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);