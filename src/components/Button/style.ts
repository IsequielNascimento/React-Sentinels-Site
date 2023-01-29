import styled, {css} from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: transparent;
    color: #46BCFF;
    padding 2px 32px;
    position: relative;
    min-width: 120px;
    border-radius: 22px;
    height: 33px;

    font-family: "Open-Sans";
    font-style: bold;
    font-size: 16px;


    ${({variant}) => variant !== "primary" && css`
    min-width: 120px;
    height: 33px;
    color: #FFFFFF;
    
    background: transparent;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        
    `}
    &::after {
        content: "";
        position: absolute;
        border: 1px solid #46BCFF;
        top: -5px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }
`