import getRandomInt from '../utils';
import gameSkeleton from '../gameSkeleton';

const maxOperandValue = 10000;

const compareNumbers = (a, b) => Number(a) - Number(b);

const sort = (arr, predicate) => {
  const clonedArr = [...arr];

  if (typeof (predicate) === 'function') {
    return clonedArr.sort(predicate);
  }

  return clonedArr.sort();
};

const balanceNumber = (number) => {
  const strNumber = String(number);
  const numberSize = strNumber.length;

  if (numberSize === 1) {
    return number;
  }

  const numbersArr = sort(strNumber.split(''), compareNumbers);

  const iter = (numbers) => {
    const firstNumber = Number(numbers[0]);
    const lastNumber = Number(numbers[numbers.length - 1]);

    if (lastNumber - firstNumber <= 1) {
      return numbers.join('');
    }

    const newNumbers = [firstNumber + 1, ...numbers.slice(1, -1), lastNumber - 1];
    const sortedNumbers = sort(newNumbers, compareNumbers);

    return iter(sortedNumbers);
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
