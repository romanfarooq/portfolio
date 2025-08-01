import { SVGProps } from "react";

export const Firebase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="800px"
    height="800px"
    viewBox="-47.5 0 351 351"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <path
        d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z"
        id="path-1"
      />
      <filter
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feGaussianBlur
          stdDeviation={17.5}
          in="SourceAlpha"
          result="shadowBlurInner1"
        />
        <feOffset
          dx={0}
          dy={0}
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
          type="matrix"
          in="shadowInnerInner1"
        />
      </filter>
      <path
        d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z"
        id="path-3"
      />
      <filter
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        id="filter-4"
      >
        <feGaussianBlur
          stdDeviation={3.5}
          in="SourceAlpha"
          result="shadowBlurInner1"
        />
        <feOffset
          dx={1}
          dy={-9}
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0"
          type="matrix"
          in="shadowInnerInner1"
        />
      </filter>
    </defs>
    <g>
      <path
        d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z"
        fill="#FFC24A"
      />
      <g>
        <use fill="#FFA712" fillRule="evenodd" xlinkHref="#path-1" />
        <use
          fill="#000000"
          fillOpacity={1}
          filter="url(#filter-2)"
          xlinkHref="#path-1"
        />
      </g>
      <path
        d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z"
        fill="#F4BD62"
      />
      <g>
        <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#path-3" />
        <use
          fill="#000000"
          fillOpacity={1}
          filter="url(#filter-4)"
          xlinkHref="#path-3"
        />
      </g>
      <polygon
        fill="#F6820C"
        points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"
      />
      <path
        d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268"
        fill="#FDE068"
      />
      <path
        d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z"
        fill="#FCCA3F"
      />
      <path
        d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z"
        fill="#EEAB37"
      />
    </g>
  </svg>
);
