<template>
	<view class="nav-box">
		<view class="nav-clonum" v-for="(item,index) in navList" :key="index" @click="goPage(item.path)">
			<i :class="['iconfont',item.icon]"></i>
			<text>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	import { ORDER_LIST } from '@/config/router.js'
	export default {
		data() {
			return {
				navList: [{
						id: 1,
						icon: 'iconjifen',
						name: '我的积分',
						path: ''
					},
					{
						id: 2,
						icon: 'icon19',
						name: '兑换记录',
						path: ORDER_LIST
					}
				]
			}
		},
		methods: {
			goPage: function(path){
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.nav-box {
		display: flex;
		width: 100%;
		height: 50upx;
		line-height: 50upx;
		margin: 30upx 0;
		.nav-clonum {
			width: 50%;
			display: flex;
			justify-content: center;

			i {
				font-size: 50upx;
				margin-right: 6upx;
				color: #333;
			}
			text {
				color: #333;
				font-size: 32upx;
			}
			&:not(:last-child) {
				border-right: 2upx solid #ddd;
			}
		}
		
	}
</style>
