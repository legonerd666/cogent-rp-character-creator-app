export const SET_STAT = "SET_STAT";
export const SET_MULTIFIELDSTAT = "SET_MULTIFIELDSTAT";
export const RESET_CHARACTER = "RESET_CHARACTER";

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
