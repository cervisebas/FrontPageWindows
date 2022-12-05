import React, { memo } from "react";
import "./Works.scss";

type IProps = {
    document: string;
};

export default memo(function Works(props: IProps) {
    return(<div className={'view-pdf'}>
        <iframe
            src={`${props.document}#toolbar=0`}
            width={'100%'}
            height={'100%'}
        />
    </div>);
});