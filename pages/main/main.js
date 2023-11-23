Page({

  /**
   * 页面的初始数据
   */
  data: {
    list1: [{"id":2,"url":"icon.png","price":40,"name":"icon","section":13}],
    list2:[],
    list3:[],
    market:[],
    market_number:0,
    
  },
  click(){
    wx.navigateTo({
      url: '/pages/comment/comment'
      
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
        market_number: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  headicon: function() {
    wx.navigateTo({         // 使用redirectTo方法进行跳转
      url: '/pages/headicon/headicon'  // 目标页面的路径
    })
  },
  onLoad: function (options) {
        let that = this;
        // wx.request({
        //   url: 'http://localhost:8000/index.php/index/letting',
        // //   url:'https://www.miaomarket.cn',  
        //   data:{

        //   },
        //   header:{
        //       'content-type':'application/json'
        //   },
        //   success(res){3
        //     console.log(res)
        //     that.setData({
        //         list1 :res.data.letting,
        //         market :res.data.market
        //     })
        //    }
        // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
  
})