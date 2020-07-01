import { InnerItem, Item } from '@/utils/Item'

/**
 * Checking substring to match.
 *
 * @param {Item} item - Collection element.
 * @param {String} filter - Text.
 *
 * @return {Boolean}
 */
function matchTest(item: Item | InnerItem, filter = '') {
  const template = filter.toLowerCase().trim()
  return filter
    ? item.name.toLowerCase().indexOf(template) !== -1
    : true
}

export default matchTest
