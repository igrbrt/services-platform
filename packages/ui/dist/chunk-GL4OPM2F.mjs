import { a as a$2 } from './chunk-H6FCGRFP.mjs';
import { a as a$1 } from './chunk-ZNGGK5R6.mjs';
import { a } from './chunk-54CGY7HH.mjs';
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

var h=({label:o,id:i,inputProps:e,inputContainerProps:s,isBordered:d=!0,isShowRevealPasswordButton:b=!0,className:m="",error:c,darkColor:x})=>{let[r,E]=useState(!1);return jsxs("div",{className:`ui-flex ui-w-full ui-flex-col ui-text-sm ui-font-medium ${m}`,children:[o&&jsx("label",{htmlFor:`${i}__input`,className:"ui-mb-1 ui-text-sm ui-font-normal",children:o}),jsxs("div",{className:`ui-flex ui-gap-x-2 ui-rounded-md ui-py-[10px] ui-px-4 ${e!=null&&e.disabled?"ui-bg-[#EEEFF3]":"ui-bg-white"} ${d?"ui-border-[0.063rem] ui-border-[#E6E6E6]":"ui-border-none"}`,...s,children:[jsx("input",{id:`${i}__input`,className:"ui-w-full ui-border-none ui-border-transparent ui-p-0 ui-text-base ui-font-light ui-leading-6 ui-text-black ui-outline-none focus:ui-border-transparent focus:ui-ring-0 disabled:ui-bg-[#EEEFF3]",...e,type:r?"text":(e==null?void 0:e.type)??"text"}),(e==null?void 0:e.type)==="password"&&b&&jsx("button",{type:"button",onClick:()=>E(f=>!f),children:r?jsx(a,{}):jsx(a$1,{})})]}),jsx(a$2,{error:c,darkColor:x})]})};

export { h as a };
