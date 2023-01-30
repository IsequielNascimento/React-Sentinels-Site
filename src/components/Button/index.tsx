import React from "react";
import { ButtonContainer } from "./style"
import { IButton } from "./types"

export const Button = ({title, variant="", onClick}:IButton) => {
    return(
        <ButtonContainer variant={variant} onClick={onClick}>

            {title}
           
        </ButtonContainer>
    )

}