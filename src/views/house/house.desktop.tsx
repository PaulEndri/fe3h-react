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
                            <Table.HeaderCell colSpan="9" collapsing textAlign="center" >Base Stat Growths</Table.HeaderCell>
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
                                    {student.growthRates.HP}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.growthRates.STR}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.growthRates.MAG}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.growthRates.DEX}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.growthRates.SPD}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.growthRates.LCK}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.growthRates.DEF}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.growthRates.RES}
                                </Table.Cell>
                                <Table.Cell width={1} >
                                    {student.growthRates.CHA}
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