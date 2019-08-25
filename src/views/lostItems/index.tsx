import React, { useState } from "react";
import { Segment, Image, Header, Card, Input, Responsive, List, Label } from "semantic-ui-react";
import characters from "../../data/characters";

export const LostItemsView = () => {
    const [itemSearchTerm, newItemSearchTerm] = useState("");
    const [characterSearchTerm, newCharacterSearchTerm] = useState("");

    let localCharacters = Object.values(characters);

    if (characterSearchTerm.length >= 3) {
        localCharacters = localCharacters.filter(c =>
            c.character.name.toLowerCase().includes(characterSearchTerm.toLowerCase())
        );
    }

    if (itemSearchTerm.length >= 3) {
        localCharacters = localCharacters.filter(c =>
            c.character.lostItems.some(item => item.toLowerCase().includes(itemSearchTerm.toLowerCase()))
        );
    }

    return (
        <Segment textAlign="left">
            <Segment basic textAlign="center">
                <Header as="h2">Character Lost Item List</Header>
                <Input
                    icon={{ name: "search", circular: true }}
                    placeholder="Search for an Item"
                    type="text"
                    label="Item"
                    onChange={e => newItemSearchTerm(e.target.value)}
                />
                <Input
                    icon={{ name: "search", circular: true }}
                    placeholder="Search for a Character"
                    type="text"
                    label="Character"
                    onChange={e => newCharacterSearchTerm(e.target.value)}
                />
            </Segment>
            <Card.Group textAlign="left" itemsPerRow={window.innerWidth <= Responsive.onlyMobile.maxWidth ? 3 : 7}>
                {localCharacters.map((character, index) => (
                    <Card key={index} raised>
                        <Image wrapped ui={false} src={character.getThumbnail()} />
                        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                            <Card.Content>
                                {itemSearchTerm &&
                                    character.character.lostItems.some(item =>
                                        item.toLowerCase().includes(itemSearchTerm)
                                    ) && (
                                        <Card.Meta>
                                            <Label tag color="green">
                                                Match Found
                                            </Label>
                                        </Card.Meta>
                                    )}
                                <Card.Content style={{ paddingLeft: "8px" }}>
                                    <List>
                                        {character.character.lostItems.map(item => (
                                            <List.Item key={item}>
                                                <List.Icon name="bookmark" />
                                                <List.Content>{item}</List.Content>
                                            </List.Item>
                                        ))}
                                    </List>
                                </Card.Content>
                            </Card.Content>
                        </Responsive>
                    </Card>
                ))}
            </Card.Group>
        </Segment>
    );
};

export default LostItemsView;
