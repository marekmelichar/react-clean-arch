import { Note } from '../domain/entity/Note'
import { NoteRepository } from '../domain/repository/NoteRepository'

export class NoteRepositoryImplementation implements NoteRepository {
  
  url = "http://localhost:3004/notes"

  async GetNotes(): Promise<Note[]> {
    const res = await fetch(this.url)
    const json = await res.json()
    return json.map((note: Note) => new Note(note.id, note.title, note.content, note.tags, note.createdAt, note.ownerId))
  }
}