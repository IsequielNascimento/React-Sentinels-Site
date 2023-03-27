import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Button } from  "./styles";


export const HistoryHeroes = () => {

  const navigate = useNavigate();

  const HandleClickAct1 = () => {
    navigate("/Atos/Act1"); 
  } 

  return (
    <>
    <Header />
    <Container>
      <Button onClick={HandleClickAct1}>Ato 1</Button>
      <Button>Ato 2</Button>
      <Button>Ato 3</Button>
    </Container>
    </>
  );
};

