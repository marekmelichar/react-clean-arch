import { INote } from '../../../domain/entity/note'
import { IEditNote } from '../../boundary/notes'
import { INotesStorageGateway } from '../../repository/notes'
import { AxiosResponse } from 'axios'

export class EditNote implements IEditNote {
  notesGateway: INotesStorageGateway

  constructor(
    nr: INotesStorageGateway
  ) {
    this.notesGateway = nr
  }

  public execute = async (newNote: INote): Promise<AxiosResponse<any>> => {
    const result = await this.notesGateway.edit(newNote)
    return result;
  }
}