import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{M as h}from"./MultiLinkList-cc7fbe06.js";import{S as f}from"./SingleLinkList-0162f923.js";import{G as k}from"./global-variants-893e06e6.js";import{m as g}from"./mocks-dd8b5ca4.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderLongComponent-972ba16b.js";import"./index.es16-fae182fa.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-0a689eeb.js";import"./index.es18-4e559a5f.js";import"./ZpsButton-401c1089.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./LinkListItem-4773fcc7.js";import"./index.es2-ef205e1c.js";import"./index.es32-fbb642fb.js";import"./commonCSS-cc68a568.js";import"./getDataLayer-1420585a.js";import"./Layout-565dd17b.js";import"./HeaderShortComponent-10e6a4a6.js";const t=({id:r,variant:a=k.Zps,linkLists:e,headline:o})=>e.length===0?null:e.length===1?l.jsxDEV(f,{title:o,...e[0],variant:a},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-section/ContactSection.tsx",lineNumber:13,columnNumber:12},globalThis):l.jsxDEV(h,{id:r,headline:o,linkLists:e,variant:a},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-section/ContactSection.tsx",lineNumber:17,columnNumber:5},globalThis);try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:g,links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var s,c,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const H=["Single","Multi"];export{i as Multi,n as Single,H as __namedExportsOrder,B as default};
