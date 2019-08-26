import React from "react";
import { List, Modal } from "semantic-ui-react";

interface Props {
    closeModal: Function;
    items: string[];
    isOpen: boolean;
}

const LostItemModal = ({ closeModal, items, isOpen }: Props) => (
    <Modal onClose={() => closeModal([])} open={isOpen} dimmer="blurring">
        <Modal.Content>
            <Modal.Description>
                <List>
                    {items.map(item => (
                        <List.Item key={item}>
                            <List.Icon name="bookmark" />
                            <List.Content>{item}</List.Content>
                        </List.Item>
                    ))}
                </List>
            </Modal.Description>
        </Modal.Content>
    </Modal>
);

export default LostItemModal;
