import styled from "styled-components";
import { device } from "../../styles/device";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 120px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid white;

`;
export const Row = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  width: 100%;
   


`;

export const Leader = styled.img`
  border: green solid 1px;
  width: 390px;
  height: 360px;
`;
