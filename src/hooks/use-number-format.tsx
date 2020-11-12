interface NumberFormat {
  (locale: string): Intl.NumberFormat
}

const useNumberFormat: NumberFormat = (locale = 'cs-CZ') => {
  return new Intl.NumberFormat(locale)
}

export default useNumberFormat
