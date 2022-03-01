import {
  ICharacter,
  IInjury,
  ISpecialization,
  IVocation,
} from "../../constants/characterTemplate";

export const SET_NUMBER_STAT = "SET_NUMBER_STAT";
export const SET_STRING_STAT = "SET_STRING_STAT";
export const SET_VOCATION = "SET_VOCATION";
export const SET_SPECIALIZATION = "SET_SPECIALIZATION";
export const SET_INJURY = "SET_INJURY";
export const SET_INJURIES = "SET_INJURIES";
export const SET_VOCATIONS = "SET_VOCATIONS";
export const SET_SPECIALIZATIONS = "SET_SPECIALIZATIONS";
export const NEW_CURRENT_CHARACTER = "NEW_CURRENT_CHARACTER";

export const setNumberStat = (stat: string, newStat: number) => {
  return {
    type: SET_NUMBER_STAT,
    stat: stat,
    newStat: newStat,
  };
};

export const setStringStat = (stat: string, newStat: string) => {
  return {
    type: SET_STRING_STAT,
    stat: stat,
    newStat: newStat,
  };
};

export const setVocation = (vocationId: string, newVocation: IVocation) => {
  return {
    type: SET_VOCATION,
    vocationId: vocationId,
    newVocation: newVocation,
  };
};

export const setSpecialization = (
  specializationId: string,
  newSpecialization: ISpecialization
) => {
  return {
    type: SET_SPECIALIZATION,
    specializationId: specializationId,
    newSpecialization: newSpecialization,
  };
};

export const setInjury = (injuryId: string, newInjury: IInjury) => {
  return {
    type: SET_INJURY,
    injuryId: injuryId,
    newInjury: newInjury,
  };
};

export const setVocations = (newVocations: IVocation[]) => {
  return {
    type: SET_VOCATIONS,
    newVocations: newVocations,
  };
};

export const setSpecializations = (newSpecializations: ISpecialization[]) => {
  return {
    type: SET_SPECIALIZATIONS,
    newSpecializations: newSpecializations,
  };
};

export const setInjuries = (newInjuries: IInjury[]) => {
  return {
    type: SET_INJURIES,
    newInjuries: newInjuries,
  };
};

export const newCurrentCharacter = (newCharacter: ICharacter) => {
  return {
    type: NEW_CURRENT_CHARACTER,
    newCharacter: newCharacter,
  };
};
