import { ICharacter } from "../../constants/characterTemplate";

export const SET_STAT = "SET_STAT";
export const SET_MULTIFIELDSTAT = "SET_MULTIFIELDSTAT";
export const NEW_CURRENT_CHARACTER = "NEW_CURRENT_CHARACTER";

export const setStat = (stat: string, newStat: any) => {
  return {
    type: SET_STAT,
    stat: stat,
    newStat: newStat,
  };
};

export const setMultiFieldStat = (
  statType: string,
  statId: any,
  newStat: any
) => {
  return {
    type: SET_MULTIFIELDSTAT,
    statType: statType,
    statId: statId,
    newStat: newStat,
  };
};

export const newCurrentCharacter = (newCharacter: ICharacter) => {
  return {
    type: NEW_CURRENT_CHARACTER,
    newCharacter: newCharacter,
  };
};
