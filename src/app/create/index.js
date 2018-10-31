import FormInput from '../../lib/components/form/-input';
import MessageForm from '../../lib/components/message-form';
import MessagesList from '../../lib/components/messages-list';
import './main_forms.css';

import say from '../../lib/test'; // ES-module
// say('Javascript');
/*alert('wer1');
document.getElementsByClassName('message-form')[0].addEventListener('new-message', (event) => {
  document.getElementsByClassName('message-list')[0].addMessage(event.detail);
});
*/

const messageForm = new MessageForm;
const messagesList = new MessagesList;

var parentDiv = document.getElementsByClassName("container_4_msg_form")[0];

parentDiv.appendChild(messagesList);
parentDiv.appendChild(messageForm);

messageForm.addEventListener('new-message', function (event) {
    messagesList.addMessage(event.detail);
});