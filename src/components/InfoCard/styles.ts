import styled from "styled-components";
import React from "react";
import { device } from "../../styles/device";

export const InfoContainer = styled.div`

  width: 100%;
  max-width: 40%;
  height: 100%;
  background-color: #191a1e;
  padding: 16px;
  text-align: left;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;


export const Text = styled.p`
 
  max-width: 80%;
  text-indent: 16px;
  font-size: 22px;
  font-weight: normal;
  margin: 8px 16px;
  white-space: pre-line;
  line-height: 1.1;
 

`;
