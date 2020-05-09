// components/Lastcard/Lastcard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    transmitVideo(e) {
      console.log(e)
      wx.navigateTo({
        url: '/pages/video/video?id=' + e.currentTarget.dataset.postid,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  }
})