import { memo } from "react";
import CardTile from "../Components/CardTile";
import "./Dancing.scss";

export default memo(function Doc1(props: { index: number }) {
   return(<CardTile title={`Relleno N°${props.index + 1}`} animationDelay={100 * props.index}>
        <div className="relleno" />
   </CardTile>);
});