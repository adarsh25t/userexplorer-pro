import { User } from "@/utils/type";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_KEY = "USER_CACHE";

export const saveUsersToCache = async (users: User[]) => {
  try {
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(users));
  } catch (e) {
    console.log("Cache save error", e);
  }
};

export const loadUsersFromCache = async () => {
  try {
    const data = await AsyncStorage.getItem(CACHE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (e) {
    console.log("Cache load error", e);
    return [];
  }
};
