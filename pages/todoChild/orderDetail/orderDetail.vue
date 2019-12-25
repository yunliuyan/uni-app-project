<template>
	<view class="container">
		<view class="order-status">
			<view class="status-tip">
				<i class='iconfont iconqueding'></i>
				<text class="title-font">{{orderInformation.status}}</text>
			</view>
			<order-button :orderid="orderInformation.id" :btnList='orderInformation.showBtn'></order-button>
		</view>
		<view class="order-infor">
			<view class='order-address'>
				<view class='address-icon'><i class='iconfont iconweizhi-tianchong'></i></view>
				<view v-if='orderInformation.address' class='user-info'>
					<view class='base-info'>{{orderInformation.userName}} <text>{{orderInformation.phone}}</text></view>
					<view class='user-address tip-font'>{{orderInformation.address}}</view>
				</view>
				<view v-else class='user-info'>暂无收货地址</view>
			</view>
			<view class="order-clothe">
				<order-infor :order='orderInformation'></order-infor>
			</view>
			<view class="order-content">
				<view class="title-font"><span>|</span>订单信息</view>
				<view class="tip-font"><span>订单编号</span>: {{orderInformation.id}}</view>
				<view class="tip-font"><span>物流单号</span>: {{orderInformation.deliveryId}}</view>
				<view class="tip-font"><span>创建时间</span>: {{orderInformation.createTime}}</view>
				<view class="tip-font"><span>成交时间</span>: {{orderInformation.payTime}}</view>
				<view class="tip-font"><span>客服热线</span>: 0574-83017657</view>
			</view>
		</view>
	</view>
</template>

<script>
	import OrderInfor from '@/components/OrderInfor.vue';
	import OrderButton from '@/components/OrderButton.vue';
	import regeneratorRuntime from '@/utils/regenerator-runtime/runtime.js';

	export default {
		data() {
			return {
				options: {},
				orderInformation: {
					id: 1,
					showImgUrl: 'http://img3.imgtn.bdimg.com/it/u=38403952,1485618035&fm=26&gp=0.jpg',
					name: 'Chanel 劳力士手表钛合金',
					originalPrice: '25000',
					price: '2000',
					count: 66,
					address: "广东省深圳市龙岗区龙翔大道龙岗区政府对面(龙城广场)",
					lastdate: 1575584107000,
					userName: "云流烟",
					phone: "18879252951",
					status: "待发货",
					createTime: '2019-12-23',
					payTime: '2019-12-23',
					deliveryId: '68979457897987987778',
					orderCounts: 6,
					showBtn: [4]
				}
			}
		},
		onLoad(options) {
			this.options = options;
		},
		async onShow() {
			
		},
		methods: {
			
		},
		components: {
			OrderInfor,
			OrderButton
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #e5e7e7 !important;

		.order-status {
			height: 200upx;

			.status-tip {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 60upx;

				i {
					font-size: 40upx;
				}

				text {
					font-weight: 600;
					font-size: 46upx;
					margin-left: 20upx;
				}
			}
		}

		.order-infor {
			width: 100%;
			background: #fff;
			height: calc(100% - 267upx);
			border-top: 4upx solid #dcdcdc;
			border-top-left-radius: 150upx;
			border-top-right-radius: 150upx;
			box-shadow: 0 0 1upx 1upx rgba(0, 0, 0, 0.1);

			.order-address {
				width: 82%;
				margin-left: 9%;
				height: 150upx;
				background: #fff;
				display: flex;
				align-items: center;
				margin-top: 22upx;
				border-radius: 10upx;

				.address-icon i {
					font-size: 55upx;
					color: #666;
				}

				.user-info {
					line-height: 42upx;
					margin-left: 30upx;

					.base-info {
						font-size: 30upx;

						text {
							margin-left: 22upx;
						}
					}
				}
			}

			.order-clothe {
				height: 330upx;
				border-top: 2upx solid #e5e7e7;
				border-bottom: 2upx solid #e5e7e7;
			}

			.order-content {
				width: 82%;
				margin-left: 9%;

				.title-font {
					font-size: 30upx;
					margin: 30upx 0;

					span {
						color: red;
						position: relative;
						top: -4rpx;
						margin-right: 10rpx;
					}
				}

				.tip-font {
					font-size: 26upx;
					line-height: 50upx;

					span {
						color: #333;
						margin-right: 10rpx;
					}
				}
			}

		}
	}
</style>
