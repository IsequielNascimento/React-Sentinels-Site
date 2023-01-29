import React from "react";
import { Button } from "../Button";
import { Container, Line, LogoPic, Menu, Row, Wrapper } from "./styles";
import logo from "../../assets/logo.png";
export const Header = () => {
  return (
    <Line>
      <Wrapper>
        <Container>
          <Row>
            <LogoPic src={logo} alt="Sentinels Logo" />
            <Menu>
              <Button title="Initiative" />
              <Button title="Team" variant="secondary" />
              <Button title="Contact" variant="secondary" />
              <Button title="News" variant="secondary" />
            </Menu>
          </Row>
        </Container>
      
      </Wrapper>

      <hr />
    </Line>
  );
};
