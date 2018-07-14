import getRandomInt from '../utils';
import gameSkeleton from '../gameSkeleton';

const maxNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const iter = (divider) => {
    if (divider < 2) {
      return true;
    }

    if (number % divider === 0) {
      return false;
    }

    return iter(divider - 1);
  };

  return iter(Math.floor(number / 2));
};

// game options
const gameDescription = 'Is this number prime?';

const generateQuestionAnswer = () => {
  const question = getRandomInt(0, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => gameSkeleton(gameDescription, generateQuestionAnswer);
