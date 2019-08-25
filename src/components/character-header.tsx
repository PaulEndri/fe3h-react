import React from "react";
import houses from "../data/houses";
import { Segment, Image, Header, Button } from "semantic-ui-react";
import { HouseService } from "../services/house";
import { Link } from "react-router-dom";

interface Props {
    activeHouse: string;
}

class CharacterHeader extends React.Component<Props, any> {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: props.activeHouse ? houses.findIndex(v => v.stub === props.activeHouse) : 0
        };
    }

    updateIndex(newIndex) {
        if (newIndex < 0) {
            this.setState({ activeIndex: houses.length - 1 });
        }

        this.setState({ activeIndex: ((newIndex + 1) % houses.length) - 1 });
    }
    render() {
        const house = houses[this.state.activeIndex];
        const houseService = new HouseService(house);
        const students = houseService.getStudents();

        return (
            <Header color={house.color} as="h2" textAlign="center" attached="top" style={{ border: "0px" }}>
                <Image src={house.banner} fluid />
                <Header.Content>
                    {house.name}
                    <Header.Subheader>{house.motto}</Header.Subheader>
                </Header.Content>
                <Segment color={house.color} inverted>
                    {students.map(student => (
                        <Button color={house.color} inverted scompact as={Link} to={student.getLink(house.stub)}>
                            <Image height="75" width="75" src={student.getThumbnail()} />
                        </Button>
                    ))}
                </Segment>
            </Header>
        );
    }
}

export default CharacterHeader;
