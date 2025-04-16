import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{N as C,a as x,l as z}from"./index.es16-fae182fa.js";import{i as c}from"./RichText-a5cf02f1.js";import{c as m}from"./clsx-0839fdbe.js";import{H as I}from"./HeaderLongComponent-5224c550.js";import{L as j}from"./Layout-565dd17b.js";import{S as v}from"./Scrollbar-75feef59.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZsdButton-c280af90.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const s=({linkChain:r,contentItems:k,id:f,headline:a,...b})=>e.jsxDEV(j,{id:f,className:"zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full",children:[a&&e.jsxDEV(I,{headline:a,...b},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:10,columnNumber:20},globalThis),e.jsxDEV(v,{scrollOrientation:"horizontal",controlId:"process-chain-scrollbar",className:"zep-w-full",children:e.jsxDEV("div",{className:"zep-w-fit lg:zep-w-full zep-flex zep-items-stretch zep-gap-2 lg:zep-gap-1.5",children:k.map((l,N)=>e.jsxDEV("div",{className:"zep-w-[300px] lg:zep-w-auto lg:zep-basis-1/5 lg:zep-flex-shrink lg:zep-flex-grow",children:e.jsxDEV("div",{className:m("zep-relative zep-bg-indigo-500 zep-text-greyscale-0 zep-w-full zep-p-1.5 zep-h-full"),children:e.jsxDEV("div",{className:m("zep-flex","zep-flex-col","zep-items-start","zep-gap-1"),children:[e.jsxDEV("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi  zep-hyphens-auto zep-break-normal",children:l.headline},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:19,columnNumber:19},globalThis),r?e.jsxDEV("div",{className:"zep-flex-col zep-flex zep-gap-0.5",children:l.linkItems.map((i,o)=>e.jsxDEV(C,{label:"inline link",iconPlacement:"before",icon:i.icon,href:i.link,target:x.Blank,mode:z.Inline},o,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:28,columnNumber:25},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:26,columnNumber:21},globalThis):e.jsxDEV(c,{className:"zep-flex-col zep-flex zep-gap-0.5",type:"bullet",children:l.listItems.map((i,o)=>e.jsxDEV(c.Item,{className:"zep-py-[0] zep-h-auto",children:i},`${i}-${o}`,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:42,columnNumber:25},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:40,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:18,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:15,columnNumber:15},globalThis)},N,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:14,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:12,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:11,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:9,columnNumber:5},globalThis);try{s.displayName="ProcessChain",s.__docgenInfo={description:"",displayName:"ProcessChain",props:{linkChain:{defaultValue:null,description:"",name:"linkChain",required:!0,type:{name:"any"}},contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"any"}}}}}catch{}const F={title:"Components/ProcessChain",component:s,tags:["autodocs"],argTypes:{}},n={args:{linkChain:!1,contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]}]}},t={args:{linkChain:!0,contentItems:[{headline:"Link Chain 1",linkItems:[{icon:"arrow-long-right",link:"https://www.google.com"},{icon:"arrow-long-right",link:"https://www.example.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  2",linkItems:[{icon:"arrow-long-right",link:"https://www.github.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  3",linkItems:[{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  4",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]}]}};var h,p,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
    }
    // {
    //   headline: 'List Chain 5',
    //   listItems: ['list item', 'list item', 'list item'],
    // },
    ]
  }
}`,...(w=(p=n.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }]
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const G=["ListChain","LinkChain"];export{t as LinkChain,n as ListChain,G as __namedExportsOrder,F as default};
