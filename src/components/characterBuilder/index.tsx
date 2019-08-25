import React from "react";
import CharacterService from "../../services/character";
import { IClass } from "../../interfaces/iClass";
import Classes from "../../data/classes";
import { IGrowthRate } from "../../interfaces/iGrowthRate";
import { Segment, Header, Statistic, Table, Dropdown, Button, Form, Icon } from "semantic-ui-react";
import SkillIcon from "../skill-icon";
import Stats from "../../data/stats";

interface CharacterBuilderProps {
    character: CharacterService;
}

interface CharacterBuilderClassRecord {
    levels: number;
    growths: IGrowthRate;
}
interface CharacterBuilderState {
    [key: string]: CharacterBuilderClassRecord;
}

class CharacterBuilder extends React.Component<CharacterBuilderProps, CharacterBuilderState> {
    state = {};

    calculateLevelAvearge(total: number, levels: number): number {
        return Math.ceil((total / 100) * levels);
    }

    calculateJobAverage(levels: number, job: IClass, character: CharacterService): IGrowthRate {
        const baseGrowths = character.character.growthRates;
        const statKeys = Object.keys(baseGrowths);

        return statKeys.reduce(
            (newGrowthRate, stat) => {
                newGrowthRate[stat] = this.calculateLevelAvearge(baseGrowths[stat] + job[stat], levels);

                return newGrowthRate;
            },
            {} as IGrowthRate
        );
    }

    updateLevels(job: string, levels: number = 0) {
        const selectedJob = Classes[job];
        const { character } = this.props;

        if (!selectedJob || !!character) {
            return;
        }
        const growths = this.calculateJobAverage(levels, selectedJob, character);

        this.setState({
            [job]: {
                levels,
                growths
            }
        });
    }

    getTotals() {
        let level = 1;
        const totals = { ...this.props.character.character.baseStats };
        const records = Object.values(this.state) as CharacterBuilderClassRecord[];

        records.forEach(classRecord => {
            level += classRecord.levels;

            Stats.forEach(stat => (totals[stat] += classRecord.growths[stat]));
        });

        return [level, ...Object.values(totals)];
    }

    render() {
        const { character } = this.props;
        const characterData = character.character;

        return (
            <Segment.Group>
                <Segment textAlign="center">
                    <Header as="h1">{characterData.name}</Header>
                    <Statistic.Group size="small">
                        <Statistic size="small">
                            <Statistic.Value>
                                {characterData.skillProficiencies.map(skill => (
                                    <SkillIcon name={skill} />
                                ))}
                            </Statistic.Value>
                            <Statistic.Label>Strengths</Statistic.Label>
                        </Statistic>
                        <Statistic size="small">
                            <Statistic.Value>
                                {characterData.skillWeaknesses.map(skill => (
                                    <SkillIcon name={skill} />
                                ))}
                            </Statistic.Value>
                            <Statistic.Label>Weaknesses</Statistic.Label>
                        </Statistic>
                        {characterData.hiddenTalents.length > 0 && (
                            <Statistic size="small">
                                <Statistic.Value>
                                    {characterData.hiddenTalents.map(skill => (
                                        <SkillIcon name={skill} />
                                    ))}
                                </Statistic.Value>
                                <Statistic.Label>Hidden Talents</Statistic.Label>
                            </Statistic>
                        )}
                        <Statistic size="mini" color="green">
                            <Statistic.Value>
                                {character.getHighestGrowths(3).map(c => (
                                    <span>{c[0]} </span>
                                ))}
                            </Statistic.Value>
                            <Statistic.Label>Highest Growths</Statistic.Label>
                        </Statistic>
                        <Statistic size="mini" color="red">
                            <Statistic.Value>
                                {character.getLowestGrowths(3).map(c => (
                                    <span>{c[0]} </span>
                                ))}
                            </Statistic.Value>
                            <Statistic.Label>Lowest Growths</Statistic.Label>
                        </Statistic>
                        <Statistic size="mini">
                            <Statistic.Value>{character.getTotalGrowths()}</Statistic.Value>
                            <Statistic.Label>Base Growths</Statistic.Label>
                        </Statistic>{" "}
                    </Statistic.Group>
                </Segment>
                <Segment>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Class</Table.HeaderCell>
                                <Table.HeaderCell>Level</Table.HeaderCell>
                                {Stats.map(stat => (
                                    <Table.HeaderCell key={stat}>{stat}</Table.HeaderCell>
                                ))}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Base</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                {Stats.map((stat, i) => (
                                    <Table.Cell key={i}>{character.character.baseStats[stat]}</Table.Cell>
                                ))}
                            </Table.Row>
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell>Totals</Table.HeaderCell>
                                {this.getTotals().map((v, i) => (
                                    <Table.HeaderCell key={i}>{v}</Table.HeaderCell>
                                ))}
                            </Table.Row>
                            <Table.Row>
                                <Table.HeaderCell colSpan="11">
                                    <Form>
                                        <Form.Group>
                                            <Form.Select
                                                width="12"
                                                label="Pick a Class to Add"
                                                fluid
                                                options={Object.keys(Classes).map(key => ({
                                                    key,
                                                    text: key,
                                                    value: key
                                                }))}
                                            />
                                            <Form.Input maxValue={100} width="2" fluid type="number" label="Levels" />
                                            <Form.Button label="Add" type="submit">
                                                <Icon name="add square" />
                                                Register
                                            </Form.Button>
                                        </Form.Group>
                                    </Form>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Segment>
            </Segment.Group>
        );
    }
}

export default CharacterBuilder;
