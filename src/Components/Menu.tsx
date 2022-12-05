import React, { createRef, PureComponent } from "react";
import Dancing from "../Screens/Dancing";
import Doc1 from "../Screens/Doc1";
import Doc2 from "../Screens/Doc2";
import Doc3 from "../Screens/Doc3";
import Doc4 from "../Screens/Doc4";
import Doc5 from "../Screens/Doc5";
import CardTile from "./CardTile";
import "./Menu.scss";

type IProps = {};
type IState = {
    onShow: boolean;
};

export default class Menu extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            onShow: false
        };
        this.onScroll = this.onScroll.bind(this);
    }
    private refContain = createRef<HTMLDivElement>();
    private elements = [Doc1, Doc2, Doc3, Doc4, Doc5, ...Array(200).fill(1).map(()=>Dancing)];
    componentDidMount(): void {
        this.refContain.current?.addEventListener("wheel", this.onScroll);        
    }
    componentWillUnmount(): void {
        this.refContain.current?.removeEventListener('wheel', this.onScroll);
    }
    showNow() {
        console.log('Show menu!!!');
        this.setState({ onShow: true });
    }
    onScroll(e: WheelEvent) {
        if (this.refContain.current) {
            if (e.deltaY > 0)
                this.refContain.current.scrollLeft += 500;
            else
                this.refContain.current.scrollLeft -= 500;
            e.preventDefault();
        }
    }
    render(): React.ReactNode {
        return(<div id="Menu" ref={this.refContain}>
            {(this.state.onShow)&&<>
                {this.elements.map((MElement, i)=><MElement index={i} />)}
            </>}
        </div>);
    }
}