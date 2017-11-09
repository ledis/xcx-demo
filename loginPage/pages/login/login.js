var app=getApp();
Page({

  data: {
    username:null,
    password:null
  },

  onLoad: function (options) {
    
  },

  onReady: function () {
    
  },

  onShow: function () {
    
  },

  onHide: function () {
    
  },

  onUnload: function () {
    
  },
  loginBtnClick:function(){
    console.log(this.data.username,this.data.password);
    if(this.data.username==null || this.data.password==null){
      console.log("cc");
    }else{
      app.appData.userinfo={username:this.data.username,password:this.data.password};
      wx.switchTab({url:'../user/user'})
    }
    
  },
  usernameInput:function(event){
    //console.log(event);
    this.setData({username:event.detail.value})
  },
  passwordInput:function(event){
    //console.log(event);
    this.setData({password:event.detail.value})
  }
})