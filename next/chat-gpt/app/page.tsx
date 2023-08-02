import Chat from './chat'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center my-8 text-2xl">YouTubeGPT</h1>
      <Chat />
    </main>
  )
}
