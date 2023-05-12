
  export default class UserInfo {
    constructor(userNameContainer, userInfoContainer) {
        this._userName = userNameContainer;
        this._userInfo = userInfoContainer;
      }

      getUserInfo() {
        const userInfo = {
          name: this._userName.textContent,
          description: this._userInfo.textContent,
        };
        return userInfo;
      }
    
      setUserInfo([newName, newDescription]) {
        this._userName.textContent = newName,
        this._userInfo.textContent = newDescription
      }
  }