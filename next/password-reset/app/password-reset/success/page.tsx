'use client'

import { Button, Card, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default async function SuccessPage() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/') // Redirect to login page
    }, 5000)
  })

  return (
    <main className="max-w-xl px-4 mx-auto flex flex-col justify-center h-screen">
      <Card className="gap-4 flex flex-col">
        <Flex gap="4" direction="column">
          <h1 className="text-2xl font-light">
            Your password has been updated.
          </h1>
          <p>
            You will now be redirected to the login page where you can login
            again.
          </p>
          <Button type="submit" asChild>
            <Link href="/">Return to Login</Link>
          </Button>
        </Flex>
      </Card>
    </main>
  )
}
