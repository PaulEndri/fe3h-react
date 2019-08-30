import React, { createRef } from "react";
import { Grid, Container, Responsive, Divider, Rail, Sticky, Button, Header, Segment } from "semantic-ui-react";
import { HouseService } from "../../services/house";
import CharacterSummary from "./children/character-summary";
import TabListContents from "./children/tab-list-contents";
import LectureQuestions from "./children/lecture-questions";
import CharacterHeader from "../../components/character-header";
import SegmentOrDiv from "../../components/segment-or-div";
import CharacterBuilder from "../../components/characterBuilder";
import CharacterTeaTimes from "./children/character-tea-times";

interface CharacterViewProps {
    match: {
        params: {
            house: string;
            character: string;
        };
    };
    history: History;
}

const IS_MOBILE = window.innerWidth <= Responsive.onlyMobile.maxWidth;

export class CharacterView extends React.Component<CharacterViewProps, any> {
    private contextRef;

    constructor(props) {
        super(props);
        this.contextRef = createRef();
    }

    render() {
        const { match } = this.props;
        const house = HouseService.getHouse(match.params.house);

        if (!house || !house.house) {
            return <div>Try Again</div>;
        }

        const characterService = house.getStudent(match.params.character);

        if (!characterService || !characterService.character) {
            return <div>Try Again</div>;
        }

        const character = characterService.character;

        return (
            <Container>
                <CharacterHeader activeHouse={house.house.stub} />
                <Sticky active={true} context={this.contextRef.current}>
                    <div style={{ textAlign: "center", marginBottom: "4px", marginTop: "4px" }}>
                        <Header as="h3">Jump To</Header>
                        <Button.Group color={house.house.color}>
                            <Button compact href="#characterSummary">
                                {!IS_MOBILE && "Character "}Summary
                            </Button>
                            <Button compact href="#characterTeaTime">
                                {!IS_MOBILE && "Character "}Tea Time
                            </Button>
                            <Button compact href="#characterLectures">
                                {!IS_MOBILE && "Character "}Lectures
                            </Button>
                            <Button compact href="#characterBuilders">
                                {!IS_MOBILE && "Character "}Builder
                            </Button>
                        </Button.Group>
                    </div>
                </Sticky>
                <SegmentOrDiv>
                    <Grid columns={IS_MOBILE ? 2 : 4}>
                        <Grid.Row id="characterSummary">
                            {!IS_MOBILE && <Grid.Column width={1} />}
                            <Grid.Column width={IS_MOBILE ? 16 : 10}>
                                <CharacterSummary
                                    character={character}
                                    color={house.house.color}
                                    characterService={characterService}
                                />
                            </Grid.Column>
                            {IS_MOBILE && <Divider style={{ margin: "1em" }} />}
                            <Grid.Column width={IS_MOBILE ? 16 : 4}>
                                <TabListContents name="Gifts" displayItems={character.gift} />
                                <TabListContents name="Lost Items" displayItems={character.lostItems} />
                                <TabListContents name="Favorite Flowers" displayItems={character.flower} />
                                <TabListContents name="Favorite Teas" displayItems={character.tea} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row id="characterTeaTime">
                            {!IS_MOBILE && <Grid.Column width={1} />}
                            <Grid.Column width={IS_MOBILE ? 16 : 14}>
                                <CharacterTeaTimes character={character} />
                            </Grid.Column>
                        </Grid.Row>
                        {character.lectures.length > 0 && (
                            <Grid.Row id="characterLectures">
                                {!IS_MOBILE && <Grid.Column width={1} />}
                                <Grid.Column width={IS_MOBILE ? 16 : 14}>
                                    <LectureQuestions questions={character.lectures} />
                                </Grid.Column>
                            </Grid.Row>
                        )}
                        <Grid.Row id="characterBuilders">
                            {!IS_MOBILE && <Grid.Column width={1} />}
                            <Grid.Column mobile={16} computer={14}>
                                <CharacterBuilder character={characterService} />
                            </Grid.Column>
                            {!IS_MOBILE && <Grid.Column width={1} />}
                        </Grid.Row>
                    </Grid>
                </SegmentOrDiv>
            </Container>
        );
    }
}

export default CharacterView;
