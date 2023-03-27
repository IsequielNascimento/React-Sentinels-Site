import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";
import { device } from "../../styles/device";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: transparent;
    color: #46BCFF;
    padding 2px 32px;
    position: relative;
    min-width: 120px;
    height: 33px;
    font-size: 34px;
    border: none;
    margin-bottom: 16px;
    &:hover {
    opacity: 0.6;
    cursor: pointer;

  }
    
  @media ${device.tablet} {
    min-width: 60px;
    height: 12px;
    font-size: 28px;
    margin-top: 16px;
    padding: 2px;
  }

  @media ${device.mobileL} {
    font-size: 1.2rem;
    padding: 12px;
  }
  @media ${device.mobileS} {
    font-size: 1rem;
    padding: 4px;
  }
     
    ${({ variant }) => // color change button when not primary
      variant !== "primary" &&
      css`
        min-width: 120px;
        height: 33px;
        color: #ffffff;

        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
        &::after {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          border-radius: 22px;
        }

      `}
`;
