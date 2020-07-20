import { Note } from '../entity/Note'
import { NoteRepository } from '../repository/NoteRepository'

export interface NoteService {
  GetNotes(): Promise<Note[]>
}

export class NoteServiceImplementation implements NoteService {
  noteRepository: NoteRepository

  constructor(
    nr: NoteRepository
  ) {
    this.noteRepository = nr
  }

  async GetNotes(): Promise<Note[]> {
    return this.noteRepository.GetNotes()
  }
}