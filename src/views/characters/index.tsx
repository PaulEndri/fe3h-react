import React, { useState } from 'react';
import { Segment, Image, Header, Card, Input, Responsive } from 'semantic-ui-react';
import characters from '../../data/characters';
import { Link } from 'react-router-dom';

export const CharactersView = () => {
    const [searchTerm, newSearchTerm] = useState('');

    const localCharacters = searchTerm.length >= 3 ? characters.filter((c) => c.character.name.toLowerCase().includes(searchTerm)) : characters;

    return (
        <Segment>
        <Segment basic textAlign="center">
            <Header as="h2">Character List</Header>
            <Input
                icon={{name: 'search', circular: true}}
                placeholder='Search for a Character'
                type="text"
                label="Find"
                onChange={(e) => newSearchTerm(e.target.value)}
            />
        </Segment>
        <Card.Group itemsPerRow={window.innerWidth <= Responsive.onlyMobile.maxWidth ? 3 : 7}>
            {localCharacters.map((character, index) => (
                <Card key={index} raised as={Link} to={character.getLink(character.getHouse())} >
                    <Image wrapped ui={false} src={character.getThumbnail()}  />
                    <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                        <Card.Content>
                            <Card.Header>
                                {character.character.name}
                            </Card.Header>
                            <Card.Meta>
                                {character.character.alliance}
                            </Card.Meta>
                        </Card.Content>
                    </Responsive>
                </Card>
            ))}
        </Card.Group>
    </Segment>
    )
}

export default CharactersView;