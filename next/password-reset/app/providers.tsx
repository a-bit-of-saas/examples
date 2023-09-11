'use client'

import { Theme } from '@radix-ui/themes'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => (
  <Theme>{children}</Theme>
)
