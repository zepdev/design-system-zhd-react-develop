import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{H as D}from"./HeaderLongComponent-b0d31a0a.js";import{S as E}from"./Scrollbar-75feef59.js";import{A as H}from"./AnchorNavigationCard-add598e1.js";import{L as M}from"./Layout-565dd17b.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-fae182fa.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./clsx-0839fdbe.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-5f261b33.js";import"./ZsdButton-407be986.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const c=({navigationCards:e,className:j="",headline:v,..._})=>a.jsxDEV(M,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4",children:[v&&a.jsxDEV(D,{headline:v,..._},void 0,!1,{fileName:"/home/circleci/project/src/components/anchor-navigation-list/AnchorNavigationList.tsx",lineNumber:16,columnNumber:20},globalThis),a.jsxDEV(E,{scrollOrientation:"horizontal",dataTestId:"zep-anchor-navigation-list",controlId:"anchor-navigation-scrollbar",className:`zep-flex zep-gap-1 md:zep-gap-1.5 lg:zep-gap-2 zep-w-full zep-border-b-1 zep-border-greyscale-400 zep-p-0.75 ${j}`,children:e==null?void 0:e.map(d=>a.jsxDEV(H,{...d},d.linkLabel,!1,{fileName:"/home/circleci/project/src/components/anchor-navigation-list/AnchorNavigationList.tsx",lineNumber:23,columnNumber:41},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/anchor-navigation-list/AnchorNavigationList.tsx",lineNumber:17,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/anchor-navigation-list/AnchorNavigationList.tsx",lineNumber:15,columnNumber:5},globalThis);try{c.displayName="AnchorNavigationList",c.__docgenInfo={description:"",displayName:"AnchorNavigationList",props:{navigationCards:{defaultValue:null,description:"",name:"navigationCards",required:!0,type:{name:'Omit<AnchorNavigationCardProps, "variant">[]'}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const te={title:"Patterns/AnchorNavigationList",component:c,tags:["autodocs"],argTypes:{navigationCards:{control:{type:"array"}}}},l={args:{navigationCards:[{linkLabel:"Training",scrollToIdLink:"test"}]}},r={args:{navigationCards:new Array(2).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}},n={args:{navigationCards:new Array(3).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}},o={args:{navigationCards:new Array(4).fill({linkLabel:"Training",scrollToIdLink:"test"})}},i={args:{navigationCards:new Array(5).fill({linkLabel:"Dual Study Program",scrollToIdLink:"test"})}},t={args:{navigationCards:new Array(6).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}},s={args:{navigationCards:new Array(7).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}},u={args:{navigationCards:new Array(8).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}};var m,p,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    navigationCards: [{
      linkLabel: 'Training',
      scrollToIdLink: 'test'
    }]
  } as AnchorNavigationListProps
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,f,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(2).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var L,b,w;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(3).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,I,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(4).fill({
      linkLabel: 'Training',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,C,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(5).fill({
      linkLabel: 'Dual Study Program',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var B,W,x;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(6).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(x=(W=t.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var G,z,V;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(7).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(V=(z=s.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var P,S,q;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(8).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(q=(S=u.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const se=["Default","With2Items","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{l as Default,r as With2Items,n as With3Items,o as With4Items,i as With5Items,t as With6Items,s as With7Items,u as With8Items,se as __namedExportsOrder,te as default};
