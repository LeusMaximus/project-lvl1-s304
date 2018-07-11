import readAnswer from '../utils/readAnswer';
import printMessage from '../utils/printMessage';
import getRandomInt from '../utils/getRundomInt';
import * as messages from '../constants/messages';

const POSITIVE_POINT = 'yes';
const NEGATIVE_POINT = 'no';

export default (questionsNumber = 3, maxNumber = 1000) => {
  printMessage(messages.WELCOME_MESSAGE);
  printMessage(`Answer "${POSITIVE_POINT}" if number even otherwise answer "${NEGATIVE_POINT}".`);
  printMessage('');

  const userName = readAnswer(messages.ASK_NAME_MESSAGE);
  printMessage(`${messages.GREETING_MESSAGE} ${userName}!`);
  printMessage('');

  // start game
  let isCorrectAnswer = true;
  let loopNumber = questionsNumber;

  while (isCorrectAnswer && loopNumber) {
    const number = getRandomInt(0, maxNumber);

    printMessage(`Question: ${number}`);
    const answer = readAnswer('Your answer:');

    const currentUnswer = number % 2 === 0 ? NEGATIVE_POINT : POSITIVE_POINT;

    if (answer !== currentUnswer) {
      isCorrectAnswer = false;
      printMessage(`'${answer}' is wrong answer ;(. Correct answer was '${currentUnswer}'.`);
      printMessage(`Let's try again, ${userName}!`);
    } else {
      printMessage('Correct!');
    }

    loopNumber -= 1;
  }

  if (isCorrectAnswer) {
    printMessage(`Congratulations, ${userName}!`);
  }
};
