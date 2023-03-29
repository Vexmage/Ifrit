/* Created by Joel Southall on March 28, 2023 for his Ifrit chatgpt project */

const { ChatGPTAPI } = require('chatgpt');

async function chat() {
    const api = new ChatGPTAPI({
        apiKey: 'YOUR_API_KEY'
    });

    const res = await api.sendMessage({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: 'Who won the world series in 2020?' },
            { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
            { role: 'user', content: 'Where was it played?' },
        ],
    });

    console.log(res.text);
}

chat();