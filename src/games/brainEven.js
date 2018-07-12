import { getRandomInt, isEven } from '../utils';
import gameSkeleton from '../gameSkeleton';

export default () => {
  const maxNumber = 1000;
  const positivePoint = 'yes';
  const negativePoint = 'no';

  // game options
  const gameDescription = `Answer "${positivePoint}" if number even otherwise answer "${negativePoint}".`;

  const generateQuestionAnswer = function* generateQuestionAnswer() {
    const question = getRandomInt(0, maxNumber);
    yield question;

    const answer = isEven(question) ? negativePoint : positivePoint;
    yield answer;
  };

  gameSkeleton(gameDescription, generateQuestionAnswer);
};
