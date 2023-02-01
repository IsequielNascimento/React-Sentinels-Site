import styled from "styled-components";

export const NewsCardContainer = styled.div`   
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  margin: 32px 0;
  background-color: #191a1e;
  border-radius: 32px;
  
  padding: 16px;
  `;

export const NewsCardImage = styled.img`
  min-width: 250px;
    min-height: 200px;
    max-width: 250px;
    max-height: 200px;
    border-radius: 180px;
    `;
export const NewsCardText = styled.p`
  line-height: 1.5;
  text-indent: 32px;
  text-align: left;
  white-space: pre-wrap;
  font-size: 24px;
  margin: 0 32px;
  `
