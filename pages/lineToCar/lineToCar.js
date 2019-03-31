var winWidth = 0
var winHeight = 0
var diameter = 0.8
var time = 0
var context = wx.createContext()

Page({
  data: {
    numX: 1,
    numY: 1,
    images:{}
  },
  xy: {
    //小球的xy坐标
    x: 10,
    y: 10
  },
  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;   
    var viewWidth = 718,          
      viewHeight = 718 / ratio;    
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  },
  onLoad: function (options) {
    //进来先获取手机的屏幕宽度和高度
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        winHeight = res.windowHeight;
        winWidth = res.windowWidth;
      }
    })
    
    
  },

  onReady: function () {
    //循环滚动小球
    //context.setFillStyle('blue')
    //context.setLineWidth(1)
    context.rect(20, 30, 60, 30)
    context.fill()
    context.rect(20, 62, 60, 30)
    context.fill()

    context.rect(20, 120, 60, 30)
    context.fill()
    context.rect(20, 152, 60, 30)
    context.fill()

    context.rect(20, 210, 60, 30)
    context.fill()
    context.rect(20, 242, 60, 30)
    context.fill()

    context.rect(20, 300, 60, 30)
    context.fill()
    context.rect(20, 332, 60, 30)
    context.fill()

    context.rect(82, 30, 60, 30)
    context.fill()
    context.rect(82, 62, 60, 30)
    context.fill()

    context.rect(82, 120, 60, 30)
    context.fill()
    context.rect(82, 152, 60, 30)
    context.fill()

    context.rect(82, 210, 60, 30)
    context.fill()
    context.rect(82, 242, 60, 30)
    context.fill()

    context.rect(82, 300, 60, 30)
    context.fill()
    context.rect(82, 332, 60, 30)
    context.fill()



    context.rect(260, 30, 60, 30)
    context.fill()
    context.rect(260, 62, 60, 30)
    context.fill()

    context.rect(260, 120, 60, 30)
    context.fill()
    context.rect(260, 152, 60, 30)
    context.fill()

    context.rect(260, 210, 60, 30)
    context.fill()
    context.rect(260, 242, 60, 30)
    context.fill()

    context.rect(260, 300, 60, 30)
    context.fill()
    context.rect(260, 332, 60, 30)
    context.fill()

    context.rect(322, 30, 60, 30)
    context.fill()
    context.rect(322, 62, 60, 30)
    context.fill()

    context.rect(322, 120, 60, 30)
    context.fill()
    context.rect(322, 152, 60, 30)
    context.fill()

    context.rect(322, 210, 60, 30)
    context.fill()
    context.rect(322, 242, 60, 30)
    context.fill()

    context.rect(322, 300, 60, 30)
    context.fill()
    context.rect(322, 332, 60, 30)
    context.fill()
    context.setFillStyle('red')
    for (var i = 0; i < 1; i++) {
      //随机一个滚动的速度
      time = 10
      setInterval(this.move, time);
      console.log(time)
    }
  },
  move() {

    //x 
    if (this.data.numX == 1 && this.xy.x < winWidth / 2) {
      this.xy.x++
    } else {
      if (this.data.numY == 1 && this.xy.y < 280) {
        this.xy.y++
      } else {
        if(this.xy.x<winWidth*4/5){
          this.xy.x++
        }else {
          if (this.xy.y > 260)
            this.xy.y--
        }
      }
    }

    //判断x轴的状态
    if (this.xy.x == winWidth - diameter) {
      this.data.numX = 2
    }
    if (this.xy.x == diameter) {
      this.data.numX = 1
    }

    //y
    

    //判断y轴的状态
    if (this.xy.y == 400 - diameter) {
      this.data.numY = 2
    }
    if (this.xy.y == diameter) {
      this.data.numY = 1
    }

    //画图
    this.ballMove(this.xy.x, this.xy.y);
    
  },
  


  ballMove(x, y) {
    // 使用 wx.createContext 获取绘图上下文 context
    
    context.setShadow(0,1,6,'#000000')
    context.setFillStyle("#FFFFFF")
    context.setLineWidth(2)
    context.arc(x, y, diameter, 0, 2 * Math.PI, true)
    context.fill()
    
    context.beginPath();//开始一个新的路径  
        
    
    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'ball',
      actions: context.getActions(), // 获取绘图动作数组
      reserve: true
    })
  }
})