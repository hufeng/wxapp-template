//app.js
import { login, getSetting, getUserInfo } from './promisify/index';

App({
  globalData: {
    userInfo: null
  },

  async onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    await login();
    // 获取用户信息
    await getSetting();
    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    const res = (await getUserInfo()) as { userInfo: any };

    this.globalData.userInfo = res.userInfo;
    if (this.userInfoReadyCallback) {
      this.userInfoReadyCallback(res);
    }
  }
});
