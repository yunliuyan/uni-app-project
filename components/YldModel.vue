<template>
	<view class="black-bg-box">
		<view class="gxg-model">
			<view class="model-title">{{defaultData.title}}</view>
			<view :style="{textAlign: defaultData.textAlignSetting,fontSize: `${defaultData.fontSizeSetting}rpx`}" class="model-content"><slot></slot></view>
			<view class="model-todo title-font">
				<view :style="{color: defaultData.cancelColor}" @click="cancelEvent" class="model-cancel">{{defaultData.cancelText}}</view>
				<view :style="{color: defaultData.sureColor}" @click="sureEvent" class="model-sure">{{defaultData.sureText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				defaultData: {
					title: '规则提示',
					cancelText: '取消',
					sureText: '确定',
					textAlignSetting: 'left',
					fontSizeSetting: '30',
					cancelColor: '#999',
					sureColor: '#000',
				}
			}
		},
		props: {
			modelData: {
				type: Object
			}
		},
		methods: {
			cancelEvent: function() {
				this.$emit('cancelClick') 
			},
			sureEvent: function() {
				this.$emit('sureClick')
			}
		},
		mounted(){
			this.defaultData = {
				...this.defaultData,
				...this.modelData
			}
		}
	}
	
</script>

<style lang="scss">
	.black-bg-box {
		position: fixed;
		z-index: 2;
		background: rgba(0,0,0,.3);
		width: 100%;
		height: 100%;
		top:0;
		left:0;
		display: flex;
		justify-content: center;
		align-items: center;
		.gxg-model {
			width: 90%;
			background: #fff;
			border-radius: 10upx;
			.model-title {
				text-align: center;
				margin-top: 26upx;
				font-size: 36upx;
				font-weight: 600;
			}
			.model-content {
				width: 92%;
				margin: 26upx 4%;
				color: #666;
				view {
					margin-bottom: 24upx;
				}
			}
			.model-todo {
				display: flex;
				height: 100upx;
				align-items: center;
				justify-content: space-around;
				border-top: 1upx solid #eee;
				.model-cancel {
					width: 50%;
					border-right: 1upx solid #eee;
					text-align: center;
					height: 100%;
					line-height: 100upx;
				}
				.model-sure {
					width: 50%;
					height: 100%;
					text-align: center;
					line-height: 100upx;
				}
			}
		}
	}
</style>
