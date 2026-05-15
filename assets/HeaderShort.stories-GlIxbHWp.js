import{j as l}from"./jsx-dev-runtime-DUe1FbZV.js";import{c as d}from"./clsx-B-dksMZM.js";import{H as B}from"./HeaderShortComponent-Cc634UR8.js";import{L as q}from"./Layout-DD3M0BlI.js";import"./index-CnaUG9bL.js";const s=({className:i,backgroundVariant:z="white",disableBottomPadding:N=!1,...W})=>{const _="md:zep-w-[35%]",P=z==="gray"?"zep-bg-background-medium":void 0,j=N?["zep-pt-3","sm:zep-pt-4","md:zep-pt-5"]:["zep-py-3","sm:zep-py-4","md:zep-py-5"];return l.jsxDEV(q,{className:d(i,...j),wrapperClassname:P,testId:"header-short",children:l.jsxDEV(B,{...W,headlineSize:"xl",className:d("zep-w-full",_)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-short/HeaderShort.tsx",lineNumber:23,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-short/HeaderShort.tsx",lineNumber:22,columnNumber:5},void 0)};try{s.displayName="HeaderShort",s.__docgenInfo={description:"",displayName:"HeaderShort",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},backgroundVariant:{defaultValue:{value:"white"},description:"",name:"backgroundVariant",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},disableBottomPadding:{defaultValue:{value:"false"},description:"",name:"disableBottomPadding",required:!1,type:{name:"boolean"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headlineSize:{defaultValue:null,description:"",name:"headlineSize",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}const I={title:"Patterns/HeaderShort",component:s,tags:["autodocs"],argTypes:{backgroundVariant:{control:"select",options:["white","gray"]}}},e={args:{headline:"Headline",tagline:"Tagline"}},a={args:{headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline"}},r={args:{headline:"Component without Tagline"}},n={args:{tagline:"Tagline",headline:"Component without Arrow"}},o={args:{backgroundVariant:"gray",tagline:"Tagline",headline:"Component with gray background"}},t={args:{backgroundVariant:"white",tagline:"Tagline",headline:"Component with white background"}};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,w,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    headline: 'Component without Tagline'
  } as HeaderShortProps
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,b,H;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow'
  } as HeaderShortProps
}`,...(H=(b=n.parameters)==null?void 0:b.docs)==null?void 0:H.source}}};var C,T,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'gray',
    tagline: 'Tagline',
    headline: 'Component with gray background'
  } as HeaderShortProps
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var V,x,v;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'white',
    tagline: 'Tagline',
    headline: 'Component with white background'
  } as HeaderShortProps
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const O=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow","ComponentWithGrayBackground","ComponentWithWhiteBackground"];export{o as ComponentWithGrayBackground,t as ComponentWithWhiteBackground,n as ComponentWithoutArrow,r as ComponentWithoutTagline,e as Default,a as LongHeadline,O as __namedExportsOrder,I as default};
