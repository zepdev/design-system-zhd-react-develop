import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{c as ie}from"./clsx-0839fdbe.js";import{C as re}from"./Card-6dc08e8b.js";import{L as le}from"./Layout-565dd17b.js";import{H as te}from"./HeaderLongComponent-701a7105.js";import{a as ne}from"./mocks-dd8b5ca4.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-fae182fa.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./global-variants-893e06e6.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-b626902d.js";import"./index.es18-4e559a5f.js";import"./ZsdButton-407be986.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const x=({items:e,headline:g,id:h,...ae})=>{const i=e.length>12?e.slice(0,12):e;return a.jsxDEV(le,{id:h,children:[g&&a.jsxDEV("div",{className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:a.jsxDEV(te,{headline:g,...ae},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:14,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:13,columnNumber:9},globalThis),a.jsxDEV("div",{"data-testid":"card-pattern-items",className:ie("zep-grid","zep-gap-1",{"xl:zep-grid-cols-3":[2,3,6,9].includes(i.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(i.length),"md:zep-grid-cols-2":[0,1,2,4].includes(i.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(i.length),"sm:zep-grid-cols-2":!0}),children:e==null?void 0:e.map(v=>a.jsxDEV(re,{...v,gtmHeadline:g,gtmid:h},v.title,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:27,columnNumber:31},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:17,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:11,columnNumber:5},globalThis)};try{x.displayName="CardPattern",x.__docgenInfo={description:"",displayName:"CardPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardProps, "variant">[]'}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"none"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const Ce={title:"Patterns/CardPattern",component:x,tags:["autodocs"],argTypes:{items:{control:{type:"array"}}}},r={args:{items:new Array(2).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},l={args:{items:new Array(2).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"}),headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",description:ne,tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},t={args:{items:new Array(3).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},n={args:{items:new Array(4).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},s={args:{items:new Array(5).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},o={args:{items:new Array(6).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},c={args:{items:new Array(7).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},u={args:{items:new Array(8).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},d={args:{items:new Array(9).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},m={args:{items:new Array(10).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},p={args:{items:new Array(11).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}},f={args:{items:new Array(12).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me"})}};var w,b,H;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(H=(b=r.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};var y,M,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    }),
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    description: mockRichText,
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardPatternProps
}`,...(k=(M=l.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var T,D,C;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(C=(D=t.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var B,A,G;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(G=(A=n.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var W,V,S;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(S=(V=s.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var P,j,q;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(q=(j=o.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var L,I,Y;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(Y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};var N,z,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var _,F,Z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: new Array(9).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(Z=(F=d.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var R,O,J;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: new Array(10).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(J=(O=m.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: new Array(11).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,$,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: new Array(12).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Be=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items"];export{r as Default,m as With10Items,p as With11Items,f as With12Items,t as With3Items,n as With4Items,s as With5Items,o as With6Items,c as With7Items,u as With8Items,d as With9Items,l as WithHeadline,Be as __namedExportsOrder,Ce as default};
