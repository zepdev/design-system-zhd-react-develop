import{G as r}from"./global-variants-K9XPSgyF.js";import{j as a}from"./jsx-dev-runtime-DUe1FbZV.js";import{c as N}from"./index-Dp3B9jqt.js";import{c as m}from"./clsx-B-dksMZM.js";import{L as P}from"./Layout-DD3M0BlI.js";import{t as C}from"./tw-merge-Ds6tgvmq.js";import"./index-CnaUG9bL.js";const o=({id:s,headline:v,partners:i,variant:x})=>{const z={[r.Zps]:["zep-text-typography-primary-default"],[r.Cat]:["zep-text-typography-dark-100"],[r.Zsd]:["zep-text-typography-dark-100"],[r.Zhd]:["zep-text-typography-dark-100"]},h=N([`zep-py-2
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
       `],{variants:{variant:z},defaultVariants:{variant:r.Zps}});return a.jsxDEV(P,{id:s,testId:"zep-partner-communication",wrapperClassname:"zep-bg-greyscale-200",className:C(h({variant:x})),children:[a.jsxDEV("h4",{className:m("md:zep-w-1/3","zep-text-center","md:zep-text-left","zep-typography-headlineMD-fluid-cqi"),children:v},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:48,columnNumber:7},void 0),a.jsxDEV("div",{className:m("zep-w-full","zep-flex-1","md:zep-flex-wrap"),children:a.jsxDEV("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:i==null?void 0:i.map((e,y)=>a.jsxDEV("div",{className:"zep-flex zep-items-center zep-justify-center",children:a.jsxDEV("img",{loading:"lazy",alt:e==null?void 0:e.imageAlt,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:e==null?void 0:e.image},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:57,columnNumber:15},void 0)},y,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:56,columnNumber:13},void 0))},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:54,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:53,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:42,columnNumber:5},void 0)};try{o.displayName="PartnerCommunication",o.__docgenInfo={description:"",displayName:"PartnerCommunication",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},partners:{defaultValue:null,description:"",name:"partners",required:!1,type:{name:"{ image: string; imageAlt: string; }[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"ZHD"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const f=[{imageAlt:"partnerlogo CAT",image:"./assets/Logo_cat.svg"},{imageAlt:"partnerlogo KBB",image:"./assets/Logo_KBB.svg"},{imageAlt:"partnerlogo Turbolader",image:"./assets/Logo_Turbolader.svg"},{imageAlt:"partnerlogo Napier",image:"./assets/Logo_Napier.svg"},{imageAlt:"partnerlogo MAK",image:"./assets/Logo_MAK.svg"}],Z={title:"Components/Partner Communication",component:o,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(r),"default"]}}}},n={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:f}},t={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:f}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const L=["Default","With10Logos"];export{n as Default,t as With10Logos,L as __namedExportsOrder,Z as default};
