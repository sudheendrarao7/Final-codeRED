// Function to handle user input and send messages
async function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
  
    if (userInput === '') return;
  
    appendMessage('user', userInput);
  
    // Example: Check if user input includes 'joke' and fetch Chuck Norris joke
    if (userInput.toLowerCase().includes('joke')) {
      const joke = await fetchChuckNorrisJoke();
      appendMessage('bot', joke);
    } else {
      appendMessage('bot', "I'm sorry, I don't understand.");
    }
  
    document.getElementById('user-input').value = '';
  }
  
  // Function to fetch Chuck Norris joke from API
  async function fetchChuckNorrisJoke() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      if (!response.ok) {
        throw new Error('Failed to fetch Chuck Norris joke');
      }
      const data = await response.json();
      return data.value; // Assuming 'value' field contains the joke text
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error.message);
      return 'Oops! Failed to fetch a joke. Please try again later.';
    }
  }
  
  // Function to append messages to the message container
  function appendMessage(sender, message) {
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add(`${sender}-message`);
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
  
    // Scroll to bottom of message container
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
  
  // Event listener for pressing Enter key in input field
  document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Initial message from the bot
  appendMessage('bot', 'Welcome! Type your concern/any doubt.');
  
  // Example: Handle additional commands or APIs based on user input
  // Feel free to expand this functionality as needed
  