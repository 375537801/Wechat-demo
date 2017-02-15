Page({
  
  data: {
    animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
      duration: 3000,
        timingFunction: 'linear',
    })
    animation.rotateZ(360).scale(5,5).opacity(0.4).step();
    this.setData({
        animationData:animation.export()
    })
     setTimeout(function() {
       animation.rotateZ(360).scale(5,5).opacity(0.4).scale(1,1).opacity(0.8).step();
       this.setData({
         animationData:animation.export()
       })
     }.bind(this),2990)
   }
  
})