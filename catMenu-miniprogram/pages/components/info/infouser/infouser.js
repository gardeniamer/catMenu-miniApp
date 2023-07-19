// pages/components/info/infouser/infouser.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes:{
    attached(){
      var _this = this
      if(wx.getStorageSync('image') != '' && wx.getStorageSync('nickName')){
        _this.setData({
          photo: 1,
          image: wx.getStorageSync('image'),
          content: wx.getStorageSync('nickName'),
          special: 1
        })
      }
    }
      // attached() {
      //   wx.clearStorageSync()
      // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    content:"点击此处完善信息",
    image:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",
    photo: 0,
    show: false,
    content2: "",
    special: 0,
    now: 18,
    all: 40,
    level: 1
    // list:['优惠券','积分','社交达人']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputContent(e) {
      this.setData({
        content2: e.detail.value
      })
    },

    onChooseAvatar(e){
      var _this = this
      _this.setData({
        image: e.detail.avatarUrl,
        photo: 1
      })
      wx.setStorageSync('image', e.detail.avatarUrl)
    },
    showPopup() {
      this.setData({ show: true });
    },
  
    onClose() {
      if(this.data.content2 == "" && this.data.image == "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0") {
        wx.showToast({
          icon:"none",
          title: '请完善信息'
        })
      }
      else{
        this.setData({ 
          show: false,
          content: this.data.content2, 
          special: 1
       });
        wx.setStorageSync('nickName', this.data.content)
        
      }

    },

    config() {
      wx.navigateTo({
        url: '/pages/components/info/edit/config',
      })
    },

    location() {
      wx.navigateTo({
        url: '/pages/components/info/location/location',
      })
    }

  }
})
