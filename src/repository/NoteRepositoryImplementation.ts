import { Note } from '../domain/entity/Note'
import { NoteRepository } from '../domain/repository/NoteRepository'

declare global {
  // tslint:disable-next-line
  interface Window {
    API_URL: string;
  }
}

export class NoteRepositoryImplementation implements NoteRepository {
  
  url:any = window.API_URL

  async GetNotes(): Promise<Note[]> {
    const res = await fetch(this.url)
    const json = await res.json()
    return json.map((note: Note) => new Note(note.id, note.title, note.content, note.tags, note.createdAt, note.ownerId))
  }
}