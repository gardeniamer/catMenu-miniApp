// pages/components/drinks.js
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
    listCart:[{
      showPhoto:'',
      showMsg:'',
      price: 0
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onTabItemTap: function (item) {
      wx.setStorageSync('pagePath', item.pagePath)
      if(wx.getStorageSync('refresh') == 0) {
        if(item.pagePath == 'pages/components/drinks') {
          wx.reLaunch({
            url: '/pages/components/drinks',
          })
          wx.setStorageSync('refresh', 1)
        }
      }
    },

    cartAdd(e) {
      this.setData({
        ['listCart.price']: wx.getStorageSync('allSmall'),
        ['listCart.showPhoto']:e.detail[0].teaPhoto,
        ['listCart.showMsg']:e.detail[0].teaName
      })
    }
  }
})
