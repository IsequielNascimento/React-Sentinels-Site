import styled from "styled-components";

export const HeroCardContainer = styled.div`
  display: flex;
  flex-direction: Row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 32px 0;
  background-color: #191a1e;
  border-radius: 32px;
  
  padding: 16px;
`;

export const HeroCardImage = styled.img`
  min-width: 350px;
  min-height: 350px;
  max-width: 350px;
  max-height: 350px;
  border-radius: 180px;
`;

export const HeroCardText = styled.p`
  line-height: 1.5;
  text-indent: 32px;
  text-align: left;
  white-space: pre-wrap;
  font-size: 24px;
  margin: 0 32px;
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
  height: 100%;

`;


