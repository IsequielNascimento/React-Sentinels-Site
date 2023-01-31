import {useNavigate} from "react-router-dom";
import { Header } from "../../components/Header";
import { Card, CardDescription, Container, InfoContainer, Row } from "./styles";

export const Team = () => {
 

    const navigate = useNavigate();

    const HandleClickActiveHeroes = () => {
      navigate("/activeHeroes"); 
    } 
    const HandleClicInactiveHeroes = () => {
      navigate("/inactiveHeroes"); 
    } 
  return (
    <>
      <Header />
        
      
      <Container>
        <Row>
          <Card onClick={HandleClickActiveHeroes}>Active Heroes</Card>
          <Card onClick={HandleClicInactiveHeroes}>Inative Heroes</Card>
        </Row>
        <InfoContainer>
          <CardDescription>
            Numerous heroes have passed through the IS since its inception,
            there are numerous reasons why a hero is disconnected from the
            initiative, most of the time they are disconnected, not for failure
            to comply with an order, failure in duty or breach of the law, but
            for dying protecting the defenseless. Despite the dangers, new and
            new heroes assume the responsibility to protect humanity, the
            responsibility to become a symbol of hope, as is the case of the
            current team, formed by the new Leonnardo, Arcia, Mitsura
          </CardDescription>
        </InfoContainer>
      </Container>
    </>
  );
};
