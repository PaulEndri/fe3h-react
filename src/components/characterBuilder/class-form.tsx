import React, { useState } from "react";
import Classes from "../../data/classes";
import { Form, Icon } from "semantic-ui-react";

interface Props {
    onSubmit: Function;
}

const CharacterBuilderClassForm = ({ onSubmit }: Props) => {
    const [level, setLevel] = useState(0);
    const [job, setJob] = useState("");
    const [error, showError] = useState(false);

    const handleChange = (e, v) => {
        if (v.name === "class") {
            setJob(v.value);
        } else {
            setLevel(v.value);
        }
    };

    const handleSubmit = () => {
        if (level && job) {
            onSubmit(level, job);
            showError(false);
        } else {
            showError(true);
        }
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Select
                    width="12"
                    label="Pick a Class to Add"
                    name="class"
                    error={error}
                    fluid
                    options={Object.keys(Classes).map(key => ({
                        key,
                        text: key,
                        value: key
                    }))}
                />
                <Form.Input
                    onChange={handleChange}
                    name="levels"
                    error={error}
                    maxValue={100}
                    width="2"
                    fluid
                    type="number"
                    label="Levels"
                />
                <Form.Button label="Add" type="submit">
                    <Icon name="add square" />
                    Register
                </Form.Button>
            </Form.Group>
        </Form>
    );
};
