import { INote } from '../../domain/entity/note'
import { INotesStorageGateway } from '../../application/repository/notes'
import axios, { AxiosResponse } from 'axios'

declare global {
  // tslint:disable-next-line
  interface Window {
    API_URL: string;
  }
}

export class NotesGateway implements INotesStorageGateway {
  
  url:any = window.API_URL

  getAll = async (): Promise<INote[]> => {
    const response = await axios.get(`${this.url}/notes`)
    return response.data.map((note: INote) => ({
      id: note.id,
      title: note.title,
    }))
  }

  create = async (newNote: INote): Promise<AxiosResponse<any>> => {
    const response = await axios.post(`${this.url}/notes`, newNote)
    return response
  }

  edit = async (newNote: INote): Promise<AxiosResponse<any>> => {
    const response = await axios.put(`${this.url}/notes/${newNote.id}`, newNote)
    return response
  }

  delete = async (id: string): Promise<AxiosResponse<any>> => {
    const response = await axios.delete(`${this.url}/notes/${id}`)
    return response
  }
}