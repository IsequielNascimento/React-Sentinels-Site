import styled from "styled-components";

import { device } from "../../styles/device";

export const InfoContainer = styled.div`

  width: 100%;
  max-width: 40%;
  height: 100%;
  margin: 0 auto;

  background-color: #191a1e;
  padding: 16px;
  text-align: left;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media ${device.tablet} {
    
    margin-top: 24px;
    max-width: 65%;
  }
`;


export const Text = styled.p`
 
  max-width: 80%;
  text-indent: 16px;
  font-size: 22px;
  font-weight: normal;
  margin: 0 auto;
  white-space: pre-line;
  line-height: 1.1;
 
  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;
