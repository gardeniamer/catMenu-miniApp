// pages/components/info/locationCopy/locationCopy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes:{
    attached() {
      if(wx.getStorageSync('list') == '') {
        wx.setStorageSync('list', [
          '山西省晋中市榆次区大学街209号'
        ])
      }
      this.setData({
        nickname:wx.getStorageSync('nickName'),
        list: wx.getStorageSync('list')
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    list:[
      '山西省晋中市榆次区大学街209号'
    ],
    nickname:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    more() {
      wx.getLocation({
        type: 'wgs84',
        success: (res)=> {     
          wx.chooseLocation({
            latitude:res.latitude,
            longitude:res.longitude,
            success:(res2)=>{
              if(res.address == ''){
                wx.showToast({
                  icon:'none',
                  title: '请选择有效的地址',
                })
              }
              else{
                let count = this.data.list.length
                let count2 = 0
                for(let vol of this.data.list) {
                  if(vol != res2.address) {
                    count2++
                  }
                }
                if(count2 == count) {
                  this.setData({
                    ['list['+ count +']']: res2.address
                  })
                  wx.setStorageSync('list', this.data.list)
                  wx.showToast({
                    icon:'none',
                    title: '添加成功',
                  })
                }
                else {
                  wx.showToast({
                    icon:"none",
                    title: '请勿重复添加相同地址',
                  })
                }
              }

            }
          })
        }
       })
    },

    decline(e) {
      let change = []
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(()=>{
        wx.hideLoading()
        wx.showToast({
          icon:'none',
          title: '删除成功',
        })
        this.data.list[e.target.dataset.index] = null
        for(let vol of this.data.list) {
          if(vol != null) {
            change.push(vol)
          }
        }
        wx.setStorageSync('list', change)
        this.setData({
          list: wx.getStorageSync('list')
        })
      },800)
      
    },

    anothers(e) {
      wx.setStorageSync('way', 'getOther')
      wx.setStorageSync('realLocation', e.target.dataset.msg)
      wx.reLaunch({
        url: '/pages/components/drinks',
      })
    }

  }
})
