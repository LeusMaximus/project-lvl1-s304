import readlineSync from 'readline-sync';
import * as messages from '../messagesConstants';

export default () => {
  console.log(messages.WELCOME_MESSAGE);

  const userName = readlineSync.question(messages.ASK_NAME_MESSAGE);

  console.log(`${messages.GREETING_MESSAGE} ${userName}!`);
};
