import React from 'react';

interface Props {
    activeHouse: string;
}

class CharacterHeader extends React.Component<Props, any> {
    constructor(props) {
        super(props);

        this.state = {
            how: false
        }
    }
}

export default CharacterHeader;