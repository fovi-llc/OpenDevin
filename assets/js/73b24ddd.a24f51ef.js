"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2173],{7004:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=s(4848),r=s(8453);const o={sidebar_label:"prompts",title:"monologue_agent.utils.prompts"},i=void 0,l={id:"python/monologue_agent/utils/prompts",title:"monologue_agent.utils.prompts",description:"get\\summarize\\monologue\\_prompt",source:"@site/docs/python/monologue_agent/utils/prompts.md",sourceDirName:"python/monologue_agent/utils",slug:"/python/monologue_agent/utils/prompts",permalink:"/OpenDevin/docs/python/monologue_agent/utils/prompts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"prompts",title:"monologue_agent.utils.prompts"}},p={},c=[{value:"get_summarize_monologue_prompt",id:"get_summarize_monologue_prompt",level:4},{value:"get_request_action_prompt",id:"get_request_action_prompt",level:4},{value:"parse_action_response",id:"parse_action_response",level:4},{value:"parse_summary_response",id:"parse_summary_response",level:4}];function a(e){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h4,{id:"get_summarize_monologue_prompt",children:"get_summarize_monologue_prompt"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def get_summarize_monologue_prompt(thoughts: List[dict])\n"})}),"\n",(0,t.jsx)(n.p,{children:"Gets the prompt for summarizing the monologue"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"str: A formatted string with the current monologue within the prompt"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"get_request_action_prompt",children:"get_request_action_prompt"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def get_request_action_prompt(\n        task: str,\n        thoughts: List[dict],\n        background_commands_obs: List[CmdOutputObservation] = [])\n"})}),"\n",(0,t.jsx)(n.p,{children:"Gets the action prompt formatted with appropriate values."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"task (str): The current task the agent is trying to accomplish"}),"\n",(0,t.jsx)(n.li,{children:"thoughts (List[dict]): The agent's current thoughts"}),"\n",(0,t.jsx)(n.li,{children:"background_commands_obs (List[CmdOutputObservation]): List of all observed background commands running"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"str: Formatted prompt string with hint, task, monologue, and background included"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parse_action_response",children:"parse_action_response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def parse_action_response(response: str) -> Action\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parses a string to find an action within it"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"response (str): The string to be parsed"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Action: The action that was found in the response string"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"parse_summary_response",children:"parse_summary_response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def parse_summary_response(response: str) -> List[dict]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Parses a summary of the monologue"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"response (str): The response string to be parsed"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"List[dict]: The list of summaries output by the model"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(6540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);