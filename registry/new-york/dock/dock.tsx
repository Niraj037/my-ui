"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export interface DockProps extends Omit<HTMLMotionProps<"div">, "onDrag" | "onDragStart" | "onDragEnd"> {
  direction?: "bottom" | "top" | "left" | "right"
  magnification?: number
  distance?: number
}

export interface DockIconProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onTransitionEnd"
> {
  children: React.ReactNode
  label?: string
  isActive?: boolean
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, children, direction = "bottom", magnification = 1.5, distance = 100, ...props }, ref) => {
    const isVertical = direction === "left" || direction === "right"

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: direction === "bottom" ? 20 : direction === "top" ? -20 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed z-50 flex gap-2 rounded-2xl bg-winedusk/70 backdrop-blur-[10px] border border-winedusk/30 p-3",
          isVertical ? "flex-col" : "flex-row",
          direction === "bottom" && "left-1/2 bottom-4 -translate-x-1/2",
          direction === "top" && "left-1/2 top-4 -translate-x-1/2",
          direction === "left" && "left-4 top-1/2 -translate-y-1/2",
          direction === "right" && "right-4 top-1/2 -translate-y-1/2",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
Dock.displayName = "Dock"

const DockIcon = React.forwardRef<HTMLButtonElement, DockIconProps>(
  ({ children, label, isActive, className, onClick, ...props }, ref) => {
    const mouseX = useMotionValue(Infinity)

    return (
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <motion.button
            ref={ref}
            onClick={onClick}
            type="button"
            className={cn(
              "relative flex h-12 w-12 items-center justify-center rounded-xl text-fineshyt/60 transition-colors duration-300 hover:text-fineshyt hover:bg-winedusk/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-winedusk/50",
              className
            )}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              duration: 0.3,
            }}
            onPointerMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              mouseX.set(e.clientX - rect.left - rect.width / 2)
            }}
            onPointerLeave={() => mouseX.set(Infinity)}
            {...props}
          >
            {children}
            
            {/* Active indicator - subtle wine dot */}
            {isActive && (
              <motion.div
                className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ember/80"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        </TooltipTrigger>
        {label && (
          <TooltipContent
            side="top"
            className="font-mono text-xs lowercase"
          >
            {label}
          </TooltipContent>
        )}
      </Tooltip>
    )
  }
)
DockIcon.displayName = "DockIcon"

export { Dock, DockIcon }
