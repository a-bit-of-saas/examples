'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  return (
    <main className="container mx-auto mt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-8">
        <Button className="justify-self-center" size="small">
          Primary
        </Button>
        <Button className="justify-self-center" size="default">
          Primary
        </Button>
        <Button className="justify-self-center" size="default" isDisabled>
          Primary
        </Button>
        <Button
          className="justify-self-center"
          size="default"
          loading={loading}
          onPress={() => setLoading(!loading)}
        >
          Primary
        </Button>
        <Button className="justify-self-center" size="large">
          Primary
        </Button>
        {/* Secondary */}
        <Button
          className="justify-self-center"
          variant="secondary"
          size="small"
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          variant="secondary"
          size="default"
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          variant="secondary"
          size="default"
          isDisabled
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          variant="secondary"
          size="default"
          loading={loading}
          onPress={() => setLoading(!loading)}
        >
          Secondary
        </Button>
        <Button
          className="justify-self-center"
          variant="secondary"
          size="large"
        >
          Secondary
        </Button>
        {/* Destructive */}
        <Button
          className="justify-self-center"
          variant="destructive"
          size="small"
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          variant="destructive"
          size="default"
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          variant="destructive"
          size="default"
          isDisabled
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          variant="destructive"
          size="default"
          loading={loading}
          onPress={() => setLoading(!loading)}
        >
          Destructive
        </Button>
        <Button
          className="justify-self-center"
          variant="destructive"
          size="large"
        >
          Destructive
        </Button>
        {/* Ghost */}
        <Button className="justify-self-center" variant="ghost" size="small">
          Ghost
        </Button>
        <Button className="justify-self-center" variant="ghost" size="default">
          Ghost
        </Button>
        <Button
          className="justify-self-center"
          variant="ghost"
          size="default"
          isDisabled
        >
          Ghost
        </Button>
        <Button
          className="justify-self-center"
          variant="ghost"
          size="default"
          loading={loading}
          onPress={() => setLoading(!loading)}
        >
          Ghost
        </Button>
        <Button className="justify-self-center" variant="ghost" size="large">
          Ghost
        </Button>
        {/* Link */}
        <Button className="justify-self-center" variant="link" size="small">
          Link
        </Button>
        <Button className="justify-self-center" variant="link" size="default">
          Link
        </Button>
        <Button
          className="justify-self-center"
          variant="link"
          size="default"
          isDisabled
        >
          Link
        </Button>
        <Button
          className="justify-self-center"
          variant="link"
          size="default"
          loading={loading}
          onPress={() => setLoading(!loading)}
        >
          Link
        </Button>
        <Button className="justify-self-center" variant="link" size="large">
          Link
        </Button>
      </div>
    </main>
  )
}
