import getRandomInt from '../utils';
import gameSkeleton from '../gameSkeleton';

const maxNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const maxPossibleDivider = Math.floor(number / 2);

  const iter = (divider) => {
    if (divider > maxPossibleDivider) {
      return true;
    }

    if (number % divider === 0) {
      return false;
    }

    return iter(divider + 1);
  };

  return iter(2);
};

// game options
const gameDescription = 'Answer "yes" if number is prime otherwise answer "no".';

const generateQuestionAnswer = () => {
  const question = getRandomInt(0, maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => gameSkeleton(gameDescription, generateQuestionAnswer);
