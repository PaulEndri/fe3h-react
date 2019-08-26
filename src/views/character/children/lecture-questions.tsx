import React from "react";
import { Table, Segment, Header } from "semantic-ui-react";

interface Props {
    questions: {
        question: string;
        answer: string;
    }[];
}

const LectureQuestions = ({ questions }: Props) => (
    <Segment color="violet" textAlign="center">
        <Header as="h4">Lecture Questions & Answers</Header>
        <Table basic unstackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Question</Table.HeaderCell>
                    <Table.HeaderCell>Answer</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {questions.map((q, i) => (
                    <Table.Row key={i}>
                        <Table.Cell>{q.question}</Table.Cell>
                        <Table.Cell>{q.answer}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </Segment>
);

export default LectureQuestions;
