export const login = () =>
  new Promise((resolve, reject) => {
    wx.login({
      success() {
        resolve();
      },
      fail() {
        reject(new Error('login fail'));
      }
    });
  });

export const getSetting = () =>
  new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          resolve(null);
        } else {
          reject(new Error('auth setting failed'));
        }
      },
      fail() {
        reject(new Error('auth setting failed'));
      }
    });
  });

export const getUserInfo = () =>
  new Promise((resolve, reject) => {
    wx.getUserInfo({
      success(res) {
        resolve(res);
      },
      fail() {
        reject(new Error('get user info failed'));
      }
    });
  });
