<template>
	<view class="clothe-box">
		<view class="box-left">
			<image :src="order.showImgUrl" mode="aspectFill"></image>
		</view>
		<view class="box-right">
			<view class="title-font one-line-elipsis">{{order.name}}</view>
			<view class="tip-font">原价: ¥{{order.originalPrice}}</view>
			<view class="tip-font">单价: {{order.price}}积分</view>
			<view  v-if="order.orderCounts" class="tip-font">数量: {{order.orderCounts}}</view>
			<view v-if="!order.orderCounts" class="count-box">
				<view>数量:</view>
				<view class="right-bottom">
					<i @click="addorderCounts" class="iconfont iconjia"></i>
					<text>{{orderCounts}}</text>
					<i @click="reduceorderCounts" class="iconfont iconjian"></i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			order: {
				type: Object,
			}
		},
		data() {
			return {
				orderCounts: 1
			}
		},
		methods: {
			reduceorderCounts: function() {
				if (this.orderCounts > 1) {
					this.orderCounts -= 1
					this.$emit('changeAllMoney',this.orderCounts)
				}
			},
			addorderCounts: function() {
				if(this.orderCounts<=this.order.count){
					this.orderCounts += 1
					this.$emit('changeAllMoney',this.orderCounts)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.clothe-box {
		width: 94%;
		height: 330upx;
		margin: 3% 24upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #fff;

		.box-left {
			width: 26%;
			height: 238upx;
			border-radius: 10upx;
			display: flex;
			justify-content: center;
			margin-left: 30upx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 10upx;
			}
		}

		.box-right {
			width: 58%;

			.clothe-size {
				margin-top: 24upx;
			}

			.tip-font {
				line-height: 52upx;
			}

			.count-box {
				display: flex;
				justify-content: space-between;
				font-size: 30upx;
				color: #8f8fa7;
				margin-top: 20upx;
			}

			.content-font {
				color: #8f8fa7;
			}

			.right-bottom {
				width: 132upx;
				display: flex;
				justify-content: space-around;

				i {
					font-size: 36upx;
					color: rgb(223, 54, 93);
				}

				text {
					font-size: 32upx;
					line-height: 45upx;
				}
			}
		}
	}
</style>
