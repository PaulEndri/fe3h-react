import React from 'react';
import { Container, Segment, Image, Header, Table } from 'semantic-ui-react';
import { ICharacter } from '../../types/icharacter';
import { History } from 'history';
import { HouseService } from '../../services/house';

interface HouseDesktopViewProps {
    match: {
        params: {
            house: string
        }
    };
    history: History;
}

const HouseDesktopView = ({match, history}: HouseDesktopViewProps) => {
    const houseService = HouseService.getHouse(match.params.house);

    if (!houseService || !houseService.house) {
        return <div>Stop cheatin dawg</div>;
    }

    const house = houseService.house;
    const houseName = house.stub.toLowerCase();
    const navAction = (name: string) => history.push(`/house/${houseName}/character/${name}`);

    return (
        <Container as="div" fluid textAlign="center">
            <Header as="h2" color={house.color} gtextAlign="center" attached="top" style={{border: '0px'}}>
                <Image src={house.banner} fluid/>
                <Header.Content>
                    {house.name}
                    <Header.Subheader>
                        {house.motto}
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <Segment secondary textAlign="center" style={{display: 'flex', justifyContent: 'center'}}>
                <Table collapsing celled striped structured selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan="2"></Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" width={2} >Gifts</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" width={1} >Flowers</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" width={2} singleLine >Lost Items</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" width={2} singleLine textAlign="center" >Recruitment</Table.HeaderCell>
                            <Table.HeaderCell colSpan="3" width={6} singleLine textAlign="center" >Skills</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell width={1} >Stat</Table.HeaderCell>
                            <Table.HeaderCell width={1} >Skill</Table.HeaderCell>
                            <Table.HeaderCell width={2} >Strengths</Table.HeaderCell>
                            <Table.HeaderCell width={2} >Weaknesses</Table.HeaderCell>
                            <Table.HeaderCell width={2} >Hidden Talents</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {house.students.map((student: ICharacter) => (
                            <Table.Row key={student.firstName} onClick={() => navAction(student.firstName.toLowerCase())}>
                                <Table.Cell collapsing textAlign="center">
                                    <Image rounded src={`${process.env.PUBLIC_URL}/assets/characters/thumbnails/${student.firstName.toLowerCase()}.png`} />
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                    {student.gift.map((gift, i) => <div key={i}>{gift},</div>)}
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                    {student.tea.map((gift, i) => <div key={i}>{gift},</div>)}
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                    {student.lostItems.map((item, i) => <div key={i}>{item},</div>)}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.stat}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.skill}
                                </Table.Cell>
                                <Table.Cell width={2} >
                                    {student.skillProficiencies.map((skill) =>
                                        <Image style={{marginRight: '2px'}} height="25" width="25" inline src={`${process.env.PUBLIC_URL}/assets/icons/${skill.toLowerCase().replace(' ', '-')}.png`} />
                                    )}
                                </Table.Cell>
                                <Table.Cell width={2} >
                                    {student.skillWeaknesses.map((skill) =>
                                        <Image style={{marginRight: '2px'}} height="25" width="25" inline src={`${process.env.PUBLIC_URL}/assets/icons/${skill.toLowerCase().replace(' ', '-')}.png`} />
                                    )}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.hiddenTalents.map((skill) =>
                                        <Image style={{marginRight: '2px'}} height="25" width="25" inline src={`${process.env.PUBLIC_URL}/assets/icons/${skill.toLowerCase().replace(' ', '-')}.png`} />
                                    )}
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Segment>
        </Container>
    );
}

export default HouseDesktopView;