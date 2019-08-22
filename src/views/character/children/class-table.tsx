import React from 'react';
import { Tab, Table, Checkbox } from 'semantic-ui-react';
import { IFilteredJobs } from '../../../services/job';
import { IClass } from '../../../interfaces/iClass';
import SkillIcon from '../../../components/skill-icon';

interface Props {
    classes: IFilteredJobs,
    selectedClasses: string[],
    updateSelectedClass: Function,
}

const ClassTable = ({classes, selectedClasses, updateSelectedClass}: Props) => {
    const renderTab = (renderingClasses: IClass[]) => {
        return (
            <Tab.Pane compact>
                <Table compact celled unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell/>
                            <Table.HeaderCell>
                                Class
                            </Table.HeaderCell>
                                <Table.HeaderCell>Requirements</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {renderingClasses.map((job) => {
                            return (
                                <Table.Row key={job.Name}>
                                    <Table.Cell>
                                        <Checkbox toggle onChange={() => updateSelectedClass(job.Name, job)} checked={selectedClasses.indexOf(job.Name) >= 0} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.Name}
                                    </Table.Cell>
                                        <Table.Cell>
                                            {job.Requirements && job.Requirements.map((requirement, i) => (
                                                <SkillIcon name={requirement.name} value={requirement.value} label={true} />
                                            ))}
                                        </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </Tab.Pane>
        )
    }

    return (
        <Tab compact stackable={true} panes={[
            { menuItem: 'Unique', render: () => renderTab(classes.unique)},
            { menuItem: 'Beginner', render: () => renderTab(classes.beginner)},
            { menuItem: 'Intermediate', render: () => renderTab(classes.intermediate)},
            { menuItem: 'Advanced', render: () => renderTab(classes.advanced)},
            { menuItem: 'Master', render: () => renderTab(classes.master)},
        ]} />
    )
}


export default ClassTable;