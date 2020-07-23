import { IDeleteNote } from '../../boundary/notes'
import { INotesStorageGateway } from '../../repository/notes'
import { AxiosResponse } from 'axios'

export class DeleteNote implements IDeleteNote {
  notesGateway: INotesStorageGateway

  constructor(
    nr: INotesStorageGateway
  ) {
    this.notesGateway = nr
  }

  public execute = async (id: string): Promise<AxiosResponse<any>> => {
    const result = await this.notesGateway.delete(id)
    return result;
  }
}