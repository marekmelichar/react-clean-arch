import { INote } from '../../domain/entity/note'
import { INotesStorageGateway } from '../../application/repository/notes'

declare global {
  // tslint:disable-next-line
  interface Window {
    API_URL: string;
  }
}

export class NotesGateway implements INotesStorageGateway {
  
  url:any = window.API_URL

  async getAll(): Promise<INote[]> {
    const res = await fetch(`${this.url}/notes`)
    const json = await res.json()
    return json.map((note: INote) => ({
      id: note.id,
      title: note.title,
      content: note.content,
      tags: note.tags,
      createdAt: note.createdAt,
      ownerId: note.ownerId
    }))
  }
}