import React from "react";
import { Container, Dimmer, Loader } from "semantic-ui-react";

const LoaderComponent = () => {
  return (
    <Container text>
      <Dimmer active inverted>
        <Loader content="Loading" />
      </Dimmer>
    </Container>
  );
};

export default LoaderComponent;
