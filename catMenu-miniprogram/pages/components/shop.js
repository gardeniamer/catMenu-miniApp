// pages/components/shop.js
const data = require("../../untils/data.js")
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
    list:['https://roninz.oss-cn-beijing.aliyuncs.com/banner1.png',
    'https://roninz.oss-cn-beijing.aliyuncs.com/banner2.png',
    'https://roninz.oss-cn-beijing.aliyuncs.com/banner3.png',
    ],
    listMore: [],
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
        if(item.pagePath == 'pages/components/shop') {
          wx.reLaunch({
            url: '/pages/components/shop',
          })
          wx.setStorageSync('refresh', 1)
        }
      } 
    },

    onReachBottom() {
      if(this.data.listMore == "") {
        this.setData({
          listMore: data.list11More1
        })
      }
      else if(this.data.listMore == data.list11More1) {
        this.setData({
          listMore: data.list11More2
        })
      }
      else if(this.data.listMore == data.list11More2) {
        this.setData({
          listMore: data.list11More3
        })
      }
      else if(this.data.listMore == data.list11More3) {
        this.setData({
          listMore: data.list11More4
        })
      }
    },

    cartAdd(e) {
      // console.log(e.detail);
      this.setData({
        ['listCart.price']:Number(e.detail.priceNow.split("￥")[1]),
        ['listCart.showPhoto']:e.detail.showPhoto,
        ['listCart.showMsg']:e.detail.msg
      })
    }

  },



})
