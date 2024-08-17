"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4219],{6399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(4848),a=n(8453);const s={sidebar_position:10},o="The EUTXO model, datum, redeemer and script context",r={id:"simple-example/eutxo-model",title:"The EUTXO model, datum, redeemer and script context",description:"On the Cardano blockchain, a transaction contains an arbitrary number of inputs and an arbitrary number of outputs.",source:"@site/docs/simple-example/eutxo-model.md",sourceDirName:"simple-example",slug:"/simple-example/eutxo-model",permalink:"/docs/simple-example/eutxo-model",draft:!1,unlisted:!1,editUrl:"https://github.com/IntersectMBO/plutus/edit/master/doc/docusaurus/docs/simple-example/eutxo-model.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/simple-example/"},next:{title:"Auction properties",permalink:"/docs/simple-example/auction-properties"}},c={},d=[];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"the-eutxo-model-datum-redeemer-and-script-context",children:"The EUTXO model, datum, redeemer and script context"}),"\n",(0,i.jsx)(t.p,{children:"On the Cardano blockchain, a transaction contains an arbitrary number of inputs and an arbitrary number of outputs.\nThe effect of a transaction is to consume inputs and produce new outputs."}),"\n",(0,i.jsx)(t.p,{children:"UTXO (unspent transaction output) is the ledger model used by some blockchains, including bitcoin.\nA UTXO is produced by a transaction, is immutable, and can only be spent once by another transaction.\nIn the original UTXO model, a UTXO contains a wallet address and a value (e.g., some amount of one or more currencies/tokens).\nInside a transaction, a UTXO is uniquely identified by the wallet address.\nIt can be spent by a transaction if the transaction is signed by the private key of the wallet address."}),"\n",(0,i.jsxs)(t.p,{children:["The Extended UTXO model (EUTXO) extends the original model with a new kind of UTXO: script UTXO.\nA script UTXO contains a value, a script (usually a Plutus script), a piece of data called ",(0,i.jsx)(t.em,{children:"datum"}),", and is identified by the hash of the script.\nFor a transaction to spend it, the transaction must provide a piece of input data to the script, referred to as the ",(0,i.jsx)(t.em,{children:"redeemer"}),".\nThe script is then run, and it must succeed in order for the transaction to be allowed to spend the UTXO.\nIn addition to the redeemer, the script also has access to the datum contained in the UTXO, as well as the details of the transaction trying to spend it.\nThis is referred to as ",(0,i.jsx)(t.em,{children:"script context"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that the only thing a Plutus script does is to determine whether a transaction can spend the script UTXO that contains the script.\nIt is ",(0,i.jsx)(t.em,{children:"not"})," responsible for such things as deciding whether it can spend a different UTXO, checking that the input value in a transaction equals the output value, or updating the state of the smart contract.\nConsider it a pure function that returns ",(0,i.jsx)(t.code,{children:"Bool"}),".\nChecking transaction validity is done by the ledger rules, and updating the state of a smart contract is done by constructing the transaction to produce a new script UTXO with an updated datum."]}),"\n",(0,i.jsx)(t.p,{children:"The immutability of UTXOs leads to the extremely useful property of completely predictable transaction fees.\nThe Plutus script in a transaction can be run off-chain to determine the fee before submitting the transaction onto the blockchain.\nWhen the transaction is submitted, if some UTXOs it tries to spend have already been spent, the transaction is immediately rejected without penalty.\nIf all input UTXOs still exist, and the Plutus script is invoked, the on-chain behavior would be exactly identical to the off-chain behavior.\nThis could not be achieved if transaction inputs were mutable, such as is the case in Ethereum's account-based model."}),"\n",(0,i.jsx)(t.p,{children:"See also:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../category/working-with-scripts",children:"Working with scripts"})," for further reading about scripts"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.cardano.org/learn/eutxo-explainer",children:"Understanding the Extended UTXO model"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);