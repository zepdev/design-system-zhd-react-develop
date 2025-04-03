import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{S as c}from"./index.es4-97fd14ec.js";import{r as d}from"./index-b1e7e93e.js";import{M as a}from"./ModalComponent-f8675b2e.js";import"./jsx-runtime-6f6342d7.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./index.es24-551679ca.js";import"./_commonjsHelpers-de833af9.js";import"./ZpsButton-9b245db5.js";import"./index-ff2c9236.js";import"./clsx-0839fdbe.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./tw-merge-1166cefb.js";const T={title:"Components/ModalComponent",component:a,tags:["autodocs"]},u=n=>{const[l,t]=d.useState(!1),p=()=>t(!0),i=()=>{t(!1),n.onClose&&n.onClose()};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(c,{onClick:p,children:"Open Modal"},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:24,columnNumber:7},globalThis),e.jsxDEV(a,{isOpen:l,label:"Close",onClose:i,children:e.jsxDEV("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:26,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:25,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:23,columnNumber:5},globalThis)},o=u.bind({});o.args={isOpen:!1,onClose:()=>{}};var s,r,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (args.onClose) args.onClose();
  };
  return <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <ModalComponent isOpen={open} label='Close' onClose={handleClose}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ModalComponent>
    </>;
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,T as default};
