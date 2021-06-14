Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      zuoyao:30,
      youyao:-30,
      longitude: 113.14278, //地图界面中心的经度
      latitude: 23.02882, //地图界面中心的纬度
      markers: [ //标志点的位置
        //位置0
        {
          id: 0,
          iconPath: "/static/img/tab/biaoji.png",
          latitude: 47.334049,
          longitude: 123.932881,
          width: 28,
          height: 32,
          label:{
            content: '龙沙区群意花园',  //文本
            color: '#FF0202',  //文本颜色
            borderRadius: 3,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#FF0202',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          },
          callout: {
            content: '龙沙区群意花园',  //文本
            color: '#FF0202',  //文本颜色
            borderRadius: 3,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#FF0202',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          }
        },
        //位置1
        {
          id: 1,
          iconPath: "/static/img/tab/biaoji.png",
          latitude: 47.326992,
          longitude: 123.957671,
          width: 28,
          height: 32,
          label:{
            content: '结婚：大亨通精品酒店',  //文本
            color: '#FF0202',  //文本颜色
            borderRadius: 3,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#FF0202',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          },
          callout: {
            content: '结婚：大亨通精品酒店',  //文本
            color: '#FF0202',  //文本颜色
            borderRadius: 3,  //边框圆角
            borderWidth: 1,  //边框宽度
            borderColor: '#FF0202',  //边框颜色
            bgColor: '#ffffff',  //背景色
            padding: 5,  //文本边缘留白
            textAlign: 'center'  //文本对齐方式。有效值: left, right, center
          }
        },
      ]
   },
   
    onLoad: function () {
      var that = this;
  
      wx.getLocation({
        type: "wgs84",
        success: function (res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
         //console.log("当前位置的经纬度为：", res.latitude, res.longitude);
          that.setData({
          //  latitude: res.latitude,
          //  longitude: res.longitude,
            latitude: parseFloat(47.341166),
            longitude: parseFloat(123.952606),
          })
        }
      })
      this.xindong();
    },
    onReady: function () {
  
    },
    xinlang: function () {
      wx.makePhoneCall({
        phoneNumber: '16678529224', //这个是我的手机号，模拟测试
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
    },
    xinniang: function () {
      wx.makePhoneCall({
        phoneNumber: '18353272437', //这个是我的手机号，模拟测试
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
    },
    /**
     * 地图放大缩小事件触发
     * @param {*} e 
     */
    bindregionchange(e) {
      console.log('=bindregiοnchange=', e)
    },
  
    /**
     * 点击地图事件，有经纬度信息返回
     * @param {*} e 
     */
    bindtapMap(e) {
      console.log('=bindtapMap=', e)
    },

    xindong: function () {
      var that = this
      var panduan = true;
  
      
    setInterval(function () {
      //循环执行代码
            if(panduan){
              that.setData({
                zuoyao: -20,
                youyao:20
               })
            }else{
              that.setData({
                zuoyao:20,
                youyao:-20
               })
            }
  
  
  
            
            panduan = !panduan;
      }, 1000) 
  
      
  
    },
      /**
     * 地图导航
     */
    markertap(e) {
      console.log(e)
      wx.openLocation({
      latitude: parseFloat(47.334049),
      longitude: parseFloat(123.932881),
      scale: 18,
      name: '群意花园',
      address: '黑龙江省齐齐哈尔市龙沙区合意大街141号'
    })
    }
})