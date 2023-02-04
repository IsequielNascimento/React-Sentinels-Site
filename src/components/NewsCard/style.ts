import styled from "styled-components";
import { device } from "../../styles/device";

export const NewsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;

  margin: 24px auto;
  background-color: #191a1e;
  border-radius: 32px;

  padding: 16px;

  @media ${device.tablet} {
    margin-top: 64px;
    margin-bottom: -32px;
    flex-direction: column;
    width: 90%;
  }
`;

export const NewsCardImage = styled.img`

  min-height: 200px;
  max-width: 200px;

  border-radius: 100%;
  margin: 0 auto;

  ;
`;
export const NewsCardText = styled.p`
  line-height: 1.5;
  text-indent: 32px;
  text-align: left;
  white-space: pre-wrap;
  font-size: 24px;
  margin: 0 auto;

  padding: 16px;
  @media ${device.laptopL} {
    font-size: 1.36rem;
    line-height: 1.1;
  }
  @media ${device.laptop} {
    font-size: 1.1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
 
 @media ${device.tablet} {

    flex-direction: column;
 }
`;
