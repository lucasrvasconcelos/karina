import { Confetti, type ConfettiRef } from '@/components/ui/confetti'
import { useRef } from 'react'
import AnimatedGridPattern from './ui/animated-grid-pattern'
import { FaHeart } from 'react-icons/fa'
import WordPullUp from './ui/word-pull-up'
import { Photos } from './photos'
import { TimeTogether } from './time-together'
import { TextContent } from './text-content'
import { cn } from '@/lib/utils'

export function Private() {
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
