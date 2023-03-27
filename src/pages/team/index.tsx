import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Card, CardDescription, Container, InfoContainer, Row } from "./styles";

export const Team = () => {
  const navigate = useNavigate();

  const HandleClickActiveHeroes = () => {
    navigate("/activeHeroes");
  };
  const HandleClicInactiveHeroes = () => {
    navigate("/inactiveHeroes");
  };
  return (
    <>
      <Header />

      <Container>
        <Row>
          <Card onClick={HandleClickActiveHeroes}>Heróis Ativos</Card>
          <Card onClick={HandleClicInactiveHeroes}>Heróis Desligados</Card>
        </Row>
        <InfoContainer>
          <CardDescription>
            Inúmeros heróis passaram pela Iniciativa Sentinela desde o seu
            início. Há diversas razões pelas quais um herói pode se desconectar
            da iniciativa. Na maioria das vezes, eles são desligados não por
            falha em cumprir uma ordem, em cumprir o dever ou por violação da
            lei, mas por terem morrido protegendo os indefesos. Apesar dos
            perigos, novos heróis assumem a responsabilidade de proteger a
            humanidade e de se tornar um símbolo de esperança, como é o caso da
            equipe atual, formada pelo novo Leonardo, Arcia e Mitsura.
          </CardDescription>
        </InfoContainer>
      </Container>
    </>
  );
};
