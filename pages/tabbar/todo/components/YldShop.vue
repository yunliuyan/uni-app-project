<template>
	<view class="list-box">
		<view class='home-msg border-primary-color content-font'>
			<i class="iconfont iconiconfontzhizuobiaozhun22"></i>
			<input type="text" :value="searchValue" placeholder="请输入关键字进行搜索" />
		</view>
		<view class='content-list'>
			<view class='content-clonum' v-for="(item,index) in shopList" :key="index" @click='goShopDetail(item.id)'>
				<view class='shop-image'>
					<image :src='item.url[0].path' mode="aspectFill"></image>
				</view>
				<view class='shop-info'>
					<view class='info-title content-font one-line-elipsis'>{{item.name}}</view>
				</view>
				<view class="shop-info">
					<view class="content-font primary-theme-color">{{item.price}}积分</view>
					<view class="go-detail">立即兑换</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { SHOP_DETAIL } from '@/config/router.js'
	export default {
		props: {
			shopList: {
				type: Array
			}
		},
		data() {
			return {

			}
		},
		methods: {
			goShopDetail: function(id) {
				uni.navigateTo({
					url: `${SHOP_DETAIL}?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-msg {
		display: flex;
		line-height: 60upx;
		border-radius: 30upx;
		width: 80%;
		background: #fff;
		margin: 60upx 10% 30upx;

		i {
			margin-left: 3%;
		}

		input {
			margin-left: 3%;
		}
	}

	.list-box {
		width: 94%;
		background: #fff;
		border-radius: 24rpx;
		box-shadow: 0 10rpx 20rpx 8rpx rgba(0, 0, 0, .1);
		margin: 0 3% 30upx;
		display: flex;
		flex-wrap: wrap;
	}

	.content-list{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 30upx;
	}
	
	.content-list .content-clonum {
		width: 41%;
		min-height: 380upx;
		margin-top: 22upx;
		margin-left: 6%;
	}

	.content-clonum .shop-image {
		width: 100%;
		height: 310upx;
	}

	.shop-image image {
		width: 100%;
		height: 100%;
	}

	.content-clonum .shop-info {
		margin-top: 16upx;
		display: flex;
		justify-content: space-between;

		.go-detail {
			width: 120upx;
			height: 40upx;
			text-align: center;
			border-radius: 6upx;
			background: rgb(223, 54, 93);
			color: #fff;
			font-size: 22upx;
			line-height: 40upx;
		}
	}
</style>
