import React from "react";
import { ICharacter } from "../../../interfaces/iCharacter";
import { Grid, Segment, Image, Header, List, Tab, Card, Responsive } from "semantic-ui-react";
import CharacterService from "../../../services/character";
import InitialGrowthTable from "./initial-growth-table";
import SkillIcon from "../../../components/skill-icon";

interface Props {
    color: "blue" | "yellow" | "grey" | "red";
    character: ICharacter;
    characterService: CharacterService;
}

const getSkillIcon = (name: string) =>
    `${process.env.PUBLIC_URL}/assets/icons/${name.toLowerCase().replace(" ", "-")}.png`;

const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

export const CharacterSummary = ({ color, character, characterService }: Props) => {
    const personalSkill = characterService.getPersonalSkill();
    return (
        <Segment color={color}>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column stretched width={16} textAlign="center">
                        <Header as="h1">{character.name}</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={8} mobile={16} className="justified-content">
                        <Image
                            className="child-view-portrait"
                            bordered
                            fluid
                            circular
                            src={characterService.getPortrait()}
                        />
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
                                <List.Content floated="right">
                                    {character.stat && character.stat.name} {character.stat && character.stat.value}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated="left">Recruitment Skill Required: </List.Content>
                                <List.Content floated="right">
                                    {character.skill && <SkillIcon label={true} {...character.skill} />}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated="left">
                                    <Image inline src={`${process.env.PUBLIC_URL}/assets/icons/strength.png`} />
                                    <span style={{ marginLeft: "4px" }}>Skill Proficiencies:</span>
                                </List.Content>
                                <List.Content floated="right">
                                    {character.skillProficiencies.map(skill => (
                                        <Image
                                            style={{ marginRight: "2px" }}
                                            height="25"
                                            width="25"
                                            inline
                                            src={getSkillIcon(skill)}
                                        />
                                    ))}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated="left">
                                    <Image inline src={`${process.env.PUBLIC_URL}/assets/icons/weakness.png`} />
                                    <span style={{ marginLeft: "4px" }}>Skill Weaknesses:</span>
                                </List.Content>
                                <List.Content floated="right" tex>
                                    {character.skillWeaknesses.map(skill => (
                                        <Image
                                            style={{ marginRight: "2px" }}
                                            height="25"
                                            width="25"
                                            inline
                                            src={getSkillIcon(skill)}
                                        />
                                    ))}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content floated="left">
                                    <Image
                                        height="25"
                                        width="25"
                                        inline
                                        src={`${process.env.PUBLIC_URL}/assets/icons/hiddenTalent.png`}
                                    />
                                    <span style={{ marginLeft: "4px" }}>Hidden Talents:</span>
                                </List.Content>
                                <List.Content floated="right">
                                    {character.hiddenTalents.map(skill => (
                                        <Image
                                            style={{ marginRight: "2px" }}
                                            height="25"
                                            width="25"
                                            inline
                                            src={getSkillIcon(skill)}
                                        />
                                    ))}
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
                {personalSkill && (
                    <Grid.Row>
                        <Grid.Column
                            width="16"
                            textAlign="center"
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <Card fluid raised>
                                <Card.Content>
                                    <Card.Header>{personalSkill.ability}</Card.Header>
                                    <Card.Meta>Unique Skill</Card.Meta>
                                    <Card.Description>{personalSkill.description}</Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                )}
                <Grid.Row>
                    <Grid.Column stretched width={16}>
                        <Segment color="violet">
                            <Tab
                                panes={[
                                    {
                                        menuItem: IS_MOBILE ? "Base" : "Base Stats",
                                        render: () => (
                                            <InitialGrowthTable type="smallint" growths={character.baseStats} />
                                        )
                                    },
                                    {
                                        menuItem: IS_MOBILE ? "Growths" : "Base Growths",
                                        render: () => (
                                            <InitialGrowthTable type="percentage" growths={character.growthRates} />
                                        )
                                    },
                                    {
                                        menuItem: IS_MOBILE ? "Max" : "Max Stats",
                                        render: () => <InitialGrowthTable type="number" growths={character.maxStats} />
                                    }
                                ]}
                            />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default CharacterSummary;
