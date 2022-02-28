import blankCharacter from "../../constants/characterTemplate";
import {
  NEW_CURRENT_CHARACTER,
  SET_MULTIFIELDSTAT,
  SET_STAT,
} from "../actions/currentCharacter";

const initialState = blankCharacter();

const currentCharacterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_STAT:
      switch (action.stat) {
        case "id":
          return { ...state, id: action.newStat };
        case "name":
          return { ...state, name: action.newStat };
        case "age":
          return { ...state, age: action.newStat };
        case "race":
          return { ...state, race: action.newStat };
        case "bodyType":
          return { ...state, bodyType: action.newStat };
        case "disablingCharacteristics":
          return { ...state, disablingCharacteristics: action.newStat };
        case "disposition":
          return { ...state, disposition: action.newStat };
        case "history":
          return { ...state, history: action.newStat };
        case "beliefsMorality":
          return { ...state, beliefsMorality: action.newStat };
        case "goalsAspirations":
          return { ...state, goalsAspirations: action.newStat };
        case "strength":
          return { ...state, strength: action.newStat };
        case "reflex":
          return { ...state, reflex: action.newStat };
        case "intelligence":
          return { ...state, intelligence: action.newStat };
        case "athletics":
          return { ...state, athletics: action.newStat };
        case "endurance":
          return { ...state, endurance: action.newStat };
        case "grip":
          return { ...state, grip: action.newStat };
        case "swim":
          return { ...state, swim: action.newStat };
        case "skillThrow":
          return { ...state, skillThrow: action.newStat };
        case "acrobatics":
          return { ...state, acrobatics: action.newStat };
        case "perception":
          return { ...state, perception: action.newStat };
        case "ridePilot":
          return { ...state, ridePilot: action.newStat };
        case "sleightOfHand":
          return { ...state, sleightOfHand: action.newStat };
        case "stealth":
          return { ...state, stealth: action.newStat };
        case "deception":
          return { ...state, deception: action.newStat };
        case "generalKnowledge":
          return { ...state, generalKnowledge: action.newStat };
        case "infiltration":
          return { ...state, infiltration: action.newStat };
        case "persuasion":
          return { ...state, persuasion: action.newStat };
        case "survival":
          return { ...state, survival: action.newStat };
        case "vocations":
          return { ...state, vocations: action.newStat };
        case "specializations":
          return { ...state, specializations: action.newStat };
        case "injuries":
          return { ...state, injuries: action.newStat };
        case "lingeringInjuries":
          return { ...state, lingeringInjuries: action.newStat };
        case "destinyPoints":
          return { ...state, destinyPoints: action.newStat };
        case "commercePoints":
          return { ...state, commercePoints: action.newStat };
        case "equipment":
          return { ...state, equipment: action.newStat };
        case "notes":
          return { ...state, notes: action.newStat };
        case "bgColor":
          return { ...state, bgColor: action.newStat };
        case "attributePoints":
          return { ...state, attributePoints: action.newStat };
        case "skillPoints":
          return { ...state, skillPoints: action.newStat };
        default:
          return state;
      }
    case SET_MULTIFIELDSTAT:
      switch (action.statType) {
        case "vocation":
          const vocationIndex = state.vocations.findIndex(
            (vocationById) => vocationById.id === action.statId
          );
          const vocations = state.vocations;
          vocations[vocationIndex] = action.newStat;
          return { ...state, vocations: vocations };
        case "specialization":
          const specializationIndex = state.specializations.findIndex(
            (specializationById) => specializationById.id === action.statId
          );
          const specializations = state.specializations;
          specializations[specializationIndex] = action.newStat;
          return { ...state, specializations: specializations };
        case "injury":
          const injuryIndex = state.lingeringInjuries.findIndex(
            (injuryById) => injuryById.id === action.statId
          );
          const injuries = state.lingeringInjuries;
          injuries[injuryIndex] = action.newStat;
          return { ...state, lingeringInjuries: injuries };
        default:
          return state;
      }
    case NEW_CURRENT_CHARACTER:
      return action.newCharacter;
    default:
      return initialState;
  }
};

export default currentCharacterReducer;
