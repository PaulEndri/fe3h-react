import React from 'react';
import { ICharacter } from '../../../types/icharacter';
import { Grid, Segment, Image, Header, List } from 'semantic-ui-react';
import CharacterService from '../../../services/character';
import InitialGrowthTable from './initial-growth-table';

interface Props {
    character: ICharacter,
    characterService: CharacterService
}

export const LeftTab = ({character, characterService}: Props) => (
    <Segment>
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column stretched width={16} textAlign="center">
                    <Header as="h1">{character.name}</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column className="justified-content">
                    <Image className="child-view-portrait" bordered circular src={characterService.getPortrait()} />
                </Grid.Column>
                <Grid.Column>
                    <List verticalAlign="bottom">
                        <List.Item>
                            Crest:
                            <List.Content floated="right">Reigan</List.Content>
                        </List.Item>
                        <List.Item>
                            Birthday: 
                            <List.Content floated="right">{character.birthday}</List.Content>
                        </List.Item>
                        <List.Item>
                            Favorite Tea: 
                            <List.Content floated="right">Who Knows</List.Content>
                        </List.Item>
                        <List.Item>
                            Stat Required: 
                            <List.Content floated="right">{character.stat}</List.Content>
                        </List.Item>
                        <List.Item>
                            Skill Required: 
                            <List.Content floated="right">{character.skill}</List.Content>
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column stretched width={16}>
                    <Segment.Group>
                        <Segment color="violet" >
                            <Header as="h4" >Base Stat Growths</Header>
                        </Segment>
                        <Segment se>
                            <InitialGrowthTable growths={character.growthRates} />
                        </Segment>
                    </Segment.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default LeftTab;