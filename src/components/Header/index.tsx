import React from "react";
import { Button } from "../Button";
import { Container, Line, LogoPic, Menu, Row, Wrapper } from "./styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();

  const HandleClickInitiative = () => {
    navigate("/");
    
  }
  const HandleClickTeam = () => {

    navigate("/team");

 
  }
 
  const HandleClickNews = () => {
    navigate("/news");
    
  }
  const HandleClickHistory = () => {
    navigate("/historyHeroes");
    
  }


  return (
    <Line>
      <Wrapper>
        <Container>
          <Row>
            <LogoPic src={logo} alt="Sentinels Logo" />
            <Menu>
              <Button title="Iniciativa" variant= "primary" onClick={HandleClickInitiative}/>
              <Button title="Equipe" variant= "primary" onClick={HandleClickTeam} />
              <Button title="Notícias" variant="primary" onClick={HandleClickNews}/>
              <Button title="História" variant="primary" onClick={HandleClickHistory}/>
            </Menu>
          </Row>
        </Container>
      
      </Wrapper>

      <hr />
    </Line>
  );
};
