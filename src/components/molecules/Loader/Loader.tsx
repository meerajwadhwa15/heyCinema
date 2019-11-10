import React, { FunctionComponent } from 'react';

export type Props = {};

const Loader: FunctionComponent<Props> = props => (
  <div className="loader-container">
    <svg
      width="100px"
      height="100px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{ background: 'none' }}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#bd4030"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(199.729 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </svg>
  </div>
);

export default Loader;
