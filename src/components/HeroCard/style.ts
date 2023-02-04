import styled from "styled-components";
import { device } from "../../styles/device";

export const HeroCardContainer = styled.div`
  display: flex;
  flex-direction: Row;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  margin: 32px 0;
  background-color: #191a1e;
  border-radius: 32px;
  
  padding: 16px;

  @media ${device.tablet} {
    
    flex-direction: column;
    max-width: 100%;
    

  }

`;

export const HeroCardImage = styled.img`
  min-width: 350px;
  min-height: 350px;
  max-width: 100%;
  border-radius: 180px;

  @media ${device.mobileL} {
    max-width: 50%;
    padding: 16px;
  
  }

  @media ${device.tablet} {
    max-width: 80px;
    margin-bottom: 40px;
  }

`;

export const HeroCardText = styled.p`
  line-height: 1.5;
  text-indent: 32px;
  text-align: left;
  white-space: pre-wrap;
  font-size: 24px;
  margin: 0 32px;

  @media ${device.tablet} {
    line-height: 1.2;
    font-size: 16px;
  }
`;
export const HeroCardTitle = styled.h1`
  margin-top: -32px;
  margin-bottom: 32px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;



`;


