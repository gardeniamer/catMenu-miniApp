// pages/components/info/myorders/myorders.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  lifetimes:{
    attached() {
      this.setData({
        sSingles: wx.getStorageSync('sIndex')
      })
    }
  },

  data: {
    list:['全部','待付款','待发货','已发货','待评价'],
    sSingles: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeSingle(e){
      if(e.target.dataset.info != this.data.sSingles) {
        wx.showLoading({
          title: '加载中',
        })
        setTimeout(()=>{
          wx.hideLoading()
          this.setData({
            sSingles: e.target.dataset.info 
          })
          wx.showToast({
            icon:"success",
            title: '加载成功',
          })
        },500)

      }
    }
  }
})
