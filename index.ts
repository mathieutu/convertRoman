export function convertNumber(arabicNumber: number): string
export function convertNumber(romanNumber: string): number
export function convertNumber(number: number | string): string | number {
  if (typeof number === 'number') return convertToRoman(number)

  return convertToArabic(number)
}

const M = ['M', 1000] as const
const CM = ['CM', 900] as const
const D = ['D', 500] as const
const CD = ['CD', 400] as const
const C = ['C', 100] as const
const XC = ['XC', 90] as const
const L = ['L', 50] as const
const XL = ['XL', 40] as const
const X = ['X', 10] as const
const IX = ['IX', 9] as const
const V = ['V', 5] as const
const IV = ['IV', 4] as const
const I = ['I', 1] as const

const toRomanTable = [M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, I] as const
const toArabicTable = [CM, M, CD, D, XC, C, XL, L, IX, X, IV, V, I] as const

const convertToRoman = (number: number): string => {
  if (number > 3999) throw new Error('Please enter a number under 4000')

  let rest = number
  let res = ''

  toRomanTable.forEach(([roman, arabic]) => {
    while (rest >= arabic) {
      rest = rest - arabic
      res = res + roman
    }
  })

  return res
}

const convertToArabic = (number: string): number => {
  let rest = number.toUpperCase()
  let res = 0

  toArabicTable.forEach(([roman, arabic]) => {
    while (rest.includes(roman)) {
      res = res + arabic
      rest = rest.replace(roman, '')
    }
  })

  return res
}
