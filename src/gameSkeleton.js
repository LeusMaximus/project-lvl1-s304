import readlineSync from 'readline-sync';
import * as messages from './messagesConstants';

export default (gameDescription, getGameQuestion, getCorrectAnswer) => {
  const stepsNumber = 3;
  console.log(messages.WELCOME_MESSAGE);
  console.log(gameDescription);
  console.log('');

  const userName = readlineSync.question(messages.ASK_NAME_MESSAGE);
  console.log(`${messages.GREETING_MESSAGE} ${userName}!`);
  console.log('');

  // start game
  const gameIter = (remainingSteps) => {
    if (!remainingSteps) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = getGameQuestion();
    const correctAnswer = getCorrectAnswer(question);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');


    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');

    gameIter(remainingSteps - 1);
  };

  gameIter(stepsNumber);
};
