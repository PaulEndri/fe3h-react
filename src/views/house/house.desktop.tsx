import React from 'react';
import { Container, Segment, Image, Header, Table, Label, List } from 'semantic-ui-react';
import { ICharacter } from '../../interfaces/iCharacter';
import { History } from 'history';
import { HouseService } from '../../services/house';
import SkillIcon from '../../components/skill-icon';

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
        <Container as="div" textAlign="center">
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
                <Table collapsing striped structured selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan="2" width={1} ></Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" width={2} textAlign="center">Gifts</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" width={2} textAlign="center">Favorite Tea</Table.HeaderCell>
                            <Table.HeaderCell rowSpan="2" width={2} singleLine textAlign="center">Lost Items</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2" width={2} singleLine textAlign="center" >Recruitment</Table.HeaderCell>
                            <Table.HeaderCell colSpan="3" width={3} singleLine textAlign="center" >Skills</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell width={1} >Stat</Table.HeaderCell>
                            <Table.HeaderCell width={1} >Skill</Table.HeaderCell>
                            <Table.HeaderCell width={1} >Strengths</Table.HeaderCell>
                            <Table.HeaderCell width={1} >Weaknesses</Table.HeaderCell>
                            <Table.HeaderCell width={1} >Hidden Talents</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {house.students.map((student: ICharacter) => (
                            <Table.Row key={student.firstName} onClick={() => navAction(student.firstName.toLowerCase())}>
                                <Table.Cell collapsing textAlign="center">
                                    <Image rounded src={`${process.env.PUBLIC_URL}/assets/characters/thumbnails/${student.firstName.toLowerCase()}.png`} />
                                </Table.Cell>
                                <Table.Cell textAlign="left">
                                    <List bulleted>{student.gift.map((g, i) => <List.Item key={i}>{g}</List.Item>)}</List>
                                </Table.Cell>
                                <Table.Cell textAlign="left">
                                    <List bulleted>{student.tea.map((g, i) => <List.Item key={i}>{g}</List.Item>)}</List>
                                </Table.Cell>
                                <Table.Cell textAlign="left">
                                    <List bulleted>{student.lostItems.map((g, i) => <List.Item key={i}>{g}</List.Item>)}</List>
                                </Table.Cell>
                                <Table.Cell>
                                    {student.stat && (
                                        <Label color="grey" >
                                            {student.stat.name}
                                            {" "}
                                            {student.stat.value}
                                        </Label>
                                    )}
                                </Table.Cell>
                                <Table.Cell>
                                    {student.skill && <SkillIcon {...student.skill} label={true} />}
                                </Table.Cell>
                                <Table.Cell>
                                    {student.skillProficiencies.map((skill) =>
                                        <Image style={{marginRight: '2px'}} height="25" width="25" inline src={`${process.env.PUBLIC_URL}/assets/icons/${skill.toLowerCase().replace(' ', '-')}.png`} />
                                    )}
                                </Table.Cell>
                                <Table.Cell>
                                    {student.skillWeaknesses.map((skill) =>
                                        <Image style={{marginRight: '2px'}} height="25" width="25" inline src={`${process.env.PUBLIC_URL}/assets/icons/${skill.toLowerCase().replace(' ', '-')}.png`} />
                                    )}
                                </Table.Cell>
                                <Table.Cell>
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