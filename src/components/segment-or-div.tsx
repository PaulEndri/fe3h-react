import React from "react";
import { Responsive, Segment } from "semantic-ui-react";

interface Props {
    children: any;
}

export const SegmentOrDiv = ({ children }: Props) => {
    if (Responsive.onlyMobile.maxWidth >= window.innerWidth) {
        return <div>{children}</div>;
    }

    return (
        <Segment secondary compact style={{ flex: "1 0 auto" }}>
            {children}
        </Segment>
    );
};

export default SegmentOrDiv;
