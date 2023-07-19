// pages/components/firsts/first01/first01.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    bySelf() {
      wx.navigateTo({
        url: '/pages/components/firsts/self/self',
      })
    },

    byOther() {
      if(wx.getStorageSync('nickName') != "") {
          wx.navigateTo({
            url: '/pages/components/info/locationCopy/locationCopy',
          })
      }
      else {
        wx.reLaunch({
          url: '/pages/components/info',
        })
      }

    }

  }
})
