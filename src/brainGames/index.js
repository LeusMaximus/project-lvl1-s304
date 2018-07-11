import printMessage from '../utils/printMessage';
import readAnswer from '../utils/readAnswer';

import * as messages from '../constants/messages';

export default () => {
  printMessage(messages.WELCOME_MESSAGE);

  const userName = readAnswer(messages.ASK_NAME_MESSAGE);

  printMessage(`${messages.GREETING_MESSAGE} ${userName}!`);
};
