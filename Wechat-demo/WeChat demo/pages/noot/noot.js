//noot.js    
//获取应用实例
var app = getApp()
Page( {
  data: {
    point:{
      latitude: 36.05,
      longitude: 113.318977
    },
    markers: []
  },
  onLoad: function() {
    var that = this;
    wx.getLocation( {
      type: 'wgs84',
      success: function( res ) {
        //官方接口没真正开放，还是没发布的原因
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        var point={
             latitude: latitude,
             longitude: longitude
        }
        var markers = [ {
          latitude: latitude,
          longitude: longitude,
          name: '地图定位',
          desc: '我现在的位置'
        }];
        that.setData( markers );
         that.setData( point );
      }
    })
  }
})

