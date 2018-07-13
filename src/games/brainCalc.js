import getRandomInt from '../utils';
import gameSkeleton from '../gameSkeleton';

export default () => {
  const maxOperandValue = 100;
  const MathOperationsList = ['+', '-', '*'];

  const calcExpression = (firstOperand, secondOperand, operation) => {
    switch (operation) {
      case '+':
        return firstOperand + secondOperand;

      case '-':
        return firstOperand - secondOperand;

      case '*':
        return firstOperand * secondOperand;

      default:
        throw new Error(`Unknown operation '${operation}'`);
    }
  };

  // game options
  const gameDescription = 'What is the result of the expression?';

  const generateQuestionAnswer = () => {
    const firstOperand = getRandomInt(0, maxOperandValue);
    const secondOperand = getRandomInt(0, maxOperandValue);
    const operation = MathOperationsList[getRandomInt(0, MathOperationsList.length)];


    const question = `${firstOperand} ${operation} ${secondOperand}`;
    const answer = String(calcExpression(firstOperand, secondOperand, operation));

    return [question, answer];
  };

  gameSkeleton(gameDescription, generateQuestionAnswer);
};
