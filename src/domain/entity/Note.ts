export class Note {
  id: number
  title: string
  content: string
  tags: string[]
  createdAt: number
  ownerId: string[]


  constructor(
    id: number,
    title: string,
    content: string,
    tags: string[],
    createdAt: number,
    ownerId: string[],
  ) {
    this.id = id
    this.title = title
    this.content = content
    this.tags = tags
    this.createdAt = createdAt
    this.ownerId = ownerId
  }
}
