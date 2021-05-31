import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { getCards, getSets } from './api';
import SearchSvg from './Search.gif';

const ScreenWrapper = styled.div`
  width: 100%;
  align-items: center;
  margin: 20px;
`;

const Header = styled.div`
  margin: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const SearchWrapper = styled.div`
  display: flex;
`;

const Text = styled.p`
  margin: 0;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 10px;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 20%;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
`;

const Button = styled.button`
  color: wheat;
  background-color: black;
  border-radius: 5px;
  width: 75px;
  font-size: 15px;
`;

const SearchImage = styled.img``;

const App = () => {
  const [cards, setCards] = useState([]);
  const [sets, setSets] = useState([]);
  const [currentSet, setCurrentSet] = useState({});
  const [loading, setLoading] = useState(false);
  const [pageSize] = useState(100);

  const getCardsBySetName = useCallback(async (setName, pageSize) => {
    setLoading(true);
    const { cards } = await getCards(setName, pageSize);
    setCards(cards);
    setLoading(false);
  }, []);

  useEffect(() => {
    const getAllAvailableSets = async () => {
      const { sets } = await getSets();
      setSets(sets);
    };
    getCardsBySetName();
    getAllAvailableSets();

  }, [getCardsBySetName]);

  const onClick = async () => getCardsBySetName(currentSet.name, pageSize);

  const onChange = e => {
    const set = sets.find(set => set.name === e.target.value);
    setCurrentSet(set);
  };

  return (
    <ScreenWrapper>
      <Header>
        <Text>Select a set</Text>
        <SearchWrapper>
          <InputContainer>
            <Input list="setnames" name="sets" onChange={onChange} />
            <datalist id="setnames">
              {sets && sets.map(set => (
                <option key={set.code} value={set.name}></option>
              ))}
            </datalist>
            <Button data-testid='gather' onClick={onClick}>Gather</Button>
          </InputContainer>
        </SearchWrapper>
      </Header>
      {loading ?
        <SearchIconWrapper>
          <SearchImage src={SearchSvg} alt="loading..." />
        </SearchIconWrapper> :
        <CardContainer>
          {cards.map(card => {
            const { id, imageUrl, setName, name, rarity, type } = card;
            return (
              <Card
                key={id}
                setName={setName}
                cardName={name}
                imageUrl={imageUrl}
                rarity={rarity}
                type={type}
                releaseDate={currentSet ? currentSet.releaseDate : ''}
              />
            )
          })}
        </CardContainer>
      }
    </ScreenWrapper>
  );
}

export default App;
