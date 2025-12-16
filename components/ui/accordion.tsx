"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"

interface AccordionProps extends React.ComponentProps<typeof AccordionPrimitive.Root> {
  compact?: boolean;
}

function Accordion({
  className,
  compact = false,
  ...props
}: AccordionProps) {
  return (
    <div className={cn("w-full", compact ? "space-y-1" : "space-y-2")}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        data-compact={compact}
        className={cn(
          "overflow-hidden rounded-2xl border w-full",
          className
        )}
        {...props}
      />
    </div>
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "group border-b last:border-b-0",
        "data-[state=open]:bg-muted/50 transition-colors",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex flex-1 items-center justify-between py-3 px-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          "data-[compact=true]:py-2 data-[compact=true]:px-3",
          className
        )}
        {...props}
      >
        <span className="text-left">{children}</span>
        <IconChevronDown
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm transition-all",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="px-4 pb-4 pt-0 data-[compact=true]:px-3 data-[compact=true]:pb-3">
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
