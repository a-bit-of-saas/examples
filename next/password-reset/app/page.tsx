import { Button, Grid } from '@radix-ui/themes'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto mt-8">
      <Grid>
        <Button asChild>
          <Link href="/forgot-password">Reset Password</Link>
        </Button>
      </Grid>
    </main>
  )
}
