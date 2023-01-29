import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #000;
  width: 100%;
  max-width: 80%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  border: 1px solid red;

  width: 100%;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Row = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 100%;
`;

export const Menu = styled.div`
  
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid green;
`;

export const LogoPic = styled.img`
  width: 184px;
  height: 124px;
  border-radius: 22px;
`;
