import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{c as l}from"./clsx-0839fdbe.js";import{Z as b,a as C,l as N}from"./index.es16-f2b53c6d.js";import{H as x}from"./HeaderLongComponent-f851335a.js";import{L as z}from"./Layout-c161d79b.js";import{S as v}from"./Scrollbar-d39092d1.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./ZsdButton-46c67cfd.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-ee2508ae.js";const a=({contentItems:r,headline:c,linkChain:k,...f})=>e.jsxDEV(z,{className:"zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full sm:zep-px-1",children:[c&&e.jsxDEV(x,{headline:c,...f},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:17,columnNumber:20},globalThis),e.jsxDEV(v,{scrollOrientation:"horizontal",controlId:"process-chain-scrollbar",className:"zep-w-full",children:e.jsxDEV("div",{className:"xl:zep-w-full zep-w-fit zep-flex zep-gap-2 md:zep-gap-2.5",children:r.map((i,m)=>e.jsxDEV("div",{className:l("xl:zep-grow xl:zep-w-auto zep-min-w-[286px]"),children:e.jsxDEV("div",{className:l("zep-relative zep-bg-primary-default zep-text-greyscale-0 xl:zep-max-w-full zep-max-w-[300px] zep-p-1.5 zep-h-full"),children:[e.jsxDEV("div",{className:l("zep-flex","zep-flex-col","zep-items-start"),children:[e.jsxDEV("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi  zep-break-all zep-mb-1",children:i.headline},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:24,columnNumber:19},globalThis),k?i.linkItems&&i.linkItems.map((n,t)=>e.jsxDEV("div",{className:l({"zep-mt-1.5":t!==0}),children:e.jsxDEV(b,{label:"inline link",iconPlacement:"before",icon:n.icon,href:n.link,target:C.Blank,mode:N.Inline},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:35,columnNumber:23},globalThis)},t,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:34,columnNumber:21},globalThis)):e.jsxDEV("ul",{className:"zep-pl-1.5",children:i.listItems&&i.listItems.map((n,t)=>e.jsxDEV("li",{className:"zep-list-disc",children:n},t,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:49,columnNumber:23},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:47,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:23,columnNumber:17},globalThis),m<r.length-1&&e.jsxDEV("div",{className:"zep-absolute zep-left-auto -zep-right-1 zep-border-t-transparent zep-border-b-transparent zep-border-t-[18px] zep-border-b-[18px] zep-top-1/3 zep-border-l-[16px] zep-border-l-primary-default zep-translate-y-1/2"},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:55,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:22,columnNumber:15},globalThis)},m,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:21,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:19,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:18,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:16,columnNumber:5},globalThis);try{a.displayName="ProcessChain",a.__docgenInfo={description:"",displayName:"ProcessChain",props:{contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"ProcessChainItem[]"}},linkChain:{defaultValue:null,description:"",name:"linkChain",required:!0,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const Z={title:"Components/ProcessChain",component:a,tags:["autodocs"],argTypes:{}},s={args:{linkChain:!1,contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]},{headline:"List Chain 5",listItems:["list item","list item","list item"]}]}},o={args:{linkChain:!0,contentItems:[{headline:"Link Chain 1",linkItems:[{icon:"arrow-long-right",link:"https://www.google.com"},{icon:"arrow-long-right",link:"https://www.example.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  2",linkItems:[{icon:"arrow-long-right",link:"https://www.github.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  3",linkItems:[{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  4",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  5",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]}]}};var p,h,w;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    linkChain: false,
    contentItems: [{
      headline: 'List Chain 1',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 2',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 3',
      listItems: ['list item', 'list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 4',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 5',
      listItems: ['list item', 'list item', 'list item']
    }]
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var g,u,d;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    linkChain: true,
    contentItems: [{
      headline: 'Link Chain 1',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.google.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.example.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  2',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.github.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  3',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  4',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.linkedin.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.twitter.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  5',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.linkedin.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.twitter.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }]
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const A=["ListChain","LinkChain"];export{o as LinkChain,s as ListChain,A as __namedExportsOrder,Z as default};
