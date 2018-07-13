import { getRandomInt, getGcd } from '../utils';
import gameSkeleton from '../gameSkeleton';

export default () => {
  const maxOperandValue = 100;

  // game options
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  const generateQuestionAnswer = () => {
    const firstOperand = getRandomInt(0, maxOperandValue);
    const secondOperand = getRandomInt(0, maxOperandValue);

    const question = `${firstOperand} ${secondOperand}`;
    const answer = String(getGcd(firstOperand, secondOperand));

    return [question, answer];
  };

  gameSkeleton(gameDescription, generateQuestionAnswer);
};
