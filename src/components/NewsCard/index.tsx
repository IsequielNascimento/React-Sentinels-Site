import React from 'react';
import { NewsCardContainer, NewsCardImage, NewsCardText, Row } from './style';
import { INewsCard } from './types';
export const NewsCard = ({src, text}:INewsCard) => {
    return (
        <div>
            
            <NewsCardContainer>
           <Row> 
               <NewsCardImage src={src} />
                <NewsCardText>{text}</NewsCardText>
           </Row>
            </NewsCardContainer>
        
        </div>
    )
}