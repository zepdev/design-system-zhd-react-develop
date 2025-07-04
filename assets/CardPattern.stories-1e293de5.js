import{a as ae}from"./mocks-dd8b5ca4.js";import{j as i}from"./jsx-dev-runtime-8ab8c10c.js";import{c as re}from"./clsx-0839fdbe.js";import{C as te}from"./Card-d8cd1fae.js";import{H as ne}from"./HeaderLongComponent-e502d806.js";import{L as le}from"./Layout-565dd17b.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-c80ee037.js";import"./jsx-runtime-6f6342d7.js";import"./index.es32-95f1013f.js";import"./index.es13-aa933637.js";import"./index.es17-40e95622.js";import"./getDataLayer-2559cd39.js";import"./getUrlWithTrailingSlash-6dc73fb8.js";import"./slugify-95689b5e.js";import"./RichText-5929e185.js";import"./ZsdButton-7968dbc8.js";import"./index.es36-796b080a.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const g=({items:e,headline:f,id:w,...ee})=>{const ie=e.length>12?e.slice(0,12):e;return i.jsxDEV(le,{id:w,children:[f&&i.jsxDEV("div",{className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:i.jsxDEV(ne,{headline:f,...ee},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:14,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:13,columnNumber:9},globalThis),i.jsxDEV("div",{"data-testid":"card-pattern-items",className:re("zep-grid","zep-gap-1",{"xl:zep-grid-cols-3":[3,5,6,9].includes(ie.length),"xl:zep-grid-cols-4":[4,7,8].includes(e.length)||e.length>=10,"lg:zep-grid-cols-2 xl:zep-flex":e.length<=2,"lg:zep-grid-cols-3":e.length>=3,"sm:zep-grid-cols-2":!0}),children:e==null?void 0:e.map(h=>i.jsxDEV(te,{...h,gtmHeadline:f,gtmid:w},h.title,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:27,columnNumber:31},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:17,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-pattern/CardPattern.tsx",lineNumber:11,columnNumber:5},globalThis)};try{g.displayName="CardPattern",g.__docgenInfo={description:"",displayName:"CardPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardProps, "variant">[]'}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-dark"'},{value:'"secondary-dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const De={title:"Patterns/CardPattern",component:g,tags:["autodocs"],argTypes:{items:{control:{type:"array"}}}},a={args:{items:[{imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",linkLabel:"Click me",icon:"external-link",iconPosition:"after",url:"https://www.google.com"},{imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",linkLabel:"Click me",icon:"external-link",linktype:"external-link",iconPosition:"after",url:"https://www.google.com"}]}},r={args:{items:new Array(2).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"}),headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",description:ae,tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},t={args:{items:new Array(3).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},n={args:{items:new Array(4).fill({imageSrc:"./assets/long-image.jpeg",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},l={args:{items:new Array(5).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},o={args:{items:new Array(6).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},s={args:{items:new Array(7).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},c={args:{items:new Array(8).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},u={args:{items:new Array(9).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},m={args:{items:new Array(10).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},p={args:{items:new Array(11).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}},d={args:{items:new Array(12).fill({imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",tagline:"Tagline",title:"Title",description:"Here is a description",url:"https://www.google.com",linkLabel:"Click me",icon:"arrow-long-right",iconPosition:"after"})}};var x,v,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      linkLabel: 'Click me',
      icon: 'external-link',
      // linktype: 'external-link',
      iconPosition: 'after',
      url: 'https://www.google.com'
    }, {
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      linkLabel: 'Click me',
      icon: 'external-link',
      linktype: 'external-link',
      iconPosition: 'after',
      url: 'https://www.google.com'
    }]
  } as CardPatternProps
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var H,k,y;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    }),
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    description: mockRichText,
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardPatternProps
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var M,P,T;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var C,D,B;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      imageSrc: './assets/long-image.jpeg',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(B=(D=n.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var A,G,W;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(W=(G=l.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var S,V,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(L=(V=o.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var j,q,I;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(I=(q=s.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var Y,N,z;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var _,E,F;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: new Array(9).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(F=(E=u.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var Z,R,O;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: new Array(10).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(O=(R=m.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: new Array(11).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,$;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: new Array(12).fill({
      imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      tagline: 'Tagline',
      title: 'Title',
      description: 'Here is a description',
      url: 'https://www.google.com',
      linkLabel: 'Click me',
      icon: 'arrow-long-right',
      iconPosition: 'after'
    })
  } as CardPatternProps
}`,...($=(X=d.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const Be=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items"];export{a as Default,m as With10Items,p as With11Items,d as With12Items,t as With3Items,n as With4Items,l as With5Items,o as With6Items,s as With7Items,c as With8Items,u as With9Items,r as WithHeadline,Be as __namedExportsOrder,De as default};
