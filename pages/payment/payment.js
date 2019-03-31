// payment.js
var checkNetWork = require("../../utils/CheckNetWork.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carNum: '青A 66666',
    payMoney: '15.68',
    phoneNumber: '',
    isPay: false,
    userInfo: {},
    feeScale1:'9座以下（不含9座）车辆收费10元/次',
    feeScale2:'20座以上（不含20座）收费20元/次',
    phoneNumber: '0971-XXXXXXXX',
  },

  onLoad: function (options) {

  },

  /**
   * 支付
   */
  recharge: function () {
    var self = this;
    if (self.data.isPay) {
      return false
    }
    self.setData({
      isPay: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 拨打电话
   */
  phoneCall: function () {
    var self = this;
    wx.makePhoneCall({
      phoneNumber: self.data.phoneNumber
    })
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      desc: '我刚刚发现了一个有趣的小程序,分享给大家看看吧', // 分享描述
      path: 'pages/keyboard/keyboard' // 分享路径
    }
  }
})