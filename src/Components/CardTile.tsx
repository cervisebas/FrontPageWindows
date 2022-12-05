import React, { createRef, PureComponent } from "react";
import "./CardTile.scss";

type IProps = {
    children?: React.ReactNode;
    animationDelay?: number;
    title?: string;
};
type IState = {
    open: boolean;
};

export default class CardTile extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            open: false
        };
        this.onClick = this.onClick.bind(this);
        this.removeDelay = this.removeDelay.bind(this);
    }
    private refContent = createRef<HTMLDivElement>();

    componentDidMount(): void {
        if (this.props.animationDelay) setTimeout(this.removeDelay, this.props.animationDelay + 100);
    }
    removeDelay() {
        if (!this.refContent.current) return;
        this.refContent.current.removeAttribute('style');
    }
    onClick() {
        if (!this.refContent.current) return;
        this.refContent.current.classList.toggle('open');
        this.setState({ open: !this.state.open });
    }

    render(): React.ReactNode {
        return(<div ref={this.refContent} onClick={(!this.state.open)? this.onClick: undefined} className={'card-tile'} style={{ animationDelay: (this.props.animationDelay)? `${this.props.animationDelay}ms`: undefined }}>
            <div className="mark">
                <div className="icon" />
                <div className="title"><span>{(this.props.title)? this.props.title: 'Nombre del tile'}</span></div>
            </div>
            <div className="card-app">
                <div className="navigation">
                    <span className="title">{(this.props.title)? this.props.title: 'Nombre del tile'}</span>
                    <div className="close" onClick={this.onClick}><span>x</span></div>
                </div>
                <div className="content">{this.props.children}</div>
            </div>
        </div>);
    }
}