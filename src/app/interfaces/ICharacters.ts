import { ICharacter } from "./ICharacter";
import { IInfo } from "./IInfo";

export interface ICharacters{
    info: IInfo,
    results: Array<ICharacter>
  }