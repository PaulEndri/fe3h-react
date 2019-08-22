import React from 'react';
import { ICharacter } from '../../../interfaces/iCharacter';
import { Grid, Segment, Image, Header, List } from 'semantic-ui-react';
import CharacterService from '../../../services/character';
import InitialGrowthTable from './initial-growth-table';

interface Props {
    color: "blue" | "yellow" | "grey" | "red",
    character: ICharacter,
    characterService: CharacterService
}

const getSkillIcon = (name: string) => `${process.env.PUBLIC_URL}/assets/icons/${name.toLowerCase().replace(' ', '-')}.png`

export const CharacterSummary = ({color, character, characterService}: Props) => (
    <Segment color={color}>
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column stretched width={16} textAlign="center">
                    <Header as="h1">{character.name}</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column computer={8} mobile={16} className="justified-content">
                    <Image className="child-view-portrait" bordered fluid circular src={characterService.getPortrait()} />
                </Grid.Column>
                <Grid.Column computer={8} mobile={16}>
                    <List verticalAlign="bottom">
                        <List.Item>
                            <List.Content floated="left">Crest:</List.Content>
                            <List.Content floated="right">{character.crest}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated="left">Birthday: </List.Content>
                            <List.Content floated="right">{character.birthday}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated="left">Recruitment Stat Required: </List.Content>
                            <List.Content floated="right">{character.stat && character.stat.name} {character.stat && character.stat.value}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated="left">Recruitment Skill Required: </List.Content>
                            <List.Content floated="right">{character.skill && getSkillIcon(character.skill.name)} {character.skill && character.skill.value}</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated="left">
                                <Image inline src={`${process.env.PUBLIC_URL}/assets/icons/strength.png`} />
                                <span style={{marginLeft: '4px'}}>Skill Proficiencies:</span>
                            </List.Content>
                            <List.Content floated="right">
                                {character.skillProficiencies.map((skill) =>
                                    <Image style={{marginRight: '2px'}} height="25" width="25" inline src={getSkillIcon(skill)} />
                                )}
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated="left">
                                <Image inline src={`${process.env.PUBLIC_URL}/assets/icons/weakness.png`} />
                                <span style={{marginLeft: '4px'}}>Skill Weaknesses:</span>
                            </List.Content>
                            <List.Content floated="right">
                                {character.skillWeaknesses.map((skill) =>
                                    <Image style={{marginRight: '2px'}} height="25" width="25" inline src={getSkillIcon(skill)} />
                                )}
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content floated="left">
                                <Image height="25" width="25" inline src={`${process.env.PUBLIC_URL}/assets/icons/hiddenTalent.png`} />
                                <span style={{marginLeft: '4px'}}>Hidden Talents:</span>
                            </List.Content>
                            <List.Content floated="right">
                                {character.hiddenTalents.map((skill) =>
                                    <Image style={{marginRight: '2px'}} height="25" width="25" inline src={getSkillIcon(skill)} />
                                )}
                            </List.Content>
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
                        <Segment>
                            <InitialGrowthTable growths={character.growthRates} />
                        </Segment>
                    </Segment.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)

export default CharacterSummary;