import { ConfettiStars } from './confetti-star-lock'
import WordPullUp from './ui/word-pull-up'
import Meteors from '@/components/ui/meteors'

export function Lock() {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center h-dvh relative overflow-hidden">
      <WordPullUp
        className="text-4xl font-bold tracking-[-0.02em] text-white md:text-7xl md:leading-[5rem]"
        words="Ainda não chegou o dia 🎉🥳"
      />
      <div className="flex justify-center items-center">
        <WordPullUp
          className="text-2xl font-bold tracking-[-0.02em] text-white md:text-4xl md:leading-[5rem]"
          words="Espere clicanco"
        />
        <ConfettiStars />
      </div>

      <Meteors number={30} />
    </div>
  )
}
