import React from "react";
import CharacterService from "../../services/character";
import { IClass } from "../../interfaces/iClass";
import Classes from "../../data/classes";
import { IGrowthRate } from "../../interfaces/iGrowthRate";
import { Segment, Header, Statistic, Table, Grid, Responsive } from "semantic-ui-react";
import SkillIcon from "../skill-icon";
import Stats from "../../data/stats";
import CharacterBuilderClassForm from "./class-form";
import CharacterRadarChart from "./character-radar-chart";

interface CharacterBuilderProps {
    character: CharacterService;
    complete?: boolean;
}

interface CharacterBuilderClassRecord {
    levels: number;
    growths: IGrowthRate;
}
interface CharacterBuilderState {
    jobs: {
        [key: string]: CharacterBuilderClassRecord;
    };
}
const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

class CharacterBuilder extends React.Component<CharacterBuilderProps, CharacterBuilderState> {
    constructor(props) {
        super(props);

        this.state = {
            jobs: {}
        };
    }

    calculateLevelAvearge(total: number, levels: number): number {
        return Math.ceil((total / 100) * levels);
    }

    calculateJobAverage(levels: number, job: IClass, character: CharacterService): IGrowthRate {
        const baseGrowths = character.character.growthRates;
        const statKeys = Object.keys(baseGrowths);

        return statKeys.reduce(
            (newGrowthRate, stat) => {
                newGrowthRate[stat] = this.calculateLevelAvearge(+baseGrowths[stat] + +job[stat], levels);

                return newGrowthRate;
            },
            {} as IGrowthRate
        );
    }

    updateLevels(job: string, levels: number = 0) {
        const selectedJob = Classes[job];
        const { character } = this.props;
        const { jobs } = this.state;

        if (!selectedJob || !character) {
            return;
        }

        const growths = this.calculateJobAverage(levels, selectedJob, character);

        this.setState({
            jobs: {
                ...jobs,
                [job]: {
                    levels,
                    growths
                }
            }
        });
    }

    getTotals() {
        let level = 1;
        const totals = { ...this.props.character.character.baseStats };
        const records = Object.values(this.state.jobs) as CharacterBuilderClassRecord[];

        records.forEach(classRecord => {
            level += +classRecord.levels;

            Stats.forEach(stat => (totals[stat] += classRecord.growths[stat]));
        });

        return [level, ...Object.values(totals)];
    }

    generateGrowthRate(jobName: string) {
        const { character } = this.props;
        const job = Classes[jobName];
        const base = character.character.growthRates;

        const generatedGrowthRate: IGrowthRate = {
            HP: +base.HP + +job.HP,
            STR: +base.STR + +job.STR,
            MAG: +base.MAG + +job.MAG,
            SPD: +base.SPD + +job.SPD,
            DEX: +base.DEX + +job.DEX,
            LCK: +base.LCK + +job.LCK,
            DEF: +base.DEF + +job.DEF,
            RES: +base.RES + +job.RES,
            CHA: +base.CHA + +job.CHA
        };

        return generatedGrowthRate;
    }

    render() {
        const { character, complete } = this.props;
        const { jobs } = this.state;
        const characterData = character.character;

        return (
            <Segment.Group>
                {complete && (
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
                )}
                <Grid as={Segment} columns={2}>
                    <Grid.Column computer={5} mobile={16}>
                        <CharacterRadarChart
                            statBlocks={[
                                characterData.growthRates,
                                ...Object.keys(jobs).map(j => this.generateGrowthRate(j))
                            ]}
                            statBlockNames={["Base Growths", ...Object.keys(jobs)]}
                        />
                    </Grid.Column>
                    <Grid.Column computer={11} mobile={16}>
                        <Table celled unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Class</Table.HeaderCell>
                                    <Table.HeaderCell>Level</Table.HeaderCell>
                                    {!IS_MOBILE &&
                                        Stats.map(stat => <Table.HeaderCell key={stat}>{stat}</Table.HeaderCell>)}
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Base</Table.Cell>
                                    <Table.Cell>1</Table.Cell>
                                    {!IS_MOBILE &&
                                        Stats.map((stat, i) => (
                                            <Table.Cell key={i}>{character.character.baseStats[stat]}</Table.Cell>
                                        ))}
                                </Table.Row>
                                {Object.keys(jobs).map(key => (
                                    <Table.Row key={key}>
                                        <Table.Cell>{key}</Table.Cell>
                                        <Table.Cell>{jobs[key].levels}</Table.Cell>
                                        {!IS_MOBILE &&
                                            Object.values(jobs[key].growths).map((keyVal, idx) => (
                                                <Table.Cell key={idx}>{keyVal}</Table.Cell>
                                            ))}
                                    </Table.Row>
                                ))}
                            </Table.Body>
                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell>Totals</Table.HeaderCell>
                                    {!IS_MOBILE &&
                                        this.getTotals().map((v, i) => (
                                            <Table.HeaderCell key={i}>{v}</Table.HeaderCell>
                                        ))}
                                    <Responsive as={Table.HeaderCell} maxWidth={Responsive.onlyMobile.maxWidth}>
                                        {this.getTotals().shift()}
                                    </Responsive>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell colSpan={IS_MOBILE ? "2" : "11"}>
                                        <CharacterBuilderClassForm
                                            onSubmit={(job, levels) => this.updateLevels(job, levels)}
                                        />
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                    </Grid.Column>
                </Grid>
            </Segment.Group>
        );
    }
}

export default CharacterBuilder;
