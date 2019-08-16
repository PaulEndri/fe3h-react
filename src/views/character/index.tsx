import React from 'react'
import { Grid, Segment, Image, Container, Header, Button } from 'semantic-ui-react';
import { HouseService } from '../../services/house';
import LeftTab from './children/left-tab';
import TabListContents from './children/tab-list-contents';
import CharacterRadarChart from './children/character-radar-chart';
import CharacterGrowthsSection from './children/character-growths-section';
import { Link } from 'react-router-dom';

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

    if (!house || !house.house) {
        return <div>Try Again</div>;
    }

    const characterService = house.getStudent(match.params.character);

    if (!characterService || !characterService.character) {
        return <div>Try Again</div>;
    }

    const character = characterService.character;
    const students = house.getStudents();

    return (
        <Container>
            <Header color={house.house.color} as="h2" textAlign="center" attached="top" style={{border: '0px'}}>
                <Image src={house.house.banner} fluid/>
                <Header.Content>
                    {house.house.name}
                    <Header.Subheader>
                        {house.house.motto}
                    </Header.Subheader>
                </Header.Content>
                <Segment color={house.house.color} inverted>
            
                        {students.map((student) => (
                            <Button as={Link}>
                                <Image height="75" width="75" src={student.getThumbnail()} />
                            </Button>
                        ))}
                </Segment>
            </Header>
            <Segment secondary textAlign="center">
                <Grid columns={4}>
                    <Grid.Row>
                        <Grid.Column width={1} />
                        <Grid.Column width={10}>
                            <LeftTab character={character} characterService={characterService} />
                        </Grid.Column>
                        <Grid.Column>
                            <TabListContents name="Gifts" displayItems={character.gift} />
                            <TabListContents name="Lost Items" displayItems={character.lostItems} />
                            <TabListContents name="Favorite Flowers" displayItems={character.flower} />
                            <TabListContents name="Favorite Teas" displayItems={character.tea} />
                        </Grid.Column>
                    </Grid.Row>
                    <CharacterGrowthsSection character={character} />
                </Grid>
            </Segment>
            
        </Container>
         
    )
}

export default CharacterView