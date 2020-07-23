import { INote } from '../../domain/entity/note'
import { AxiosResponse } from 'axios';

export interface INotesStorageGateway {
  getAll(): Promise<INote[]>;
  create(newNote: INote): Promise<AxiosResponse<any>>;
}