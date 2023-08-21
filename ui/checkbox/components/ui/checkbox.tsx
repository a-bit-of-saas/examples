'use client'

import { forwardRef } from 'react'
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components'

type CheckboxProps = AriaCheckboxProps

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <AriaCheckbox {...props} ref={forwardedRef}>
        {({ isIndeterminate, isSelected }) => (
          <>
            <div className="stroke-white border-2 border-slate-300 rounded bg-slate-50 data-[selected=true]:bg-indigo-500 data-[focus-visible=true]:ring-indigo-500/70 data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-offset-2 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                {isIndeterminate ? (
                  <rect x={1} y={7.5} width={15} height={3} />
                ) : (
                  <polyline
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="4 12 10 18 19 6"
                    fill="none"
                    strokeWidth={1.5}
                    strokeDasharray={24}
                    strokeDashoffset={isSelected ? 24 * 2 : 24 * 3}
                    className="transition-all duration-300 ease-in-out"
                  />
                )}
              </svg>
            </div>
            {children}
          </>
        )}
      </AriaCheckbox>
    )
  }
)

export default Checkbox
export type { CheckboxProps }
