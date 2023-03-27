import { Header } from "../../components/Header";
import { HeroCard } from "../../components/HeroCard";
import { Column, Container } from "./styles";
import arcia from "../../assets/ActiveHeroes/Arcia.png";
import leo from "../../assets/ActiveHeroes/Leo.png";
import latrel from "../../assets/ActiveHeroes/Latrel.png";

export const ActiveHeroes = () => {
  return (
    <>
      <Header />

      <Container>
        <Column>
          <HeroCard
            title={"Nome: Arcia Rinslet - CodeNome: Bullet"}
            text={
              "Nascida em Kangaamiut - Groenlândia. Juntou-se às Sentinelas aos 20 anos de idade após completar seu treinamento com as Silver Maidens, sempre traz consigo uma maldita arma de longo alcance capaz tanto de infligir danos aos inimigos como de curar aliados, por mais estranha que esta última parte possa parecer. Ele possui uma notável resistência em contrapeso à sua velocidade. Como um dos mais novos membros das sentinelas, sua primeira missão foi invadir uma nave espacial do exército Gnxtha como parte da equipe de distração."}
            src={arcia}
          />

          <HeroCard
            title={"Nome: Leonnardo Rodriguez - CodeNome: Blue Eyes"}
            text={
              "Nascido em Curitiba - Brasil.  Ele cresceu e viveu em um orfanato até o início de sua vida como adulto, quando se envolveu em um trágico acidente que resultou em ele ser o único sobrevivente, antes de se juntar às Sentinelas, ele teve como mentor AqueJett cujos poderes eram semelhantes aos seus, embora ele só usa Ice and Mist, seu verdadeiro poder inclui a manipulação de moléculas de água em todos os seus estados físicos. Ele tem círculos mágicos em tons de azul no lugar da íris de seus olhos, dando-lhe uma visão microscópica, e ele pode criar uma espécie de visão compartilhada entre os aliados"            }
            src={leo}
          />

          <HeroCard
            title={"Nome: Latrel - CodeNome: ???"}
            text={
              "Líder atual das Sentinelas, cujos poderes envolvem nano-tecnologia e manipulação de emoções"            }
            src={latrel}
          />
        </Column>
      </Container>
    </>
  );
};
