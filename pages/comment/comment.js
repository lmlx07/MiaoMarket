// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      comment:[],
      e_Comment:"",
  },
  //记录评论并传递
  inputChange (e) {
    this.setData({
      e_Comment: e.detail.value,
      });
    },
   submitComment(){
    let newComment = {
      name: '用户',   // 替换为实际用户名或从后端获取
      text: this.data.e_Comment,
    };
    if(newComment.text.trim().length != 0){
    this.setData({
      comment: this.data.comment.concat(newComment),
      e_Comment: '',   // 清空输入框
    });
  }
    else{

    }
  },

   check(){
    wx.navigateTo({
      url: '/pages/details/details'
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  expandcomment(){

  }
  
})