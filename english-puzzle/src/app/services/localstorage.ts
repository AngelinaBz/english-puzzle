import { User } from '../interface';

export default class LocalStorageManager {
  private userDataKey = 'userData';

  saveUserData(firstName: string, lastName: string) {
    const userData: User = {
      firstName,
      lastName,
    };

    localStorage.setItem(this.userDataKey, JSON.stringify(userData));
  }

  getUserData(): User | null {
    const userDataString = localStorage.getItem(this.userDataKey);

    if (userDataString) {
      return JSON.parse(userDataString);
    }

    return null;
  }
}
