import React from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container text textAlign="center">
      <h1>404: Not found</h1>
      <Button as={Link} to="/">
        Back to home
      </Button>
    </Container>
  );
};

export default NotFound;
