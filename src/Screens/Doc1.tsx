import { memo } from "react";
import CardTile from "../Components/CardTile";
import Works from "./Works";
import PDF from "../Assets/pdfs/guia1.pdf";
import "./Docs.scss";

export default memo(function Doc1(props: { index: number }) {
   return(<CardTile title={'Guía 1 - Diagramas de flujo'} animationDelay={100 * props.index}>
        <div className={'docs'}>
            <Works document={PDF} />
        </div>
   </CardTile>);
});