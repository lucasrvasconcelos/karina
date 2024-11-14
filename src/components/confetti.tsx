import type { ReactNode } from 'react'
import { ConfettiButton } from './ui/confetti'

interface ConfettiProps {
  children: ReactNode
}

export function Confetti({ children }: ConfettiProps) {
  return (
    <div className="relative mt-4">
      <ConfettiButton
        options={{
          get angle() {
            return Math.random() * 360
          },
        }}
      >
        {children}
      </ConfettiButton>
    </div>
  )
}
