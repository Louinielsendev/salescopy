import { NextResponse, NextRequest } from 'next/server'
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})


export async function POST(NextRequest) {
  const data = await NextRequest.json()
  const prompt = data.prompt
  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const aiResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "assistant",
        "content": prompt
      }
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  console.log(aiResponse.choices[0].message)
  const response = aiResponse.choices[0].message.content?.trim()
  return NextResponse.json({text: response})
}

