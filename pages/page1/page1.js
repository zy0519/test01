// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonText: "签到",
    latitude: 0.0,
    longitude: 0.0,

  },
  onAttendButtonClick: function () {
    console.log("签到")
    this.setData({
      buttonText: "签到成功"
    })
    console.log(this.data.buttonText)
    // wx.request({
    //   url: 'https://www.zbeboy.top/api/data/building',
    //   data: {
    //     collegeId: 1
    //   },
    //   method: "GET",
    //   header: {
    //     Authorization: "bearer " + "b94c7691-70d4-43c9-a5ee-b1251f6036ba",
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    var that = this;
    wx.getLocation({
      altitude: 'true',
      success: function (res) {
        console.log(res.latitude)
        console.log(res.longitude)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })


  },

  handleTime: function () {}

})