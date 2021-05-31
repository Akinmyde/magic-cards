import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  height: auto;
  width: 80%;
  margin: 10px 20px;
  display: grid;
  border: 2px solid black;
`;

const Text = styled.p`
    margin: 5px;
`;

const CardHeader = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const BodyWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: contain;
`;


export const Card = ({ imageUrl, setName, cardName, rarity, type, releaseDate }) => (
    <CardWrapper>
        <CardHeader>
            <Text data-testid='name'>{`${setName} - ${cardName}`}</Text>
        </CardHeader>
        <BodyWrapper>
            <Image src={imageUrl} />
            <Text>ReleaseDate: {releaseDate}</Text>
            <Text>Rariry: {rarity}</Text>
            <Text>Type: {type}</Text>
        </BodyWrapper>
    </CardWrapper>
)