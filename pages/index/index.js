Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload")

  },
  scan: function () {
    var path1;
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        this.path1 = res.path;
        this.setData({
          path1: this.path1
        })
        console.log(res)
        console.log(this.path1)
        var url = this.path1;
        url = url.split('/');
        var str = '../' + url[1];
        for (var i = 2; i < url.length; i++) {
          str = str + "/" + url[i];
        }
        var s=str.substring(str.indexOf('=')+1,str.length)
        s=Number(s)
        console.log(s)
        wx.setStorage({
          key: 'xulie',
          data: s,
        })
        console.log(url.length)
        console.log(str)
        wx.navigateTo({
          url: str,
        })

      }
    })



  },
  click: function () {
    wx.navigateTo({
      url: '../input/input',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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