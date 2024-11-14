// import { Confetti } from './components/confetti'
import { Photos } from './components/photos'
import { TextContent } from './components/text-content'
import { TimeTogether } from './components/time-together'
import { FaHeart } from 'react-icons/fa'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'

import type { ConfettiRef } from '@/components/ui/confetti'
import Confetti from '@/components/ui/confetti'
import { useRef } from 'react'
import WordPullUp from './components/ui/word-pull-up'
import { cn } from './lib/utils'

export function App() {
  const confettiRef = useRef<ConfettiRef>(null)

  return (
    <div className="flex justify-center items-center flex-col py-10 relative">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-0%] h-[100%] skew-y-12',
          '-z-100'
        )}
      />

      <h1 className="font-bold text-2xl px-4 rounded-sm w-full text-center flex items-center justify-center gap-3">
        Eu <FaHeart className="text-red-500" />
      </h1>

      <WordPullUp
        className="text-4xl font-bold tracking-[-0.02em] ttext-white md:text-7xl md:leading-[5rem]"
        words="Love You"
      />

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({})
        }}
        onTouchStart={() => {
          confettiRef.current?.fire({})
        }}
      >
        <Photos />
      </Confetti>
      <TimeTogether />
      <TextContent />
    </div>
  )
}
