import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{c}from"./clsx-0839fdbe.js";import{L as P}from"./Layout-565dd17b.js";import{H as z}from"./HeaderShortComponent-c25a9595.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";const s=({className:i,backgroundVariant:W="white",..._})=>{const j="md:zep-w-[35%]",v=W==="gray"?"zep-bg-background-medium":void 0;return l.jsxDEV(P,{className:c(i,"zep-py-3","sm:zep-py-4","md:zep-py-5"),wrapperClassname:v,testId:"header-short",children:l.jsxDEV(z,{..._,className:c("zep-w-full",j)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-short/HeaderShort.tsx",lineNumber:18,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-short/HeaderShort.tsx",lineNumber:13,columnNumber:5},globalThis)};try{s.displayName="HeaderShort",s.__docgenInfo={description:"",displayName:"HeaderShort",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},backgroundVariant:{defaultValue:{value:"white"},description:"",name:"backgroundVariant",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Patterns/HeaderShort",component:s,tags:["autodocs"],argTypes:{backgroundVariant:{control:"select",options:["white","gray"]}}},e={args:{headline:"Headline",tagline:"Tagline"}},a={args:{headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline"}},r={args:{headline:"Component without Tagline"}},n={args:{tagline:"Tagline",headline:"Component without Arrow"}},o={args:{backgroundVariant:"gray",tagline:"Tagline",headline:"Component with gray background"}},t={args:{backgroundVariant:"white",tagline:"Tagline",headline:"Component with white background"}};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var w,y,f;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    headline: 'Component without Tagline'
  } as HeaderShortProps
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var H,S,b;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow'
  } as HeaderShortProps
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var T,C,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'gray',
    tagline: 'Tagline',
    headline: 'Component with gray background'
  } as HeaderShortProps
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var V,N,x;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'white',
    tagline: 'Tagline',
    headline: 'Component with white background'
  } as HeaderShortProps
}`,...(x=(N=t.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const I=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow","ComponentWithGrayBackground","ComponentWithWhiteBackground"];export{o as ComponentWithGrayBackground,t as ComponentWithWhiteBackground,n as ComponentWithoutArrow,r as ComponentWithoutTagline,e as Default,a as LongHeadline,I as __namedExportsOrder,G as default};
