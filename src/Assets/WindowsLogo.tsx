import React from "react";

type IProps = {
    id?: string;
    class?: string;
    scale?: number;
};

export default React.memo(React.forwardRef(function WindowsLogo(props: IProps, ref: React.Ref<SVGSVGElement>) {
    const size = (props.scale)? (props.scale * 100).toString(): "100";
    const scale = (props.scale)? props.scale.toString(): '1';
    return(<svg
        id={props.id}
        className={props.class}
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}>
        <g clip-path="url(#clip0_58_2)">
            <path
                d="M0 14.0932L40.5534 8.57045L40.5716 47.6875L0.0375 47.9182L0 14.0932ZM40.5341 52.1943L40.5659 91.3455L0.0318182 85.7727L0.0295455 51.9318L40.5341 52.1943ZM45.45 7.84773L99.2205 0V47.1898L45.45 47.617V7.84773ZM99.233 52.5625L99.2205 99.5398L45.45 91.9511L45.375 52.475L99.233 52.5625Z"
                fill="#00ADEF"
                style={{ scale }}
            />
        </g>
        <defs>
            <clipPath id="clip0_58_2">
                <rect width={size} height={size} fill="white"/>
            </clipPath>
        </defs>
    </svg>);
}));