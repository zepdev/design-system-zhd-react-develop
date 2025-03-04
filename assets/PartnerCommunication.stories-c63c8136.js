import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{G as i}from"./global-variants-0e6e1510.js";import{c as f}from"./index-ff2c9236.js";import{c as s}from"./clsx-0839fdbe.js";import{t as h}from"./tw-merge-1166cefb.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";const o=({headline:r,children:a,variant:x})=>{const z={[i.Zps]:["zep-text-typography-primary-default"],[i.Cat]:["zep-text-typography-dark-100"]},g=f([`zep-py-2
       zep-px-1 
       sm:zep-py-2.5 
       sm:zep-px-1.5 
       md:zep-px-[66px] 
       md:zep-py-2 
       lg:zep-px-[122px] 
       lg:zep-py-3 
       zep-gap-1.5 
       sm:zep-gap-2 
       lg:zep-gap-3.5 
       zep-bg-background-medium 
       zep-max-w-[1920px] 
       zep-mx-auto 
       zep-flex-col 
       zep-flex 
       zep-items-center 
       md:zep-flex-row`],{variants:{variant:z},defaultVariants:{variant:i.Zps}});return e.jsxDEV("div",{className:h(g({variant:x})),"data-testid":"zep-partner-communication",children:[e.jsxDEV("h2",{className:s("md:zep-w-1/3","zep-text-center","md:zep-text-left","zep-typography-headlineMD-fluid-cqi"),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:46,columnNumber:7},globalThis),e.jsxDEV("div",{className:s("zep-w-full","zep-flex-1","md:zep-flex-wrap"),children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:52,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:45,columnNumber:5},globalThis)};try{o.displayName="PartnerCommunication",o.__docgenInfo={description:"",displayName:"PartnerCommunication",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const v=[{alt:"partnerlogo CAT",src:"./assets/Logo_cat.svg"},{alt:"partnerlogo KBB",src:"./assets/Logo_KBB.svg"},{alt:"partnerlogo Turbolader",src:"./assets/Logo_Turbolader.svg"},{alt:"partnerlogo Napier",src:"./assets/Logo_Napier.svg"},{alt:"partnerlogo MAK",src:"./assets/Logo_MAK.svg"}],T={title:"Components/Partner Communication",component:o,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(i),"default"]}}}},n={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",children:e.jsxDEV(e.Fragment,{children:e.jsxDEV("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:v.map((r,a)=>e.jsxDEV("div",{className:"zep-flex zep-items-center zep-justify-center",children:e.jsxDEV("img",{alt:r.alt,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:r.src},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.stories.tsx",lineNumber:40,columnNumber:15},globalThis)},a,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.stories.tsx",lineNumber:39,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.stories.tsx",lineNumber:37,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.stories.tsx",lineNumber:36,columnNumber:7},globalThis)}},t={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",children:e.jsxDEV(e.Fragment,{children:e.jsxDEV("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:Array.from({length:10}).map((r,a)=>e.jsxDEV("div",{className:"zep-flex zep-items-center zep-justify-center",children:e.jsxDEV("img",{alt:`partner logo ${a+1}`,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:"./assets/Logo_cat.svg"},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.stories.tsx",lineNumber:59,columnNumber:15},globalThis)},a,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.stories.tsx",lineNumber:58,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.stories.tsx",lineNumber:55,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.stories.tsx",lineNumber:54,columnNumber:7},globalThis)}};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    children: <>
        <div className="zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2">
          {logos.map((logo, index) => <div key={index} className="zep-flex zep-items-center zep-justify-center">
              <img alt={logo.alt} className="zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]" src={logo.src} />
            </div>)}
        </div>
      </>
  } as PartnerCommunicationProps
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    children: <>
        <div className="zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2">
          {/* Repeat the icon divs */}
          {Array.from({
          length: 10
        }).map((_, index) => <div key={index} className="zep-flex zep-items-center zep-justify-center">
              <img alt={\`partner logo \${index + 1}\`} className="zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]" src="./assets/Logo_cat.svg" />
            </div>)}
        </div>
      </>
  } as PartnerCommunicationProps
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const V=["Default","With10Logos"];export{n as Default,t as With10Logos,V as __namedExportsOrder,T as default};
