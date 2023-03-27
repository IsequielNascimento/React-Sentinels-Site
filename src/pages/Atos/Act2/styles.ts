
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #f5f5f5; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 80%;
  margin: 50px;
  padding: 20px;
  /* background-color: #ffffff; */
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px 0;
`;