'use client'

import { TextField } from '@/components/ui/text-field'
import { CaretLeftIcon } from '@radix-ui/react-icons'
import { Card, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitButton } from '../../components/ui/submit-button'
import { resetPassword } from './_action'

export default function ForgotPassword() {
  const [error, setError] = useState<string>('')

  const submit = async (data: FormData) => {
    const { error } = await resetPassword(data)
    setError(error)
  }

  return (
    <main className="max-w-xl px-4 mx-auto flex flex-col justify-center h-screen">
      <Card className="gap-4 flex flex-col">
        <Flex gap="4" direction="column" asChild>
          <form action={submit}>
            <h1 className="text-2xl font-light">Reset password</h1>
            <p>
              Enter your email address to get instructions for resetting your
              password.
            </p>
            <TextField
              name="email"
              type="email"
              size="3"
              placeholder="Your email..."
            />
            {error && <p className="text-red-500">{error}</p>}
            <SubmitButton>Reset Password</SubmitButton>
            <Link
              href="/"
              className="text-sm text-neutral-700/80 flex items-center"
            >
              <CaretLeftIcon />
              <span>Return to Login</span>
            </Link>
          </form>
        </Flex>
      </Card>
    </main>
  )
}
