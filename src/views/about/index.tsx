import React from "react";
import { Segment, Header, Container } from "semantic-ui-react";

const About = () => {
    return (
        <Container>
            <Segment textAlign="center">
                <Header as="h1">About This Site</Header>
                <p>
                    This site/project is a fan project to provide a user friendly way to access all the data the amazing
                    community has amassed. The data was gathered from all the fine folk at the fe3h subreddit, so go
                    checkout the thread for more credit:
                    <a href="https://www.reddit.com/r/FireEmblemThreeHouses/comments/ck45lu/three_houses_data_compilation/">
                        {" "}
                        here.
                    </a>
                </p>
                <p>
                    This is a super alpha release, gauging interest, opinion, getting feedback, etc. Have questions,
                    comments, concerns? Message me on reddit (u/paulendri) or on discord (Paul Endri#2569)
                </p>
                <p>
                    All images, names, and other trademarked contents are property of Nintendo and related
                    trademarks/copyrights. No ownership is claimed by the author of this site over any of it's
                    intellectual property.
                </p>
                <p>
                    The source code for this page can be found at github over{" "}
                    <a href="https://github.com/PaulEndri/fe3h-react">here.</a>
                </p>
            </Segment>
        </Container>
    );
};

export default About;
