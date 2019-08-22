import React from 'react';
import DesktopTable from './desktop-table';
import classes from '../../data/classes';
import { Container, Segment, Button, Header, Responsive } from 'semantic-ui-react';
import { Skill } from '../../types/skill';
import { IClass } from '../../interfaces/iClass';
import IRequirement from '../../interfaces/iRequirement';
import Skills from '../../data/skills';
import SkillIcon from '../../components/skill-icon';
import MobileTable from './mobile-table';

interface ClassesViewState {
    skills: Skill[],
    tiers: string[],
    classes: IClass[]
}

const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;
const TIERS = [
    'beginner',
    'unique',
    'intermediate',
    'advanced',
    'master'
];
export class ClassesView extends React.Component<any, ClassesViewState> {
    constructor(props) {
        super(props);

        this.state = {
            skills: [],
            tiers: [],
            classes: classes
        };
    }

    private updateTiers(value: string) {
        const {tiers} = this.state;

        if (tiers.includes(value)) {
            this.setState({tiers: tiers.filter((t) => t !== value)});
        } else {
            this.setState({tiers: [...tiers, value]})
        }
    }

    private updateSkills(value: Skill) {
        const {skills} = this.state;

        if (skills.includes(value)) {
            this.setState({skills: skills.filter((t) => t !== value)});
        } else {
            this.setState({skills: [...skills, value]});
        }
    }

    private matchToRequirement(matching: string[], requirements: IRequirement[]): boolean {
        let matched: boolean;

        return requirements && requirements.reduce((previous, current) => previous || matching.includes(current.name), matched);
    }

    private filterResults() {
        const {skills, tiers, classes} = this.state;

        if (tiers.length === 0 && skills.length === 0) {
            return classes;
        }

        return classes.filter((job) => {
            let match = false;

            if (skills.length > 0 && !match) {
                match = this.matchToRequirement(skills, job.Requirements);
            }

            if (tiers.length > 0 && !match) {
                match = tiers.includes(job.Tier);
            }
            return match;
        })
    }

    render() {
        return (<Container fluid>
            <Segment.Group raised>
                <Segment fluid color="violet" inverted stacked textAlign="center">
                    <Header as="h1">Class List and Information</Header>
                </Segment>
                <Segment basic textAlign="center" horizontal={IS_MOBILE}>
                    <Header as="h3">Filter by Skill</Header>
                                                    
                    {Skills.map(skill => (
                        <Button onClick={() => this.updateSkills(skill)} positive={this.state.skills.includes(skill)} compact>
                            <SkillIcon name={skill} value={skill} label={!IS_MOBILE} />
                        </Button>
                    ))}

                </Segment>
                <Segment basic horizontal={IS_MOBILE}  textAlign="center">
                    <Header as="h3">Filter by Tier</Header>
                        {TIERS.map(tier => (
                            <Button onClick={() => this.updateTiers(tier)} positive={this.state.tiers.includes(tier)} compact>
                                <span style={{textTransform: 'capitalize'}}>{tier}</span>
                            </Button>
                        ))}
                </Segment>
                
            </Segment.Group>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <MobileTable classes={this.filterResults()} />
            </Responsive>
            <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                <DesktopTable classes={this.filterResults()} />
            </Responsive>
        </Container>)
    }
}
export default ClassesView;