"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9013],{7726:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(4848),s=r(8453);const o={sidebar_position:80},t="Troubleshooting",l={id:"troubleshooting",title:"Troubleshooting",description:"Plugin errors",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/IntersectMBO/plutus/edit/master/doc/docusaurus/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Further resources",permalink:"/docs/delve-deeper/further-resources"}},d={},c=[{value:"Plugin errors",id:"plugin-errors",level:2},{value:"Haddock",id:"haddock",level:3},{value:"Non-<code>INLINABLE</code> functions",id:"non-inlinable-functions",level:3},{value:"Haskell Language Server issues",id:"haskell-language-server-issues",level:2},{value:"Wrong version",id:"wrong-version",level:3},{value:"Error codes",id:"error-codes",level:2},{value:"Ledger errors",id:"ledger-errors",level:3},{value:"Prelude errors",id:"prelude-errors",level:3},{value:"State machine errors",id:"state-machine-errors",level:3},{value:"Currency errors",id:"currency-errors",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.h2,{id:"plugin-errors",children:"Plugin errors"}),"\n",(0,i.jsxs)(n.p,{children:["Errors that start with ",(0,i.jsx)(n.code,{children:"GHC Core to PLC plugin"})," are errors from ",(0,i.jsx)(n.code,{children:"plutus-tx-plugin"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\ud83d\udccc"," ",(0,i.jsx)(n.strong,{children:"NOTE"})]}),"\n",(0,i.jsx)(n.p,{children:"Often, these errors arise due to GHC doing something to the code before the plugin gets to see it.\nThe solution is often to prevent GHC from doing this.\nWe often recommend trying various GHC compiler flags."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"haddock",children:"Haddock"}),"\n",(0,i.jsx)(n.p,{children:"The plugin will typically fail when producing Haddock documentation.\nHowever, in this instance, you can simply tell it to defer any errors to runtime. Since you are only building documentation, runtime errors won't occur."}),"\n",(0,i.jsxs)(n.p,{children:["To tell the plugin to defer any errors to runtime, add the following lines for your ",(0,i.jsx)(n.code,{children:"package-name"})," to ",(0,i.jsx)(n.code,{children:"cabal.project"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package package-name\n  haddock-options: "--optghc=-fplugin-opt PlutusTx.Plugin:defer-errors"\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"non-inlinable-functions",children:["Non-",(0,i.jsx)(n.code,{children:"INLINABLE"})," functions"]}),"\n",(0,i.jsx)(n.p,{children:"A common error is:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Error: Reference to a name which is not a local, a builtin, or an external INLINABLE function"})}),"\n",(0,i.jsx)(n.p,{children:"This means the plugin doesn't have access to implementation of the function, which it needs to be able to compile the function to Plutus Core.\nSome things you can do to fix it:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure to add ",(0,i.jsx)(n.code,{children:"{-# INLINABLE functionname #-}"})," to your function."]}),"\n",(0,i.jsxs)(n.li,{children:["If there's an extra ",(0,i.jsx)(n.code,{children:"$c"})," in front of the function name in the error, GHC has generated a specialized version of your function, which prevents the plugin from accessing it. You can turn off specialization with ",(0,i.jsx)(n.code,{children:"{-# OPTIONS_GHC -fno-specialise #-}"})]}),"\n",(0,i.jsxs)(n.li,{children:["Other compiler options that can help:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"{-# OPTIONS_GHC -fno-strictness #-}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"{-# OPTIONS_GHC -fno-ignore-interface-pragmas #-}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"{-# OPTIONS_GHC -fno-omit-interface-pragmas #-}"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"{-# OPTIONS_GHC -fobject-code #-}"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["More details are available in ",(0,i.jsx)(n.a,{href:"https://github.com/IntersectMBO/plutus/tree/master/plutus-tx#building-projects-with-plutus-tx",children:"the plutus-tx readme"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"haskell-language-server-issues",children:"Haskell Language Server issues"}),"\n",(0,i.jsxs)(n.p,{children:["For more advice on using Haskell Language Server (HLS), consult the ",(0,i.jsx)(n.a,{href:"https://github.com/IntersectMBO/plutus/blob/master/CONTRIBUTING.adoc",children:"CONTRIBUTING guide"})," in the ",(0,i.jsx)(n.code,{children:"plutus"})," repository."]}),"\n",(0,i.jsx)(n.h3,{id:"wrong-version",children:"Wrong version"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ghcide compiled against GHC 8.10.3 but currently using 8.10.2.20201118"})}),"\n",(0,i.jsx)(n.p,{children:"Your editor is not picking up the right version of the Haskell Language Server (HLS).\nPlutus needs a custom version of HLS which is provided by Nix.\nTo get this working in your editor, make sure to do these two things:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Start your editor from ",(0,i.jsx)(n.code,{children:"nix develop"})," (or use ",(0,i.jsx)(n.code,{children:"direnv"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Most editors are configured to use ",(0,i.jsx)(n.code,{children:"haskell-language-server-wrapper"}),", a wrapper that picks the right HLS version. Change this to: ",(0,i.jsx)(n.code,{children:"haskell-language-server"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If this doesn't work, run ",(0,i.jsx)(n.code,{children:"which haskell-language-server"})," in ",(0,i.jsx)(n.em,{children:"nix develop"}),", and use this absolute path in the configuration of your editor."]}),"\n",(0,i.jsx)(n.h2,{id:"error-codes",children:"Error codes"}),"\n",(0,i.jsx)(n.p,{children:"To reduce code size, on-chain errors only output codes.\nHere is a list of error code definitions:"}),"\n",(0,i.jsx)(n.h3,{id:"ledger-errors",children:"Ledger errors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L0: Input constraint"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L1: Output constraint"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L2: Missing datum"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L3: Wrong validation interval"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L4: Missing signature"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L5: Spent value not OK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L6: Produced value not OK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L7: Public key output not spent"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L8: Script output not spent"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"L9: Value minted not OK"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"La: MustPayToPubKey"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Lb: MustPayToOtherScript"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Lc: MustHashDatum"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Ld: checkScriptContext failed"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Le: Can't find any continuing outputs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Lf: Can't get any continuing outputs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Lg: Can't get validator and datum hashes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Lh: Can't get currency symbol of the current validator script"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Li: DecodingError"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"prelude-errors",children:"Prelude errors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT1: TH Generation of Indexed Data Error"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT2: PlutusTx.IsData.Class.unsafeFromBuiltinData: Void is not supported"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT3: PlutusTx.Ratio: zero denominator"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT5: PlutusTx.Prelude.check: input is 'False'"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT6: PlutusTx.List.!!: negative index"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT7: PlutusTx.List.!!: index too large"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT8: PlutusTx.List.head: empty list"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT9: PlutusTx.List.tail: empty list"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT10: PlutusTx.Enum.().succ: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT11: PlutusTx.Enum.().pred: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT12: PlutusTx.Enum.().toEnum: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT13: PlutusTx.Enum.Bool.succ: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT14: PlutusTx.Enum.Bool.pred: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT15: PlutusTx.Enum.Bool.toEnum: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT16: PlutusTx.Enum.Ordering.succ: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT17: PlutusTx.Enum.Ordering.pred: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT18: PlutusTx.Enum.Ordering.toEnum: bad argument"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT19: PlutusTx.List.last: empty list"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"PT20: PlutusTx.Ratio.recip: reciprocal of zero"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"state-machine-errors",children:"State machine errors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S0: Can't find validation input"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S1: State transition invalid - checks failed"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S2: Thread token not found"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S3: Non-zero value allocated in final state"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S4: State transition invalid - constraints not satisfied by ScriptContext"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S5: State transition invalid - constraints not satisfied by ScriptContext"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S6: State transition invalid - input is not a valid transition at the current state"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S7: Value minted different from expected"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"S8: Pending transaction does not spend the designated transaction output"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"currency-errors",children:"Currency errors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"C0: Value minted different from expected"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"C1: Pending transaction does not spend the designated transaction output"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var i=r(6540);const s={},o=i.createContext(s);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);