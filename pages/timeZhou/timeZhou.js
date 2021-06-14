// pages/timeZhou/timeZhou.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  zuoyouo 0 左图 1右图
    // tuhenshu 0 横图 1竖图
    shuzhuangtu:[
     
      {
        tuhenshu:0,
        title1: '牡丹江(2015)',
        title2: "人群中多看了你一眼。",
        coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2015第一次遇见她.jpg",
      },
      {
        tuhenshu:0,
        title1: '牡丹江（2015.6.3）',
        title2: "她答应了我的表白❤",
        coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2015.6.3号确立表白了.jpg",
      },
      {
        tuhenshu:1,
        title1: '延边（2016）',
        title2: "第一次旅游，石锅拌饭真好吃。",
        coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2016年到延吉旅游.jpg",
      },
  {
        tuhenshu:1,
        title1: '青岛（2016）',
        title2: "第一次去青岛，没想到未来定居到了这里。",
        coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2016年第一次到青岛栈桥.webp",
      },
  {
        tuhenshu:0,
        title1: '齐齐哈尔（2017）',
        title2: "第一次去我家，爸妈很满意。",
        coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2017.jpg",
      },
     {
        tuhenshu:0,
        title1: '嫩江（2017）',
        title2: "她怎么看上这么胖的我的？",
        coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2017齐齐哈尔.jpg",
      },
      {
         tuhenshu:0,
         title1: '哈尔滨（2017）',
         title2: "她第一次看见冰雕，(ΩДΩ)",
         coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2017哈尔滨冰城.jpg",
       },
       {
          tuhenshu:0,
          title1: '长汀-雪乡（2017.）',
          title2: "夏天去的，咋想的？",
          coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2017夏天去雪乡雪乡脚下.jpg",
        },
        {
           tuhenshu:0,
           title1: '第一次济南游（2018）',
           title2: "遇上芙蓉街修路，发誓一定会再来一次",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2018.jpg",
        },
        {
           tuhenshu:0,
           title1: '新乡（2018）',
           title2: "第一次去见她父母，超紧张！！",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2018第一次去她家新乡电影院.jpg",
        },
        {
           tuhenshu:1,
           title1: '小冀-京华园（2018）',
           title2: "往后躲，心机！",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2018小冀京华园.jpg",
        },
        {
           tuhenshu:0,
           title1: '河南宝泉（2019）',
           title2: "跟她父母一起游青山绿水",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2019-10.jpg",
        },
        {
           tuhenshu:0,
           title1: '爬崂山（2019）',
           title2: "和妈妈，大姨一起爬崂山。",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2019崂山.jpg",
        },
        {
           tuhenshu:0,
           title1: '威海-刘公岛（2019）',
           title2: "接受了党的教育。",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2019刘公岛旅游.jpg",
        },
        {
           tuhenshu:0,
           title1: '济南二次游（2019）',
           title2: "我还会再回来的！",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2019年去2游济南旅游.webp",
        },
        {
           tuhenshu:0,
           title1: '烟台（2019）',
           title2: "去找老谷玩。",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2019威海行.jpg",
        },
        {
           tuhenshu:0,
           title1: '干了件大事（2019）',
           title2: "我们在青岛有了自己的家。",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/2019-9.jpg",
        },
        {
           tuhenshu:0,
           title1: '青岛（2020）',
           title2: "迎接我爸妈和姥爷，一起做的饭。",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/20209.jpg",
        },
        {
           tuhenshu:0,
           title1: '青岛（2020）',
           title2: "我们订婚了！",
           coverImg:  "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/老照片/202010.jpg",
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.app = getApp()
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
    setTimeout(function () {
      // this.app.slideupshow(this, 'slide_up1', -0, 1)
      this.app.sliderightshow(this, 'tupian_1', -0, 1)
    }.bind(this), 200);
    setTimeout(function () {
      // this.app.slideupshow(this, 'slide_up1', -0, 1)
      this.app.sliderightshow(this, 'wemzi_1', -0, 1)
    }.bind(this), 600);
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
  //点击事件  
  clickImg: function(e){
    var that = this;
    var url = e.currentTarget.dataset.url;
    console.log( e.currentTarget)
    var tus =[]
    for(var i = 0;i<that.data.shuzhuangtu.length;i++){
      tus.push(that.data.shuzhuangtu[i].coverImg)
    }
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: tus // 需要预览的图片http链接列表
      })
  },
   //点击事件  
   clickImgjiehun: function(e){
    var jiehunzhao = [
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/205.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/132.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/203.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/103.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/124.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/209.png",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/061.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/067.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/192.jpg",


      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/013.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/020.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/023.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/030.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/033.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/068.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/069.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/075.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/104.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/105.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/036.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/043.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/056.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/057.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/059.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/060.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/107.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/115.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/122.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/128.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/130.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/138.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/145.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/150.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/166.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/173.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/175.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/179.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/187.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/190.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/191.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/198.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/200.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/201.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/206.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/207.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/211.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/111.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/011.jpg",
      "cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/216.jpg"  

  ]
    wx.previewImage({
      current: 'cloud://yplzf-4gb2htq644912893.7970-yplzf-4gb2htq644912893-1305681739/结婚照压缩/205.jpg', // 当前显示图片的http链接
      urls: jiehunzhao // 需要预览的图片http链接列表
      })
  }
})