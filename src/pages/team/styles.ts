import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%%;
  height: 100%;

  margin: 0 auto;
  margin-top: 120px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Row = styled.div`
  width: 100%;
  max-width: 70%;

  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Card = styled.button`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;

  background-color: #191a1e;
  color: #ffffff;
  height: 100px;
  width: 500px;
  border-radius: 25px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;

  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 70%;
  margin-top: 50px;

  background-color: #191a1e;

  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const CardDescription = styled.p`
  width: 80%;
  margin: 24px auto;
  background-color: #191a1e;

  font-size: 1.5rem;
  text-indent: 16px;
`;
