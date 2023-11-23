// 全局存储，方便随时调用
const app = getApp()

Page({
  data: {
    userInfo:[],
    show:false //展示登录按钮
  },
  onLoad: function() {  // 在小程序启动时显示启动动画

  },
  secret: function() {
    wx.redirectTo({         // 使用redirectTo方法进行跳转
      url: '/pages/secret/secret'  // 目标页面的路径
    })
  },
  login() { 
    var that = this
    wx.getUserProfile({
      desc: '完善信息',  // 提示信息
      success(res){
        var user = res.userInfo
        app.globalData.userInfo = user   //把user里面的数据放在globalData里面使全页面可以调用
        that.setData({
          userInfo:user,
          show:true //隐藏登录按钮

        })
        wx.switchTab({         // 使用redirectTo方法进行跳转
            url: '/pages/main/main'  // 目标页面的路径
          })
      }
    })
  }
})
