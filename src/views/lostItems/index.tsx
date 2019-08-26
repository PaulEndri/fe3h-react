import React, { useState } from "react";
import { Segment, Image, Header, Card, Input, Responsive, List, Label } from "semantic-ui-react";
import characters from "../../data/characters";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";
import CharacterService from "../../services/character";
import LostItemModal from "./lostItem.modal";

const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

export const LostItemsView = () => {
    const [itemSearchTerm, newItemSearchTerm] = useState("");
    const [characterSearchTerm, newCharacterSearchTerm] = useState("");
    const [modalData, updateModal] = useState([]);

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

    const getColor = (character: CharacterService): SemanticCOLORS => {
        if (!IS_MOBILE) {
            return "violet";
        }

        return itemSearchTerm && character.character.lostItems.some(item => item.toLowerCase().includes(itemSearchTerm))
            ? "green"
            : "grey";
    };

    const onCardClick = (character: CharacterService) => {
        if (!IS_MOBILE) {
            return null;
        }

        return updateModal(character.character.lostItems);
    };

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
                    <Card key={index} raised color={getColor(character)} onClick={() => onCardClick(character)}>
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
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <LostItemModal closeModal={() => updateModal([])} isOpen={modalData.length > 0} items={modalData} />
            </Responsive>
        </Segment>
    );
};

export default LostItemsView;
