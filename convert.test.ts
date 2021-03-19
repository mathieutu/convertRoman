import { convertNumber } from './index'

it('should transform arabic number to roman', () => {
  expect(convertNumber(134)).toBe('CXXXIV')
  expect(convertNumber(2012)).toBe('MMXII')
  expect(convertNumber(3999)).toBe('MMMCMXCIX')
})


it('should transform roman number to arabic', () => {
  expect(convertNumber('CXXXIV')).toBe(134)
  expect(convertNumber('MMXII')).toBe(2012)
  expect(convertNumber('MMMCMXCIX')).toBe(3999)
})
