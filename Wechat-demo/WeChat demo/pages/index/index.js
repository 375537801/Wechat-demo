//index.js
//获取应用实例
var app = getApp()
Page({
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTapmusic : function(){
    wx.navigateTo({
      url: '../music/music'
    })
  },
  bindViewTappicture:function(){
    wx.navigateTo({
      url: '../photo/photo'
    })
  },
  bindViewTapblur:function(){
    wx.navigateTo({
      url: '../blur/blur'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})



