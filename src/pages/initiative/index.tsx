import { Header } from "../../components/Header";
import { InfoCard } from "../../components/InfoCard";
import { Container, Leader, Row } from "./styles";
import latrel from "../../assets/ActiveHeroes/Latrel.png";


export const Initiative = () => {
  return (
    <>
      < Header />
    
    <Container>
    <Row>
      <InfoCard/>
      <Leader src={latrel} alt="Sentinels Leader"/>
      </Row>
    </Container> </>
  );
};
