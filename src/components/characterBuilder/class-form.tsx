import React, { useState } from "react";
import Classes from "../../data/classes";
import { Form, Responsive } from "semantic-ui-react";

interface Props {
    onSubmit: Function;
}

const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

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
            onSubmit(job, level);
            setLevel(1);
            setJob("");
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
                    onChange={handleChange}
                    value={job}
                    error={error}
                    search
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
                    width="2"
                    value={level}
                    max={99}
                    min={1}
                    fluid
                    type="number"
                    label="Levels"
                />
                <Form.Button
                    fluid
                    label="Add"
                    type="submit"
                    icon="add square"
                    content={IS_MOBILE ? "Add To List" : null}
                    color="green"
                />
            </Form.Group>
        </Form>
    );
};

export default CharacterBuilderClassForm;
