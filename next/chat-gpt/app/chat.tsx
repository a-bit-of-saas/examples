'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: '',
          content:
            'You are a master chef, creator of fine cuisine. You can cook anything and love to make new recipes. You know American cuisine best but are classically french trained. Help the users come up with their dinner. You are terse, assertive, and never apologize.',
          role: 'system'
        }
      ],
      api: '/api/chat'
    })

  return (
    <div>
      <ul className="divide-y">
        {messages
          .filter((m) => m.role !== 'system')
          .map((m, index) => (
            <li key={index} className="py-4">
              {m.role === 'user' ? 'User: ' : 'YouTubeGPT: '}
              <span className="whitespace-pre-line">{m.content}</span>
            </li>
          ))}
      </ul>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          className="w-full border rounded-xl border-slate/50 py-2 px-4"
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="bg-indigo-500 text-white font-semibold shadow rounded-full px-4 disabled:bg-indigo-500/50"
          type="submit"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </div>
  )
}
