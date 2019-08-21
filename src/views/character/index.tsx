import React from 'react'
import { Grid, Container, Responsive, Divider } from 'semantic-ui-react';
import { HouseService } from '../../services/house';
import CharacterSummary from './children/character-summary';
import TabListContents from './children/tab-list-contents';
import CharacterGrowthsSection from './children/character-growths-section';
import LectureQuestions from './children/lecture-questions';
import CharacterHeader from '../../components/character-header';
import SegmentOrDiv from '../../components/segment-or-div';

interface CharacterViewProps {
    match: {
        params: {
            house: string,
            character: string
        }
    };
    history: History;
}

const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

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

    return (
        <Container  >
            <CharacterHeader activeHouse={house.house.stub} />
            <SegmentOrDiv>
                <Grid columns={IS_MOBILE ? 2 : 4}>
                    <Grid.Row>
                        {!IS_MOBILE && <Grid.Column width={1} />}
                        <Grid.Column width={IS_MOBILE ? 16 : 10}>
                            <CharacterSummary character={character} color={house.house.color} characterService={characterService} />
                        </Grid.Column>
                        {IS_MOBILE && <Divider style={{margin: '1em'}} />}
                        <Grid.Column width={IS_MOBILE ? 16 : 4}>
                            <TabListContents name="Gifts" displayItems={character.gift} />
                            <TabListContents name="Lost Items" displayItems={character.lostItems} />
                            <TabListContents name="Favorite Flowers" displayItems={character.flower} />
                            <TabListContents name="Favorite Teas" displayItems={character.tea} />
                        </Grid.Column>
                    </Grid.Row>
                    {character.lectures.length > 0 && <Grid.Row>
                        {!IS_MOBILE && <Grid.Column width={1} /> }
                        <Grid.Column width={IS_MOBILE? 16 : 14}>
                            <LectureQuestions questions={character.lectures} />
                        </Grid.Column>
                    </Grid.Row>}
                    <CharacterGrowthsSection character={character} />
                </Grid>
            </SegmentOrDiv>   
        </Container>
         
    )
}

export default CharacterView