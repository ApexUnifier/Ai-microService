import OpenAI from "openai";
import dotenv from "dotenv";

import { model } from "../../Models/index.js";

const { tool, getCurrentWeather, availableFunctions } = model;

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const runConversation = async (input) => {
  console.log("run LLM called ");

  const messages = [
    { role: "user", content: input },
  ];
  const tools = tool;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0125",
    messages: messages,
    tools: tools,
    tool_choice: "auto",
  });

  const FirstResponse = response;
  const responseMessage = response.choices[0].message;
  console.log("logging response messages :", responseMessage);

  const toolCalls = responseMessage.tool_calls;
  console.log("logging toolcalls", toolCalls);
  
  if (responseMessage.tool_calls) {
    messages.push(responseMessage);
    for (const toolCall of toolCalls) {
      const functionName = toolCall.function.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(toolCall.function.arguments);
      const functionResponse = functionToCall(
        functionArgs
      );
      console.log("message after pushing responseMessage: ", messages);
      messages.push({
        tool_call_id: toolCall.id,
        role: "tool",
        name: functionName,
        content: functionResponse,
      });
      console.log("message after pushing function response: ", messages);
    }
    console.log("messages before secondResponse:", messages);
    const secondResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: messages,
    });

    console.log("secondResponse: ", secondResponse);
    if(secondResponse){
      console.log("return secondResponse");
      return secondResponse.choices;
    }
    
  }
  console.log("return response");
  return FirstResponse.choices;
};

export default runConversation;



