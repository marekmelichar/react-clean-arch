export interface INote {
  id: number
  title: string
  content: string
  tags: string[]
  createdAt: number
  ownerId: string[]
}
