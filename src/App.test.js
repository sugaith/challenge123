import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const inputArray = [-10, -5, 0, 5, 10];

  render(<App />);
  const resultElement = screen.getByTestId(/resultField/);
  const resultString = resultElement.textContent
  const resultArray = resultString.split(', ')

  let isCorrect = true;

  resultArray.map((value, i) => {
    if (Number(value) !== (inputArray[i] * inputArray[i])) {
      isCorrect = false
    }
  })

  expect(isCorrect).toBeTruthy();
});
