import getRandomInt from '../utils';
import gameSkeleton from '../gameSkeleton';

const maxOperandValue = 100;

const getGcd = (m, n) => {
  const minValue = Math.min(m, n);
  const maxValue = Math.max(m, n);

  const iter = (max, min) => {
    const newMax = min;
    const newMin = max % min;

    if (newMin === 0) {
      return min;
    }

    return iter(newMax, newMin);
  };

  return iter(maxValue, minValue);
};

// game options
const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateQuestionAnswer = () => {
  const firstOperand = getRandomInt(0, maxOperandValue);
  const secondOperand = getRandomInt(0, maxOperandValue);

  const question = `${firstOperand} ${secondOperand}`;
  const answer = String(getGcd(firstOperand, secondOperand));

  return [question, answer];
};

export default () => gameSkeleton(gameDescription, generateQuestionAnswer);
