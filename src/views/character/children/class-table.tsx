import React from 'react';
import { Tab, Table, Checkbox } from 'semantic-ui-react';
import { IFilteredJobs } from '../../../services/job';
import { IClass } from '../../../interfaces/iClass';

interface Props {
    classes: IFilteredJobs,
    selectedClasses: string[],
    updateSelectedClass: Function,
}

const ClassTable = ({classes, selectedClasses, updateSelectedClass}: Props) => {
    const renderTab = (renderingClasses: IClass[]) => {
        return (
            <Tab.Pane>
                <Table compact celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan="2" />
                            <Table.HeaderCell rowSpan="2">
                                Class Name
                            </Table.HeaderCell>
                            <Table.HeaderCell colSpan="9" textAlign="center" >Stat Growths</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell width={1} >HP</Table.HeaderCell>
                            <Table.HeaderCell width={1} >STR</Table.HeaderCell>
                            <Table.HeaderCell width={1} >MAG</Table.HeaderCell>
                            <Table.HeaderCell width={1} >DEX</Table.HeaderCell>
                            <Table.HeaderCell width={1} >SPD</Table.HeaderCell>
                            <Table.HeaderCell width={1} >LCK</Table.HeaderCell>
                            <Table.HeaderCell width={1} >DEF</Table.HeaderCell>
                            <Table.HeaderCell width={1} >RES</Table.HeaderCell>
                            <Table.HeaderCell width={1} >CHA</Table.HeaderCell>
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
                                        {job.HP}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.STR}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.MAG}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.SPD}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.DEX}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.LCK}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.DEF}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.RES}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {job.CHA}
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
        <Tab panes={[
            { menuItem: 'Unique', render: () => renderTab(classes.unique)},
            { menuItem: 'Beginner', render: () => renderTab(classes.beginner)},
            { menuItem: 'Intermediate', render: () => renderTab(classes.intermediate)},
            { menuItem: 'Advanced', render: () => renderTab(classes.advanced)},
            { menuItem: 'Master', render: () => renderTab(classes.master)},
        ]} />
    )
}


export default ClassTable;