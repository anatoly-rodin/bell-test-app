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
  return item.name.toLowerCase().indexOf(template) !== -1
}

/**
 * Filtering objects collection by prop name.
 *
 * @param {Array} collection - Object collection.
 * @param {String} filter - Filter data.
 *
 * @return {Array}
 */
const filterByName = (collection: Item[] = [], filter = ''): Item[] => (
  collection.filter((i) => (
    matchTest(i, filter)
      ? true
      : matchTest(i.items[0], filter)
  ))
)

export default filterByName
