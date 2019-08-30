import React from "react";
import { ICharacter } from "../../../interfaces/iCharacter";
import { Segment, Grid, Label, Header, Table, Responsive } from "semantic-ui-react";

interface Props {
    character: ICharacter;
}
const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

const CharacterTeaTimes = ({ character }: Props) => (
    <Segment color="violet" textAlign="center">
        <Header as="h1">Tea Time</Header>
        <Header as="h2">Topics</Header>
        <Grid columns={IS_MOBILE ? 2 : 5}>
            {character.teaTimeTopics.map((comment, i) => (
                <Grid.Column key={i} stretched>
                    <Label>{comment}</Label>
                </Grid.Column>
            ))}
        </Grid>
        <Header>Questions and Answers</Header>
        <Table basic unstackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Question</Table.HeaderCell>
                    <Table.HeaderCell>Answer</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {character.teaTimeComments.map((q, i) => (
                    <Table.Row key={i}>
                        <Table.Cell>{q.comment}</Table.Cell>
                        <Table.Cell>{q.answers.join(", ")}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </Segment>
);

export default CharacterTeaTimes;
