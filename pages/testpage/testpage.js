// pages/testpage/testpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    questionList: {}
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 发送SQL查询请求
    wx.request({
      url: 'http://162.14.98.72:4040/query',
      method: 'POST',
      header: {
        'content-type': 'application/json' // 设置请求头为JSON格式
      },
      data: {
        sql: 'SELECT * FROM `Single_Choice`'
      },
      success: (res) => {
        this.setData({
          questionList: res.data
        });
      },
      fail: (error) => {
        console.error('Failed to fetch data:', error);
      }
    });
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

  }
})