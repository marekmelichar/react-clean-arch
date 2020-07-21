import { INote } from '../../../domain/entity/note'
import { IGetNotes } from '../../boundary/notes'
import { INotesStorageGateway } from '../../repository/notes'

export class GetNotes implements IGetNotes {
  notesGateway: INotesStorageGateway

  constructor(
    nr: INotesStorageGateway
  ) {
    this.notesGateway = nr
  }

  public execute = async (): Promise<INote[]> => {
    const result = await this.notesGateway.getAll()
    return result;
  }
}