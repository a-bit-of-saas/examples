'use client'

import { VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'
import { ReactNode, forwardRef } from 'react'
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

const variants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'relative',
    'cursor-pointer',
    'disabled:cursor-not-allowed',
    'tracking-wide',
    'transition-[background-color,box-shadow,text-color,transform]',
    'duration-200',
    'rounded-full',
    'outline-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'font-semibold',
          'bg-indigo-500',
          'data-[hovered=true]:bg-indigo-600',
          'text-white',
          'shadow',
          'data-[hovered=true]:shadow-md',
          'disabled:bg-indigo-500/50',
          'disabled:shadow',
          'data-[pressed=true]:scale-[0.98]',
          'data-[focus-visible=true]:ring-indigo-500/70',
          'data-[focus-visible=true]:ring-2',
          'data-[focus-visible=true]:ring-offset-2',
        ],
        secondary: [
          'font-normal',
          'bg-gray-50',
          'data-[hovered=true]:bg-gray-100',
          'disabled:bg-gray-50',
          'text-gray-950',
          'shadow',
          'border',
          'border-neutral-200/50',
          'data-[focus-visible=true]:ring-gray-200',
          'data-[pressed=true]:scale-[0.98]',
          'data-[focus-visible=true]:ring-2',
          'data-[focus-visible=true]:ring-offset-2',
        ],
        destructive: [
          'font-semibold',
          'bg-red-500',
          'data-[hovered=true]:bg-red-600',
          'text-white',
          'rounded-full',
          'shadow',
          'hover:shadow-md',
          'disabled:bg-red-500/50',
          'disabled:shadow',
          'data-[pressed=true]:scale-[0.98]',
          'data-[focus-visible=true]:ring-red-500',
          'data-[focus-visible=true]:ring-2',
          'data-[focus-visible=true]:ring-offset-2',
        ],
        ghost: [
          'font-light',
          'text-gray-950',
          'data-[hovered=true]:text-gray-600',
          'disabled:text-gray-950',
          'data-[focus-visible=true]:ring-gray-500/30',
          'data-[focus-visible=true]:ring-1',
        ],
        link: [
          'font-light',
          'text-indigo-500',
          'data-[hovered=true]:text-indigo-600',
          'data-[hovered=true]:underline',
          'disabled:text-indigo-500/50',
          'disabled:no-underline',
          'data-[focus-visible=true]:ring-indigo-500/30',
          'data-[focus-visible=true]:ring-1',
        ],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-4'],
        default: ['text-base', 'py-2', 'px-8'],
        large: ['text-lg', 'py-3', 'px-12'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

const loading = cva(['absolute', 'inline-flex', 'items-center'], {
  variants: {
    variant: {
      primary: ['border-white'],
      secondary: ['border-gray-950'],
      destructive: ['border-white'],
      ghost: ['border-gray-950'],
      link: ['border-indigo-500'],
    },
  },
})

const Loading = ({ variant }: VariantProps<typeof loading>) => (
  <div className={loading({ variant })}>
    <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit]" />
  </div>
)

type ButtonProps = AriaButtonProps &
  VariantProps<typeof variants> & {
    children: ReactNode
    loading?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { className, children, variant, size, loading, isDisabled, ...rest } =
      props

    return (
      <AriaButton
        ref={forwardedRef}
        className={twMerge(clsx(variants({ variant, size, className })))}
        {...rest}
      >
        {loading && <Loading variant={variant} />}
        <span
          className={clsx('transition', {
            'opacity-0': loading,
            'opacity-100': !loading,
          })}
        >
          {children}
        </span>
      </AriaButton>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
