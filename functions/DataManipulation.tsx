import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICharacter } from "../constants/characterTemplate";

class dataManipulation {
  saveData = async () => {
    try {
      const jsonValue = JSON.stringify(this.data);
      await AsyncStorage.setItem("LocalCharacterData", jsonValue);
    } catch (e) {
      alert(e);
    }
  };

  private loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("LocalCharacterData");
      if (jsonValue != null) {
        return JSON.parse(jsonValue);
      } else {
        this.initializeSaveData();
        return this.loadData;
      }
    } catch (e) {
      alert(e);
    }
  };

  initializeSaveData = () => {
    this.setData([]);
    this.saveData();
  };

  clearData = async () => {
    this.data = [];
    this.saveData();
  };

  storeLoadedData = async () => {
    this.data = await this.loadData();
  };

  getData = () => {
    return this.data;
  };
  setData = (newData: ICharacter[]) => {
    this.data = newData;
  };

  data: ICharacter[] = [];
}

export default dataManipulation;
