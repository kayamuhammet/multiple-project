const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botReplies = {
    'hello': 'Hello! How are you?',
    'hi': 'Hi! How are you today?',
    'peace be upon you': 'And peace be upon you! How are you?',

    'i am fine': 'Glad to hear! What will you do today?',
    'i am bad': 'Sorry to hear that. Is there anything I can help with?',
    'i am tired': 'Resting is good. Don’t forget to take time for yourself today.',
    'i am happy': 'Great! It’s nice to share your happiness.',
    'i am bored': 'Want to try something new? Movie, book, game...',

    'movie': 'Nice! Which movie will you watch?',
    'book': 'Cool! What are you reading?',
    'game': 'Game time! What are you playing?',
    'food': 'Enjoy your meal! What did you eat today?',
    'i will sleep': 'Good night. See you tomorrow!',

    'weather': 'How’s the weather today? Sunny or rainy?',
    'cold': 'Don’t forget to dress warmly!',
    'hot': 'Don’t forget to drink plenty of water!',

    'see you': 'See you soon!',
    'goodbye': 'Take care!',
    'bye': 'Bye bye! Let’s talk again soon.',
};

function addMessage(text, sender){
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
};

function getBotReply(textInput){
    let text = textInput.toLowerCase();
    for(let reply in botReplies){
        if(text.includes(reply)){
            return botReplies[reply];
        }
    }
    return 'Hmm, I didn’t understand that. Say something else!';
};

sendBtn.addEventListener('click', () => {
    const text = userInput.value;
    if(text === '')
        return;

    addMessage(text, 'user');
    userInput.value = '';

    setTimeout(() => {
        const botReply = getBotReply(text);
        addMessage(botReply, 'bot');    
    }, 1000);
});