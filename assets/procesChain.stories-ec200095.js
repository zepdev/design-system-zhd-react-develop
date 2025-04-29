import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{N as C}from"./index.es16-1f4fc36d.js";import{a as x,l as z}from"./index.es17-40e95622.js";import{i as m}from"./RichText-1306839e.js";import{c as r}from"./clsx-0839fdbe.js";import{H as I}from"./HeaderLongComponent-fa7ec222.js";import{L as j}from"./Layout-565dd17b.js";import{S as v}from"./Scrollbar-75feef59.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZsdButton-698f244b.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./getDataLayer-1420585a.js";import"./tw-merge-1166cefb.js";const o=({linkChain:a,contentItems:k,id:g,headline:c,...b})=>e.jsxDEV(j,{id:g,className:"zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full",children:[c&&e.jsxDEV(I,{headline:c,...b},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:10,columnNumber:20},globalThis),e.jsxDEV(v,{scrollOrientation:"horizontal",controlId:"process-chain-scrollbar",className:"zep-w-full",children:e.jsxDEV("div",{className:"zep-w-fit lg:zep-w-full zep-flex zep-items-stretch zep-gap-2 lg:zep-gap-1.5",children:k.map((t,N)=>e.jsxDEV("div",{className:"zep-w-[300px] lg:zep-w-auto lg:zep-basis-1/5 lg:zep-flex-shrink lg:zep-flex-grow",children:e.jsxDEV("div",{className:r("zep-relative zep-bg-indigo-500 zep-text-greyscale-0 zep-w-full zep-p-1.5 zep-h-full"),children:e.jsxDEV("div",{className:r("zep-flex","zep-flex-col","zep-items-start","zep-gap-1"),children:[e.jsxDEV("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi  zep-hyphens-auto zep-break-normal",children:t.headline},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:19,columnNumber:19},globalThis),a?e.jsxDEV("div",{className:"zep-flex-col zep-flex zep-gap-0.5",children:t.linkItems.map((i,l)=>e.jsxDEV(C,{label:"inline link",iconPlacement:"before",icon:i.icon,href:i.link,target:x.Blank,mode:z.Inline},l,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:28,columnNumber:25},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:26,columnNumber:21},globalThis):e.jsxDEV(m,{className:"zep-flex-col zep-flex zep-gap-0.5",type:"bullet",children:t.listItems.map((i,l)=>e.jsxDEV(m.Item,{className:"zep-py-[0] zep-h-auto",children:i},`${i}-${l}`,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:42,columnNumber:25},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:40,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:18,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:15,columnNumber:15},globalThis)},N,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:14,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:12,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:11,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:9,columnNumber:5},globalThis);try{o.displayName="ProcessChain",o.__docgenInfo={description:"",displayName:"ProcessChain",props:{linkChain:{defaultValue:null,description:"",name:"linkChain",required:!0,type:{name:"any"}},contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"any"}}}}}catch{}const J={title:"Components/ProcessChain",component:o,tags:["autodocs"],argTypes:{}},n={args:{linkChain:!1,contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]}]}},s={args:{linkChain:!0,hasIcon:!1,contentItems:[{headline:"Link Chain 1",linkItems:[{link:"https://www.google.com"},{link:"https://www.example.com"},{link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  2",linkItems:[{link:"https://www.github.com"},{link:"https://www.gitlab.com"},{link:"https://www.gitlab.com"}]},{headline:"Link Chain  3",linkItems:[{link:"https://www.stackoverflow.com"},{link:"https://www.stackoverflow.com"},{link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  4",linkItems:[{link:"https://www.linkedin.com"},{link:"https://www.twitter.com"},{link:"https://www.gitlab.com"},{link:"https://www.gitlab.com"}]}]}};var p,h,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var d,u,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    linkChain: true,
    hasIcon: false,
    contentItems: [{
      headline: 'Link Chain 1',
      linkItems: [{
        link: 'https://www.google.com'
      }, {
        link: 'https://www.example.com'
      }, {
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  2',
      linkItems: [{
        link: 'https://www.github.com'
      }, {
        link: 'https://www.gitlab.com'
      }, {
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  3',
      linkItems: [{
        link: 'https://www.stackoverflow.com'
      }, {
        link: 'https://www.stackoverflow.com'
      }, {
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  4',
      linkItems: [{
        link: 'https://www.linkedin.com'
      }, {
        link: 'https://www.twitter.com'
      }, {
        link: 'https://www.gitlab.com'
      }, {
        link: 'https://www.gitlab.com'
      }]
    }]
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const K=["ListChain","LinkChain"];export{s as LinkChain,n as ListChain,K as __namedExportsOrder,J as default};
