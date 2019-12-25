<template>
	<view class='order-address' @click='chooseAdress'>
		<view class='address-icon'><i class='iconfont iconweizhi-tianchong'></i></view>
		<view class='user-info' v-if='address.address'>
			<view class='base-info'>{{address.userName}} <text>{{address.phone}}</text></view>
			<view class='user-address tip-font'>{{address.address}}</view>
		</view>
		<view class="user-info" v-if='!address.address'><view class='base-info'>还没有地址，前去添加</view></view>
		<view class='right-icon'><i class='iconfont iconright'></i></view>
	</view>
</template>

<script>
	import { ADDRESS_INDEX } from '@/config/router'
	export default {
		props: {
			address: {
				type: Object
			}
		},
		methods: {
			chooseAdress: function(){
				uni.navigateTo({
					url: `${ADDRESS_INDEX}?srouce=gxgAddress`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-address {
		width: 100%;
		height: 150upx;
		background: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 22upx;
		border: 1upx solid #dcdcdc;
		border-radius: 10upx;
	}

	.order-address .address-icon i {
		font-size: 55upx;
		color: #666;
	}

	.order-address .user-info {
		line-height: 42upx;
		width: 390upx;
		.base-info {
			font-size: 30upx;
			text{
				margin-left: 22upx;
			}
		}
	}

	.order-address .right-icon i {
		font-size: 53upx;
		color: #666;
		position: relative;
	}
	
	.user-address {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2,
	}
</style>
