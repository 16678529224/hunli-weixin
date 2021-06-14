var app = getApp()
var imgUrlsDefault = []
var musicUrl ='http://music.163.com/song/media/outer/url?id=1839404698.mp3'
//数据可用接口返回 - 在此展示只是为了方便查看数据体
Page({
  data: {
    imgUrls: imgUrlsDefault,
    indicatorDots: true,
    autoplay: true,
    interval: 2600,
    duration: 1200,
    isPlayingMusic: true,
    music_url: musicUrl,
    isOfficial: app.globalData.isOfficial,
    text:"Page animation",
    d1yc:true,
    d2yc:false,
    d3yc:false,
    d4yc:false,
    d5yc:false,
    d6yc:false,
    d7yc:false,
    d8yc:false,
    dycend:false,
    animationData: {},
    animationData0: {},
    animationData1:{},
    animationData3:{},
    animationData4: {},
    animationData5v1: {},
    animationData5v2: {},
    animationData5v3: {},
    animationData5v4: {},
    animationData5v5: {},
    animationData6v1: {},
    animationData6v2: {},
    animationData6v3: {},
    animationData6v4: {},
    animationData6v5: {},
    animationData6:{},
    animationData7:{},
    animationData7v2:{},
    animationData8: {},

    animationDataend: {},
    animationData10:{},
    animationData11:{}
  },
  
  //生命周期函数--监听页面加载
  onLoad: function(data) {
    this.app = getApp()
    console.log("onLoad"+data)
    console.log(data)
    var that = this
    wx.playBackgroundAudio({
      dataUrl: musicUrl,
        title: '',
        coverImgUrl: ''
      })
      wx.showShareMenu({
        withShareTicket: true,
        // shareAppMessage表示“发送给朋友”按钮，shareTimeline表示“分享到朋友圈”按钮 
        // 这里选择两个都开启
        menus: ['shareAppMessage', 'shareTimeline']
      })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      isOfficial: app.globalData.isOfficial
    })

    // this.app.slideupshow(this, 'slide_up2', -0, 1)

    // setTimeout(function () {
    //   this.app.slideupshow(this, 'slide_up1', -0, 1)
    // }.bind(this), 200);
    // setTimeout(function () {
    //   this.app.slideupshow(this, 'slide_up3', -0, 1)
    // }.bind(this), 400);

  },

  /**
   * 下载首页数据
   */
  downLoadHomeImgs: function() { },
  // 每条List点击事件
  

  /**
   * 生命周期函数--监听页面隐藏
   * this.app.slideupshow(this, 'slide_up2', 400, 0)
    this.app.slideupshow(this, 'slide_up1', 400, 1)
    this.app.slideupshow(this, 'slide_up3', 400, 0)
   */
  onHide: function() {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  play: function(event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      console.log('this.data.music_url', this.data.music_url)
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
  chongbo: function() {
    wx.reLaunch({
      url: 'index'
    })
    // this.setData({
    //   dycend:(!this.data.dycend),
    //   d1yc:(!this.data.d1yc)
    // })
    // this.di1mu()
  },


  onReady:function(){
    this.di1mu()
 
  },
  di1mu:function(){
    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 2000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.scale(1.5,1.5).opacity(1).step()
    animation.scale(2,2).opacity(0.3).step()
    this.setData({
      animationData:animation.export()
    })
    setTimeout(function() {
      this.setData({
        d1yc:(!this.data.d1yc),
        d2yc:(!this.data.d2yc),
        animationData:{}
      })
      this.di2mu()
    }.bind(this), 4000)

  },
  di2mu:function(){
    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 1000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.translateY(-50).opacity(1).step()
    this.setData({
      animationData0:animation.export()
    })

    var animation1 =  wx.createAnimation({
      duration: 1000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation1 = animation1
    animation1.translateY(250).opacity(1).step()
    this.setData({
      animationData1:animation1.export()
    })

    setTimeout(function() {
      this.setData({
        d2yc:(!this.data.d2yc),
        d3yc:(!this.data.d3yc),
        animationData1:{},
        animationData0:{}
      })
      this.di3mu()
    }.bind(this), 2000)
  },
  di3mu:function(){
    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 1000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.scale(1.3,1.3).step()
    animation.scale(3,3).opacity(0.0).step()
    this.setData({
      animationData3:animation.export()
    })
    setTimeout(function() {
      this.setData({
        d3yc:(!this.data.d3yc),
        d4yc:(!this.data.d4yc),
        animationData3:{},
      })
      this.di4mu()
    }.bind(this), 2500)

  },
  di4mu:function(){
    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 1000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.scale(2.5,2.5).rotateX(360).step()
    this.setData({
      animationData4:animation.export()
    })
    setTimeout(function() {
      this.setData({
        animationData4:{},
        d4yc:(!this.data.d4yc),
        d5yc:(!this.data.d5yc)
      })
      this.di5mu()
    }.bind(this), 1500)

  },
  di5mu:function(){
    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 1000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.scale(2.5,2.5).rotateX(360).step()
    animation.scale(1,1).rotateX(360).step()
    this.setData({
      animationData5v2:animation.export()
    })
    setTimeout(function() {
          animation.translateY(-100).step()
          this.setData({
            animationData5v3:animation.export()
                    })
        }.bind(this), 500)
    setTimeout(function() {
          animation.translateY(-200).step()
          this.setData({
            animationData5v5:animation.export()
          })
        }.bind(this), 500)
   
    setTimeout(function() {
          this.setData({
            animationData5v2:{},
            animationData5v3:{},
            animationData5v5:{},
            d5yc:(!this.data.d5yc),
            d6yc:(!this.data.d6yc)
          })
          this.di6mu()
        }.bind(this), 4500) 

  },
  di6mu:function(){
    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 1000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.scale(2.5,2.5).rotateX(360).step()
    animation.scale(1,1).rotateX(360).step()
    this.setData({
      animationData6v2:animation.export()
    })
    setTimeout(function() {
          animation.translateY(-100).step()
          this.setData({
            animationData6v3:animation.export()
                    })
        }.bind(this), 500)
    setTimeout(function() {
          animation.translateY(-200).step()
          this.setData({
            animationData6v5:animation.export()
          })
        }.bind(this), 1000)
   
    setTimeout(function() {
          this.setData({
            animationData6v2:{},
            animationData6v3:{},
            animationData6v5:{},
            d6yc:(!this.data.d6yc),
            d7yc:(!this.data.d7yc)
          })
          this.di7mu()
        }.bind(this), 4500)  

  },
  di7mu:function(){
    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 1000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.scale(2.0,2.0).rotateX(360).step()
    this.setData({
      animationData7:animation.export()
    })
    animation.scale(2.0,2.0).rotateX(360).step()
    this.setData({
      animationData7:animation.export()
    })
    

    var animation1 =  wx.createAnimation({
      duration: 2000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    setTimeout(function() {
      animation1.translateY(-800).step()
      this.setData({
        animationData7v2:animation1.export()
      })
    }.bind(this), 1500)  
    
    setTimeout(function() {
      this.setData({
        d7yc:(!this.data.d7yc),
        d8yc:(!this.data.d8yc)
      })
      this.di8mu()
    }.bind(this), 4000)  
  },
  di8mu:function(){
    var mofang = this.selectComponent("#mofang")
    var dingshi = setInterval(
      function () {
          mofang.onZiYou()
          console.log('setInterval 每过500毫秒执行一次任务')
      }, 40);    
     


    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 2000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.translateY(-800).step()
    this.setData({
      animationData8:animation.export()
    })
    setTimeout(function() {
      clearInterval(dingshi)  
      this.setData({
        d8yc:(!this.data.d8yc),
        dycend:(!this.data.dycend)
      })
      this.diend()
    }.bind(this), 12000)  
  },
  diend:function(){
    //实例化一个动画
    var animation =  wx.createAnimation({
      duration: 2000, 
      timingFunction: 'linear',
      transformOrigin: 'center center 0'
    })
    this.animation = animation
    animation.scale(1.0,1.0).rotate3d(180,180,270,360).step()
    this.setData({
      animationDataend:animation.export()
    })

  },
  // 页面渲染完成模板
  onReady1:function(){
    var that=this;

   
  
    //实例化一个动画
    this.animation = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 10000, 
      /**
       * http://cubic-bezier.com/#0,0,.58,1  
       *  linear  动画一直较为均匀
       *  ease    从匀速到加速在到匀速
       *  ease-in 缓慢到匀速
       *  ease-in-out 从缓慢到匀速再到缓慢
       * 
       *  http://www.tuicool.com/articles/neqMVr
       *  step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
       *  step-end   保持 0% 的样式直到动画持续时间结束        一闪而过
       */
      timingFunction: 'linear',
      // 延迟多长时间开始
      delay: 1000,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      transformOrigin: 'left top 0',
      success: function(res) {
   
        console.log("cehngogng")
      }
    })
    this.rotate()
  },
 
  /**
   * 旋转
   */
  rotate: function() {
    //顺时针旋转10度
    //
    this.animation.rotate(150).step()
    this.setData({
      //输出动画
      animation: this.animation.export()
    })
    setTimeout(function() {
      this.setData({
        d1yc:(!this.data.d1yc)
      })
    }.bind(this), 11000)
  }




})