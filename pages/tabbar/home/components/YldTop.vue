<template>
	<view class='home-header title-font'>
		<view @click="changSelectStatus" class="city-section">
			<text>{{city}}</text>
			<i class="iconfont icondown"></i>
		</view>
		<view class='home-msg border-primary-color content-font'>
			<i class="iconfont iconiconfontzhizuobiaozhun22"></i>
			<input type="text" :value="searchValue" placeholder="请输入" />
		</view>
		<picker-view v-if="isShowSlecet" indicator-style="height: 40px;line-height: 40px" class='slecet-list' :value="city"
		 @change="saveValue" @click="changSelectStatus">
			<picker-view-column class="title-font">
				<view class='slecet-clonum' v-for="(item,index) in cityArr" :key="index">{{item.name}}</view>
			</picker-view-column>
		</picker-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: '西安市',
				cityArr: [{
						id: 0,
						name: '请选择'
					}, {
						id: 1,
						name: '包头市',
						permission: [1, 2, 3, 4, 5]
					},
					{
						id: 2,
						name: '呼和浩特市',
						permission: [1, 2, 3, 4]
					},
					{
						id: 3,
						name: '西安市',
						permission: [1, 2, 3, 5]
					}
				],
				searchValue: '',
				isShowSlecet: false,

			}
		},
		methods: {
			changSelectStatus: function() {
				this.isShowSlecet = !this.isShowSlecet
			},
			saveValue: function(e) {
				this.city = this.cityArr[e.detail.value[0]].name
			}
		}
	}
</script>

<style scoped lang="scss">
	.home-header {
		display: flex;
		width: 96%;
		margin-left: 2%;
		height: 60upx;
		line-height: 60upx;

		.city-section {
			display: flex;
			text {
				overflow: hidden;
				text-overflow: ellipsis; //超出部分以省略号显示
				white-space: nowrap;
				width: 98upx; //用px单位亦可行
			}
			i {
				margin-top: 4upx;
				margin-left: 2upx;
			}
		}

		.home-msg {
			display: flex;
			line-height: 60upx;
			border-radius: 30upx;
			margin-left: 2%;
			width: 77%;
			background: #fff;
			i {
				margin-left: 3%;
			}

			input {
				margin-left: 3%;
			}
		}

		.slecet-list {
			width: 100%;
			height: 420rpx;
			position: fixed;
			bottom: 0;
			z-index: 99;
			background: #fff;
		}

		.slecet-clonum {
			display: flex;
			justify-content: center;
			line-height: 40px;
		}

		.select-value {
			position: absolute;
			left: 200rpx;
		}

	}
</style>
