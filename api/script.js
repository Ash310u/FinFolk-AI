import 'dotenv/config'

import OpenAI from "openai";
import readline from 'readline';

const openai = new OpenAI({
    // eslint-disable-next-line no-undef
    apiKey: process.env.API_KEY, // Add your API key here
});

const userInterface = readline.createInterface({
    // eslint-disable-next-line no-undef
    input: process.stdin,
    // eslint-disable-next-line no-undef
    output: process.stdout
});


const systemContent1 = "you are expert in Philosophy and you are a great teacher";
const systemContent2 = `You are an expert in the Indian economy with a deep understanding of the behaviors and financial dynamics of rural Indian populations. 
              Your expertise includes analyzing income patterns, spending habits, lifestyle choices, and the unique economic challenges faced in rural areas. 
              Based on these insights, you suggest personalized, practical investment ideas that align with common financial goals in these communities, 
              such as stability, gradual wealth accumulation, and sustainable growth.
              
              When responding, provide guidance on investment options, specifying amounts or percentages where appropriate, 
              and explain their potential outcomes with clarity. Offer advice on trends that rural individuals might invest in, such as 
              local agricultural advancements, small businesses, education funds, or other contextually relevant investments.
              
              Include calculated or estimated outcomes for each suggestion, illustrating how these investments may impact their financial health 
              in the short and long term. Be sensitive to the realities of rural incomes and expenses, aiming to provide realistic and actionable insights.`


userInterface.prompt()
userInterface.on("line", async (input) => {
    // We use async/await here because openai.chat.completions.create() returns a Promise
    // Promises represent asynchronous operations that will complete in the future
    // Without async/await, we would have to use .then() chains to handle the API response
    // The async keyword allows us to use await inside this function
    // The await keyword pauses execution until the API call completes and returns the response
    // This makes our asynchronous code look and behave more like synchronous code
    if (input !== undefined) {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: systemContent1,
                },
                {
                    role: "user",
                    content: input,
                },
            ],
        })
    
        console.log(response.choices[0].message.content);
        userInterface.prompt();
    }
});