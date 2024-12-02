import * as React from "react";

const Human: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="13"
    fill="none"
    viewBox="0 0 14 13"
  >
    <path
      fill="#161616"
      d="M7 6.544a2.8 2.8 0 0 1-2.06-.857 2.8 2.8 0 0 1-.857-2.06q0-1.203.857-2.06A2.8 2.8 0 0 1 7 .71q1.203 0 2.06.857t.857 2.06-.857 2.06A2.8 2.8 0 0 1 7 6.544M.75 12.89v-1.853q0-.612.333-1.133A2.2 2.2 0 0 1 1.97 9.1a12 12 0 0 1 2.493-.908 10.8 10.8 0 0 1 5.072 0q1.258.303 2.493.908.556.28.888.803.333.52.333 1.133v1.853zM2 11.64h10v-.603a.8.8 0 0 0-.147-.468 1.1 1.1 0 0 0-.398-.352 10.7 10.7 0 0 0-2.196-.804 9.5 9.5 0 0 0-4.518 0 10.7 10.7 0 0 0-2.196.804q-.251.136-.398.352a.8.8 0 0 0-.147.468zm5-6.346q.687 0 1.177-.49t.49-1.177-.49-1.177A1.6 1.6 0 0 0 7 1.96q-.687 0-1.177.49t-.49 1.177.49 1.177T7 5.294"
    ></path>
  </svg>
);

export default Human;