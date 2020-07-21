import { INote } from '../domain/entity/note'
import { IGetNotes } from '../application/boundary'

declare global {
  // tslint:disable-next-line
  interface Window {
    API_URL: string;
  }
}

export class GetNotes implements IGetNotes {
  
  url:any = window.API_URL

  public execute = async () => {

  }
  
  async GetNotes(): Promise<INote[]> {
    const res = await fetch(this.url)
    const json = await res.json()
    return json.map((note: INote) => {
      return {
        id: note.id,
        title: note.title,
        content: note.content,
        tags: note.tags,
        createdAt: note.createdAt,
        ownerId: note.ownerId
      }
    })
  }
}