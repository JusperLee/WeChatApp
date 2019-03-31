
var app = getApp()
Page({
  data: {
    show: "",
  },

  onLoad: function () {
    console.log('onLoad')
  },

  clicktol: function(){
    wx.navigateTo({
      url: '../lineToCar/lineToCar',
    })
  },
  click: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "您已成功锁定爱车位置~";
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: this.show,
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  }
})
