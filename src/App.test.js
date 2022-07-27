import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const inputArray = [1, 2, 3, 5, 6, 8, 9];

  render(<App />);
  const resultElement = screen.getByTestId(/resultField/);
  const resultString = resultElement.textContent
  const resultArray = resultString.split(', ')

  console.log( resultArray )

  let isCorrect = true;

  resultArray.map((value, i) => {
    if (Number(value) !== (inputArray[i] * inputArray[i])) {
      isCorrect = false
    }
  })

  expect(isCorrect).toBeTruthy();
});
