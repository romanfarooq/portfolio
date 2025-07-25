import { SVGProps } from "react";

export const GoogleAnalytics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48px"
    height="48px"
    {...props}
  >
    <circle cx={24} cy={24} r={20} fill="#ff8a65" />
    <path
      fill="#fff"
      d="M29,32c-1.104,0-2-0.896-2-2V17c0-1.104,0.896-2,2-2s2,0.896,2,2v13C31,31.104,30.104,32,29,32z"
    />
    <path
      fill="#fff"
      d="M23,32c-1.104,0-2-0.896-2-2v-6c0-1.104,0.896-2,2-2s2,0.896,2,2v6C25,31.104,24.104,32,23,32z"
    />
    <path
      fill="#fff"
      d="M17,32c-1.104,0-2-0.896-2-2v-1c0-1.104,0.896-2,2-2s2,0.896,2,2v1C19,31.104,18.104,32,17,32z"
    />
  </svg>
);
