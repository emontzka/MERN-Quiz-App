import React from "react";
import { Container, Grid } from "semantic-ui-react";
// import styled from "styled-components";

function Layout(props) {
  return <Container>{props.children}</Container>;
}

export default Layout;
