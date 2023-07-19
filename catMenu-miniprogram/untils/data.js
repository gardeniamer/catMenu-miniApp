const list = [{
				imgPath:'https://roninz.oss-cn-beijing.aliyuncs.com/money.png',
				imgContent:'待付款'
			},
			{
				imgPath:'https://roninz.oss-cn-beijing.aliyuncs.com/goods.png',
				imgContent:'待发货'
			},
			{
				imgPath:'https://roninz.oss-cn-beijing.aliyuncs.com/goods2.png',
				imgContent:'已发货'
			},
			{
				imgPath:'https://roninz.oss-cn-beijing.aliyuncs.com/evaluate.png',
				imgContent:'待评价'
			},
			{
				imgPath:'https://roninz.oss-cn-beijing.aliyuncs.com/money2.png',
				imgContent:'退款/仲裁'
			},
			]
      const list2 = [{
        imgPath:'/static/info/reserve.png',
        imgContent:'我的预约'
      },
      {
        imgPath:'/static/info/heart.png',
        imgContent:'我的收藏'
      },
      {
        imgPath:'/static/info/record.png',
        imgContent:'浏览记录'
      },
      {
        imgPath:'/static/info/getGoods.png',
        imgContent:'收货地址'
      },]
      
      const list3 = [{
        imgPath:'../../static/info/appointment.png',
        imgContent:'领养协议'
      },
      {
        imgPath:'../../static/info/announce.png',
        imgContent:'平台声明'
      },
      {
        imgPath:'../../static/info/policy.png',
        imgContent:'隐私政策'
      },
      {
        imgPath:'../../static/info/help.png',
        imgContent:'用户帮助'
      },]
      
      const list4 = [{
        imgPath:'../../static/info/service.png',
        imgContent:'养猫顾问'
      },
      {
        imgPath:'../../static/info/photoService.png',
        imgContent:'客服热线'
      },
      {
        imgPath:'../../static/info/callback.png',
        imgContent:'意见反馈'
      },
      {
        imgPath:'../../static/info/sell.png',
        imgContent:'卖家入驻'
      },]


const list8 =[{
				teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea.png',
				teaName:'脏脏奶盖',
				price:'￥ 10.4',
				priceBefore: '￥ 24',
				priceDecline: '8.5折'
			},
			{	
				teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea2.png',
				teaName:'脏脏奶茶',
				price:'￥ 16.4',
				priceBefore: '￥ 34',
				priceDecline: '8.8折'
			},
			{
				teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea3.png',
				teaName:'杨枝甘露',
				price:'￥ 10.4',
				priceBefore: '￥ 24',
				priceDecline: '8.5折'
			},
			{
				teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea4.png',
				teaName:'桃桃蜜柚',
				price:'￥ 16.4',
				priceBefore: '￥ 34',
				priceDecline: '8.8折'
			},
			{
				teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea5.png',
				teaName:'风味拿铁',
				price:'￥ 18.4',
				priceBefore: '￥ 38',
				priceDecline: '8.8折'
			},
			{
				teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea6.png',
				teaName:'卡布奇诺',
				price:'￥ 28.4',
				priceBefore: '￥ 48',
				priceDecline: '8.5折'
			},
			{
				teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea7.png',
				teaName:'抹茶星冰乐',
				price:'￥ 12.4',
				priceBefore: '￥ 34',
				priceDecline: '8.6折'
			},
			{
				teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea8.png',
				teaName:'浓缩咖啡星冰乐',
				price:'￥ 21.4',
				priceBefore: '￥ 42',
				priceDecline: '8.7折'
			}]

const list9 = [
	{
		teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea8.png',
		teaName:'浓缩咖啡星冰乐',
		price:'￥ 21.4',
		priceBefore: '￥ 42',
		priceDecline: '8.7折'
	},
	{
		teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea7.png',
		teaName:'抹茶星冰乐',
		price:'￥ 12.4',
		priceBefore: '￥ 34',
		priceDecline: '8.6折'
	},
	{
		teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea6.png',
		teaName:'卡布奇诺',
		price:'￥ 28.4',
		priceBefore: '￥ 48',
		priceDecline: '8.5折'
	},
	{
		teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea5.png',
		teaName:'风味拿铁',
		price:'￥ 18.4',
		priceBefore: '￥ 38',
		priceDecline: '8.8折'
	},
	{
		teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea4.png',
		teaName:'桃桃蜜柚',
		price:'￥ 16.4',
		priceBefore: '￥ 34',
		priceDecline: '8.8折'
	},
	{
		teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea3.png',
		teaName:'杨枝甘露',
		price:'￥ 10.4',
		priceBefore: '￥ 24',
		priceDecline: '8.5折'
	},
	{
		teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea2.png',
		teaName:'脏脏奶茶',
		price:'￥ 16.4',
		priceBefore: '￥ 34',
		priceDecline: '8.8折'
	},
	{
		teaPhoto: 'https://roninz.oss-cn-beijing.aliyuncs.com/milkTea.png',
		teaName:'脏脏奶盖',
		price:'￥ 10.4',
		priceBefore: '￥ 24',
		priceDecline: '8.5折'
	},
]

function listAdd() {
	let n = 0
	let m = 0
	let flag = 1
	let list10 = []
	let special = list8[Math.floor(Math.random()*8 + 1) - 1]
	while(n <= 800){
		if(n == 0) {
			list10.push(special)
			special = list8[Math.floor(Math.random()*8 + 1) - 1]
		}
		else {
			for(let vol of list10) {
				if(vol.teaName != special.teaName ){
					m++
				}
				else {
					continue
				}

			}
			if(m == list10.length) {
				list10.push(special)
				m = 0
				special = list8[Math.floor(Math.random()*8 + 1) - 1]
			}
		}
		n++
	}
	return list10
}

let count = 1
let listMore = []
while(count <= 5){
	let listM = [...new Set([...new Set(listAdd()),...list8])]
	listMore.push(listM)
	count++
}

const list11 = [{
  showPhoto:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextrahttps://img.alicdn.com/imgextra/i4/2212613798599/O1CN01a95m4V2DOOWSrTTiV_!!2212613798599-0-alimamacc.jpg_360x360Q90.jpg_.webp',
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
},]

const list11More1 = [{
  showPhoto:'https://picasso.alicdn.com/imgextra/1e2bea/O1CNA1Pimgrender1e2beaO1CN013KCaSh1kGxHMFbwFm_!!0-item_pic.jpg?backup_url=O1CN013KCaSh1kGxHMFbwFm_!!0-item_pic.jpg&p_context=eyJiaXoiOiJtYWMiLCJjaGFubmVsIjoid3NlYXJjaGljb24taXRlbSIsIml0ZW1JZCI6IjU5NjUzNDQ2NDcwMiIsInBpY1R5cGUiOiJwMTEiLCJyZW5kZXJDb25kaXRpb24iOnt9LCJyZW5kZXJEYXRhIjp7fX0-&sign=1e2bea99eb1faea3e6677a626aff9d60&v=4.0_360x360Q90.jpg_.webp',
  msg:'猫砂包邮10公斤除臭结团猫沙膨润土低尘猫砂',
  advantage:['积分抵扣10%','包邮'],
  priceNow:'￥10.8',
  nowPeople: '1000+人已付款'
},
{
  showPhoto:'https://gw.alicdn.com/imgextra/O1CN01n8x7vD1igwZQQ2lJl_!!3242234443-0-picasso.jpg_360x360Q90.jpg_.webp',
  msg:'猫砂经典混合猫砂无尘豆腐砂膨润土砂混合除臭咪包邮',
  advantage:['积分抵扣10%','包邮','新品'],
  priceNow:'￥159',
  nowPeople: '100+人已付款'
},
{
  showPhoto:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2296907307/O1CN01pbfo1q23qeeZ05DIo_!!2296907307.jpg_360x360Q90.jpg_.webp',
  msg:'猫砂包邮10公斤40斤20kg膨润土除臭结团',
  advantage:['积分抵扣10%','包邮','新品'],
  priceNow:'￥8.3',
  nowPeople: '1万+人已付款'
},
{
  showPhoto:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3937219703/O1CN018JR7ck2LY1sITL5Bz_!!3937219703-0-C2M.jpg_360x360Q90.jpg_.webp',
  msg:'猫梳子宠物专用除浮毛刷撸猫神器针梳',
  advantage:['包邮','新品','积分抵扣10%'],
  priceNow:'￥6.8',
  nowPeople: '2万+人已付款'
}]

const list11More2 = [{
  showPhoto:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/1755476630/O1CN01XJGWqt1yqalSU5PYR_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'买1送1猫粮幼猫专用1到3月奶猫2个月猫奶糕',
  advantage:['包邮'],
  priceNow:'￥39.9',
  nowPeople: '1000+人已付款'
},
{
  showPhoto:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2215643243183/O1CN01fES9fs1ZNrVUIM4Xl_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'猫砂包邮10公斤20kg40斤除臭结团柠檬猫沙膨润土猫砂',
  advantage:['包邮','新品'],
  priceNow:'￥7.9',
  nowPeople: '100+人已付款'
},
{
  showPhoto:'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/3837764657/O1CN01HVLVSG1kGxIVLPAB3_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'猫窝夏天凉席猫窝宠物用品床垫子四季通用',
  advantage:['包邮','新品','积分抵扣10%'],
  priceNow:'￥11.9',
  nowPeople: '500+人已付款'
},
{
  showPhoto:'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/3350867248/O1CN01LekMjW23PdW976hdv_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'猫砂盆超大号全半封闭式猫厕所防带砂特',
  advantage:['包邮','积分抵扣10%'],
  priceNow:'￥16.8',
  nowPeople: '1万+人已付款'
}]

const list11More3 = [{
  showPhoto:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2215171969123/O1CN01kfWH2w2HGO9UG6VmZ_!!2215171969123.jpg_360x360Q90.jpg_.webp',
  msg:'猫砂包邮20公斤膨润土除臭柠檬40斤实惠装矿猫沙',
  advantage:['包邮','新品'],
  priceNow:'￥8.9',
  nowPeople: '2万+人已付款'
},
{
  showPhoto:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/199606933/O1CN015A9hE5215Mm2uxQgS_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'优趣成猫幼猫粮成年猫增肥1.5kg共6斤',
  advantage:['包邮'],
  priceNow:'￥35.9',
  nowPeople: '100+人已付款'
},
{
  showPhoto:'https://picasso.alicdn.com/imgextra/O1CNA19MbDmQ2Gx9WODSMvV_!!2209300589081-0-psf.jpg_360x360Q90.jpg_.webp',
  msg:'宠有引力水箱猫梳子去浮毛神器撸猫咪梳毛',
  advantage:['包邮','新品'],
  priceNow:'￥9.9',
  nowPeople: '2万+人已付款'
},
{
  showPhoto:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2295782084/O1CN01QwmTP51RGWEhI0Ub0_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'猫粮幼猫1到3月奶糕专用离乳期4到12月全价小奶幼粮',
  advantage:['包邮','新品','赠运费险'],
  priceNow:'￥29.9',
  nowPeople: '600+人已付款'
},]

const list11More4 = [{
  showPhoto:'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2200548548555/O1CN018MMf522D4F9abaIaG_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'宠有引力水箱猫梳子去浮毛神器撸猫咪梳毛专用',
  advantage:['包邮','新品','赠运费险'],
  priceNow:'￥9.9',
  nowPeople: '3万+人已付款'
},
{
  showPhoto:'https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/2200548548555/O1CN0170YR8N2D4F68RwYEO_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'猫粮幼猫1到3月奶糕专用离乳期4到12月全价小奶幼粮',
  advantage:['包邮','新品'],
  priceNow:'￥29.9',
  nowPeople: '1000+人已付款'
},
{
  showPhoto:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/3350867248/O1CN01yHGUlz23PdWFckfCw_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
  msg:'猫玩具自嗨解闷宠物猫咪转盘球老鼠的神器',
  advantage:['包邮','赠运费险'],
  priceNow:'￥16.8',
  nowPeople: '800+人已付款'
},
{
  showPhoto:'https://gw.alicdn.com/imgextra/O1CN01Gj1Xh71KMkK6IU7yY_!!2889741150-0-picasso.jpg_360x360Q90.jpg_.webp',
  msg:'沐浴露除臭止痒宠物猫洗澡美猫咪专用香波浴液',
  advantage:['新品','赠运费险'],
  priceNow:'￥8.1',
  nowPeople: '1000+人已付款'
}]


module.exports = {
  list,
  list2,
  list3,
  list4,
	list8,
	list9,
  listMore,
  list11,
	list11More1,
	list11More2,
	list11More3,
	list11More4
}