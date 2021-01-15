import React from "react";
import { Button, Grid } from "semantic-ui-react";
import Layout from "./Layout";
import QuizFilters from "./QuizFilters";

const centered = {
  textAlign: "center",
};
const vPad = (ems) => {
  const pad = `${ems}ems`;
  return {
    paddingRight: pad,
    paddingLeft: pad,
  };
};

const currentQuiz = {};

const advanceQuestion = () => {};

function Home() {
  return (
    <Layout>
      <Grid padded centered>
        <Grid.Column style={centered}>
          <Grid.Row>
            <QuizFilters />
          </Grid.Row>
          <Grid.Row>
            <Button size='massive'>Start Quiz</Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Layout>
  );
}

export default Home;
