import { INote } from '../../domain/entity/note'

export interface INotesStorageGateway {
  getAll(): Promise<INote[]>;
}