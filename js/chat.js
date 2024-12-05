const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Append message to the chatbox
function appendMessage(content, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = content;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}

// Function to get bot response using OpenAI API
async function getBotResponse(userText) {
    console.log("Sending request to OpenAI API...");
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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` // Replace with your valid API key
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userText }]
        })
    });

    if (!response.ok) {
        console.log("Error with response:", response.status, response.statusText);
        if (response.status === 429) {
            console.log("Rate limit exceeded. Retrying...");
            // Wait for 5 seconds before retrying
            await new Promise(resolve => setTimeout(resolve, 5000));
            return await getBotResponse(userText); // Retry the request
        }
        return "Sorry, something went wrong.";
    } else {
        const data = await response.json();
        console.log("Response data:", data);
        return data.choices[0].message.content;
    }
}

// Event listener for send button click
sendButton.addEventListener('click', async () => {
    const userText = userInput.value.trim();
    console.log("User input:", userText);
    
    if (userText) {
        appendMessage(userText, 'user');
        userInput.value = ''; // Clear input field

        // Get bot's reply
        const botReply = await getBotResponse(userText);
        console.log("Bot reply:", botReply);
        appendMessage(botReply, 'bot');
    }
});

// Initial message from bot
appendMessage("You see a vast, ruined city with abandoned cars and eerie silence. What's your next move?", 'bot');
