import React from 'react';
import { Segment, Table, Image, Label, Header } from 'semantic-ui-react';
import characters from '../../data/characters';
import CharacterService from '../../services/character';
import SkillIcon from '../../components/skill-icon';
import { History } from 'history';

interface Props {
    history: History;
}
interface State {
    filter: string;
    characters: CharacterService[];
    sorting: {
        col: string,
        dir: string
    };
};

class RecruitmentTable extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            characters: characters.filter(c => c.isRecruitable()),
            sorting: {
                col: '',
                dir: ''
            }
        }
    }


    render() {
        return (
            <Segment fluid>
                <Segment raised piled inverted color="violet">
                    <Header as="h1">
                        Character Recruitment List
                    </Header>
                </Segment>
                <Table structured striped selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>House</Table.HeaderCell>
                            <Table.HeaderCell>Stat Required</Table.HeaderCell>
                            <Table.HeaderCell>Skill Required</Table.HeaderCell>
                            <Table.HeaderCell colspan={2}>Liked Gifts</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.characters.map((chara) => (
                            <Table.Row key={chara.character.name} onClick={() => this.props.history.push(chara.getLink(chara.getHouse()))}>
                                <Table.Cell>
                                    <Image src={chara.getThumbnail()} height="75" width="75"/>
                                </Table.Cell>
                                <Table.Cell singleLine>{chara.character.name}</Table.Cell>
                                <Table.Cell singleLine>{chara.character.alliance}</Table.Cell>
                                <Table.Cell singleLine>
                                    <Label color="grey">
                                        {chara.character.stat.name}
                                        {" "}
                                        {chara.character.stat.value}
                                    </Label>
                                </Table.Cell>
                                <Table.Cell>
                                    {chara.character.skill && <SkillIcon {...chara.character.skill} label={true} />}
                                </Table.Cell>
                                <Table.Cell>
                                    {chara.character.gift.map((g, i) => <Label key={i}>{g}</Label>)}
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Segment>
        )
    }
}

export default RecruitmentTable;