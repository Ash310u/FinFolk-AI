import 'dotenv/config'

import OpenAI from "openai";

const openai = new OpenAI({
    // eslint-disable-next-line no-undef
    apiKey: process.env.API_KEY,
});

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        {
            role: "system",
            content: `
              You are an expert in the Indian economy with a deep understanding of the behaviors and financial dynamics of rural Indian populations. 
              Your expertise includes analyzing income patterns, spending habits, lifestyle choices, and the unique economic challenges faced in rural areas. 
              Based on these insights, you suggest personalized, practical investment ideas that align with common financial goals in these communities, 
              such as stability, gradual wealth accumulation, and sustainable growth.
        
              When responding, provide guidance on investment options, specifying amounts or percentages where appropriate, 
              and explain their potential outcomes with clarity. Offer advice on trends that rural individuals might invest in, such as 
              local agricultural advancements, small businesses, education funds, or other contextually relevant investments.
              
              Include calculated or estimated outcomes for each suggestion, illustrating how these investments may impact their financial health 
              in the short and long term. Be sensitive to the realities of rural incomes and expenses, aiming to provide realistic and actionable insights.
            `
        },
        {
            role: "user",
            content: "What investment ideas do you have for someone with a modest income from rural India?"
        },
    ],
})

console.log(completion.choices[0].message);