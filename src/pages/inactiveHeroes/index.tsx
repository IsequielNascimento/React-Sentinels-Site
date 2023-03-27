import { Header } from "../../components/Header";
import { HeroCard } from "../../components/HeroCard";
import { Column, Container } from "./styles";
import python from "../../assets/InactiveHeroes/Python.svg";
import arjuna from "../../assets/InactiveHeroes/Arjuna.svg";
export const InactiveHeroes = () => {
  return (
    <>
      <Header />

      <Container>
        <Column>
          <HeroCard
            title={"Nome: ???? - CodeNome: CodeNome: Python"}
            text={
              "Nascimento: Desconhecido, possivelmente o Brasil. Ele se juntou aos Sentinelas durante os primeiros anos da iniciativa, ele não tinha poderes especiais, apenas o conhecimento sobre tecnologia, estava sempre com seu terno e após a perda de um de seus braços em uma missão, ele começou a melhorar o terno criando outras modalidades para ele. Infelizmente Python morreu em combate em uma missão para deter Klaus, mas graças a seu sacrifício, outros puderam escapar para viver para completar a missão e continuar a Iniciativa Sentinelas"
            }
            src={python}
          />

          <HeroCard
            title={"Nome: Arjuna Shankar - CodeNome: Guardian"}
            text={
              "Nascido em Nashik - Índia. Ele teve uma breve estadia com as Sentinelas, servindo como mensageiro de uma guerra no futuro, depois de ser avisado por um ser mítico que o arco usado por Arjuna também lhe pertencia. Em sua primeira missão, ele enfrentou um ser que atacou um banco de sangue local. As razões não são conhecidas, mas Arjuna se desvinculou das Sentinelas e seu paradeiro é desconhecido"
            }
            src={arjuna}
          />
        </Column>
      </Container>
    </>
  );
};
