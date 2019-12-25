<template>
	<view>
		<view v-show='isShow' class='no-more-data-bar'>
			<text>没有更多数据了哦！</text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			isShow: {
				type: Boolean,
				default: false
			}
		},
	}
</script>

<style lang="scss">
	.no-more-data-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50rpx;
		background-color: #666666;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		text {
			font-size: 26rpx;
		}
	}
</style>
