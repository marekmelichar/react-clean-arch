import { INote } from '../../domain/entity/note'

export interface IGetNotes {
  execute(): Promise<INote[]>
}