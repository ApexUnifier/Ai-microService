import OpenAI from "openai";
import dotenv from "dotenv";

import  AiHelper from "../../Models/index.js";

const { tool, getCurrentWeather } = AiHelper;

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

// example input  [
  //   { role: "user", content: "What's the weather like in San Francisco, Tokyo, varanasi and pune ?" },
  // ]

async function runConversation(input) { // give input here
    console.log("run LLM called ");

  // Step 1: send the conversation and available functions to the model
  const messages = input;
  const tools = tool;


  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: messages,
    tools: tools,
    tool_choice: "auto", // auto is default, but we'll be explicit
  });
  const responseMessage = response.choices[0].message;

  // Step 2: check if the model wanted to call a function
  const toolCalls = responseMessage.tool_calls;
  if (responseMessage.tool_calls) {

    messages.push(responseMessage); // extend conversation with assistant's reply
    for (const toolCall of toolCalls) {
      const functionName = toolCall.function.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(toolCall.function.arguments);
      const functionResponse = functionToCall(
        functionArgs.location,
        functionArgs.unit
      );
      messages.push({
        tool_call_id: toolCall.id,
        role: "tool",
        name: functionName,
        content: functionResponse,
      }); // extend conversation with function response
    }
    const secondResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: messages,
    }); // get a new response from the model where it can see the function response
    return secondResponse.choices;
  }
};


export default runConversation();