import{a as e}from"./mocks-dd8b5ca4.js";import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{c as g}from"./clsx-0839fdbe.js";import{M as D}from"./mediaTextSmall-c289a7fe.js";import{H as B}from"./HeaderLongComponent-8ed81641.js";import{L as G}from"./Layout-565dd17b.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./RichText-f3959693.js";import"./jsx-runtime-6f6342d7.js";import"./index.es16-fae182fa.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZsdButton-407be986.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const d=({items:l,id:C,headline:p,...W})=>{const i=l.length>12?l.slice(0,12):l;return a.jsxDEV(G,{id:C,className:g("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:a.jsxDEV("div",{"data-testid":"media-text-pattern",children:[a.jsxDEV("div",{"data-testid":"media-text-small-pattern-headline",className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5 zep-max-w-[952px]",children:p&&a.jsxDEV(B,{headline:p,...W},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:21,columnNumber:24},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:17,columnNumber:9},globalThis),a.jsxDEV("div",{"data-testid":"media-text-small-pattern-items",children:l&&a.jsxDEV("div",{className:g("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(i.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(i.length),"md:zep-grid-cols-2":[0,1,2,4].includes(i.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(i.length),"sm:zep-grid-cols-2":!0}),children:l.map((q,E)=>a.jsxDEV(D,{...q},E,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:36,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:26,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:24,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:16,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:15,columnNumber:5},globalThis)};try{d.displayName="MediaTextSmallPattern",d.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"none"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const ce={title:"Patterns/MediaTextSmallPattern",component:d,tags:["autodocs"],argTypes:{items:{control:{type:"array"}}}},n={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},r={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},t={args:{items:new Array(3).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},s={args:{items:new Array(4).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",description:e}},o={args:{items:new Array(5).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},m={args:{items:new Array(6).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},c={args:{items:new Array(7).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},u={args:{items:new Array(8).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,S,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var y,T,P;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(P=(T=t.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var M,b,k;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var A,N,_;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(_=(N=o.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var H,z,L;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(L=(z=m.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var V,R,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var j,F,Z;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(Z=(F=u.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};const ue=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{n as Default,t as With3Items,s as With4Items,o as With5Items,m as With6Items,c as With7Items,u as With8Items,r as WithHeadline,ue as __namedExportsOrder,ce as default};
