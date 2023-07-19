// pages/components/drink/drinkdetail.js
const data = require("../../../untils/data.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  lifetimes: {
    attached() {
      this.setData({
        list2: data.list8,
        list3: data.list9
      })
    }
  },


  data: {
    menuName:'typical',
    leftName:'店长推荐',
    list:[
      {leftIcon:'/static/drink/drink1.png',
       name:'店长推荐'
      },
      {leftIcon:'/static/drink/drink2.png',
       name:'活动商品'
      },
      {leftIcon:'/static/drink/drink3.png',
       name:'限时惊喜'
      },
      {leftIcon:'/static/drink/drink4.png',
       name:'暖冬限定'
      },
      {leftIcon:'/static/drink/drink5.png',
       name:'超有料家族'
      },
      {leftIcon:'/static/drink/drink6.png',
       name:'超赞奶茶'
      },
      ],
    list2:[],
    list3:[],
    listReal:[{
      teaPhoto:'',
      teaName:'',
      price:''
    }],
    listThing:[{
      name:'珍珠',
      price:0
    },
    {
      name:'椰果',
      price:0
    },
    {
      name:'芋圆',
      price:0
    }],
    temparature:['正常冰','常温','温热'],
    stemparature: 0,
    sugar:['正常糖','七分糖','五分糖'],
    ssugar: 0,
    all:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeMenu(e) {
      this.setData({
        menuName: e.target.dataset.info1,
        leftName: '店长推荐',
        list2: data.list8,
        list3: data.list9,
        show: false,
        
      })
    },
    changeLeft(e) {
      wx.showLoading({
        title: '加载中',
      })
      if(e.target.dataset.info3 == undefined) {
        wx.hideLoading()
        wx.showToast({
          icon:'none',
          title: '加载失败,请换一个点击',
        })
      }
      else {
        setTimeout(() => {
          wx.hideLoading()
          this.setData({
            leftName: e.target.dataset.info3
          })
          if(e.target.dataset.info4 == 0) {
            this.setData({
              list2: data.list8,
              list3: data.list9
            })
          }
          else {
            this.setData({
              list2: data.listMore[e.target.dataset.info4 - 1],
              list3: data.listMore[e.target.dataset.info4 - 1]
            })
          }
          wx.showToast({
            icon:'success',
            title: '加载成功',
          })
        }, 500);
      }
    },
    
    choose(e) {
      this.setData({ 
        show: true, 
        listReal: [{
          teaName: e.target.dataset.msg.teaName,
          teaPhoto: e.target.dataset.msg.teaPhoto,
          price: e.target.dataset.msg.price
        }],
        all: Number(e.target.dataset.msg.price.split("￥")[1])
      });
      wx.setStorageSync('allSmall', this.data.all)
    },
  
    onClose() {
      this.setData({ 
        show: false,
        ['listThing['+0+']'+'.price']: 0,
        ['listThing['+1+']'+'.price']: 0,
        ['listThing['+2+']'+'.price']: 0
      });
    },

    increase(e) {
      if(e.target.dataset.count != 2) {
        this.setData({
          ['listThing['+ e.target.dataset.count +']'+'.price']: this.data.listThing[e.target.dataset.count].price + 1,
          all: Math.round( (this.data.all + 1) *10)/10
        })
        wx.setStorageSync('allSmall', this.data.all)
      }
      else {
        this.setData({
          ['listThing['+ e.target.dataset.count +']'+'.price']: this.data.listThing[e.target.dataset.count].price + 2,
          all: Math.round( (this.data.all + 2) *10)/10
        })
        wx.setStorageSync('allSmall', this.data.all)
      }

    },

    decline(e) {
      if(this.data.listThing[e.target.dataset.count].price != 0) {
        if(e.target.dataset.count != 2) {
          this.setData({
            ['listThing['+ e.target.dataset.count +']'+'.price']: this.data.listThing[e.target.dataset.count].price - 1,
            all: Math.round( (this.data.all - 1) *10)/10
          })
          wx.setStorageSync('allSmall', this.data.all)
        }
        else {
          this.setData({
            ['listThing['+ e.target.dataset.count +']'+'.price']: this.data.listThing[e.target.dataset.count].price - 2,
            all: Math.round( (this.data.all - 2) *10)/10
          })
          wx.setStorageSync('allSmall', this.data.all)
        }

      }
    },

    changeTem(e) {
      this.setData({
        stemparature: e.target.dataset.index
      })
    },

    changeSugar(e) {
      this.setData({
        ssugar: e.target.dataset.index
      })
    },

    add(e) {
      for(vol of this.data.listThing) {
        if(vol.price != 0) {
          if(vol.name != '芋圆') {
            this.setData({
              ['listReal['+'0'+']'+'.teaName']: this.data.listReal[0].teaName + '(' + vol.name + '：' + vol.price + '份' + ')',
            })
          }
          else {
            this.setData({
              ['listReal['+'0'+']'+'.teaName']: this.data.listReal[0].teaName + '(' + vol.name + '：' + (vol.price / 2) + '份' + ')',
            })
          }

        }
      }
      this.setData({
        ['listThing['+0+']'+'.price']: 0,
        ['listThing['+1+']'+'.price']: 0,
        ['listThing['+2+']'+'.price']: 0
      })

      this.triggerEvent("moreContentCart", this.data.listReal)
      this.setData({
        show: false
      })

    }

  }
})
