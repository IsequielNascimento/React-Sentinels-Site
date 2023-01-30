import React from "react";
import { Button } from "../Button";
import { Container, Line, LogoPic, Menu, Row, Wrapper } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();

  const HandleClickInitiative = () => {
    navigate("/initiative");
    
  }
  const HandleClickTeam = () => {
    navigate("/team");
  }
  const HandleClickContact = () => {
    navigate("/contact");
  }
  const HandleClickNews = () => {
    navigate("/news");
    
  }




  return (
    <Line>
      <Wrapper>
        <Container>
          <Row>
            <LogoPic src={logo} alt="Sentinels Logo" />
            <Menu>
              <Button title="Initiative" variant= "primary" onClick={HandleClickInitiative}/>
              <Button title="Team" variant = "secondary" onClick={HandleClickTeam} />
              <Button title="Contact" variant="secondary" onClick={HandleClickContact}/>
              <Button title="News" variant="secondary" onClick={HandleClickNews}/>
            </Menu>
          </Row>
        </Container>
      
      </Wrapper>

      <hr />
    </Line>
  );
};
