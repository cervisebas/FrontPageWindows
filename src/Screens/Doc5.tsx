import { memo } from "react";
import CardTile from "../Components/CardTile";
import Works from "./Works";
import "./Docs.scss";

export default memo(function Doc5(props: { index: number }) {
   return(<CardTile title={'Portada'} animationDelay={100 * props.index}>
        <div className={'docs'}>
            <Works document={window.location.href} />
        </div>
   </CardTile>);
});