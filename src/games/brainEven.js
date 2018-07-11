import readlineSync from 'readline-sync';
import getRandomInt from '../getRandomInt';
import * as messages from '../messagesConstants';

const POSITIVE_POINT = 'yes';
const NEGATIVE_POINT = 'no';

export default (questionsNumber, maxNumber) => {
  console.log(messages.WELCOME_MESSAGE);
  console.log(`Answer "${POSITIVE_POINT}" if number even otherwise answer "${NEGATIVE_POINT}".`);
  console.log('');

  const userName = readlineSync.question(messages.ASK_NAME_MESSAGE);
  console.log(`${messages.GREETING_MESSAGE} ${userName}!`);
  console.log('');

  // start game
  const gameIter = (index) => {
    if (!index) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    const question = getRandomInt(0, maxNumber);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = question % 2 === 0 ? NEGATIVE_POINT : POSITIVE_POINT;

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }

    console.log('Correct!');

    return gameIter(index - 1);
  };

  gameIter(questionsNumber);
};
