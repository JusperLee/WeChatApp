// pages/find/find.js
var QQMapWX = require('../lib/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    pan: false,
    array:[],
    markers: [],
    title1:"",
    address1:"",
    click:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'UMPBZ-UXV6X-QKV4E-TLFPH-TGMAE-FCB54'
    });
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.setData({
          latitudes: res.latitude,
          longitudes: res.longitude,
        })
      },
    })

    var _this = this;
    // 调用接口
    qqmapsdk.search({
      keyword: '停车场',  //搜索关键词
      success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "../image/停车.png",
            height: 20,
            width:20
          })
        }
        var show=[];
        for (var i = 0; i < res.data.length; i++) {
          show.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            address:res.data[i].address,
            tel:res.data[i].tel        
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks,
          array:show
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },
  markertap(e) {
    var that=this
    that.setData({
      id: e.markerId,
      click:that.data.click+1
    })
    console.log(that.data.id+'hhhhhh');
    if(that.data.click%2==0){
      that.setData({
        pan:false
      })
    }
    if (that.data.click % 2 != 0) {
      that.setData({
        pan: true
      })
    }
    for(var i=0;i<that.data.array.length;i++){
      var s=""+that.data.id
      console.log(s)
      if(s == that.data.array[i].id){
        that.setData({
          title1:that.data.array[i].title,
          address1:that.data.array[i].address,
        })
      }
    }
    console.log(that.data.pan)
  },
  tiaozhuan:function(){
      wx.navigateTo({
        url: '../zhuye/zhuye',
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