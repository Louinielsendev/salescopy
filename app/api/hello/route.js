import { NextResponse, NextRequest } from 'next/server'
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(NextRequest) {
  const data = await NextRequest.json()
  const prompt = data.prompt
  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  const aiResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 200,
  });
  const response = aiResponse.data.choices[0].text?.trim()
  return NextResponse.json({text: response})
}
