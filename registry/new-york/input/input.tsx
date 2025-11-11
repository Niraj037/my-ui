import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: boolean
  errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, error, errorMessage, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-fineshyt/50">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          data-slot="input"
          aria-invalid={error ? "true" : "false"}
          className={cn(
            "file:text-fineshyt placeholder:text-fineshyt/40 selection:bg-ember selection:text-obsidian bg-winedusk/50 border-winedusk h-9 w-full min-w-0 rounded-md border-2 px-3 py-1 text-base text-fineshyt transition-all duration-300 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ember focus-visible:ring-ember focus-visible:ring-2 focus-visible:bg-winedusk/70",
            error ? "border-ember ring-ember/40 ring-2" : "aria-invalid:ring-ember/40 aria-invalid:border-ember",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-fineshyt/50">
            {rightIcon}
          </div>
        )}
        {error && errorMessage && (
          <p className="mt-1 text-xs text-ember">{errorMessage}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
