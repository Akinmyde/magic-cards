import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Card } from '../Card'

test('renders correctly', () => {
  const { getByText } = render(<Card setName={'testSetName'} cardName={'testCardName'} releaseDate={'2007-07-13'} rarity='Uncommon' type='textType' />);
  expect(getByText('ReleaseDate: 2007-07-13')).toBeInTheDocument();
  expect(getByText('testSetName - testCardName')).toBeInTheDocument();
  expect(getByText('Rariry: Uncommon')).toBeInTheDocument();
  expect(getByText('Type: textType')).toBeInTheDocument();

})