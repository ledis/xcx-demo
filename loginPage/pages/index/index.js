//index.js
//获取应用实例
var app = getApp()
Page({

  data: {
    imgUrls:[
      '/image/topBanner1.jpg',
      '/image/topBanner2.jpg',
      '/image/topBanner3.jpg',
      '/image/topBanner4.jpg'
    ],
    contentItems:[
      {
        src:'/image/topBanner1.jpg',
        text:'绿色的校园'
      },
      {
        src:'/image/topBanner2.jpg',
        text:'粉色的校园'
      },
      {
        src:'/image/topBanner3.jpg',
        text:'晚上的校园'
      },
      {
        src:'/image/topBanner4.jpg',
        text:'白天的校园'
      }
    ],
    listItems:[
      {
        src1:'/image/index_img1.jpg',
        src2:'/image/index_head_img1.jpg',
        text:'智能时代',
        content:'作为一个反色神经较长后之后觉得人来说，俺已经被魅族的演唱会搞得稀里糊涂，一个接一个，一年办多次演唱。'
      },
      {
        src1:'/image/index_img2.jpg',
        src2:'/image/index_head_img2.jpg',
        text:'手机解读',
        content:'手机方便了人们的同时，其实也在慢慢的祸害着人们'
      }
    ]
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
    
  }
})