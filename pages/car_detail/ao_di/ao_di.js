// pages/car_detail/ao_di/ao_di.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://img1.xcarimg.com/b63/s7736/c_20160511153957007951768554208.jpg",
      "http://img1.xcarimg.com/b63/s7736/c_20160511153948903325305587219.jpg",
      "http://img1.xcarimg.com/b63/s7736/c_20160324172935416694857347161.jpg",
      "http://img1.xcarimg.com/b63/s7736/c_20160918132004359674866549395.jpg",
      "http://img1.xcarimg.com/b63/s7736/c_20160918132002131163573867539.jpg",
      "http://img1.xcarimg.com/b63/s7736/c_20160729071450170685818327422.jpg"
    ],
    duration: 3000,

    btn_load: false,
    plain: true,

    hidden: false
  },
  setLoad: function () {
    this.setData({
      btn_load: !this.data.btn_load
    })
  },
  // 页面加载显示事件
  loadingChange: function () {
    setTimeout(() => {
      this.setData({
        hidden: true
      })
    }, 1200)
  },
  // 页面初始化执行
  onLoad() {
    this.loadingChange()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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