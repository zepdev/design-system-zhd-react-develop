import{a as e}from"./mocks-dd8b5ca4.js";import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{c as g}from"./clsx-0839fdbe.js";import{L as B}from"./Layout-565dd17b.js";import{M as G}from"./mediaTextSmall-e88238fc.js";import{H as O}from"./HeaderLongComponent-62dee23d.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./RichText-f3604685.js";import"./jsx-runtime-6f6342d7.js";import"./index.es16-c80ee037.js";import"./index.es32-95f1013f.js";import"./index.es13-aa933637.js";import"./index.es17-40e95622.js";import"./getUrlWithTrailingSlash-860fbe2b.js";import"./ZsdButton-3588a4fb.js";import"./index.es36-796b080a.js";import"./index-ff2c9236.js";import"./getDataLayer-2559cd39.js";import"./tw-merge-1166cefb.js";const d=({items:l,id:q,headline:p,target:C,...W})=>{const n=l.length>12?l.slice(0,12):l;return a.jsxDEV(B,{id:q,className:g("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:a.jsxDEV("div",{"data-testid":"media-text-pattern",children:[a.jsxDEV("div",{"data-testid":"media-text-small-pattern-headline",className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:p&&a.jsxDEV(O,{headline:p,target:C,...W},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:19,columnNumber:24},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:18,columnNumber:9},globalThis),a.jsxDEV("div",{"data-testid":"media-text-small-pattern-items",children:l&&a.jsxDEV("div",{className:g("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(n.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(n.length),"md:zep-grid-cols-2":[0,1,2,4].includes(n.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(n.length),"sm:zep-grid-cols-2":!0}),children:l.map((D,E)=>a.jsxDEV(G,{...D},E,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:34,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:24,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:22,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:17,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:16,columnNumber:5},globalThis)};try{d.displayName="MediaTextSmallPattern",d.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-dark"'},{value:'"secondary-dark"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"ZHD"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const pe={title:"Patterns/MediaTextSmallPattern",component:d,tags:["autodocs"],argTypes:{items:{control:{type:"array"}}}},i={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"external-link"}},r={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"arrow-long-right"}},t={args:{items:new Array(3).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},s={args:{items:new Array(4).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",description:e}},o={args:{items:new Array(5).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},m={args:{items:new Array(6).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},u={args:{items:new Array(7).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},c={args:{items:new Array(8).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}};var v,h,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    linkText: 'Link Text',
    type: 'link',
    headerButtonIcon: 'external-link'
  } as MediaTextSmallPatternProps
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,y,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    linkText: 'Link Text',
    type: 'link',
    headerButtonIcon: 'arrow-long-right'
  } as MediaTextSmallPatternProps
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,T,k;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var P,M,b;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(b=(M=s.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var A,_,N;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(_=o.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var L,H,z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(z=(H=m.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var I,V,R;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(V=u.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var Z,j,F;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};const ge=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{i as Default,t as With3Items,s as With4Items,o as With5Items,m as With6Items,u as With7Items,c as With8Items,r as WithHeadline,ge as __namedExportsOrder,pe as default};
