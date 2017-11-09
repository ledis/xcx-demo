var app=getApp();
Page({

  data: {
    username:null
  },

  onLoad: function (options) {
    console.log(options);
    if(app.appData.userinfo==null){
      wx.redirectTo({
        url:"../login/login"
      })
    }else{
      this.setData({username:app.appData.userinfo.username})
    }
  },

  onReady: function () {
    
  },

  onShow: function () {
    
  },

  onHide: function () {
    
  },

  onUnload: function () {
    
  }
})