import { a } from './chunk-4YA2QUF5.mjs';
import { jsx } from 'react/jsx-runtime';

var e="ui-outline ui-outline-1 ui-bg-transparent",r={default:"ui-bg-white ui-hover:bg-primary ui-hover:text-white",primary:"ui-bg-[#003f5c] ui-hover:bg-[#003f5c]/95 ui-text-white",secondary:"ui-bg-[#fb5b5a] ui-hover:bg-[#fb5b5a]/95 ui-text-white",transparent:""};var b=({children:o,variant:n="primary",className:a$1="",loading:t,...s})=>{let p={primary:`${r.primary} ui-bg-primary ui-text-white`,secondary:`${r.secondary} ${e} ui-outline-primary ui-text-primary`,tertiary:`${e} ui-outline-white ui-text-white`};return jsx("button",{...s,className:`ui-w-full ui-rounded-md ui-py-3 ui-text-base ui-leading-5 disabled:ui-cursor-not-allowed disabled:ui-bg-[#A7A8AD] ${p[n]} ${a$1} ${t&&"ui-pointer-events-none"}`,children:t?jsx(a,{}):o})};

export { b as a };
