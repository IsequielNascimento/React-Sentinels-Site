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
          <NewsCard
            src={fire}
            text={
              "A luta que oficializaria a paz entre as espécies, o caos, a destruição e o sangue é tudo o que sabemos até agora. Que nossos heróis nos salvem mais uma vez do fim"
            }
          />
          <NewsCard
            src={reunion}
            text={"Os líderes da Terra, heróis e Gnxtha se encontram esta noite."}
          />
          <NewsCard
            src={fail}
            text={
              "Mesmo após o fim da guerra, ainda há pequenos conflitos entre ambas as partes, heróis trabalham arduamente para um cessar fogo completo, ainda essa noite haverá a oficialização do tratado de paz entre os líderes da terra e Gnxtha."
            }
          />
        </Column>
      </Container>
    </>
  );
};
