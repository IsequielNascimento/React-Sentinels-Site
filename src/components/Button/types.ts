export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void | undefined;
    type?: string;
}

export interface IButtonStyled {
    variant: string;
}