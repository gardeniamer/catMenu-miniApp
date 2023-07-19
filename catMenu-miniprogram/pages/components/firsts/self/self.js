// pages/components/firsts/self/self.js
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
    sChoice: 1,
    shopMsg:[{
      shopName:'猫谱奶茶店',
      patterns:['营业中','可外送'],
      time:'营业时间：10：30 —— 22：00',
      distance:'直线距离78.4km',
      location:'山西省晋中市榆社县箕城镇东升街',
      phone: 18435416683
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickLeft() {
      wx.switchTab({
        url: '/pages/components/first',
      })
    },

    changeShop(e) {
      wx.showLoading({
        title: '加载中',
      })

      setTimeout(() => {
        wx.hideLoading()
        this.setData({
          sChoice: e.target.dataset.info
        })
        wx.showToast({
          icon:"success",
          title: '加载成功',
        })
      }, 500);
    },

    copy(e) {
      wx.setClipboardData({
        data:`${e.target.dataset.number}`,
        success (res) {
          wx.showToast({
            title: '复制成功',
            icon: "success"
          })
        }
      })
    },

    another() {
      wx.setStorageSync('way', 'getSelf')
      wx.reLaunch({
        url: '/pages/components/drinks',
      })
    }

  }
})
