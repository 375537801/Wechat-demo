Page({
  
  data: {
    animationData: {},
    animationmusic:{},
    animationopt:{}
  },
  onShow: function(){
    var animation = wx.createAnimation({
        duration: 2000,
        timingFunction: 'ease-in-out',
    })
    
    animation.rotateX(360).step();
    this.setData({
        animationData:animation.export()
    }),
    //左边动画
    animation.rotateX(0).rotateZ(360).scale(3,3).opacity(0.5).step();
    this.setData({
        animationmusic:animation.export()
    })
    setTimeout(function() {
       animation.scale(1,1).opacity(1).step();
       this.setData({
         animationmusic:animation.export()
       })
     }.bind(this),2000)
     //右边动画
      setTimeout(function() {
       animation.rotateX(0).rotateZ(0).opacity(1).step();
       this.setData({
         animationopt:animation.export()
       })
     }.bind(this),2800)
  }
})
