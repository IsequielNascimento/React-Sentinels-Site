import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.div`

  width: 100%;
  max-width: 80%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
 


`;

export const Wrapper = styled.div`
  width: 100%;
  height: 124px;
  display: flex;
  displa-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
 
`;
export const Row = styled.div`


  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: end;


 
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const LogoPic = styled.img`
  width: 184px;
  height: 124px;
  border-radius: 22px;
`;

export const Line = styled.div`
  margin-top: 10px;

 
`;
