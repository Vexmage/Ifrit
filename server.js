const express = require('express');
const app = express();
const openai = require('openai');
const bodyParser = require('body-parser');

// Set your OpenAI API key
const apiKey = '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';

// Initialize the OpenAI API client with your API key
const client = new openai(apiKey);

// Use middleware to parse JSON data from requests
app.use(bodyParser.json());

// Set up a POST endpoint for generating chat responses
app.post('/generate', (req, res) => {
    // Get the chat prompt from the request body
    const prompt = req.body.prompt;

    // Set up the parameters for the OpenAI API request
    const parameters = {
        engine: 'davinci',
        prompt: prompt,
        maxTokens: 50,
        temperature: 0.7,
        stop: '\n'
    };

    // Call the OpenAI API to generate a response to the prompt
    client.complete(parameters, function (error, response) {
        if (error) {
            console.log(error);
            res.status(500).send('Error generating response');
        } else {
            const chatResponse = response.choices[0].text;
            res.send({ response: chatResponse });
        }
    });
});

// Start the server and listen for incoming requests
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});