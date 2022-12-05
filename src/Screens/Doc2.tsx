import { memo } from "react";
import CardTile from "../Components/CardTile";
import Works from "./Works";
import PDF from "../Assets/pdfs/guia2.pdf";
import "./Docs.scss";

export default memo(function Doc2(props: { index: number }) {
   return(<CardTile title={'Guía 2 - Diagramas de flujo de datos'} animationDelay={100 * props.index}>
        <div className={'docs'}>
            <Works document={PDF} />
        </div>
   </CardTile>);
});