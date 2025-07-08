import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{S as u}from"./SingleLinkList-264b0cb8.js";import{M as h}from"./MultiLinkList-63b3201e.js";import{m as f}from"./mocks-dd8b5ca4.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./HeaderShortComponent-940c844a.js";import"./clsx-0839fdbe.js";import"./LinkListItem-f57c506d.js";import"./index.es2-5f6509a8.js";import"./jsx-runtime-6f6342d7.js";import"./index.es32-95f1013f.js";import"./index.es13-aa933637.js";import"./index.es33-fbb642fb.js";import"./ZsdButton-1164ed6e.js";import"./index.es17-40e95622.js";import"./index.es36-796b080a.js";import"./index-ff2c9236.js";import"./getDataLayer-2559cd39.js";import"./getUrlWithTrailingSlash-860fbe2b.js";import"./tw-merge-1166cefb.js";import"./index.es16-c80ee037.js";import"./RichText-1d1ef0bf.js";import"./Layout-565dd17b.js";import"./HeaderLongComponent-d899964d.js";const t=({id:r,linkLists:e,headline:o})=>e.length===0?null:e.length===1?l.jsxDEV(u,{title:o,...e[0]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-section/ContactSection.tsx",lineNumber:12,columnNumber:12},globalThis):l.jsxDEV(h,{id:r,headline:o,linkLists:e},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-section/ContactSection.tsx",lineNumber:15,columnNumber:10},globalThis);try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:f,links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var a,s,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    headline: 'Pressekontakt',
    linkLists: [{
      headline: 'Sina Koch',
      description: mockRichTextShort,
      links: [{
        href: '',
        label: 'inline link'
      }, {
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,p,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    headline: 'Sie brauchen Unterstützung - wir helfen Ihnen gerne',
    linkLists: [{
      headline: 'Deutschland',
      links: [{
        href: '',
        label: 'inline link'
      }]
    }, {
      headline: 'International',
      links: [{
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const O=["Single","Multi"];export{i as Multi,n as Single,O as __namedExportsOrder,F as default};
