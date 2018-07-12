import { getRandomInt, isEven } from '../utils';
import gameSkeleton from '../gameSkeleton';

export default () => {
  const maxNumber = 1000;
  const positivePoint = 'yes';
  const negativePoint = 'no';

  // game options
  const gameDescription = `Answer "${positivePoint}" if number even otherwise answer "${negativePoint}".`;
  const getGameQuestion = () => getRandomInt(0, maxNumber);
  const getCorrectAnswer = question => (isEven(question) ? negativePoint : positivePoint);

  gameSkeleton(gameDescription, getGameQuestion, getCorrectAnswer);
};
