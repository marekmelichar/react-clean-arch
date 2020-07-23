import { INote } from '../../domain/entity/note'
import { AxiosResponse } from 'axios';

export interface IGetNotes {
  execute(): Promise<INote[]>
}

export interface ICreateNote {
  execute(newNote: INote): Promise<AxiosResponse<any>>
}