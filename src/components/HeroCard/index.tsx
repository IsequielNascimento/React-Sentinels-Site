import React from "react";
import { Column, HeroCardContainer, HeroCardImage, HeroCardText, HeroCardTitle } from "./style";

import { IHeroCard } from "./types";

export const HeroCard = ({title,text,src }:IHeroCard) => {
  return (
    <div>
      <HeroCardContainer>
        <HeroCardImage src={src} />
        <Column>
        <HeroCardTitle>{title}</HeroCardTitle>
        <HeroCardText>{text}</HeroCardText>
        
        </Column>
      </HeroCardContainer>
    </div>
  );
};
