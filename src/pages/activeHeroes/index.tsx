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
        title={"Name: Arcia Rinslet - Codename: Bullet"} 
        text={"Born in Kangaamiut - Greenland. Joined the Sentinels at the age of 20 after completing her training with the Silver Maidens, always carries with her a cursed long-range weapon capable of both inflicting damage on enemies and healing allies, as strange as this last part may seem. He possesses a remarkable stamina in counterbalance to his speed. As one of the newest members of the sentinels, his first mission was to invade a Gnxtha army spaceship as part of the distraction team."} 
        src={arcia}/>    

        <HeroCard 
        title={"Name: Leonnardo Rodriguez - Codename: Blue Eyes"} 
        text={"Born in Curitiba - Brazil.  He grew up and lived in an orphanage until the beginning of his life as an adult, when he was involved in a tragic accident that resulted in him being the only survivor, before joining the Sentinels, he had as a mentor AqueJett whose powers were similar to his, although he only uses Ice and Mist, his real power includes the manipulation of water molecules in all their physical states. He has magic circles in shades of blue in place of the iris of his eyes, giving him microscopic vision, and he can create a kind of shared vision between allies."}
        src={leo}/>

<HeroCard 
        title={"Name: Latrel - Codename: ???"} 
        text={"Current leader of the Sentinels, whose powers involve nano-technology and emotion manipulation."}
        src={latrel}/>
     </Column>   
      </Container>
    </>
  );
};
