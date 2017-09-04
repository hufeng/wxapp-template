//logs.js
const util = require('../../utils/util.js');

Page({
  data: {
    logs: []
  },

  onLoad() {
    const logs = (wx.getStorageSync('logs') || [])
      .map(log => util.formatTime(new Date(log)));
    this.setData({
      logs
    });
  }
});
