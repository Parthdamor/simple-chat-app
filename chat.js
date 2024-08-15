const messagesContainer = document.getElementById('messages');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

function sendMessage() {
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (username === '' || message === '') {
        alert('Username and message cannot be empty!');
        return;
    }

    const messageElement = document.createElement('p');
    messageElement.textContent = `${username}: ${message}`;
    messagesContainer.appendChild(messageElement);

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Clear the input field
    messageInput.value = '';
}

// Optional: Allow pressing Enter to send a message
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
