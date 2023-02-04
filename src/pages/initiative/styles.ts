import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.main` 
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  margin-left: 24px;
 
  display: flex;
  flex-direction: column;

  align-items: center;
  
@media ${device.tablet} {
  max-width: 90%;
}

`;
export const Row = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  width: 100%;
   
 @media ${device.tablet} {
    flex-direction: column-reverse;
    width: 90%;
    align-items: center;
    
 }

`;

export const Leader = styled.img`
  max-width: 90%;
  
  width: 390px;
  height: 360px;

  @media ${device.tablet} {
    width: 65%;
    height: 80%;
  }
`;

