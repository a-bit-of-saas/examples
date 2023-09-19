import { getUserSession } from '@/lib/session'

export default async function Home() {
  const user = await getUserSession()
  return <main className="">{JSON.stringify(user)}</main>
}
