import { useState } from 'react'
import { ConvertToPlural } from './convert-to-plural'
import dayjs from 'dayjs'
import { Separator } from './ui/separator'

function calculateTimeTogether(startDate: string) {
  const now = dayjs()
  const start = dayjs(new Date(startDate))

  const years = now.diff(start, 'year')
  const adjustedStart = start.add(years, 'year')

  const months = now.diff(adjustedStart, 'month')
  const adjustedStartWithMonths = adjustedStart.add(months, 'month')

  const days = now.diff(adjustedStartWithMonths, 'day')
  const adjustedStartWithDays = adjustedStartWithMonths.add(days, 'day')

  const hours = now.diff(adjustedStartWithDays, 'hour')
  const adjustedStartWithHours = adjustedStartWithDays.add(hours, 'hour')

  const minutes = now.diff(adjustedStartWithHours, 'minute')
  const adjustedStartWithMinutes = adjustedStartWithHours.add(minutes, 'minute')

  const seconds = now.diff(adjustedStartWithMinutes, 'second')

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  }
}

export function TimeTogether() {
  const startDate = '2023-08-06T00:00:00'
  const [{ years, months, days, hours, minutes, seconds }, setTimeTogether] =
    useState(calculateTimeTogether(startDate))

  setTimeout(() => {
    const distance = calculateTimeTogether(startDate)
    setTimeTogether(distance)
  }, 1000)

  return (
    <div className="font-bold text-center mt-4">
      <h3 className="">Juntos</h3>
      <div className="font-semibold">
        <ConvertToPlural
          value={years}
          sufix={{ singular: 'ano', plural: 'anos' }}
        />
        {', '}
        <ConvertToPlural
          value={months}
          sufix={{ singular: 'mês', plural: 'meses' }}
        />
        {', '}
        <ConvertToPlural
          value={days}
          sufix={{ singular: 'dia', plural: 'dias' }}
        />
      </div>
      <div className="font-semibold">
        <ConvertToPlural
          value={hours}
          sufix={{ singular: 'hora', plural: 'horas' }}
        />{' '}
        <ConvertToPlural
          value={minutes}
          sufix={{ singular: 'minuto', plural: 'minutos' }}
        />{' '}
        <ConvertToPlural
          value={seconds}
          sufix={{ singular: 'segundo', plural: 'segundos' }}
        />{' '}
      </div>
      <Separator className="my-11 bottom-0 w-44 mx-auto" />
    </div>
  )
}
