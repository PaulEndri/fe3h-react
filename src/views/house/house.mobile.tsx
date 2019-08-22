import React from 'react';
import { Container, Segment, Image, Header, Item, List } from 'semantic-ui-react';
import { History } from 'history';
import { HouseService } from '../../services/house';
import { Link } from 'react-router-dom';

interface HouseMobileViewProps {
    match: {
        params: {
            house: string
        }
    };
    history: History;
}

const HouseMobileView = ({match, history}: HouseMobileViewProps) => {
    const houseService = HouseService.getHouse(match.params.house);

    if (!houseService || !houseService.house) {
        return <div>Stop cheatin dawg</div>;
    }

    const house = houseService.house;
    const students = houseService.getStudents();

    if (!students) {
        return <div>Wut You Do</div>;
    }

    return (
        <Container  fluid textAlign="center">
            <Header color={house.color} as="h2" textAlign="center" attached="top" style={{border: '0px'}}>
                <Image src={house.banner} fluid/>
                <Header.Content>
                    {house.name}
                    <Header.Subheader>
                        {house.motto}
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <Segment color={house.color} textAlign="left" style={{display: 'flex', justifyContent: 'center'}}>
                <Item.Group link unstackable divided>
                    {students.map((student) => (
                        <Item key={student.character.firstName} as={Link} to={student.getLink(house.stub)}>
                            <Item.Image size='tiny' src={student.getThumbnail()}/>
                            <Item.Content>
                                <Item.Header>{student.character.name}</Item.Header>
                                <Item.Description>
                                    <List>
                                        <List.Item>
                                            <b>Lost Items:</b> {student.character.lostItems.join(', ')}
                                        </List.Item>
                                        <List.Item>
                                            <b>Gifts:</b> {student.character.gift.join(', ')}
                                        </List.Item>
                                    </List>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Segment>
        </Container>
    );
}

export default HouseMobileView;