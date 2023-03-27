import { Header } from "../../../components/Header";
import { Container, Content, Image, Title, Text } from "./styles";
import mitsura from "../../../assets/ActiveHeroes/Mitsura.png";

const Act2: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>
            EM CONSTRUÇÃO - evolução para Organização Sentinelas, deixei de ser
            apenas uma rede de comunicação para uma organização filiada aos
            governos e grandes empresas do mundo, gerando trabalhos e lucros.
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            arcu id purus feugiat dictum. Duis tristique tortor nunc, ut aliquet
            ipsum consequat vel. Nullam posuere commodo elit. Duis fermentum, mi
            vitae tristique tristique, nunc nulla commodo velit, eget luctus
            enim ipsum sed magna. Morbi sem elit, tincidunt eget erat ac,
            eleifend iaculis tellus. Vivamus fringilla, massa non pellentesque
            laoreet, sapien nibh auctor libero, nec facilisis lorem velit ut
            purus.
          </Text>
          <Image src={mitsura} alt="Imagem da landing page" />
          <Text>
            Nullam efficitur, risus eu aliquet luctus, purus mi bibendum dolor,
            vitae vehicula lacus mi eget velit. Proin sit amet faucibus ipsum.
            Mauris suscipit justo ut sapien vestibulum imperdiet. Maecenas sit
            amet justo ut sem feugiat fringilla. Fusce non elit non nibh luctus
            tristique. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Nunc gravida pulvinar lectus, vel
            sagittis sapien lobortis sed. Pellentesque congue ligula at magna
            posuere sagittis. Praesent vestibulum nisi arcu, ac ultrices magna
            blandit a. Sed vel diam sed mauris malesuada pulvinar ac vitae urna.
          </Text>
        </Content>
      </Container>
    </>
  );
};

export default Act2;
