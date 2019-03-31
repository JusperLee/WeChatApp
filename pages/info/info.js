const app = getApp()

Page({
  data: {
    isChecked1: false,
    isChecked2: false,
    isChecked3: false,
    isChecked4: false,
    QT: false,
    DX: false,
    TI: '',
    images: [],
    Phone: '',
    M1: '爱车挡道，请您挪车',
    M2: '我有急事，请您快来',
    M3: '违规停车，请您挪车',
    M4: '您的车门车窗未关',

  },

  serviceSelection1() {
    this.setData({
      isChecked1: true,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
    })
  },

  serviceSelection2() {
    this.setData({
      isChecked2: true,
      isChecked1: false,
      isChecked3: false,
      isChecked4: false,
    })
  },
  serviceSelection3() {
    this.setData({
      isChecked3: true,
      isChecked1: false,
      isChecked2: false,
      isChecked4: false,
    })
  },
  serviceSelection4() {
    this.setData({
      isChecked4: true,
      isChecked1: false,
      isChecked2: false,
      isChecked3: false,
    })
  },

  qita: function (e) {
    if (e.detail.value) {
      this.setData({
        isChecked4: false,
        isChecked1: false,
        isChecked2: false,
        isChecked3: false,
      })
    }
    else {
      this.setData({
        TI: ' '
      })
    }
    this.setData({
      QT: e.detail.value
    })
  },
  Mess: function (e) {
    this.setData({
      TI: e.detail.value
    })
  },

  duanxin: function (e) {
    this.setData({
      DX: e.detail.value
    })
  },

  Fin: function () {
    if (this.data.isChecked1) {
      this.setData({
        TI: this.data.M1
      })
    }
    if (this.data.isChecked2) {
      this.setData({
        TI: this.data.M2
      })
    }
    if (this.data.isChecked3) {
      this.setData({
        TI: this.data.M3
      })
    }
    if (this.data.isChecked4) {
      this.setData({
        TI: this.data.M4
      })
    }
    var Phone1 = String(wx.getStorageSync('phone'))
    console.log(Phone1)
    console.log(this.data.TI)
    var images=this.data.images;
    console.log(images)
    if(images.length!=0){
      for (var i = 0; i < images.length; i++) {
        wx.uploadFile({
          url: 'https://www.dimtim.xyz/car/image.php', //仅为示例，非真实的接口地址  
          filePath: images[i],
          name: 'file',
          success: function (res) {
            console.log(res)
            console.log("hhhhhhh")
           
          },
          fail:function(res){
            console.log(res.errMsg)
          }  
        })
      }
        wx.showToast({
          title: '已提交发布！',
          duration: 2000,
        });
      wx.navigateTo({
        url: '../zhuye/zhuye',
      })
      if (this.data.DX) {
        wx.request({
          url: 'https://www.dimtim.xyz/message/message.php',
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: {
            Ti: this.data.TI,
            Phone: Phone1
          },
          success: function (res) {
            console.log("successful")
            console.log(res.data)

          },
          fail: function (res) {
          }
        })
      }
    }
    if (images.length==0){
      wx.showToast({
        title: '请上传照片',
        icon: 'none'
      })
    }
    console.log(this.data.TI);
    console.log(this.data.DX);
  },
  onclick: function () {
    var that = this,
      images = this.data.images;

    wx.chooseImage({
      count: 3, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        var imgsrc = res.tempFilePaths;
        images = images.concat(imgsrc);
        that.setData({
          images: images
        });
        console.log(images);
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },
  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },
})