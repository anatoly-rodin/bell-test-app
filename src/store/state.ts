import { Item } from '@/utils/Item'
import { LogItem } from '@/utils/LogItem'

interface StateInterface {
  filter: string;
  items: Item[];
  filteredItems: Item[];
  selectedItems: Item[];
  logs: LogItem[];
  loading: boolean;
}

export const state: StateInterface = {
  filter: '',
  items: [],
  filteredItems: [],
  selectedItems: [],
  logs: [],
  loading: true,
}

export type State = typeof state
