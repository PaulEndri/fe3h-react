import React from 'react';
import { Segment, List } from 'semantic-ui-react';

interface Props {
    name: string,
    displayItems: string[]
}

const TabListContents = ({name, displayItems}: Props) => {
    if (!displayItems || displayItems.length === 0) {
        return <span />;
    }

    return (
        <Segment.Group>
            <Segment color="violet">
                {name}
            </Segment>
            <Segment>
                <List>
                    {displayItems.map((item) => (
                        <List.Item>{item}</List.Item>
                    ))}
                </List>
            </Segment>
        </Segment.Group>
    );
}

export default TabListContents;