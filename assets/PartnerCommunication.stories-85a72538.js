import{G as r}from"./global-variants-b59ea106.js";import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{c as y}from"./index-ff2c9236.js";import{c as m}from"./clsx-0839fdbe.js";import{L as b}from"./Layout-565dd17b.js";import{t as P}from"./tw-merge-1166cefb.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";const o=({id:s,headline:v,partners:i,variant:x})=>{const z={[r.Zps]:["zep-text-typography-primary-default"],[r.Cat]:["zep-text-typography-dark-100"],[r.Zsd]:["zep-text-typography-dark-100"]},h=y([`zep-py-2
       sm:zep-py-2.5 
       md:zep-py-2 
       lg:zep-py-3 
       zep-gap-1.5 
       sm:zep-gap-2 
       lg:zep-gap-3.5
       zep-flex-col 
       zep-flex 
       zep-items-center 
       md:zep-flex-row
       `],{variants:{variant:z},defaultVariants:{variant:r.Zps}});return a.jsxDEV(b,{id:s,testId:"zep-partner-communication",wrapperClassname:"zep-bg-background-medium",className:P(h({variant:x})),children:[a.jsxDEV("h4",{className:m("md:zep-w-1/3","zep-text-center","md:zep-text-left","zep-typography-headlineMD-fluid-cqi"),children:v},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:47,columnNumber:7},globalThis),a.jsxDEV("div",{className:m("zep-w-full","zep-flex-1","md:zep-flex-wrap"),children:a.jsxDEV("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:i==null?void 0:i.map((e,N)=>a.jsxDEV("div",{className:"zep-flex zep-items-center zep-justify-center",children:a.jsxDEV("img",{alt:e==null?void 0:e.imageAlt,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:e==null?void 0:e.image},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:56,columnNumber:15},globalThis)},N,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:55,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:53,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:52,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:41,columnNumber:5},globalThis)};try{o.displayName="PartnerCommunication",o.__docgenInfo={description:"",displayName:"PartnerCommunication",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},partners:{defaultValue:null,description:"",name:"partners",required:!1,type:{name:"{ image: string; imageAlt: string; }[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const f=[{imageAlt:"partnerlogo CAT",image:"./assets/Logo_cat.svg"},{imageAlt:"partnerlogo KBB",image:"./assets/Logo_KBB.svg"},{imageAlt:"partnerlogo Turbolader",image:"./assets/Logo_Turbolader.svg"},{imageAlt:"partnerlogo Napier",image:"./assets/Logo_Napier.svg"},{imageAlt:"partnerlogo MAK",image:"./assets/Logo_MAK.svg"}],L={title:"Components/Partner Communication",component:o,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(r),"default"]}}}},t={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:f}},n={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:f}};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const Z=["Default","With10Logos"];export{t as Default,n as With10Logos,Z as __namedExportsOrder,L as default};
