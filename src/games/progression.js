import getRandomInt from '../utils';
import gameSkeleton from '../gameSkeleton';

const progressionSize = 10;
const maxProgressionStep = 100;

const generateProgression = (step, size) => {
  const firstElement = getRandomInt(0, 100);

  const iter = (stepNumber, prevElement, acc) => {
    if (stepNumber < 1) {
      return acc;
    }

    const nextElement = prevElement + step;

    return iter(stepNumber - 1, nextElement, [...acc, nextElement]);
  };

  return iter(size - 1, firstElement, [firstElement]);
};

// game options
const gameDescription = 'What number is missing in this progression?';

const generateQuestionAnswer = () => {
  const step = getRandomInt(1, maxProgressionStep);
  const missedElementIndex = getRandomInt(0, progressionSize);
  const progression = generateProgression(step, progressionSize);

  const question = progression
    .map((item, i) => (i === missedElementIndex ? '..' : item))
    .join(' ');

  const answer = String(progression[missedElementIndex]);

  return [question, answer];
};

export default () => gameSkeleton(gameDescription, generateQuestionAnswer);
