import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: #46BFFF;
  color: white;
  cursor: pointer;
  width: 50%;
  height: 15%;
`;