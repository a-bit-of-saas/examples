import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

export const runtime = 'edge'

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!
})

const openai = new OpenAIApi(apiConfig)

export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    stream: true,
    messages: messages
  })
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
