"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`overflow-hidden border-2 transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-1" : ""
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Card>
  )
}

