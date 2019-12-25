<template>
	<scroll-view scroll-y class="container">
		<view class="clothe-infor">
			<order-infor :order='orderInformation' @changeAllMoney='changeAllMoney'></order-infor>
			<i @click='goOrderListPage' class='iconfont iconcha'></i>
		</view>
		<view class="order-infor">
			<view class="address-infor">
				<view class="adress-tip title-font">收货地址</view>
				<yld-address :address='addressInfor'></yld-address>
			</view>
			<view class="delivery-infor">
				<view class="title-font">快递</view>
				<view class="infor-content">
					<i class='iconfont iconqueding'></i>
					<view class="tip-font delivery-name">顺丰</view>
					<view class="tip-font">￥0.00</view>
				</view>
			</view>
			<view class="pay-infor">
				<view class="title-font">支付方式</view>
				<view class="infor-content">
					<view class="tip-font">积分支付</view>
				</view>
			</view>
			<view class="money-infor">
				<view class="tip-font infor-con">
					<view>商品总金额</view>
					<view>{{allMoney}}积分</view>
				</view>
				<view class="tip-font infor-con">
					<view>优惠券抵扣</view>
					<view>￥ 0.00</view>
				</view>
				<view class="tip-font infor-con">
					<view>运费</view>
					<view>￥ 0.00</view>
				</view>
				<view class="title-font infor-con">
					<view>实付款</view>
					<view>{{allMoney}}积分</view>
				</view>
			</view>
		</view>
		<button class="start-todo primary-cus-big-button" @click='startTodo'>提交订单</button>
	</scroll-view>
</template>

<script>
	import OrderInfor from '@/components/OrderInfor.vue'
	import YldAddress from '@/components/YldAddress.vue'
	import {
		ORDER_DETAIL
	} from '@/config/router.js'
	export default {
		data() {
			return {
				orderInformation: {
					id: 1,
					showImgUrl: 'http://img3.imgtn.bdimg.com/it/u=38403952,1485618035&fm=26&gp=0.jpg',
					name: 'Chanel 劳力士手表钛合金',
					originalPrice: '25000',
					price: '2000',
					count: 66,
				},
				addressInfor: {
					userName: '云流烟',
					phone: '18879252951',
					address: '广东省深圳市龙岗区大运软件小镇34栋301室'
				},
				allMoney: 2000
			};
		},
		components:{
			OrderInfor,
			YldAddress
		},
		methods:{
			changeAllMoney: function(orderCounts){
				this.allMoney = parseInt(this.orderInformation.price)* orderCounts
			},
			startTodo: function(){
				uni.navigateTo({
					url: ORDER_DETAIL
				})
			},
		}
	}
</script>

<style lang="scss">
	.iconcha {
		position: absolute;
		right: 64upx;
		top: 64upx;
	}

	.order-infor {
		width: 100%;
		height: calc(100% - 300upx);
		border-top: 4upx solid #dcdcdc;
		border-top-left-radius: 150upx;
		border-top-right-radius: 150upx;
		box-shadow: 0 0 1upx 1upx rgba(0, 0, 0, 0.1);
		background: #fff;
		.address-infor {
			width: 82%;
			margin-left: 9%;
			margin-top: 80upx;
			padding-bottom: 46upx;
			border-bottom: 1upx solid #dcdcdc;
		}

		.delivery-infor {
			width: 82%;
			margin-left: 9%;
			margin-top: 46upx;
			padding-bottom: 46upx;
			border-bottom: 1upx solid #dcdcdc;

			.infor-content {
				margin-top: 23upx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.delivery-name {
					margin-right: 380upx;
				}

				.tip-font {
					color: #333;
				}
			}
		}

		.pay-infor {
			width: 82%;
			margin-left: 9%;
			margin-top: 46upx;
			padding-bottom: 46upx;
			border-bottom: 1upx solid #dcdcdc;
			display: flex;
			justify-content: space-between;
			.tip-font {
				color: #333;
				margin-top: 22rpx;
			}
		}

		.money-infor {
			width: 82%;
			margin-left: 9%;
			margin-top: 46upx;
			padding-bottom: 46upx;
			border-bottom: 1upx solid #dcdcdc;

			.infor-con {
				display: flex;
				justify-content: space-between;
			}

			.tip-font {
				color: #333;
				margin-top: 22rpx;
			}

			.title-font {
				margin-top: 53upx;
			}
		}
	}
</style>
