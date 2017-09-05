export const login = () =>
  new Promise(resolve => {
    wx.login({
      success() {
        resolve();
      }
    });
  });

export const getSetting = () =>
  new Promise(resolve => {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          resolve();
        }
      }
    });
  });

export const getUserInfo = () =>
  new Promise(resolve => {
    wx.getUserInfo({
      success(res) {
        resolve(res);
      }
    });
  });
