interface ConvertToPluralProps {
  value: number
  sufix: {
    singular: string
    plural: string
  }
}
export function ConvertToPlural({ value, sufix }: ConvertToPluralProps) {
  return (
    <span>
      {`${String(value).padStart(2, '0')} `}
      {value === 1 ? sufix.singular : sufix.plural}
    </span>
  )
}
