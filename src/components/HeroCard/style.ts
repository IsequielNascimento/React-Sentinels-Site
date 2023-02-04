import styled from "styled-components";
import { device } from "../../styles/device";

export const HeroCardContainer = styled.div`
  display: flex;
  flex-direction: Row;
  align-items: center;
  justify-content: center;
  max-width: 100%;


  margin: 32px 0;
  background-color: #191a1e;
  border-radius: 32px;

  padding: 16px;

  @media ${device.tablet} {
    flex-direction: column;
    
  }

`;

export const HeroCardImage = styled.img`
  min-width: 30%;
  min-height: 50%;
  max-height: 100%;
  max-width: 100%;
  border-radius: 360px;

@media ${device.laptopL} {
    min-width: 45%;
  }

  @media ${device.tablet} {

    margin-bottom: 40px;
    padding: 16px;
  }
  

`;

export const HeroCardText = styled.p`
  line-height: 1.5;
  text-indent: 32px;
  text-align: left;
  white-space: pre-wrap;
  font-size: 1.5rem;
  padding: 16px;
  margin: 0 auto;
  

  @media ${device.laptopL} {
    font-size: 1.36rem;
    line-height: 1.1;
  }

  @media ${device.laptop} {
    font-size: 1.1rem;

    line-height: 1.1;

  }

  @media ${device.tablet} {
    line-height: 1.2;
    font-size: 16px;
  }

  @media ${device.mobileL} {
  
    font-size: 0.8rem;
  }

  @media ${device.mobileS} {
    font-size: 0.7rem;
  }
`;
export const HeroCardTitle = styled.h1`
  
  margin: 0 auto;
  font-size: 1.8rem;
  @media ${device.laptopL} {
    font-size: 1.6rem;

  }

@media ${device.laptop} {
  
    
    font-size: 1.2rem;
    
  }


  @media ${device.tablet} {
  
    font-size: 1rem;
  }

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  @media ${device.laptop} {
    height: 380px;
    max-height: 90%;
  }
  @media ${device.laptopL} {
    height: 280px;
  }
`;
