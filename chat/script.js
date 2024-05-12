document.getElementById('chat-button').addEventListener('click', function() {
    var chatBox = document.getElementById('chat-box');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';  // Zmiana na 'block', aby pokazać chat
    } else {
        chatBox.style.display = 'none';  // Zmiana na 'none', aby ukryć chat
    }
});



function sendMessage() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();
    if (message) {
        displayMessage("Ty: " + message, 'user');
        fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            displayMessage("GPT: " + data.response, 'gpt');
        })
        .catch(error => console.error('Error:', error));
    }
    input.value = ''; 
}




function displayMessage(text, sender) {
    var messagesContainer = document.getElementById('messages-container');
    var messageDiv = document.createElement('div');
    messageDiv.className = sender;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
}
