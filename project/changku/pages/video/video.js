// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoId: null,
    videoData: null
  },
  redirectToVideo(e) {
    wx.redirectTo({
      url: '/pages/video/video?id=' + e.currentTarget.dataset.postid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gatVideoData(id) {
    wx.request({
      url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid=' + id,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res)
        this.setData({
          videoData: res.data.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //拿ID
    this.setData({
      videoid: options.id
    })
    //拿数据
    this.gatVideoData(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})