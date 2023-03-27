import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Button } from  "./styles";


export const HistoryHeroes = () => {

  const navigate = useNavigate();

  const HandleClickAct1 = () => {
    navigate("/Atos/Act1"); 
  } 
  const HandleClickAct2 = () => {
    navigate("/Atos/Act2"); 
  } 
  const HandleClickAct3 = () => {
    navigate("/Atos/Act3"); 
  } 

  return (
    <>
    <Header />
    <Container>
      <Button onClick={HandleClickAct1}>Ato 1</Button>
      <Button onClick={HandleClickAct2}>Ato 2</Button>
      <Button onClick={HandleClickAct3}>Ato 3</Button>
    </Container>
    </>
  );
};

