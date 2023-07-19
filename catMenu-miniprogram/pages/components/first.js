// pages/components/first.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes: {
    attached() {
      wx.setStorageSync('refresh', 1)
      if(wx.getStorageSync('list') == '') {
        wx.setStorageSync('list', [
          '山西省晋中市榆次区大学街209号'
        ])
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      'https://roninz.oss-cn-beijing.aliyuncs.com/banner4.png',
      'https://roninz.oss-cn-beijing.aliyuncs.com/banner5.png'
    ],
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPopup() {
      this.setData({ show: true });
    },
    onClose() {
      this.setData({ show: false });
    }
  }
})
