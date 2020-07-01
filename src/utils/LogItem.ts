import { Item } from '@/utils/Item'

export enum LogItemTypes {
  SELECT = 'Добавление',
  UNSELECT = 'Удаление',
}

export class LogItem {
  readonly id: number

  readonly name: string

  readonly type: LogItemTypes

  readonly date: Date

  constructor(model: Item, type: LogItemTypes) {
    this.id = model.id
    this.name = model.name
    this.type = type
    this.date = new Date()
  }
}
