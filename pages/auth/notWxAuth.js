import {
	sendVerificationCode,
	getPhoneLogin
} from '@/api/auth.js'
import {
	COMPANY_LOGO
} from '@/config/image.js'
import {
	setStorage
} from '@/utils/storage.js'
const regeneratorRuntime = require('@/utils/regenerator-runtime/runtime.js')

const notWxAuth = {
	data() {
		return {
			yldLogo: COMPANY_LOGO,
			codeValue: '获取验证码',
			param: {
				phone: '',
				code: ''
			}
		}
	},
	onLoad() {
		console.log(getApp().globalData.fm)
	},
	methods: {
		//获取验证码
		getCode: function() {
			const _this = this;
			if (this.codeValue == '获取验证码' && /^1\d{0,10}$/g.test(this.param.phone)) {
				sendVerificationCode({
					phone: this.param.phone
				}).then(res => {
					this.getCodeTime();
				});
			} else {
				wx.showToast({
					title: '请填写手机号码',
					icon: 'none',
					duration: 2000
				})
			}
		},
		//验证码倒计时
		getCodeTime: function(options) {
			var that = this;
			var currentTime = 90;
			that.codeValue = currentTime + '秒'
			let interval = setInterval(function() {
				that.codeValue = (currentTime - 1) + '秒'
				currentTime--;
				if (currentTime <= 0) {
					clearInterval(interval)
					that.codeValue = '获取验证码'
				}
			}, 1000)
		},

		//登录授权
		login: function() {
			if (this.param.phone && this.param.code) {
				getPhoneLogin(this.param).then(res => {
					setStorage('tempToken', res.token)
					setStorage('refreshToken', res.refreshToken)
					setStorage('userInfo', res.userInfo)
					setStorage('isLogin', true)
					uni.switchTab({
						url: getApp().globalData.fm,
						fail: () => {
							uni.reLaunch({
								url: getApp().globalData.fm,
							})
						}
					})
				})
			} else {
				uni.showToast({
					title: '信息不全,请完善',
					icon: 'none',
					duration: 2000
				})
			}
		}
	}
}

export default notWxAuth
