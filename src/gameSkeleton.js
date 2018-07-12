import readlineSync from 'readline-sync';

export default (gameDescription, generateQuestionAnswer) => {
  const stepsNumber = 3;
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');

  // start game
  const gameIter = (currentStep) => {
    if (currentStep === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const questionAnswer = generateQuestionAnswer();

    const question = questionAnswer.next().value;

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = questionAnswer.next().value;

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');

    gameIter(currentStep - 1);
  };

  gameIter(stepsNumber);
};
