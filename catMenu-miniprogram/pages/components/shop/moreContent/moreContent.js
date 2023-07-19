// pages/components/shop/moreContent/moreContent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listMore:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list2: [{
      showPhoto:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextrahttps://img.alicdn.com/imgextra/i4/2212613798599/O1CN01a95m4V2DOOWSrTTiV_!!2212613798599-0-alimamacc.jpg_360x360Q90.jpg_.webp",
      msg:'超值囤货包高营养功能猫条0胶0淀粉0肉粉0诱食剂',
      advantage:['积分抵扣10%','包邮'],
      priceNow:'￥458',
      nowPeople: '1万+人已付款'
    },
    {
      showPhoto:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/406880101/O1CN01a4rpA41CcIqUADTk1_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
      msg:'猫条纯条桶12口味猫零食补水营养囤货湿粮无诱食剂',
      advantage:['积分抵扣10%','包邮'],
      priceNow:'￥99.9',
      nowPeople: '2万+人已付款'
    },
    {
      showPhoto:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/2332200103/O1CN01vPQ2ph1CdDdy6rs7B_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp',
      msg:'大p便当主食猫条鱼油成猫幼猫防掉毛无添加剂猫咪零食',
      advantage:['积分抵扣10%','包邮'],
      priceNow:'￥28.9',
      nowPeople: '100+人已付款'
    },
    {
      showPhoto:'https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/3937219703/O1CN01IU0Ju52LY1sICTxpb_!!3937219703-0-C2M.jpg_360x360Q90.jpg_.webp',
      msg:'柠檬猫砂包邮10公斤除臭结团猫沙膨润土低尘猫砂',
      advantage:['积分抵扣10%','包邮'],
      priceNow:'￥9.9',
      nowPeople: '1000+人已付款'
    },],
    show: 0,
    special: 0 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(e) {
      this.triggerEvent("moreContentCart",e.target.dataset.index)

    }
  },

  observers:{
    'listMore':function(listMore) {
          this.setData({
            list2: [...this.data.list2,...listMore],
            special: this.data.special += 1
          })
          if(this.data.special == 5) {
            this.setData({
              show: 1
            })
					}
    }
  }

})
