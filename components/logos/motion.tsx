import { SVGProps } from "react";

export const Motion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={2500}
    viewBox="3.7 3.7 43.6 43.6"
    width={2500}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
      fill="#59529d"
    />
    <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
    <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96" />
  </svg>
);
