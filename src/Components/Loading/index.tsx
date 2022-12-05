import React, { PureComponent } from "react";
import { getRandomInt } from "../../Scripts/Utils";
import "./index.scss";

type IProps = {
    color?: string;
    style?: React.CSSProperties;
};
type IState = {
    identify: string;
};

export default class Loading extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            identify: this.getIdentify()
        };
    }
    getIdentify() {
        return `loader-identify-${getRandomInt(1000000, 9999999)}`;
    }
    render(): React.ReactNode {
        return(<div className={`loader ${this.state.identify}`} style={this.props.style}>
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            {(this.props.color !== undefined)&&<style>
                {`div.loader.${this.state.identify} div.circle:after {
                    background: ${this.props.color}
                }`}
            </style>}
        </div>);
    }
}