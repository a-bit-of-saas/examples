'use client'

import { forwardRef } from 'react'
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Text,
} from 'react-aria-components'

type LabelProps = AriaLabelProps

function Label(props: LabelProps) {
  return (
    <AriaLabel
      {...props}
      className="mb-1 flex text-sm font-medium transition-colors group-focus-within:text-indigo-500 group-data-[validation-state=invalid]:text-red-700"
    />
  )
}

type InputProps = AriaInputProps

const Input = forwardRef<HTMLInputElement, InputProps>(function (props, ref) {
  return (
    <AriaInput
      {...props}
      className="box-content w-full border-none bg-transparent p-0 font-medium text-slate-900 outline-none placeholder:text-slate-400 focus:outline-none focus:ring-0"
    />
  )
})

interface TextFieldProps extends AriaTextFieldProps {
  label?: string
  description?: string
  errorMessage?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function (
  props,
  ref
) {
  const { label, description, errorMessage, ...rest } = props
  return (
    <AriaTextField ref={ref} className="group relative" {...rest}>
      {label && <Label>{label}</Label>}
      <div className="box-border rounded-lg border bg-gradient-to-b from-slate-50/10 to-slate-50/20 px-3 py-2 focus-within:mb-[1px] focus-within:rounded-t-lg focus-within:rounded-b-sm focus-within:border-b-0 focus-within:shadow-[0_2px] focus-within:from-white focus-within:to-white border-slate-200 focus-within:shadow-indigo-500 data-[validation-state=valid]:border-slate-200 data-[validation-state=valid]:focus-within:shadow-indigo-500 group-data-[validation-state=invalid]:border-red-700 group-data-[validation-state=invalid]:focus-within:shadow-red-700">
        <Input />
      </div>
      {description && (
        <Text
          slot="description"
          className="pt-1 text-xs font-medium tracking-wide text-slate-500"
        >
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text
          slot="errorMessage"
          className="pt-1 text-xs font-medium tracking-wide text-red-700"
        >
          {errorMessage}
        </Text>
      )}
    </AriaTextField>
  )
})

TextField.displayName = 'TextField'

export type { TextFieldProps }
export default TextField
export { Input, Label }
