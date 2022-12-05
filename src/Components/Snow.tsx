import React, { createRef, PureComponent } from "react";
import "./Snow.scss";

type IProps = {
    snowColor: string;
};
type IState = {};

export class Snow extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    private refBackground = createRef<HTMLDivElement>();
    getSnows() {
        const result: React.ReactNode[] = [];
        for (let i = 0; i < 300; i++) {
            result.push(<div
                key={`snow-${i.toString()}`}
                className={"snow"}
            />);
        }
        return result;
    }
    componentDidUpdate(prevProps: Readonly<IProps>): void {
        if (prevProps.snowColor !== this.props.snowColor) this.changeColors();
    }
    changeColors() {
        this.refBackground.current?.style.setProperty('--snowColor', this.props.snowColor);
    }
    render(): React.ReactNode {
        return(<div id="SnowBackground" ref={this.refBackground}>
            {this.getSnows()}
        </div>);
    }
}