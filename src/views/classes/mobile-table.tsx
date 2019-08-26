import React from "react";
import { Segment, Header, Item, Label } from "semantic-ui-react";
import SkillIcon from "../../components/skill-icon";
import { IClass } from "../../interfaces/iClass";
import Stats from "../../data/stats";

interface Props {
    classes: IClass[];
}

const getColor = (val: number) => {
    if (val > 0) {
        return "green";
    } else if (val < 0) {
        return "red";
    } else {
        return "grey";
    }
};
export const MobileTable = ({ classes }: Props) => {
    return (
        <Segment raised>
            <Item.Group divided>
                {classes.map((item, idx) => (
                    <Item key={idx}>
                        <Item.Content>
                            <Item.Header>{item.Name}</Item.Header>
                            <Item.Meta>
                                <span style={{ textTransform: "capitalize" }}>{item.Tier}</span>
                            </Item.Meta>
                            <Item.Description>
                                {item.Requirements && item.Requirements.length > 0 && (
                                    <React.Fragment>
                                        <Header as="h5">Requirements</Header>

                                        <Label.Group>
                                            {item.Requirements.map(req => (
                                                <SkillIcon label={true} {...req} key={req.name} />
                                            ))}
                                        </Label.Group>
                                    </React.Fragment>
                                )}
                                <Header as="h6">Growth Bonuses</Header>
                                <Label.Group>
                                    {Stats.map(stat => (
                                        <Label key={stat} color={getColor(item[stat])}>
                                            {stat}
                                            <Label.Detail>{item[stat]}</Label.Detail>
                                        </Label>
                                    ))}
                                </Label.Group>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
};

export default MobileTable;
