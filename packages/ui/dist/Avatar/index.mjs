import { jsx } from 'react/jsx-runtime';

var s={xxs:"1rem",xs:"1.5rem",sm:"2rem",md:"3rem",lg:"4rem",xl:"5rem","2xl":"7rem","3xl":"9rem"},r=({size:e="md"})=>({width:`${s[e]}`,height:`${s[e]}`});function m(e){let{alt:t="avatar-image",source:o="https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"}=e,a=r(e),i=e.square?"rounded-none":"rounded-full";return jsx("img",{alt:t,className:`relative align-middle inline-block ${i} ${e.className}`,src:o,style:a})}

export { m as default };
