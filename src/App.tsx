import React, { createRef, PureComponent } from 'react';
import './App.scss';
import ImageProfile from './Components/ImageProfile';
import LoadingScreens from './Components/LoadingScreen';
import Menu from './Components/Menu';
import { Snow } from './Components/Snow';
import Startup from './Components/Startup';
import { waitTo } from './Scripts/Utils';

type IProps = {};
type IState = {
  snowColor: string;
};

export default class App extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      snowColor: '#FFFFFF'
    };
    this.shutdown = this.shutdown.bind(this);
  }

  private refLoadingScreens = createRef<LoadingScreens>();
  private refStartup = createRef<Startup>();
  private refMenu = createRef<Menu>();

  componentDidMount(): void {
    this.startNow();
    document.addEventListener('contextmenu', this.preventContextMenu);
  }
  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.preventContextMenu);
  }

  preventContextMenu(ev: MouseEvent) {
    ev.preventDefault();
  }

  async startNow() {
    await this.refStartup.current?.open();
    await waitTo(4000);
    this.refLoadingScreens.current?.open('Espera');
    await this.refStartup.current?.close();
    await waitTo(4000);
    this.refLoadingScreens.current?.close();
    await waitTo(250);
    this.refMenu.current?.showNow();
  }

  async shutdown() {
    this.refLoadingScreens.current?.open('Cerrando sitio web');
    await waitTo(2500);
    window.close();
  }

  render(): React.ReactNode {
    return(<div id={'_App'}>
      <Snow snowColor={this.state.snowColor} />
      <ImageProfile shutdown={this.shutdown} />
      <Menu ref={this.refMenu} />
      <LoadingScreens ref={this.refLoadingScreens} />
      <Startup ref={this.refStartup} />
    </div>);
  }
};
