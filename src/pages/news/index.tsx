import { Header } from "../../components/Header";
import { NewsCard } from "../../components/NewsCard";

import { Column, Container } from "./styles";

import fire from "../../assets/News/Fire.png";
import reunion from "../../assets/News/Reunion.png";
import fail from "../../assets/News/Fail.png";
export const News = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <NewsCard src={fire} text={"Fighting breaks out during the party that would make peace between the species official, chaos, destruction and blood is all we know so far. May our heroes once again save us from the end."} />
          <NewsCard src={reunion} text={"Earth leaders, heroes, and Gnxtha meet tonight."} />
          <NewsCard src={fail}text={"Mesmo após o fim da guerra, ainda há pequenos conflitos entre ambas as partes, heróis trabalham arduamente para um cessar fogo completo, ainda essa noite haverá a oficialização do tratado de paz entre os líderes da terra e Gnxtha."}  />
        </Column>
      </Container>
    </>
  );
};
