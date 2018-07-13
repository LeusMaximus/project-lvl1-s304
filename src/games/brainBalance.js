import getRandomInt from '../utils';
import gameSkeleton from '../gameSkeleton';

const maxOperandValue = 10000;

const balanceNumber = (number) => {
  const strNumber = String(number);

  if (strNumber.length === 1) {
    return number;
  }

  const sortNumbers = (a, b) => Number(a) - Number(b);

  const numbersArr = strNumber.split('').sort(sortNumbers);

  const iter = (numbers) => {
    const firstNumber = Number(numbers[0]);
    const lastNumber = Number(numbers[numbers.length - 1]);

    if (lastNumber - firstNumber <= 1) {
      return Number(numbers.join(''));
    }

    const newNumbers = [
      firstNumber + 1,
      ...numbers.slice(1, -1),
      lastNumber - 1,
    ].sort(sortNumbers);

    return iter(newNumbers);
  };

  return iter(numbersArr);
};

// game options
const gameDescription = 'Balance the given number.';

const generateQuestionAnswer = () => {
  const number = getRandomInt(0, maxOperandValue);

  const question = String(number);
  const answer = String(balanceNumber(number));

  return [question, answer];
};

export default () => gameSkeleton(gameDescription, generateQuestionAnswer);
