import React, { createRef, PureComponent } from "react";
import Logo from "../Assets/WindowsLogo";
import { waitTo } from "../Scripts/Utils";
import Loading from "./Loading";
import "./Startup.scss";

type IProps = {};
type IState = {};

export default class Startup extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    private refLogo = createRef<SVGSVGElement>();
    private refLoading = createRef<HTMLDivElement>();
    private refContainer = createRef<HTMLDivElement>();
    async open() {
        if (!this.refLogo.current || !this.refLoading.current || !this.refContainer.current) return;
        this.refContainer.current.style.display = 'flex';
        await waitTo(50);
        this.refContainer.current.style.opacity = '1';
        await waitTo(300);
        this.refLogo.current.style.opacity = '1';
        this.refLoading.current.style.opacity = '1';
    }
    async close() {
        if (!this.refLogo.current || !this.refLoading.current || !this.refContainer.current) return;
        this.refLogo.current.style.opacity = '0';
        this.refLoading.current.style.opacity = '0';
        await waitTo(500);
        this.refContainer.current.style.opacity = '0';
        await waitTo(350);
        this.refContainer.current.style.display = 'none';
    }
    render(): React.ReactNode {
        return(<div ref={this.refContainer} id={'Startup'} className={'st_anim_fade'}>
            <Logo ref={this.refLogo} id={'logo'} class={'st_anim_fade'} scale={1.5} />
            <div ref={this.refLoading} className={"startup_loading st_anim_fade"}>
                <Loading color={'#FFFFFF'} />
            </div>
        </div>);
    }
}