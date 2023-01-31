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
          title={"Name: ???? - Codename: Codename: Python"} 
          text={"Birth: Unknow, possibly Brazil. He joined the Sentinels during the first years of the initiative, he had no special powers, just the knowledge about technology, he was alwas with his suit and after the loss of one of his arms in a mission, he started to improve the suit by creating other modes for it. Unfortunately Python died in combat on a mission to stop Klaus, but thanks to his sacrifice others were able to escape to live to complete the mission and contiue the Sentinels Initiative."} 
          src={python}/>    
  
          <HeroCard 
          title={"Name: Arjuna Shankar - Codename: Guardian"} 
          text={"Born in Nashik - India. He had a short stay with the Sentinels, serving as a messenger of a war in the future after being warned by a mythical being that the bow used by Arjuna also belonged to him. On his first mission he faced a being that attacked a local blood bank. The reasons are not known, but Arjuna has disbanded from the Sentinels and his whereabouts are unknown."}
          src={arjuna}/>

       </Column>   
        </Container>
      </>
    );
  };