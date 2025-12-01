import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-invalid:ring-destructive/20",
  {
    variants: {
      variant: {
        // Primary: 청록색 배경 + 흰색 텍스트 + 호버 효과
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0",
        // Destructive: 빨간색 배경
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/25 hover:-translate-y-0.5 active:translate-y-0",
        // Outline: 테두리만 있는 버튼 (weave-flow의 "자세히 알아보기" 스타일)
        outline:
          "border-2 border-border bg-background text-foreground hover:bg-muted hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        // Secondary: 회색 배경
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
        // Ghost: 투명 배경, 호버시 배경 나타남
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        // Link: 텍스트 링크 스타일
        link:
          "text-primary underline-offset-4 hover:underline",
        // Teal Gradient: 청록색 그라데이션 (weave-flow 메인 CTA 스타일)
        teal:
          "bg-gradient-to-r from-primary to-primary/90 text-white font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0",
        // White: 흰색 배경 (다크 섹션용)
        white:
          "bg-white text-foreground border border-border hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
      rounded: {
        default: "rounded-lg",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "full", // weave-flow 스타일: 완전히 둥근 모서리
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
