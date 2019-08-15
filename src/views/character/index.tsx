import React from 'react'
import { Grid, Segment, List, Container } from 'semantic-ui-react';
import { HouseService } from '../../services/house';
import LeftTab from './children/left-tab';

interface CharacterViewProps {
    match: {
        params: {
            house: string,
            character: string
        }
    };
    history: History;
}

export const CharacterView = ({match}: CharacterViewProps) => {
    const house = HouseService.getHouse(match.params.house);

    if (!house) {
        return <div>Try Again</div>;
    }

    const characterService = house.getStudent(match.params.character);

    if (!characterService || !characterService.character) {
        return <div>Try Again</div>;
    }

    const character = characterService.character;
    
    return (
        <Container>
            <Segment secondary>
                <Grid columns={4}>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <LeftTab character={character} characterService={characterService} />
                        </Grid.Column>
                        <Grid.Column>
                            <Segment.Group>
                                <Segment color="violet">
                                    Gifts
                                </Segment>
                                <Segment>
                                    <List>
                                        {character.gift.map((gift) => (
                                            <List.Item>{gift}</List.Item>
                                        ))}
                                    </List>
                                </Segment>
                            </Segment.Group>
                            {character.flower && character.flower.length > 0 && <Segment.Group>
                                <Segment color="violet">
                                    Flowers
                                </Segment>
                                <Segment>
                                    <List>
                                        {character.flower.map((flower) => (
                                            <List.Item>{flower}</List.Item>
                                        ))}
                                    </List>
                                </Segment>
                            </Segment.Group>}
                            <Segment.Group>
                                <Segment color="violet">
                                    Lost Items
                                </Segment>
                                <Segment>
                                    <List>
                                        {character.lostItems.map((lostItem) => (
                                            <List.Item>{lostItem}</List.Item>
                                        ))}
                                    </List>
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            
        </Container>
         
    )
}

export default CharacterView