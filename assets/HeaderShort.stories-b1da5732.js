import{j as i}from"./jsx-dev-runtime-8ab8c10c.js";import{c as T}from"./clsx-0839fdbe.js";import{H as x}from"./HeaderShortComponent-185785ad.js";import{L as y}from"./Layout-c161d79b.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";const n=({className:t,...s})=>{const S=s.showArrow?"md:zep-w-[40%]":"md:zep-w-[35%]";return i.jsxDEV(y,{className:t,testId:"header-short",children:i.jsxDEV(x,{...s,className:T("zep-w-full",S)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-short/HeaderShort.tsx",lineNumber:12,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-short/HeaderShort.tsx",lineNumber:11,columnNumber:5},globalThis)};try{n.displayName="HeaderShort",n.__docgenInfo={description:"",displayName:"HeaderShort",props:{showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Patterns/HeaderShort",component:n,tags:["autodocs"],argTypes:{}},e={args:{headline:"Headline",tagline:"Tagline",showArrow:!0}},r={args:{headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline",showArrow:!0}},a={args:{headline:"Component without Tagline",showArrow:!0}},o={args:{tagline:"Tagline",headline:"Component without Arrow",showArrow:!1}};var l,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    headline: 'Component without Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var f,H,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false
  } as HeaderShortProps
}`,...(A=(H=o.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const P=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow"];export{o as ComponentWithoutArrow,a as ComponentWithoutTagline,e as Default,r as LongHeadline,P as __namedExportsOrder,D as default};
