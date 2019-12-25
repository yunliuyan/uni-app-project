<template>
	<view>
		<view class="btn-list">
			<view v-for='(item, index) in canUseBtn' :key='index' v-if='item.id !=9' :data-id='item.id' @click="clickBtnEvent"
			 class="btn-clonum">{{item.name}}</view>
			<view v-for='(item, index) in canUseBtn' :key='index' v-if='item.id == 9' class="btn-refund">
				<i @click='showRefundModel' class="iconfont iconmore"></i>
				<view v-if='isShowModel' :data-id='item.id' @click="clickBtnEvent" class="refund-nav">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		makePhoneCall,
		gxgConfirm
	} from '@/config/package.js'
	import {
	
	} from '@/config/router.js';
	

	export default {
		props: {
			btnList: {
				type: Array,
				default: () => {
					return []
				}
			},
			orderid: {
				type: Number,
				default: 0
			},
			item: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {
				isShowModel: false,
			}
		},
		
		methods: {
			showRefundModel: function() {
				this.isShowModel = !this.isShowModel
			},
			clickBtnEvent: function(e) {
				const id = e.target.dataset.id
				if (id == 1) {
					makePhoneCall({
						phone: '0574-83017657'
					})
				} else if (id == 2) {
					gxgConfirm({
						successFunction: () => {
							deleteOrder(this.orderid).then(res => {
								this.$emit('deleteSuccess',{id:this.orderid});
							})
						}
					})
				} else if (id == 3) {
					uni.navigateTo({
						url: `${WRITE_ORDER}?id=${this.orderid}`
					})
				} else if (id == 4) {
					uni.navigateTo({
						url: `${ADDRESS_INDEX}?srouce=orderBtn&orderid=${this.orderid}`
					})
				} else if (id == 5) {
					getOrderDetail(this.orderid).then(res => {
						gxgConfirm({
							title: '物流单号',
							content: res.deliveryId,
							showCancel: false,
							confirmText: '确认复制',
							successFunction: () => {
								uni.setClipboardData({
									data: res.deliveryId,
									success: function() {
										uni.showToast({
											title: '已复制到剪切板',
											icon: 'none'
										})
									}
								});
							}
						})
					})

				} else if (id == 6) {
					orderDelivery(this.orderid).then(res => {
						uni.showToast({
							title: '收货成功',
							duration: 2000,
							icon: 'none',
							success: () => {
								this.$emit('updateList')
								uni.navigateTo({
									url: `${ORDER_LIST}?state=4`,
									success: ()=>{
										this.getOrderStatus()
									}
								})
							}
						})
					})
				} else if (id == 7) {
					makePhoneCall({
						phone: '0574-83017657'
					})
				} else if (id == 8) {
					uni.navigateTo({
						url: `${WRITE_ORDER}?id=${this.orderid}`
					})
				} else if (id == 9) {
					this.showRefundModel();
					this[types.SET_ORDER_ITEM](this.item);
					uni.navigateTo({
						url: `${REFUND_DETAIL}?id=${this.id}`
					})
				} else if (id == 10) {
					uni.switchTab({
						url: HOME_INDEX
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.btn-list {
		display: flex;
		justify-content: center;

		.btn-clonum {
			margin-top: 30upx;
			margin-left: 30upx;
			width: 160upx;
			height: 46upx;
			line-height: 46upx;
			border: 1upx solid #666;
			color: #666;
			font-size: 26upx;
			border-radius: 40upx;
			background: #fff;
			text-align: center;

			&.btn-clonum:last-child {
				background: #baa16d !important;
				color: #fff;
				border: none;
			}
		}
	}

	.btn-refund {
		position: absolute;
		left: 36upx;
		width: 80upx;
		height: 46upx;
		text-align: center;
		line-height: 46upx;
		margin-top: 30upx;
		border: 1upx solid #dcdcdc;
		border-radius: 40upx;

		.iconmore {
			font-size: 50upx;
			color: #8f8fa7;
		}

		.refund-nav {
			margin-top: 22upx;
			margin-left: -30upx;
			width: 160upx;
			height: 46upx;
			line-height: 46upx;
			color: #666;
			font-size: 26upx;
			border-radius: 10upx;
			background: #fff;
			text-align: center;
			box-shadow: 0 4upx 4upx 4upx rgba(0, 0, 0, 0.1);
		}
	}
</style>
