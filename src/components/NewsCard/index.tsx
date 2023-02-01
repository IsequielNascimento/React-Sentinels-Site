import React from 'react';
import { NewsCardContainer, NewsCardImage, NewsCardText } from './style';
import { INewsCard } from './types';
export const NewsCard = ({src, text}:INewsCard) => {
    return (
        <div>
            <NewsCardContainer>
                <NewsCardImage src={src} />
                <NewsCardText>{text}</NewsCardText>
            </NewsCardContainer>

        </div>
    )
}