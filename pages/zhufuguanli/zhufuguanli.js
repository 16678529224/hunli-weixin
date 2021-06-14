// pages/zhufuguanli/zhufuguanli.js


var app = getApp

wx.cloud.init({
  env:'yplzf-4gb2htq644912893'  })

const db = wx.cloud.database({
  env:'yplzf-4gb2htq644912893'  })
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onShowList();
  },
  onShowList:function(){
    var that =this;
    console.log("读列表");
    db.collection('canjiahunli').orderBy('due','desc').where({
     
     }) .get({
          success(res) {
              var l = res.data
              that.setData({
                list: l
               });
               console.log(that.data.list)
          }
      })
  
  },
  Bremove: function (event) {
    const table = db.collection('canjiahunli');
    const that=this;
    console.log(event.target.dataset.id)
    table.doc(event.target.dataset.id).remove();
    that.onShowList();
  },
  addMsg: function () {    //添加留言方法
       const table = db.collection('canjiahunli');
       const that=this;

       var myDate = new Date(); 
       myDate.getFullYear(); //获取当前年份 
       myDate.getMonth(); //获取当前月份(0-11,0代表1月)         // 所以获取当前月份是myDate.getMonth()+1;   
       myDate.getDate(); //获取当前日(1-31)  
       myDate.getHours(); //获取当前小时数(0-23)  
       myDate.getMinutes(); //获取当前分钟数(0-59)  
       var dataTime = myDate.getFullYear()+"-"+myDate.getMonth()+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes()

       table.add({
         // data 字段表示需新增的 JSON 数据
         data: {
         // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
         inputnameVal: "袁鹏",
         inputnumVal: "4",
         inputriqiVal: "6-23晚上",
         due: new Date(),//当前时间，排序
         dataTime:dataTime,//当前时间展示
         nickName : "二月的鲤"
         },
         success(res) {
           console.log("add success!");
           that.onShowList();
         }
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