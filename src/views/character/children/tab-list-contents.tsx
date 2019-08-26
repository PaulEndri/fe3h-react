import React from "react";
import { Segment, List, Header } from "semantic-ui-react";

interface Props {
    name: string;
    displayItems: string[];
}

const TabListContents = ({ name, displayItems }: Props) => {
    if (!displayItems || displayItems.length === 0) {
        return <span />;
    }

    return (
        <Segment.Group>
            <Segment color="violet">
                <Header as="h4">{name}</Header>
            </Segment>
            <Segment>
                <List>
                    {displayItems.map(item => (
                        <List.Item key={item}>{item}</List.Item>
                    ))}
                </List>
            </Segment>
        </Segment.Group>
    );
};

export default TabListContents;
