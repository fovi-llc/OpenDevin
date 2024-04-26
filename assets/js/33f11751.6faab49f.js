"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3860],{9048:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=i(4848),t=i(8453);const s={},r="Azure OpenAI LLM",a={id:"usage/llms/azureLLMs",title:"Azure OpenAI LLM",description:"Completion",source:"@site/docs/usage/llms/azureLLMs.md",sourceDirName:"usage/llms",slug:"/usage/llms/azureLLMs",permalink:"/OpenDevin/docs/usage/llms/azureLLMs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83e\udd16 LLM Backends",permalink:"/OpenDevin/docs/usage/llms/"},next:{title:"Google Gemini/Vertex LLM",permalink:"/OpenDevin/docs/usage/llms/googleLLMs"}},d={},l=[{value:"Completion",id:"completion",level:2},{value:"Azure openai configs",id:"azure-openai-configs",level:3},{value:"Embeddings",id:"embeddings",level:2},{value:"Azure openai configs",id:"azure-openai-configs-1",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"azure-openai-llm",children:"Azure OpenAI LLM"}),"\n",(0,o.jsx)(n.h2,{id:"completion",children:"Completion"}),"\n",(0,o.jsxs)(n.p,{children:["OpenDevin uses LiteLLM for completion calls. You can find their documentation on Azure ",(0,o.jsx)(n.a,{href:"https://docs.litellm.ai/docs/providers/azure",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"azure-openai-configs",children:"Azure openai configs"}),"\n",(0,o.jsxs)(n.p,{children:["When running the OpenDevin Docker image, you'll need to set the following environment variables using ",(0,o.jsx)(n.code,{children:"-e"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'LLM_BASE_URL="<azure-api-base-url>"          # e.g. "https://openai-gpt-4-test-v-1.openai.azure.com/"\nLLM_API_KEY="<azure-api-key>"\nLLM_MODEL="azure/<your-gpt-deployment-name>"\nLLM_API_VERSION = "<api-version>"          # e.g. "2024-02-15-preview"\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"You can find your ChatGPT deployment name on the deployments page in Azure. It could be the same with the chat model name (e.g. 'GPT4-1106-preview'), by default or initially set, but it doesn't have to be the same. Run opendevin, and when you load it in the browser, go to Settings and set model as above: \"azure/<your-actual-gpt-deployment-name>\". If it's not in the list, enter your own text and save it."})}),"\n",(0,o.jsx)(n.h2,{id:"embeddings",children:"Embeddings"}),"\n",(0,o.jsxs)(n.p,{children:["OpenDevin uses llama-index for embeddings. You can find their documentation on Azure ",(0,o.jsx)(n.a,{href:"https://docs.llamaindex.ai/en/stable/api_reference/embeddings/azure_openai/",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"azure-openai-configs-1",children:"Azure openai configs"}),"\n",(0,o.jsx)(n.p,{children:'The model used for Azure OpenAI embeddings is "text-embedding-ada-002".\nYou need the correct deployment name for this model in your Azure account.'}),"\n",(0,o.jsxs)(n.p,{children:["When running OpenDevin in Docker, set the following environment variables using ",(0,o.jsx)(n.code,{children:"-e"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'LLM_EMBEDDING_MODEL="azureopenai"\nLLM_EMBEDDING_DEPLOYMENT_NAME = "<your-embedding-deployment-name>"        # e.g. "TextEmbedding...<etc>"\nLLM_API_VERSION = "<api-version>"         # e.g. "2024-02-15-preview"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var o=i(6540);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);