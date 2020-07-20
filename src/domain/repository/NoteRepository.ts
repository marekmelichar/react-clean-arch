import { Note } from '../entity/Note'

export interface NoteRepository {
  GetNotes(): Promise<Note[]>
}