import {
  filterByName
} from '@/utils/filters'

describe('filterByName function', () => {
  it('should be not undefined', () => {
    expect(filterByName).toBeInstanceOf(Function)
  })

  it('should return array', () => {
    expect(filterByName([], '')).toBeInstanceOf(Array)
  });

  it('should return array without arguments', () => {
    expect(filterByName()).toBeInstanceOf(Array)
  })
})
