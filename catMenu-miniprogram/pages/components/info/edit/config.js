// pages/components/info/edit/config.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes:{
    attached(){
      if(wx.getStorageSync('id') == '') {
        wx.login({
          success: (res) => {
            wx.setStorageSync('id', res.code)
          },
        })
      }
      let id = '0d1G'
      let n = 0
      for(let vol of wx.getStorageSync('id')){
        if(n == 0){ 
          id = vol
        }
        else {
          id += vol
        }
        n++
        if(n == 4) {
          break
        }
      }
      if(wx.getStorageSync('realName') == '') {
        wx.setStorageSync('realName', '请填写')
      }
      if(wx.getStorageSync('phoneNumber') == '') {
        wx.setStorageSync('phoneNumber', "请绑定你的手机号 >")
      }
      this.setData({
        image: wx.getStorageSync('image'),
        id: id,
        nickName: wx.getStorageSync('nickName'),
        gender: wx.getStorageSync('gender'),
        ['list['+ 3 +'].content']: wx.getStorageSync('realName') + ' >',
        ['list['+ 5 +'].content']: wx.getStorageSync('phoneNumber')
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[
      {
        'tag':'ID',
      },
      {
        'tag':'头像',
      },
      {
        'tag':'昵称',
        'content':'请选择 >'
      },
      {
        'tag':'姓名',
        'content':'请填写 >'
      },

      {
        'tag':'性别',
        'content':'请选择 >'
      },
      {
        'tag':'手机号',
        'content':'请绑定你的手机号 >'
      }
    ],

    more: 0,
    image:'',
    id: 0,
    nickName:"",
    gender: 0,
    show: false,
    phone: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gender(e) {
      this.setData({
        gender: e.target.dataset.info
      })
      wx.setStorageSync('gender', this.data.gender)
      wx.showToast({
        icon:"none",
        title: '修改成功',
      })
    },

    inputContent(e) {
      if(this.data.more == 0) {
        wx.setStorageSync('nickName', e.detail.value)
        // this.onClose()
      }
      if(this.data.more == 1) {
        wx.setStorageSync('realName', e.detail.value)
        this.onClose()
      }
      if(this.data.more == 2) {
        wx.setStorageSync('phoneNumber', e.detail.value)
        this.onClose()
      }
        
    },

    onChooseAvatar(e) {
      var _this = this
      _this.setData({
        image: e.detail.avatarUrl,
        photo: 1
      })
      wx.setStorageSync('image', e.detail.avatarUrl)
    },

    real() {
      this.setData({
        show: true,
        more: 1
      })
    },

    real2() {
        this.setData({
          show: true,
          more: 2
        })       
    },

    nickName() {
      this.setData({
        show: true
      })
    },

    onClose() {
      if(this.data.more == 0) {
        if(wx.getStorageSync('nickName') != ''){
        this.setData({
          show: false,
          nickName: wx.getStorageSync('nickName')
        })
        wx.showToast({
          icon:'none',
          title: '修改成功',
        })
      }
      else {
        wx.showToast({
          icon:'none',
          title: '请完善信息',
        })
      }
      }
      if(this.data.more == 1) {
        if(wx.getStorageSync('realName') != '') {
          this.setData({
            show: false,
            ['list['+ 3 +'].content']: wx.getStorageSync('realName') + ' >'
          })
          wx.showToast({
            icon:'none',
            title: '修改成功',
          })
        }
        else {
          wx.showToast({
            icon:'none',
            title: '请完善信息',
          })
        }
      }
      if(this.data.more == 2) {
        if(wx.getStorageSync('phoneNumber') != '') {
          this.setData({
            show: false,
            ['list['+ 5 +'].content']: wx.getStorageSync('phoneNumber'),
          })
          wx.showToast({
            icon:'none',
            title: '修改成功',
          })
        }
        else {
          wx.showToast({
            icon:'none',
            title: '请完善信息',
          })
        }
      }


    },

    remove() {
      wx.removeStorageSync('id')
      wx.removeStorageSync('image')
      wx.removeStorageSync('nickName')
      wx.removeStorageSync('realName')
      wx.removeStorageSync('gender')
      wx.removeStorageSync('phoneNumber')    
      wx.reLaunch({
        url: '/pages/components/info',
      })
    }

  }
})
