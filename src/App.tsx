// import { Confetti } from './components/confetti'

import dayjs from 'dayjs'
import { Private } from './components/private'
import { Lock } from './components/lock'

export function App() {
  const date = '2024-11-15T00:00:00'

  const now = dayjs()
  const finaly = dayjs(new Date(date))
  const distanceDate = finaly.diff(now, 'minute')

  const itsToday = distanceDate <= 0

  return itsToday ? <Private /> : <Lock />
}
