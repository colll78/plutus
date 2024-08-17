"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1883],{77:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=i(4848),s=i(8453);const r={sidebar_position:2},o="Getting started with Plutus Tx",a={id:"getting-started-plutus-tx",title:"Getting started with Plutus Tx",description:"Plutus-Tx-Template repository",source:"@site/docs/getting-started-plutus-tx.md",sourceDirName:".",slug:"/getting-started-plutus-tx",permalink:"/docs/getting-started-plutus-tx",draft:!1,unlisted:!1,editUrl:"https://github.com/IntersectMBO/plutus/edit/master/doc/docusaurus/docs/getting-started-plutus-tx.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Plutus user guide",permalink:"/docs/"},next:{title:"Essential concepts",permalink:"/docs/category/essential-concepts"}},l={},c=[{value:"Plutus-Tx-Template repository",id:"plutus-tx-template-repository",level:2},{value:"Overview of creating a validator script using the template repo",id:"overview-of-creating-a-validator-script-using-the-template-repo",level:3},{value:"Expected result",id:"expected-result",level:4},{value:"Deploying and interacting with your script",id:"deploying-and-interacting-with-your-script",level:4}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started-with-plutus-tx",children:"Getting started with Plutus Tx"}),"\n",(0,n.jsx)(t.h2,{id:"plutus-tx-template-repository",children:"Plutus-Tx-Template repository"}),"\n",(0,n.jsxs)(t.p,{children:["The easiest way to create a Cardano smart contract is to start with the template provided in the ",(0,n.jsx)(t.a,{href:"https://github.com/IntersectMBO/plutus-tx-template",children:"Plutus-Tx-template repository"}),". Follow the instructions in the README file to setup your environment and run the example project."]}),"\n",(0,n.jsx)(t.h3,{id:"overview-of-creating-a-validator-script-using-the-template-repo",children:"Overview of creating a validator script using the template repo"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Clone the Plutus-Tx template repo."}),"\n",(0,n.jsxs)(t.li,{children:["Install Nix. See the ",(0,n.jsx)(t.a,{href:"https://github.com/input-output-hk/iogx/blob/main/doc/nix-setup-guide.md",children:"Nix setup guide"})," for installing and configuring nix to work with projects at IOG. Add the IOG binary cache to your nix configuration to speed up builds."]}),"\n",(0,n.jsxs)(t.li,{children:["From the repo, run ",(0,n.jsx)(t.code,{children:"nix develop"})," (select ",(0,n.jsx)(t.code,{children:"y"})," for all question prompts)."]}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"cabal update"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Using ",(0,n.jsx)(t.code,{children:"cardano-cli"}),", generate a pubKeyHash."]}),"\n",(0,n.jsxs)(t.li,{children:["Set posix time and pubKeyHash in ",(0,n.jsx)(t.code,{children:"Main.hs"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"cabal build plutus-tx-template"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"cabal exec plutus-tx-template"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"expected-result",children:"Expected result"}),"\n",(0,n.jsxs)(t.p,{children:["The expected result is that the above process will have created the ",(0,n.jsx)(t.code,{children:"validator.uplc"})," script."]}),"\n",(0,n.jsx)(t.h4,{id:"deploying-and-interacting-with-your-script",children:"Deploying and interacting with your script"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"cardano-cli"})," to deploy your script."]}),"\n",(0,n.jsxs)(t.p,{children:["Use an off-chain framework, such as ",(0,n.jsx)(t.a,{href:"https://github.com/Plutonomicon/cardano-transaction-lib",children:"cardano-transaction-lib"})," and ",(0,n.jsx)(t.a,{href:"https://meshjs.dev/",children:"mesh"}),", to interact with your script."]}),"\n",(0,n.jsxs)(t.p,{children:["All these are based on the ",(0,n.jsx)(t.a,{href:"https://github.com/IntersectMBO/cardano-api",children:"Cardano API"}),", a low-level API that provides the capability to do the off-chain work with a local running node."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);