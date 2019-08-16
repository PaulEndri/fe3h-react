import React from 'react';
import { ICharacter } from '../../../types/icharacter';
import { IClass } from '../../../types/iclass';
import JobService, { IFilteredJobs } from '../../../services/job';
import { Grid, Segment, Header, Rail } from 'semantic-ui-react';
import CharacterRadarChart from './character-radar-chart';
import ClassTable from './class-table';
import { IGrowthRate } from '../../../types/igrowthRate';

interface CharacterGrowthsSectionProps {
    character: ICharacter
}

interface IActiveClasses {
    [key: string]: IGrowthRate
}

interface CharacterGrowthsSectionState {
    classes: IFilteredJobs,
    activeClasses: IActiveClasses
}

class CharacterGrowthsSection extends React.Component<CharacterGrowthsSectionProps, CharacterGrowthsSectionState> {
    constructor(props: CharacterGrowthsSectionProps) {
        super(props);

        this.state = {
            activeClasses: {
                "Base Growth": props.character.growthRates
            },
            classes: JobService.getAll()
        };

        this.generateGrowthRate.bind(this);
        this.updateSelectedClass.bind(this);
    }

    generateGrowthRate(job: IClass): IGrowthRate {
        const base = this.state.activeClasses["Base Growth"];

        const generatedGrowthRate: IGrowthRate = {
            HP: base.HP + job.HP,
            STR: base.STR + job.STR,
            MAG: base.MAG + job.MAG,
            SPD: base.SPD + job.SPD,
            DEX: base.DEX + job.DEX,
            LCK: base.LCK + job.LCK,
            DEF: base.DEF + job.DEF,
            RES: base.RES + job.RES,
            CHA: base.CHA + job.CHA
        };

        return generatedGrowthRate;
    }

    updateSelectedClass(selectedClassName: string, job: IClass) {
        const {activeClasses} = this.state;
        
        if (Object.keys(activeClasses).includes(selectedClassName)) {
            const newClassObject: IActiveClasses = {}

            Object.keys(activeClasses).forEach((key: string) => {
                if (key !== selectedClassName) {
                    newClassObject[key] = activeClasses[key];
                }
            })

            console.log(newClassObject)
            this.setState({
                activeClasses: newClassObject
            });
        } else if (Object.keys(activeClasses).length >= 10) {
            return;
        } else {
            this.setState({
                activeClasses: {
                    ...activeClasses,
                    [selectedClassName]: this.generateGrowthRate(job)
                }
            });
        }
    }


    render() {
        const {character} = this.props;
        const {activeClasses, classes} = this.state;
        const classNames = Object.keys(activeClasses);
 
        return (
            <Grid.Row>
                <Grid.Column stretched width="5">
                    <Segment>
                        <Header as="h4">Growth Rates</Header>
                        <CharacterRadarChart statBlocks={Object.values(activeClasses)} statBlockNames={classNames} />
                        {Object.keys(activeClasses).length >= 10 && <Segment color="red" inverted>
                            You may only have up to 10 classes selected, please remove some to add more
                        </Segment>}
                    </Segment>
                </Grid.Column>
                <Grid.Column stretched width="11">
                    <Segment>
                        <ClassTable selectedClasses={classNames} classes={this.state.classes} updateSelectedClass={(v: string, c: IClass) => this.updateSelectedClass(v, c)} />
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default CharacterGrowthsSection;