import TextField, { Input } from '@/components/ui/text-field'

export default function Home() {
  return (
    <main className="max-w-xl mx-auto flex flex-col gap-4">
      <h1>Text Field</h1>
      <TextField aria-label="Test" />
      <TextField label="Hello" />
      <TextField
        label="Error"
        validationState="invalid"
        errorMessage="Please enter a valid email address."
      />
      <TextField label="Description" description="We only send spam." />
      <Input placeholder="Placeholder" />
    </main>
  )
}
