//app.js
import { login, getSetting, getUserInfo } from './promisify/index';

App({
  globalData: {
    userInfo: null
  },

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    const setUserInfo = (res: { userInfo: Object }) => {
      this.globalData.userInfo = res.userInfo;
      if (this.userInfoReadyCallback) {
        this.userInfoReadyCallback(res);
      }
    };

    login()
      .then(getSetting)
      .then(getUserInfo)
      .then(setUserInfo)
      .catch(err => {
        console.log(err.message);
      });
  }
});
