<template>
	<scroll-view scroll-y class="container" @scrolltolower="worksLower">
		<view class='shop-nav'>
			<view :class='[navIndex === index?"primary-theme-color border-active shop-clonum" :" shop-clonum title-font"]' v-for="(item,index) in navList"
			 :key="index" @click='changeType' :data-index="index">
				{{item.name}}
			</view>
		</view>
		<view class="detail-list">
			<view v-for='(item,index) in list' :key='index' :data-id='item.id' class="detail-content">
				<view class="order-status">{{orderStatusValue}}</view>
				<!-- <i @click='deleteOrder' :data-id='item.id' class="iconfont iconcha"></i> -->
				<view @click='goOrderStatusPage' :data-id='item.id'>
					<order-infor :order='item'></order-infor>
				</view>
				<view class="infor-tip">商品合计:<span class="primary-theme-color" style='font-size: 28rpx'>{{item.allMoney}}</span> 积分</view>
				<view class="btn-list">
					<order-button @updateList='loadData(4)' :btnList='item.showBtn' :item='item' :orderid='item.id' @deleteSuccess='deleteOrderSuccess'></order-button>
				</view>
			</view>
		</view>
		<NoMoreData :isShow='isShowNoMoreData' />
	</scroll-view>
</template>

<script>
	import OrderInfor from '@/components/OrderInfor'
	import OrderButton from '@/components/OrderButton'
	import NoMoreData from '@/components/NoMoreData.vue'

	import {
		ORDER_DETAIL
	} from '@/config/router'

	export default {
		data() {
			return {
				list: [
					{
						id: 1,
						showImgUrl: 'http://img3.imgtn.bdimg.com/it/u=38403952,1485618035&fm=26&gp=0.jpg',
						name: 'Chanel 劳力士手表钛合金',
						originalPrice: '25000',
						price: '2000',
						count: 66,
						orderCounts: 2,
						allMoney: 4000,
						showBtn: [4]
					}
				],
				orderStatusValue: '待付款',
				isShowNoMoreData: false,
				navList: [{
						id: 1,
						name: '待付款'
					},
					{
						id: 2,
						name: '待发货'
					},
					{
						id: 3,
						name: '待收货'
					},
					{
						id: 4,
						name: '待完成'
					},
					{
						id: 5,
						name: '售后维权'
					}
				],
				navIndex: 0,
			};
		},
		onLoad(options) {
			this.state = options.state;
		},
		onShow() {
			//this.loadData();
		},
		methods: {
			loadData(stateId) {
				this.changeOrderList({
					id: this.state ? this.state : stateId
				});
			},
			//改变导航类
			changeType: function(e) {
				this.navIndex = (e.currentTarget.dataset.index || e.detail.current) || 0
			},
			changeOrderList: function(data) {
				this.state = data.id
				this.worksPagination.page = 1
				getOrderList({ ...this.worksPagination,
					state: data.id
				}).then(res => {
					this.list = res.list;
					this.count = res.count;
					this.orderStatusValue = this.status.length && this.status.find(item => item.id == data.id).title;
				}).then(res => {
					!this.orderStatusValue && this.getOrderStatus().then(res => {
						this.orderStatusValue = this.status.find(item => item.id == data.id).title;
					})
				})
			},
			goOrderStatusPage: function(e) {
				uni.navigateTo({
					url: `${ORDER_DETAIL}?id=${e.currentTarget.dataset.id}`
				})
			},
			deleteOrder: function(e) {
				gxgConfirm({
					successFunction: () => {

					}
				})
			},
			worksLower() {
				if (this.list.length < Number(this.count)) {
					this.worksPagination.page++;
					getOrderList({ ...this.worksPagination,
						state: this.state
					}, true).then(res => {
						this.list.push(...res.list);
						this.count = res.count;
					});
				} else {
					this.isShowNoMoreData = true;
					setTimeout(() => {
						this.isShowNoMoreData = false;
					}, 1000);
				}
			},
			deleteOrderSuccess({
				id
			}) {
				let index = this.list.findIndex(item => item.id == id);
				this.list.splice(index, 1);
				this.count--;
				this.getOrderStatus();
			}
		},
		components: {
			OrderInfor,
			OrderButton,
			NoMoreData
		},
	}
</script>

<style lang="scss" scoped>
	.shop-nav {
		display: flex;
		justify-content: space-around;
		height: 60upx;
		line-height: 60upx;
		margin-top: 20upx;
	}

	.shop-nav .shop-clonum {
		font-size: 30upx;
	}

	.shop-bottom {
		width: 100%;
		height: 100%;
	}

	.detail-list {
		width: 100%;
		.detail-content {
			width: 96%;
			background: #fff;
			margin: 2%;
			.order-status {
				position: absolute;
				right: 90upx;
				color: #baa16d;
				margin-top: 15upx;
				font-size: 28upx;
			}

			.iconcha {
				position: absolute;
				right: 80upx;
				margin-top: 12upx;
			}

			.infor-tip {
				position: absolute;
				margin-top: -90rpx;
				margin-left: 50rpx;
				font-size: 20rpx;
				right: 50rpx;
			}

			.btn-list {
				position: relative;
				top: -30upx;
				margin-bottom: 10upx;
			}

		}
	}
</style>
