import { getRandomInt } from '../utils';

import gameSkeleton from '../gameSkeleton';

export default () => {
  const maxOperandValue = 100;
  const MathOperationsList = ['+', '-', '*'];

  const getRandomExpression = (maxNumberValue, MathOperations) => {
    const firstOperand = getRandomInt(0, maxNumberValue);
    const secondOperand = getRandomInt(0, maxNumberValue);
    const operation = MathOperations[getRandomInt(0, MathOperations.length)];

    return `${firstOperand} ${operation} ${secondOperand}`;
  };

  const calcExpression = (expr) => {
    const exprParts = expr.split(' ');
    const firstOperand = Number(exprParts[0]);
    const secondOperand = Number(exprParts[2]);
    const operand = exprParts[1];

    switch (operand) {
      case '+':
        return firstOperand + secondOperand;

      case '-':
        return firstOperand - secondOperand;

      case '*':
        return firstOperand * secondOperand;

      default:
        throw new Error(`Unknown operand '${operand}'`);
    }
  };

  // game options
  const gameDescription = 'What is the result of the expression?';
  const getGameQuestion = () => getRandomExpression(maxOperandValue, MathOperationsList);
  const getCorrectAnswer = question => String(calcExpression(question));

  gameSkeleton(gameDescription, getGameQuestion, getCorrectAnswer);
};
