import * as React from "react";

const Hamburger: React.FC<React.SVGProps<SVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="10"
        fill="none"
        viewBox="0 0 16 10"
    >
        <path
            fill="#161616"
            d="M.917 9.495v-1.25h14.166v1.25zm0-4.07v-1.25h14.166v1.25zm0-4.07V.104h14.166v1.25z"
        ></path>
    </svg>
);

export default Hamburger;
