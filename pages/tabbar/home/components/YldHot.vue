<template>
	<view class="tip-box">
		<view class='scroll-tip'>
			<view class="tip-title"><text class="primary-theme-color">热</text>点</view>
			<i class="iconfont iconlaba theme-color"></i>
			<swiper class='header-msg-tip' :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			 circular :duration="duration" easing-function="default" vertical>
				<block v-for="(item,index) in valueList" :key="index">
					<swiper-item class='tip-font one-line-elipsis'>
						{{item}}
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			valueList: {
				type: Array
			}
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 4000,
				duration: 1000,
			}
		}
	}
</script>

<style scoped>
	.tip-title {
		font-size: 40upx;
		font-weight: bold;
		margin-left: 2%;
	}
	.scroll-tip {
		width: 100%;
		height: 80upx;
		background: #fff;
		border-bottom: 16upx solid rgb(223,54,93);
		line-height: 100rpx;
		display: flex;
	}

	.scroll-tip .header-msg-tip {
		height: 70upx;
		position: absolute;
		margin-left: 180upx;
		width: 570upx;
	}

	.scroll-tip i {
		position: relative;
		font-size: 40upx;
		left: 30upx;
	}
</style>
