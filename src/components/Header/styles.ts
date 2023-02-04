import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.div`

  width: 100%;
  max-width: 80%;


  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
 
  @media ${device.tablet} {
    max-width: 80%;
    justify-content: center;
  }


`;

export const Wrapper = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  display-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
 
`;
export const Row = styled.div`


  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;

  @media ${device.tablet} {
    flex-direction: column;
    max-width: 90%;

    align-items: center;
    
   
  }
 
`;

export const Menu = styled.div`
  max-width: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const LogoPic = styled.img`
  width: 184px;
  height: 124px;
  border-radius: 22px;
`;

export const Line = styled.div`
  margin-top: 10px;

 @media ${device.tablet} {
   margin-top: 25px;
 }
`;
