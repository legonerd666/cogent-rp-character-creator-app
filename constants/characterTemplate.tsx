import { v4 as uuid } from "uuid";

export type skilltype = "v" | "c";

export interface IVocation {
  id: string;
  name: string;
  stat: string;
  bonus: number;
}

export interface ISpecialization {
  parentName: string;
  id: string;
  type: skilltype;
  name: string;
  stat: string;
  bonus: number;
  dmgBonus: number;
  armorPen: number;
}

export interface IInjury {
  id: string;
  name: string;
  penalty: number;
}

export interface ICharacter {
  id: string;
  name: string;
  age: string;
  race: string;
  bodyType: string;
  disablingCharacteristics: string;
  disposition: string;
  history: string;
  beliefsMorality: string;
  goalsAspirations: string;
  strength: number;
  reflex: number;
  intelligence: number;
  endurance: number;
  athletics: number;
  grip: number;
  swim: number;
  skillThrow: number;
  perception: number;
  acrobatics: number;
  ridePilot: number;
  sleightOfHand: number;
  stealth: number;
  generalKnowledge: number;
  deception: number;
  infiltration: number;
  persuasion: number;
  survival: number;
  vocations: IVocation[];
  specializations: ISpecialization[];
  injuries: number;
  lingeringInjuries: IInjury[];
  destinyPoints: number;
  commercePoints: number;
  equipment: string;
  notes: string;
  bgColor: string;
  attributePoints: number;
  skillPoints: number;
}

function blankCharacter(): ICharacter {
  return {
    id: uuid(),
    name: "Unknown",
    age: "Unknown",
    race: "Unknown",
    bodyType: "Unknown",
    disablingCharacteristics: "None",
    disposition: "Unknown",
    history: "Lost to the ages",
    beliefsMorality: "A mystery",
    goalsAspirations: "Unknown",
    strength: 0,
    reflex: 0,
    intelligence: 0,
    endurance: 0,
    athletics: 0,
    grip: 0,
    swim: 0,
    skillThrow: 0,
    perception: 0,
    acrobatics: 0,
    ridePilot: 0,
    sleightOfHand: 0,
    stealth: 0,
    generalKnowledge: 0,
    deception: 0,
    infiltration: 0,
    persuasion: 0,
    survival: 0,
    vocations: [
      {
        id: uuid(),
        name: "",
        stat: "",
        bonus: 1,
      },
    ],
    specializations: [
      {
        parentName: "",
        id: uuid(),
        type: "v",
        name: "",
        stat: "",
        bonus: 0,
        dmgBonus: 0,
        armorPen: 0,
      },
    ],
    injuries: 0,
    lingeringInjuries: [{ id: uuid(), name: "", penalty: 0 }],
    destinyPoints: 0,
    commercePoints: 0,
    equipment: "None",
    notes: "No Notes",
    bgColor: "#ffffff",
    attributePoints: 2,
    skillPoints: 12,
  };
}

export default blankCharacter;
