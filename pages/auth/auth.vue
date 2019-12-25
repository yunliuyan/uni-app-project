<template>
	<view class="container">
		<!-- #ifdef MP-WEIXIN -->
		<image class="gxg-logo" :src="yldLogo"></image>
		<button class="auth-btn title-font" open-type="getUserInfo" @getuserinfo="getUserInfo">
			微信一键授权
		</button>
		<!-- #endif -->
		<!--  #ifndef MP-WEIXIN -->
			<image class="gxg-logo-nowx" :src="yldLogo"></image>
			<view class="auth-login title-font">
				<i class="iconfont iconshouji border-primary-color"></i>
				<input v-model="param.phone" class="type-input" type="number" maxlength="13" placeholder="手机号码" />
			</view>
			<view class="auth-login title-font code-box">
				<i class="iconfont iconyanzhengma border-primary-color"></i>
				<input v-model="param.code" class="type-input" type="number" maxlength="6" placeholder="验证码" />
				<view class="get-code content-font" @click="getCode">{{codeValue}}</view>
			</view>
			<button class="auth-btn title-font" style="margin-top: 80rpx;" @click='login'>登录</button>
		<!-- #endif -->
	</view>
</template>

<script>
	// #ifdef MP-WEIXIN
	import wxAuth from './wxAuth.js'
	export default {
		...wxAuth,
	}
	// #endif
	// #ifndef MP-WEIXIN
	import notWxAuth from './notWxAuth.js'
	export default {
		...notWxAuth
	}
	// #endif
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		//小程序
		.gxg-logo {
			position: absolute;
			margin-top: -150upx;
			width: 160upx;
			height: 160upx;
		}
		//除小程序
		.gxg-logo-nowx {
			position: absolute;
			top: 15%;
			width: 180upx;
			height: 180upx;
			margin: 0 auto;
		}
		.auth-login {
			position: absolute;
			width: 80%;
			height: 600upx;
			border-radius: 20upx;
			display: flex;
			justify-content: center;
			i {
				font-size: 50upx;
				line-height: 70upx;
				display: inline-block;
				width: 15%;
				height: 70upx;
				border-top-left-radius: 30upx;
				border-bottom-left-radius: 30upx;
				text-align: center;
			}
			input {
				border-left: none;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				width: 85%;
			}
		}
		.code-box {
			margin-top: 140upx;
			margin-bottom: 140upx;
			input {
				width: 55%;
				border-left: none;
				border-right: none;
				border-radius: 0;
			}
			.get-code {
				width: 30%;
				height: 70upx;
				line-height: 70upx;
				text-align: center;
				border-top-right-radius: 30upx;
				border-bottom-right-radius: 30upx;
				background: #e8be2e;
				color: #fff;
			}
		}
		.auth-btn {
			position: absolute;
			background: #e8be2e;
			width: 550upx;
			height: 80upx;
			line-height: 80upx;
			color: #fff;
			border-radius: 42upx;
		}
	}

</style>
