// pages/components/cart/cart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listCart:{
      type:Object
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        listReal: wx.getStorageSync('cartList'),
        all: wx.getStorageSync('all')
      })

    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    all: 0,
    show: false,
    show2: false,
    show3: false,
    listReal:[{
      photo:"",
      name:"",
      price:0
    }],
    listPay:[{
      img:"https://roninz.oss-cn-beijing.aliyuncs.com/zhifubao.png",
      word:"支付宝"
    },
    {
      img:"https://roninz.oss-cn-beijing.aliyuncs.com/chat.png",
      word:"微信"
    },
    {
      img:"https://roninz.oss-cn-beijing.aliyuncs.com/QQ.png",
      word:"QQ"
    }],
    nickName:"",
    location:"",
    way:"",
    phone:"",
    allPrice: 0
  },


  /**
   * 组件的方法列表
   */
  methods: {
    showPopup() {
      if(wx.getStorageSync('all') == "" && wx.getStorageSync('all') == 0){
        wx.showToast({
          icon:"none",
          title: '请先添加商品',
        })
      }
      else {
        this.setData({ 
            show: true,
            show2: false 
          });
      }

    },
  
    onClose() {
      this.setData({ show: false });
    },

    del(e) {
      this.data.all = Math.round((wx.getStorageSync('all') - this.data.listReal[e.target.dataset.index].price)*10)/10
      this.data.listReal[e.target.dataset.index] = {
        photo:"",
        name:"",
        price:0
      }
      wx.setStorageSync('cartList', this.data.listReal)
      wx.setStorageSync('refresh', 0)
      wx.setStorageSync('all', this.data.all)
      wx.showLoading({
        title: '加载中',
      })
      if(wx.getStorageSync('pagePath') == "pages/components/drinks") {
          setTimeout(()=>{
            wx.hideLoading()
            wx.reLaunch({
              url: '/pages/components/drinks',
            })
          },600)
      }
      else if(wx.getStorageSync('pagePath') == "pages/components/shop") {
        setTimeout(()=>{
          wx.hideLoading()
          wx.reLaunch({
            url: '/pages/components/shop',
          })
        },600)
      }


    },

    delAll(e) {

      if(wx.getStorageSync('all') != "" && wx.getStorageSync('all') != 0) {
        this.data.listReal = [{
          photo:"",
          name:"",
          price: 0
        }]
        this.data.all = 0
        wx.setStorageSync('cartList', this.data.listReal)
        wx.setStorageSync('refresh', 0)
        wx.setStorageSync('all', this.data.all)
        wx.showLoading({
          title: '加载中',
        })
        if(wx.getStorageSync('pagePath') == "pages/components/drinks") {
          setTimeout(()=>{
            wx.hideLoading()
            wx.reLaunch({
              url: '/pages/components/drinks',
            })
          },600)
        }
        else if(wx.getStorageSync('pagePath') == "pages/components/shop") {
          setTimeout(()=>{
            wx.hideLoading()
            wx.reLaunch({
              url: '/pages/components/shop',
            })
          },600)
        } 
      }
      else {
        wx.showToast({
          icon:"none",
          title: '请先选择商品再清空'
        })
      }

    },

    final() {
      if(wx.getStorageSync('all') != "" && wx.getStorageSync('all') != 0) {
        if(wx.getStorageSync('nickName') == "") {
          wx.showToast({
            icon:"none",
            title: '请先完善信息',
          })
          setTimeout(() => {
            wx.reLaunch({
              url: '/pages/components/info',
            })
          }, 500);
        }
        else {
          if(wx.getStorageSync('phoneNumber') == "" || wx.getStorageSync('phoneNumber') == "请绑定你的手机号 >") {
            wx.showToast({
              icon:"none",
              title: '请完善手机号',
            })
            setTimeout(() => {
              wx.navigateTo({
                url: '/pages/components/info/edit/config',
              })
            }, 600);
          }
          else {
            wx.showLoading({
              title: '正在拉取账单',
            })
            setTimeout(() => {
              wx.hideLoading()
              this.setData({ show2: true });
              let way
              let location
              if(wx.getStorageSync('way') == "getSelf") {
                way = "自取"
              }
              else if(wx.getStorageSync('way') == "getOther") {
                way = "配送"
              }
              
              if(wx.getStorageSync('realLocation') == "") {
                if(wx.getStorageSync('list')[0].length > 15) {
                  location = wx.getStorageSync('list')[0].slice(0,12) + "..."
                }
                else if(wx.getStorageSync('list')[0].length <= 15) {
                  location = wx.getStorageSync('list')[0]
                }
              }
              else {
                if(wx.getStorageSync('realLocation').length > 15) {
                  location = wx.getStorageSync('realLocation').slice(0,12) + "..."
                }
                else if(wx.getStorageSync('realLocation').length <= 15) {
                  location = wx.getStorageSync('realLocation')
                }
              }
    
    
              this.setData({
                nickName: wx.getStorageSync('nickName'),
                location: location,
                way: way,
                phone: wx.getStorageSync('phoneNumber')
              })
            }, 1000);
          }
        }
        
        
        

      }
      else {
        wx.showToast({
          icon:"none",
          title: '请先选择商品'
        })
      }

    },

    onClose2() {
      this.setData({ show2: false });
    },

    onClose3() {
      this.setData({ show3: false });
    },

    cancle() {
      this.setData({ show2: false });
    },

    define() {
      wx.showLoading({
        title: '整理信息中',
      })
      setTimeout(() => {
        wx.hideLoading()
        this.setData({ show3: true })
      }, 500);
    },

    pay() {
      wx.showLoading({
        title: '跳转至支付页面',
      })
      setTimeout(() => {
        wx.hideLoading()
        wx.showToast({
          icon:"error",
          title: '跳转失败',
        })
        setTimeout(() => {
          this.delAll()
        }, 1000);
      }, 500);
    }

  },

  observers:{
    'listCart':function(listCart) {
      if(listCart.price == undefined) {
        this.setData({
          all: 0
        })
      }
      else {
          this.setData({
            listReal: [...this.data.listReal,...Array(listCart)]
          })
          wx.setStorageSync('cartList', this.data.listReal)
          wx.setStorageSync('refresh', 0)
        this.setData({
          all: Math.round((listCart.price + this.data.all) * 10)/10
        })
        wx.setStorageSync('all', this.data.all)
      }

    }
  }

})
