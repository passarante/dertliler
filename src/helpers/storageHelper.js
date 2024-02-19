import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorageData = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);

    if (result !== null) {
      return JSON.parse(result);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const removeStorageData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const setStorageData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
