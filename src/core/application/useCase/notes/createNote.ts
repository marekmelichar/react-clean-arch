import { INote } from '../../../domain/entity/note'
import { ICreateNote } from '../../boundary/notes'
import { INotesStorageGateway } from '../../repository/notes'
import { AxiosResponse } from 'axios'

export class CreateNote implements ICreateNote {
  notesGateway: INotesStorageGateway

  constructor(
    nr: INotesStorageGateway
  ) {
    this.notesGateway = nr
  }

  public execute = async (newNote: INote): Promise<AxiosResponse<any>> => {
    const result = await this.notesGateway.create(newNote)
    return result;
  }
}