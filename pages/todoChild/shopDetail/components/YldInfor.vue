<template>
	<view class="infor-box">
		<view class="box-top border-primary-color">
			<view class="shop-tip content-font">商品</view>
			<view class="title-font">{{infor.name}}</view>
		</view>
		<view class="box-bottom">
			<view class="counts-infor tip-font">
				<view class="shop-counts">仅限: {{infor.count}}份</view>
				<view class="buy-counts">已参与: {{infor.buyCounts}}次</view>
			</view>
			<view class="price-infor">
				<view class="save-price primary-theme-color"><text>{{infor.price}}</text>积分</view>
				<view class="origin-price">原价:{{infor.originalPrice}}元</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			infor: {
				type: Object
			}
		}
	}
</script>

<style lang="scss" scoped>
	.infor-box {
		width: 100%;
		background: #fff;

		.box-top {
			display: flex;
			height: 120upx;
			line-height: 120upx;

			.shop-tip {
				width: 94upx;
				height: 50upx;
				line-height: 50upx;
				text-align: center;
				color: #fff;
				background: rgb(223, 54, 93);
				margin-left: 3%;
				margin-top: 35upx;
				border-radius: 6upx;
			}

			.title-font {
				margin-left: 3%;
			}
		}

		.box-bottom {
			width: 100%;
			color: #8f8fa7;
			.counts-infor {
				display: flex;
				font-size: 28upx;
				margin: 16upx 3%;

				.shop-counts {}

				.buy-counts {
					margin-left: 3%;
				}
			}

			.price-infor {
				width: 94%;
				display: flex;
				margin: 0 3%;
				height: 100upx;
				line-height: 100upx;

				.save-price {
					font-size: 32upx;

					text {
						font-size: 36upx;
						margin-right: 8upx;
						font-weight: bold;
					}
				}

				.origin-price {
					font-size: 30upx;
					margin-left: 3%;
					text-decoration: line-through; 
				}
			}
		}
	}
</style>
