import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('should renders correctly', async () => {
    const { getByText } = render(<App />);
    expect(getByText('Select a set')).toBeInTheDocument();
    expect(getByText('Gather')).toBeInTheDocument()
  });

  test('calls onclick when click', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<button onClick={handleClick}>Gather</button>)
    const button = getByText('Gather');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  })
})