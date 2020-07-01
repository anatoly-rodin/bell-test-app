export type InnerItem = {
  id: number;
  name: string;
}

export class Item {
  readonly id: number

  readonly name: string

  readonly items: InnerItem[]

  constructor(value: any) {
    this.id = value.id
    this.name = value.name
    this.items = [
      {
        id: 0,
        name: value.body,
      },
    ]
  }
}
