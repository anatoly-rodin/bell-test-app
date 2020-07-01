import {
  matchTest,
} from '@/utils/filters'
import { Item } from '@/utils/Item'

describe('matchTest function', () => {
  let item: Item

  beforeEach(() => {
    item = new Item({
      id: 0,
      name: 'test',
      items: [
        {
          id: 0,
          name: 'test1'
        }
      ]
    })
  })

  it('should be not undefined', () => {
    expect(matchTest).toBeInstanceOf(Function)
  })

  it('should return true with empty filter', () => {
    expect(matchTest(item, '')).toBe(true)
  });

  it('should return true if match filter text', () => {
    expect(matchTest(item, 'test')).toBe(true)
  })

  it('should return true if match in inner array', () => {
    expect(matchTest(item.items[0], 'test1')).toBe(true)
  })
})
