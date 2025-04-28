import{M as E,v as k}from"./MediaTextComponent-6b518b55.js";import{a as e}from"./mocks-dd8b5ca4.js";import"./jsx-dev-runtime-8ab8c10c.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./ResponsivePlayer-f92a075f.js";import"./iframe-7a389995.js";import"../sb-preview/runtime.js";import"./index-bc8ef2d0.js";import"./VideoCookieLayer-0307d9f0.js";import"./ZsdButton-6c22c91f.js";import"./index.es13-373f5050.js";import"./jsx-runtime-6f6342d7.js";import"./index.es17-40e95622.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index-ff2c9236.js";import"./getDataLayer-1420585a.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./tw-merge-1166cefb.js";import"./useVideoComplianceCheck-07175b8b.js";import"./RichText-75d83528.js";import"./index.es16-1f4fc36d.js";const _=""+new URL("horz-dda4cc64.png",import.meta.url).href,Z={title:"Components/MediaTextComponent",component:E,tags:["autodocs"],argTypes:{}},t={args:{mediaUrl:_,mediaType:"image",imageOrientation:"horizontal",mediaAlignment:"left",headline:"Example Headline",content:e,type:"primary-dark",alt:"",buttonText:"Read More",contentAlignment:"center",labelPrimary:"aaaa"}},a={args:{mediaUrl:k,mediaType:"image",imageOrientation:"vertical",mediaAlignment:"left",headline:"Example Headline",content:e,alt:"",buttonText:"Read More",contentAlignment:"center"}},n={args:{mediaUrl:k,mediaType:"image",imageOrientation:"vertical",mediaAlignment:"right",headline:"Example Headline",content:e,alt:"",buttonText:"Read More"}},i={args:{mediaUrl:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",mediaType:"video",mediaAlignment:"left",contentAlignment:"center",headline:"Example Headline",content:e,alt:"",buttonText:"Read More",videoThumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q="}},r={args:{mediaUrl:"./assets/hero_image.png",mediaType:"image",mediaAlignment:"left",headline:"Example Headline",content:e,alt:"",buttonText:"Read More"}},o={args:{mediaUrl:"./assets/hero_image.png",imageOrientation:"horizontal",mediaType:"image",mediaAlignment:"right",headline:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",content:e,alt:"",buttonText:"Read More"}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    mediaUrl: horizontal,
    mediaType: 'image',
    imageOrientation: 'horizontal',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    type: 'primary-dark',
    alt: '',
    buttonText: 'Read More',
    contentAlignment: 'center',
    labelPrimary: 'aaaa'
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mediaUrl: vertical,
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
    contentAlignment: 'center'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,h,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mediaUrl: vertical,
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaAlignment: 'right',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More'
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,T,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mediaUrl: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
    mediaType: 'video',
    mediaAlignment: 'left',
    contentAlignment: 'center',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
    videoThumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q='
  }
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var R,f,A;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    mediaUrl: './assets/hero_image.png',
    mediaType: 'image',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More'
  }
}`,...(A=(f=r.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var M,b,v;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    mediaUrl: './assets/hero_image.png',
    imageOrientation: 'horizontal',
    mediaType: 'image',
    mediaAlignment: 'right',
    headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More'
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const $=["Default","WithVerticalImageLeft","WithVerticalImageRight","WithVideo","WithLinks","WithMediaAlignmentRight"];export{t as Default,r as WithLinks,o as WithMediaAlignmentRight,a as WithVerticalImageLeft,n as WithVerticalImageRight,i as WithVideo,$ as __namedExportsOrder,Z as default};
