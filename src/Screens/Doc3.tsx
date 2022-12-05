import { memo } from "react";
import CardTile from "../Components/CardTile";
import Works from "./Works";
import PDF from "../Assets/pdfs/guia3.pdf";
import "./Docs.scss";

export default memo(function Doc3(props: { index: number }) {
   return(<CardTile title={'Guía 3 - Arboles de Decisión'} animationDelay={100 * props.index}>
        <div className={'docs'}>
            <Works document={PDF} />
        </div>
   </CardTile>);
});