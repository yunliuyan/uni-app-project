<script>
	const regeneratorRuntime = require('./utils/regenerator-runtime/runtime.js')
	const {
		setStorage,
		getStorage
	} = require('./utils/storage.js')
	const {
		AUTH
	} = require('./config/router.js')
	const {
		request
	} = require('./config/http.js')
	const {
		LOGIN_TOKEN_REFRESH,
		LOGIN_OPENID_REFRESH
	} = require('./config/api.js')
	export default {
		globalData: {
			fm: '',
			hasRefresh: true,
		},
		methods: {
			canIuse: function() {
				return getStorage('isLogin') && this.$options.globalData.hasRefresh
			},
			getFrom: function(path, query) {
				for (let key in query) {
					path += path.indexOf('?') === -1 ? '?' : '&'
					path += `${key}=${query[key]}`
				}
				this.$options.globalData.fm = `/${path}`
			},
			handleLogin: async function() {
				//先要确保跳转的页面不请求接口
				this.$options.globalData.hasRefresh = false
				const isLogin = getStorage('isLogin')
				if (isLogin) {
					let tempToken = ''

					//基于refreshToken的tempToken的刷新
					const refreshToken = getStorage('refreshToken')
					const res = await request({
						method: 'POST',
						url: `${LOGIN_TOKEN_REFRESH}?refreshToken=${refreshToken}`,
						needToken: false,
						showLoading: false,
						hideLoading: false,
						showErrorModal: false,
						errorText: 'refreshToken刷新失败'
					}).catch(err => console.log(err))
					if (res) {
						tempToken = res.token
					} else {
						//基于openId的tempToken刷新
						const {
							openId
						} = getStorage('userInfo');
						const {
							data
						} = await request({
							method: 'POST',
							url: `${LOGIN_OPENID_REFRESH}?openId=${openId}`,
							needToken: false,
							showLoading: false,
							hideLoading: false,
							showErrorModal: false,
							errorText: 'openId刷新失败',
							returnHeader: true
						}).catch(err => console.log(err))
						tempToken = data.token
						setStorage('refreshToken', data.refreshToken)
					}
					setStorage('tempToken', tempToken)
					//跳转相对应的页面
					uni.reLaunch({
						url: this.$options.globalData.fm,
						success: () => {
							this.$options.globalData.hasRefresh = true;
							var pages = getCurrentPages()
							if (pages.length) {
								var currentPage = pages[pages.length - 1]
								currentPage.onLoad()
							}
						},
						fail: () => {
							uni.switchTab({
								url: this.$options.globalData.fm,
								success: () => {
									this.$options.globalData.hasRefresh = true;
									var pages = getCurrentPages()
									if (pages.length) {
										var currentPage = pages[pages.length - 1]
										currentPage.onLoad()
									}
								}
							});
						}
					});
				} else {
					uni.reLaunch({
						url: AUTH,
					})
				}
			},
		},
		onLaunch: function(options) {
			let globalData = this.$options.data;
			if (!getStorage('sysInfo', true)) {
				const sysInfo = wx.getSystemInfoSync()
				const {
					screenWidth,
					screenHeight
				} = sysInfo
				sysInfo.screenHeightRpx = 750 * screenHeight / screenWidth
				sysInfo.perRpx = screenWidth / 750
				setStorage('sysInfo', sysInfo)
			}

			//获得启动项目的路径
			const {
				path,
				query
			} = options
			this.getFrom(path, query)

			//处理token
			//this.handleLogin();
		},
		onShow: function() {

		},
		onHide: function() {

		}
	};
</script>

<style>
	/*每个页面公共css */
	@import './style/global.scss';
</style>
