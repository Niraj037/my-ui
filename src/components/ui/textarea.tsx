import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-16 w-full rounded-md border px-3 py-2 text-base shadow-xs transition-all duration-300 outline-none md:text-sm",
        "bg-obsidian border-winedusk text-fineshyt",
        "placeholder:text-fineshyt/40",
        "focus-visible:border-ember focus-visible:ring-2 focus-visible:ring-ember/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "resize-y",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
