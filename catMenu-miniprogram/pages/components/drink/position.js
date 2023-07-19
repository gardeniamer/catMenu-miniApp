// pages/components/drink/position.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes: {
    attached() {
      if(wx.getStorageSync('way') == '') {
        wx.setStorageSync('way', 'getSelf')
      }
      this.setData({
        name: wx.getStorageSync('way')
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name:'getSelf'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseMethod(e) {
      this.setData({
        name: e.target.dataset.way
      })
      wx.setStorageSync('way', e.target.dataset.way)
    }
  }
})
