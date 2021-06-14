//sort.js
//獲取應用實例
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
    disabled: false,
    //用户个人信息
    userInfo:{
      avatarUrl:"",//用户头像
      nickName:"",//用户昵称
    },
    isLogin:false,
    list:[],
    inputVal:'',
    inputnameVal:'',
    inputnumVal:'',
    inputriqiVal:'',
    imagewidth1:53,
    imageheight1:53,
    imagewidth2:43,
    imageheight2:43,
    hiddenmodalput1: true,
    hiddenmodalput2: true
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var userinfo =  wx.getStorageSync('userinfo')
     console.log(userinfo)
    if(userinfo!=null && userinfo!=""){
      
      var avatarUrl = 'userInfo.avatarUrl';
      var nickName = 'userInfo.nickName';
      var url = userinfo.avatarUrl
      var name = userinfo.nickName
      this.setData({
        isLogin:true,
        [avatarUrl]:url,
        [nickName]:name,
      })
    }
    this.onShowList();
    this.xindong();
  },
 
  login() {
        wx.getUserProfile({
          desc: '登录后才能评论', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (file) => {
            console.log(file)
            wx.login({
              success: (res) => {
                console.log(res);
                console.log(this.data.userInfo.nickName);
                this.data.userInfo.avatarUrl = file.userInfo.avatarUrl
                this.data.userInfo.nickName = file.userInfo.nickName
                wx.setStorageSync('userinfo', this.data.userInfo)//存入缓存

                var avatarUrl = 'userInfo.avatarUrl';
                var nickName = 'userInfo.nickName';
                this.setData({
                  isLogin:true,
                  [avatarUrl]:file.userInfo.avatarUrl,
                  [nickName]:file.userInfo.nickName,
                })
              }
            })
          }
        })
  },
  addMsg() {    //添加留言方法
    console.log(this.data.inputVal);
    if(this.data.userInfo.nickName ==''){
      wx.showToast(
        {
        title: '请登录后留言~',
        icon: 'none'
      })
    }else  if( this.data.inputVal != '')
    {
       const table = db.collection('liuyan');
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
           inputVal: this.data.inputVal,
           liuyanName: this.data.liuyanName,
           due: new Date(),
           dataTime:dataTime,
           show: true,
           avatarUrl: this.data.userInfo.avatarUrl,
           nickName : this.data.userInfo.nickName 
         },
         success(res) {
           console.log("add success!");
           that.onShowList();
           // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
           console.log(res)
          
         }
       })
       //设置留言框的值为空
       this.setData({
         inputVal:'',   //设置初始值为空
         disabled: true
       });
       //定时器 15秒后才恢复留言按钮的使用
      setTimeout((function callback() {
        this.setData({ disabled: false });
      }).bind(this), 15000);

    }else{
      wx.showToast(
        {
        title: '请填写内容~',
        icon: 'none'
      })
    }
    
 },
 changeInputVal(ev) {
  this.setData({
    inputVal: ev.detail.value
  });
},
onShowList:function(){
  var that =this;
  console.log("读列表");
  db.collection('liuyan').orderBy('due','desc').where({
   
   }) .get({
        success(res) {
            var l = res.data
            //截取字符串
            for(var i = 0;i<l.length;i++){
              if(l[i].inputVal.length>37){
                l[i].inputVal = l[i].inputVal.substring(0,37)+"..."
              }
            }
            that.setData({
              list: l
             });
             console.log("asas")
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
 
  },
  changePlay: function () {
    console.log("1")
  },
  xindong: function () {
    var that = this
    var panduan = true;

    
  setInterval(function () {
    //循环执行代码
          if(panduan){
            that.setData({
              imagewidth1: 43,
              imageheight1:43,
              imagewidth2: 53,
              imageheight2:53
             })
          }else{
            that.setData({
              imagewidth1: 53,
              imageheight1:53,
              imagewidth2: 43,
              imageheight2:43
             })
          }
  
          panduan = !panduan;
    }, 1000) 

    

  },
//点击按钮痰喘指定的hiddenmodalput弹出框
modalinput1: function () {

  if(this.data.userInfo.nickName ==''){
    wx.showToast(
      {
      title: '请登录后留言~',
      icon: 'none'
    })
  }else{
    this.setData({    
      hiddenmodalput1: !this.data.hiddenmodalput1
      })  
  }



 
  
},   
//取消按钮  
cancel1: function () { 
  this.setData({   
   hiddenmodalput1: true   
  });
 
},  
//确认  
confirm1: function () {  
  this.addMsg();
  this.setData({    
   hiddenmodalput1: true   
  })
},
//点击按钮痰喘指定的hiddenmodalput弹出框
  modalinput2: function () {

    if(this.data.userInfo.nickName ==''){
      wx.showToast(
        {
        title: '请登录后参加~',
        icon: 'none'
      })
    }else{
      this.setData({    
        hiddenmodalput2: !this.data.hiddenmodalput2   
        })   
    }


    
  },   
  //取消按钮  
  cancel2: function () { 
    this.setData({   
     hiddenmodalput2: true   
    });
   
  },  
  //确认  
  confirm2: function () {  
    this.addCanji()
    this.setData({    
     hiddenmodalput2: true   
    })   
  },
  changenameInputVal(ev) {
    this.setData({
      inputnameVal: ev.detail.value
    });
  },
  changenumInputVal(ev) {
    this.setData({
      inputnumVal: ev.detail.value
    });
  },
  changeriqiInputVal(ev) {
    this.setData({
      inputriqiVal: ev.detail.value
    });
  },
  addCanji() {    //添加留言方法
    if(this.data.inputnameVal==308){
      console.log("308")
      wx.navigateTo({
        url: '/pages/zhufuguanli/zhufuguanli',
      })
    }else if( this.data.inputnameVal != '' && this.data.inputnumVal != '' && this.data.inputriqiVal != ''  )
    {
       const table = db.collection('canjiahunli');
       const that=this;
       var myDate = new Date(); 
       myDate.getFullYear(); //获取当前年份 
       myDate.getMonth(); //获取当前月份(0-11,0代表1月)         // 所以获取当前月份是myDate.getMonth()+1;   
       myDate.getDate(); //获取当前日(1-31)  
       myDate.getHours(); //获取当前小时数(0-23)  
       myDate.getMinutes(); //获取当前分钟数(0-59)  
       var yue = myDate.getMonth()+1;
       var dataTime = myDate.getFullYear()+"-"+yue+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes()

       table.add({
         // data 字段表示需新增的 JSON 数据
         data: {
           // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
           inputnameVal: that.data.inputnameVal,
           inputnumVal: that.data.inputnumVal,
           inputriqiVal: that.data.inputriqiVal,
           due: new Date(),//当前时间，排序
           dataTime:dataTime,//当前时间展示
           avatarUrl: that.data.userInfo.avatarUrl,
           nickName : that.data.userInfo.nickName 
         },
         success(res) {
           console.log("add success!");
           that.onShowList();
           // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
           console.log(res)
          
         }
       })
       //设置留言框的值为空
       that.setData({
        inputnameVal:'',   //设置初始值为空
        inputnumVal:'',   //设置初始值为空
        inputriqiVal:'',   //设置初始值为空
        disabled: true
       });
       wx.showToast(
        {
        title: '欢迎参加我们的婚礼！',
        icon: 'none'
      })
    }else{
      wx.showToast(
        {
        title: '请填写内容~',
        icon: 'none'
      })
    }
    
 },






})