// ============================================
// FlowCoder UI Component Module
// Primary Color Only Design System
// ============================================

// Layout Components
export { Container, containerVariants } from "./container"
export { Section, sectionVariants } from "./section"
export { Stack, HStack, VStack, stackVariants } from "./stack"
export { Grid, GridItem, gridVariants, gridItemVariants } from "./grid"

// Typography Components
export { Heading, headingVariants } from "./heading"
export { Text, textVariants } from "./text"

// Interactive Components
export { Button, buttonVariants } from "./button"
export { Badge, badgeVariants } from "./badge"

// Visual Components
export { IconBox, iconBoxVariants } from "./icon-box"
export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, avatarVariants, avatarGroupVariants } from "./avatar"
export { Divider, dividerVariants } from "./divider"

// Card Components
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./card"

// Tabs Components
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

// ============================================
// Type Exports
// ============================================
export type { VariantProps } from "class-variance-authority"
