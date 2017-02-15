Page({
  
  data: {
    animationpic:{},
    animationopc:{}
  },
  onShow: function(){
    var animation = wx.createAnimation({
        duration: 3000,
        timingFunction: 'ease-in-out',
    })
    
    animation.rotateX(360).step();
    this.setData({
        animationpic:animation.export()
    })

    animation.rotateX(0).opacity(1).step();
    this.setData({
        animationopc:animation.export()
    })
  }
})