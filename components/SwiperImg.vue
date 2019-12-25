<template>
	<view>
		<swiper class="swiper" :style="{height:`${heightNum}rpx`}" :autoplay='autoplay' :circular='circular'  @change='changeDot'>
			<swiper-item v-for="(item,index) in imgList" :key="index">
				<view class="swiper-item">
					<image :src="item.path"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class='show-swiper'>
			<view v-for="(item,index) in imgList.length" :key="index" v-bind:class="[{'swiper-dot-active':index===dotIndex},'swiper-dot']"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			imgList: {
				type: Array,
			},
			heightNum: {
				type: Number,
				default: 662
			},
			autoplay: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				dotIndex: 0,
				circular: true,
			};
		},
		methods: {
			changeDot: function(e) {
				this.dotIndex = e.detail.current
			}
		},
	}
</script>

<style lang="scss" scoped>
	.swiper {
		width: 100%;

		.swiper-item {
			width: 100%;
			height: 100%;
			position: relative;
			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	.show-swiper {
		position: absolute;
		z-index: 3;
		width: 100%;
		height: 30rpx;
		margin: -30rpx auto 0;
		display: flex;
		justify-content: center;

		.swiper-dot {
			width: 70rpx;
			height: 14rpx;
			border-radius: 20rpx;
			background: #eee;
			border: 1upx solid #eee;
			&.swiper-dot:not(:first-child) {
				margin-left: 8rpx;
			}
		}
		.swiper-dot-active {
			background: rgb(223,54,93);
			color: #fff;
		}
	}
</style>
