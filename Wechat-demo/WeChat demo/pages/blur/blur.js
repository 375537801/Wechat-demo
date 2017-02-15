
Page({
  //事件处理函数
  add: function() {
    wx.navigateTo({
      url: '../noot/noot'
    })
  },
  data: {
    animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
      duration: 2000,
        timingFunction: 'linear',
    })
    animation.rotateZ(360).scale(3,3).opacity(0.5).step();
    this.setData({
        animationData:animation.export()
    })
    setTimeout(function() {
       animation.scale(1,1).opacity(1).step();
       this.setData({
         animationData:animation.export()
       })
     }.bind(this),1990)
  },
  data: {
    imgUrls: [
      '../../image/diyi.jpg',
      '../../image/dier.jpg',
      '../../image/disan.jpg',
      '../../image/disi.jpg',
      '../../image/diwu.jpg'
    ],
     indicatorDots:true,
     autoplay: true,
     interval: 1000,
     duration: 1000
  }
  
})