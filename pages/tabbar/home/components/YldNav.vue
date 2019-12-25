<template>
	<view class="nav-list">
		<view v-for='(item,index) in navList' :key='index' class="nav-clomun">
			<view class="show-icon border-primary-color">
				<i :class='["iconfont",item.icon]'></i>
			</view>
			<view class="nav-name content-font">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			navList: {
				type: Array,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.nav-clomun {
			width:16%;
			margin-left:7%;
			margin-top: 46upx;
			.show-icon {
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				line-height: 120upx;
				text-align: center;
				i {
					font-size: 70upx;
					color: #e8be2e;
				}
			}
			.nav-name {
				text-align: center;
				margin-top: 16upx;
			}
		}
	}
</style>
