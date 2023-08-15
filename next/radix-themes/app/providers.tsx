'use client'

import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider attribute="class">
    <Theme>{children}</Theme>
  </ThemeProvider>
)
