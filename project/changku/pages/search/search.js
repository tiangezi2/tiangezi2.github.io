// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cancel: false,
    inputShowed: false,
    inputVal: "",
    placeholder: "搜索精彩短片",
    focus: true,
    recommendKeywords: null
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  selectResult: function(e) {
    console.log('select result', e.detail)
  },
  getRecommend() {
    wx.request({
      url: 'https://api.kele8.cn/agent/https://app.vmovier.com/apiv3/search',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        // console.log(res.data.data.recommend_keywords)
        this.setData({
          recommendKeywords: res.data.data.recommend_keywords
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //跳转kw
  navigateToVideo(e) {
    // console.log(e)
    wx.navigateTo({
      url: '/pages/postincate/postincate?kw=' + e.currentTarget.dataset.postid + '&page=search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getRecommend()
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