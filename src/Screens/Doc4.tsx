import { memo } from "react";
import CardTile from "../Components/CardTile";
import Works from "./Works";
import PDF from "../Assets/pdfs/guia4.pdf";
import "./Docs.scss";

export default memo(function Doc4(props: { index: number }) {
   return(<CardTile title={'Guía 4 - Más Árboles'} animationDelay={100 * props.index}>
        <div className={'docs'}>
            <Works document={PDF} />
        </div>
   </CardTile>);
});