import React, { PureComponent } from "react";
import "./ImageProfile.scss";

type IProps = {
    shutdown?: ()=>any;
};
type IState = {};

export default class ImageProfile extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render(): React.ReactNode {
        return(<div id="ImageProfile">
            <h2>Inicio</h2>
            <div className="profile">
                <h3>Sebástian Cerviño</h3>
                <div className="image" />
            </div>
            <div className="shutdown icon" onClick={this.props.shutdown} />
            <div className="search icon" />
        </div>);
    }
}