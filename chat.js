/* Created by Joel Southall on March 28, 2023 for his Ifrit chatgpt project */

// Import the OpenAI package
const openai = require('openai');

// Set your OpenAI API key
const apiKey = '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';

// Initialize the OpenAI API client with your API key
const client = new openai(apiKey);

// Set up your prompt and parameters for the API request
const prompt = 'Hello, Ifrit!';
const parameters = {
    engine: 'davinci',    // Which OpenAI engine to use
    prompt: prompt,       // The chat prompt to send to the engine
    maxTokens: 50,        // The maximum number of tokens to generate in the response
    temperature: 0.7,     // The "creativity" of the response (higher = more creative)
    stop: '\n'            // The character(s) to use as the stop sequence for the response
};

// Call the OpenAI API to generate a response to the prompt
client.complete(parameters, function (error, response) {
    if (error) {
        console.log(error);    // If there was an error, log it to the console
    } else {
        const chatResponse = response.choices[0].text;    // Get the response from the API
        console.log(chatResponse);                        // Log the response to the console
    }
});