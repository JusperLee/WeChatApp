Page({

  /**
   * 页面的初始数据
   */
  data: {
    xulie: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  click: function () {
    var xulie=this.data.xulie
    xulie=Number(xulie)
    wx.setStorage({
      key: 'xulie',
      data: xulie,
    })
    
    if (this.data.xulie == 0) {
      wx.showToast({
        title: '输入不能为空',
        icon: 'success',
        duration: 1000,

      })
    }
    else {
      title: '成功'
      icon: 'success'
      duration: 1000,
      wx.navigateTo({
          url: '../nuoche/nuoche',
          })
    }

  },
  inputXulie: function (e) {

    this.setData({
      xulie: e.detail.value
    })
    
  },
  return: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})