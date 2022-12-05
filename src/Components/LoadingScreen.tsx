import React, { createRef, PureComponent } from "react";
import Loading from "./Loading";
import "./LoadingScreen.scss";

type IProps = {};
type IState = {
    message: string;
};

export default class LoadingScreens extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            message: 'Espera'
        };
    }
    private refContain = createRef<HTMLDivElement>();
    open(message: string) {
        this.setState({ message });
        if (!this.refContain.current) return;
        this.refContain.current.style.display = 'flex';
    }
    close() {
        if (!this.refContain.current) return;
        this.refContain.current.style.display = 'none';
    }
    render(): React.ReactNode {
        return(<div ref={this.refContain} id={'LoadingScreen'}>
            <div className="content">
                <Loading color={'#FFFFFF'} />
                <h2>{this.state.message}</h2>
            </div>
        </div>);
    }
}