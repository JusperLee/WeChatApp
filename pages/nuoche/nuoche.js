// pages/index/index.js
//引用百度地图微信小程序模板
var amapFile = require('../lib/amap-wx.js');
var markersData = [];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //填写申请到的ak
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    imageSrc: 'https://www.dimtim.xyz/image/背景.png',
    imageSign: 'https://www.dimtim.xyz/image/警示.png',
    imageCard: 'https://www.dimtim.xyz/image/车牌号.png',
    imagePosition: 'https://www.dimtim.xyz/image/车位置.png',
    imageGraghsign: 'https://www.dimtim.xyz/image/图标.png',
    message_card1: '车牌号',
    message_positon1: '车位置',
    message_card2: '',
    message_sign1: '请您认真核实车辆的信息',
    message_sign2: '尽量避免与车主产生误会',
    message_satefy1: '文明驾车  秩序停车',
    message_satefy2: '保驾护航',
    xulie: '',
    phone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  back: function () {
    wx.redirectTo({
      url: '../index/index',//在这里改下地址就行
    })
  },
  agree: function () {
    wx.redirectTo({
      url: '../info/info',//在这里改下地址就行
    })
  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData, id);
  },
  onLoad: function () {
    var that = this;
    var xulie1 = String(wx.getStorageSync('xulie'))
    console.log(xulie1)
    that.setData({
      xulie: xulie1
    })
    console.log(that.data.xulie)
    wx.request({
      url: 'https://www.dimtim.xyz/car/xulie.php',
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        xulie: that.data.xulie
      },
      success: function (res) {
        console.log("successful")
        console.log(res.data)
        that.setData({
          message_card2:res.data.carid,
        })
        wx.setStorage({
          key: 'phone',
          data: res.data.phone,
        })
      },
      fail:function(res){
      }
    })
    /*
    console.log(fileData.searchmtdata(xulie))
    that.setData({
      message_card2:fileData.searchmtdata(xulie)
    })*/
    var myAmapFun = new amapFile.AMapWX({ key: '498865612d3ea374293114ea234240d6' });
    myAmapFun.getPoiAround({
      success: function (data) {
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData, 0);
      },
      fail: function (info) {
        wx.showModal({ title: info.errMsg })
      },
    })
  },
  showMarkerInfo: function (data, i) {
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
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
