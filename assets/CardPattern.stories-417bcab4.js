import{a as ie}from"./mocks-dd8b5ca4.js";import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{c as le}from"./clsx-0839fdbe.js";import{C as re}from"./Card-92056e2b.js";import{H as te}from"./HeaderLongComponent-5224c550.js";import{L as ne}from"./Layout-565dd17b.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-fae182fa.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-a5cf02f1.js";import"./ZsdButton-c280af90.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const w=({items:e,headline:g,id:h,...ae})=>{const i=e.length>12?e.slice(0,12):e;return a.jsxDEV(ne,{id:h,children:[g&&a.jsxDEV("div",{className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:a.jsxDEV(te,{headline:g,...ae},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:14,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:13,columnNumber:9},globalThis),a.jsxDEV("div",{"data-testid":"card-pattern-items",className:le("zep-grid","zep-gap-1",{"xl:zep-grid-cols-3":[2,3,6,9,5].includes(i.length),"xl:zep-grid-cols-4":[4,7,8,10,11,12].includes(i.length),"md:zep-grid-cols-2":[0,1,2,4].includes(i.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(i.length),"sm:zep-grid-cols-2":!0}),children:e==null?void 0:e.map(x=>a.jsxDEV(re,{...x,gtmHeadline:g,gtmid:h},x.title,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:27,columnNumber:31},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:17,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:11,columnNumber:5},globalThis)};try{w.displayName="CardPattern",w.__docgenInfo={description:"",displayName:"CardPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardProps, "variant">[]'}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const Se={title:"Patterns/CardPattern",component:w,tags:["autodocs"],argTypes:{items:{control:{type:"array"}}}},l={args:{items:new Array(2).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me",url:"url",linkSrc:"linksrc"})}},r={args:{items:new Array(2).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"}),headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",description:ie,tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},t={args:{items:new Array(3).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},n={args:{items:new Array(4).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},o={args:{items:new Array(5).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},s={args:{items:new Array(6).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},c={args:{items:new Array(7).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},u={args:{items:new Array(8).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},m={args:{items:new Array(9).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},d={args:{items:new Array(10).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},p={args:{items:new Array(11).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}},f={args:{items:new Array(12).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkSrc:"https://www.google.com",linkLabel:"Click me"})}};var v,b,H;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me',
      url: 'url',
      linkSrc: 'linksrc'
    })
  } as CardPatternProps
}`,...(H=(b=l.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};var k,y,M;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    }),
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    description: mockRichText,
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardPatternProps
}`,...(M=(y=r.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var S,T,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(D=(T=t.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var C,B,A;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(A=(B=n.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var G,W,V;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(V=(W=o.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var P,j,q;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(q=(j=s.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var L,I,Y;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
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
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var _,F,Z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: new Array(9).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(Z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var R,O,J;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: new Array(10).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(J=(O=d.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: new Array(11).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkSrc: 'https://www.google.com',
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
      linkSrc: 'https://www.google.com',
      linkLabel: 'Click me'
    })
  } as CardPatternProps
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Te=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items"];export{l as Default,d as With10Items,p as With11Items,f as With12Items,t as With3Items,n as With4Items,o as With5Items,s as With6Items,c as With7Items,u as With8Items,m as With9Items,r as WithHeadline,Te as __namedExportsOrder,Se as default};
