import React from "react";
import Layout from "./Layout";
import { Form, Grid, Header } from "semantic-ui-react";

function Login() {
  return (
    <Layout>
      <Grid padded centered>
        <Grid.Column width={8}>
          <Header as='h1'>Log In</Header>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder='username' />
            </Form.Field>
            <Form.Field>
              <label for='email'>Email</label>
              <input id='email' type='email' placeholder='email' />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
    </Layout>
  );
}

export default Login;
