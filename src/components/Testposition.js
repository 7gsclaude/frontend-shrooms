import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Block = styled.div`
  background-color: purple;
  color: white;
  padding: 20px;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const TestPosition = () => {
  return (
    <Container>
      <Block>
        <div>
          Test position
          <h1>Another test block</h1>
        </div>
      </Block>
      <Content>
        <p>
          This is the content on the right side of the page. It will fill the
          remaining space.
        </p>
      </Content>
    </Container>
  );
};

export default TestPosition;
