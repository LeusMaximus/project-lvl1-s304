import readlineSync from 'readline-sync';
import { getRandomInt, isEven } from '../utils';
import * as messages from '../messagesConstants';

export default () => {
  const questionsNumber = 3;
  const maxNumber = 1000;
  const positivePoint = 'yes';
  const negativePoint = 'no';

  console.log(messages.WELCOME_MESSAGE);
  console.log(`Answer "${positivePoint}" if number even otherwise answer "${negativePoint}".`);
  console.log('');

  const userName = readlineSync.question(messages.ASK_NAME_MESSAGE);
  console.log(`${messages.GREETING_MESSAGE} ${userName}!`);
  console.log('');

  // start game
  const gameIter = (stepsNumber) => {
    if (!stepsNumber) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = getRandomInt(0, maxNumber);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(question) ? negativePoint : positivePoint;

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');

    gameIter(stepsNumber - 1);
  };

  gameIter(questionsNumber);
};
