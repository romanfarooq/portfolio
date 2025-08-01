import { SVGProps } from "react";

export const ViteJS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={2500}
    preserveAspectRatio="xMidYMid"
    width={2490}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1.871 -0.4069999999999627 259.721 257.849"
    {...props}
  >
    <linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
      <stop offset={0} stopColor="#41d1ff" />
      <stop offset={1} stopColor="#bd34fe" />
    </linearGradient>
    <linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
      <stop offset={0} stopColor="#ffea83" />
      <stop offset={0.083} stopColor="#ffdd35" />
      <stop offset={1} stopColor="#ffa800" />
    </linearGradient>
    <path
      d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z"
      fill="url(#a)"
    />
    <path
      d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z"
      fill="url(#b)"
    />
  </svg>
);
