import React from 'react';
import { Segment, Table, Image } from 'semantic-ui-react';
import classes from '../../data/classes';

const getSkillIcon = (name: string) => `${process.env.PUBLIC_URL}/assets/icons/${name.toLowerCase().replace(' ', '-')}.png`

export const DesktopTable = () => {
    return (
        <Segment basic>
            <Table structured compact celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell rowSpan="2">Class Name</Table.HeaderCell>
                        <Table.HeaderCell rowSpan="2">Tier</Table.HeaderCell>
                        <Table.HeaderCell rowSpan="2" colSpan="3" textAlign="center">Requirements</Table.HeaderCell>
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
                    {classes.map((job) => {
                        return (
                            <Table.Row key={job.Name}>
                                <Table.Cell>{job.Name}</Table.Cell>
                                <Table.Cell style={{textTransform: 'capitalize'}}>{job.Tier}</Table.Cell>
                                {[0, 1, 2].map((index) => (
                                    <Table.Cell singleLine key={index}>
                                        {job.Requirements && job.Requirements[index] && (
                                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                                <Image src={getSkillIcon(job.Requirements[index].name)} height={25} width={25}/>
                                                <span style={{marginLeft: '8px'}}>{job.Requirements[index].value}</span>
                                            </div>
                                        )}
                                    </Table.Cell>
                                ))}
                                <Table.Cell positive={job.HP > 0 ? true : false} negative={job.HP < 0 ? true : false}>{job.HP}</Table.Cell>
                                <Table.Cell positive={job.STR > 0 ? true : false} negative={job.STR < 0 ? true : false}>{job.STR}</Table.Cell>
                                <Table.Cell positive={job.MAG > 0 ? true : false} negative={job.MAG < 0 ? true : false}>{job.MAG}</Table.Cell>
                                <Table.Cell positive={job.SPD > 0 ? true : false} negative={job.SPD < 0 ? true : false}>{job.SPD}</Table.Cell>
                                <Table.Cell positive={job.DEX > 0 ? true : false} negative={job.DEX < 0 ? true : false}>{job.DEX}</Table.Cell>
                                <Table.Cell positive={job.LCK > 0 ? true : false} negative={job.LCK < 0 ? true : false}>{job.LCK}</Table.Cell>
                                <Table.Cell positive={job.DEF > 0 ? true : false} negative={job.DEF < 0 ? true : false}>{job.DEF}</Table.Cell>
                                <Table.Cell positive={job.RES > 0 ? true : false} negative={job.RES < 0 ? true : false}>{job.RES}</Table.Cell>
                                <Table.Cell positive={job.CHA > 0 ? true : false} negative={job.CHA < 0 ? true : false}>{job.CHA}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </Segment>
    )
}

export default DesktopTable;