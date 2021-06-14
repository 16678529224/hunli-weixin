// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env: 'yplzf-4gb2htq644912893', //这里是云数据库的环境ID
      traceUser: true
    })

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.showShareMenu({
      withShareTicket: true,
      // shareAppMessage表示“发送给朋友”按钮，shareTimeline表示“分享到朋友圈”按钮 
      // 这里选择两个都开启
      menus: ['shareAppMessage', 'shareTimeline']
    })

    this.onShareAppMessage()
    this.onShareTimeline() 
  },
  onLoad: function(data) {

  },
  // 转发给朋友
  onShareAppMessage(){
    wx.onAppRoute(() =>{
      const pages = getCurrentPages() //获取加载的页面
      const view = pages[pages.length - 1] //获取当前页面的对象
      if(!view)  return false  //如果不存在页面对象 则返回
        view.onShareAppMessage = () => { //重写分享配置
          return {
            title: '袁 鹏&李振芳 婚礼邀请函',
            path: "/pages/home/home", //若无path 默认跳转分享页
            imageUrl:'cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/205.jpg' //若无imageUrl 截图当前页面
          }
        }
      
    })
  },

  // 朋友圈
  onShareTimeline() {
    
    wx.onAppRoute(() =>{
      const pages = getCurrentPages() //获取加载的页面
      const view = pages[pages.length - 1] //获取当前页面的对象
      if(!view)  return false  //如果不存在页面对象 则返回
        view.onShareTimeline = () => { //重写分享配置
          return {
            title: '袁 鹏&李振芳 婚礼邀请函',
            query: "/pages/home/home", //若无path 默认跳转分享页
            imageUrl:'cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/205.jpg' //若无imageUrl 截图当前页面
          }
        }
      
    })
  },



  globalData: {
    userInfo: null
  }, 
  //渐入，渐出实现  https://www.jianshu.com/p/fe19bb159f70?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
  show: function (that, param, opacity) {
    var animation = wx.createAnimation({
      //持续时间800ms
      duration: 1500,
      timingFunction: 'ease',
    });
    //var animation = this.animation
    animation.opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  },
  //滑动渐入渐出
  slideupshow: function (that, param, px, opacity) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    animation.translateY(px).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  },

  //向右滑动渐入渐出
  sliderightshow: function (that, param, px, opacity) {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    animation.translateX(px).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  }
})