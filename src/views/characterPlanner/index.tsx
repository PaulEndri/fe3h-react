import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import Characters from "../../data/characters";
import CharacterBuilder from "../../components/characterBuilder";

const CharacterPlanner: React.FunctionComponent = () => {
    const [characters, updateCharacters] = useState([]);
    const toggleCharacter = (name: string) => {
        if (characters.includes(name)) {
            updateCharacters(characters.filter(c => c !== name));
        } else {
            updateCharacters([...characters, name]);
        }
    };

    return (
        <Container>
            <Button.Group>
                {Object.keys(Characters).map(charName => (
                    <Button key={charName} onClick={() => toggleCharacter(charName)}>
                        {charName}
                    </Button>
                ))}
            </Button.Group>
            {characters.map(c => (
                <CharacterBuilder character={Characters[c]} />
            ))}
        </Container>
    );
};

export default CharacterPlanner;
