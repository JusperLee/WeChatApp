var ta=[];
var tc=[];

var tb;
Page({
  data: {
    im:"",
    images:{},
    array: [0,1,2,3,4],
    objectArray: [
      {
        id:0,
        name:0
      },
      {
        id: 1,
        name:1
      },
      {
        id: 2,
        name:2
      },
      {
        id: 3,
        name:3
      },
      {
        id: 4,
        name:4
      }
    ],
    index: 0,
    multiArray: [['宝马', '现代'], ['BMW1', 'BMW2']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '宝马'
        },
        {
          id: 1,
          name: '现代'
        }
      ], [
        {
          id: 0,
          name: 'BMW1'
        },
        {
          id: 1,
          name: 'BMW2'
        }
      ]
    ],
    multiIndex: [0, 0],
    date: '2016-09-01',
  },
  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = 755,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = 755 / ratio;    //计算的高度值
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    tc = e.detail.value;
    console.log(tc)
    if (tc[0] == 0) {
      if (tc[1] == 0) {
        this.setData({
          im:0
        })
      }
      else if (tc[1] == 1) {
        this.setData({
          im: 1
        })
      }
    }
    else if (tc[0] == 1) {
      if (tc[1] == 0) {
        this.setData({
          im: 2
        })
      }
      else if (tc[1] == 1) {
        this.setData({
          im: 3
        })
      }
    }
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['BMW1', 'BMW2'];
            break;
          case 1:
            data.multiArray[1] = ['NOW1', 'NOW2'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  // bindDateChange: function (e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     date: e.detail.value
  //   })
  // },
  formSubmit: function (e) {
    console.log(e.detail.value.type)
    ta=e.detail.value.type;
    tb=e.detail.value.Data;
    console.log(ta[0])
    console.log(ta[1])
    console.log(tb)
    var day1=999999;
    if(ta[0] == 0){
      if(ta[1]==0){
        day1 = 3 - tb;
      }
      else if(ta[1]==1){
        day1 = 2 - tb ;
      }
    }
    else if(ta[0] == 1){
      if (ta[1] == 0) {
        day1 = 4 - tb;
      }
      else if (ta[1] == 1) {
        day1 = 5 - tb;
      }
    }
    wx.navigateTo({
         url: '../recomd/recomd?day1=' + day1
       })
  }
})
// Page({
//   data:{

//   },
//   formSubmit:function(e){
//     if(e.detail.value.type=='宝马BMW1'){
//       var day1= 30 - e.detail.value.Data;
//         wx.navigateTo({
//           url: '../recomd/recomd?day1=' + day1
//         })
//     }
//     else if (e.detail.value.type == '宝马BMW2'){
//      var day1 = 20 - e.detail.value.Data;
//       wx.navigateTo({
//         url: '../recomd/recomd?day1=' + day1
//       })

//     }
//     else if (e.detail.value.type == '现代NOW1') {
//       var day1 = 40 - e.detail.value.Data;
//       wx.navigateTo({
//         url: '../recomd/recomd?day1=' + day1
//       })

//     }
//     else if (e.detail.value.type == '现代NOW2') {
//       var day1 = 35 - e.detail.value.Data;
//       wx.navigateTo({
//         url: '../recomd/recomd?day1=' + day1
//       })

//     }
//     else{
//       var day1 = 999999;
//       wx.navigateTo({
//         url: '../recomd/recomd?day1=' + day1
//       })
//     }
//   }
// })