const duration = 2000
import { uploadImageUrl } from './common.js'
/**
 * 对uni-app的api的二次封装
 */

/**
 * 拨打电话，对uni.uni.makePhoneCall进行封装
 * @param {string} phone - 电话号码
 */
function makePhoneCall({
	phone = ''
} = {}) {
	uni.makePhoneCall({
		phoneNumber: phone,
		success() {

		},
		fail() {
			uni.showToast({
				icon: 'none',
				title: '拨打失败',
				duration,
			})
		}
	})
}

/**
 * 下载单个或多个文件，对uni.downloadFile的封装
 * @param {string[]} urls - 所有需要下载的资源，可以是一个，可以是多个
 * @param {Object} header - 请求Header，header中不能设置Referer
 * header中需要指定合理的Content-Type字段，以保证客户端正确处理文件类型
 * @return {Promise} 封装下载操作的Promise对象
 */
function downloadFile({
	urls = [],
	header = {}
} = {}) {
	/**
	 * 下载单个文件
	 * @param {string} url - 所要下载资源的url
	 * @return {Promise} 封装下载操作的Promise 
	 */
	function createPromise(url) {
		let downloadTask = null
		const p = new Promise((resolve, reject) => {
			downloadTask = uni.downloadFile({
				url,
				header,
				success(res) {
					const {
						statusCode
					} = res
					if (statusCode === 200) {
						const {
							tempFilePath
						} = res
						resolve(tempFilePath)
					} else {
						const {
							errMsg
						} = res
						const err = `下载失败：${statusCode}-${errMsg}`
						reject(err)
					}
				},
				fail(res) {
					const err = `接口调用失败：${res}`
					reject(err)
				},
			})
		})
		// 暴露出downloadTask
		p.onProgressUpdate = function(callback) {
			downloadTask.onProgressUpdate((res) => {
				callback(res)
			})
		}
		p.abort = function() {
			downloadTask.abort()
		}
		return p
	}
	// 判断是下载一个文件还是多个文件
	const len = urls.length
	if (len === 1) {
		return new Promise((resolve, reject) => {
			// 显示下载的Loading
			//uni.showLoading({ title: '正在下载' })
			createPromise(urls[0])
				.then(tempFilePath => thenHandle(tempFilePath, resolve))
				.catch(err => catchHandle(err, reject))
		})
	}
	if (len > 1) {
		return new Promise((reslove, reject) => {
			// 显示下载的Loading
			//uni.showLoading({ title: '正在下载' })
			Promise.all(urls.map(item => createPromise(item)))
				.then(tempFilePaths => thenHandle(tempFilePaths, resolve))
				.catch(err => catchHandle(err, reject))
		})
	}
}

/**
 * 上传图片，对uni.chooseImage,uni.uploadFile的封装
 */
//上传单张图片
function singleImage({
	url = uploadImageUrl,
	fn = ()=>{},
	needAlbum = true,
	needCamera = true
} = {}) {
	let sourceType = [];
	if (needAlbum) {
		sourceType.push('album')
	}
	if (needCamera) {
		sourceType.push('camera')
	}
	uni.chooseImage({
		count: 1,
		sizeType: ['original', 'compressed'],
		sourceType,
		success: function(res) {
			const tempFilePaths = res.tempFilePaths;
			uni.showLoading()
			uni.uploadFile({
				header: {
					"Content-Type": "multipart/form-data"
				},
				url,
				filePath: tempFilePaths[0],
				name: 'file',
				success: function(res) {
					uni.hideLoading()
					fn(res)
				}
			})
		},
	})
}
//多图上传
function muchImages({
	url = uploadImageUrl,
	fn = fn = ()=>{},
	count = 9,
	needAlbum = true,
	needCamera = true
} = {}) {
	let list = [];
	let sourceType = [];
	if (needAlbum) {
		sourceType.push('album')
	}
	if (needCamera) {
		sourceType.push('camera')
	}
	uni.chooseImage({
		count,
		sizeType: ['original', 'compressed'],
		sourceType,
		success: function(res) {
			const tempFilePaths = res.tempFilePaths;
			tempFilePaths.forEach(async (filePath) => {
				await uni.uploadFile({
					url,
					filePath,
					name: 'file',
					header: {
						"Content-Type": "multipart/form-data"
					},
					success: function(res) {
						fn(res)
					},
					fail(res) {
						uni.showModal({
							content: res.msg,
							showCancel: false
						})
					}
				})
			})
		},
	})
}
//弹窗的二次封装
function gxgConfirm({
	title = '温馨提示',
	content = '该数据删除后无法找回，请问是否确认删除？',
	confirmText = '确认',
	showCancel = true,
	successFunction = () => {},
	failFunction = () => {}
} = {}) {
	wx.showModal({
		title,
		content,
		confirmText,
		showCancel,
		cancelColor: '#888888',
		confirmColor: '#000',
		success: res => {
			if (res.confirm) {
				successFunction()
			} else {
				failFunction()
			}
		}
	})
}

/**
 * 微信弹框 Model
 */
function model({
	title = '删除确认',
	content = '该数据删除后无法找回，请问是否确认删除？',
	confirmText = '确认',
	showCancel = true,
	successFunction = () => {},
	failFunction = () => {}
} = {}) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			wx.showModal({
				title,
				content,
				confirmText,
				showCancel,
				cancelColor: '#888888',
				confirmColor: '#000',
				success: res => {
					if (res.confirm) {
						resolve(res);
					} else {
						resolve(res);
					}
				}
			})
		}, 100);
	});
}

/**
 * 微信弹框 TOAST
 */
function toast({title = '紧急加载中',
				mask = true,
				icon = 'loading',
				duration = 1000} = {}) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			wx.showToast({
				title: title,
				mask: mask,
				icon: icon,
				duration: duration,
				success(res) {
					resolve(res);
				},
				fail(res) {
					reject(res);
				}
			})
		}, 100);
	});
}

/**
 * 调起微信支付
 */
function wxpay(wxJsApiParam) {
	return new Promise((resolve, reject) => {
		uni.requestPayment({
			...wxJsApiParam,
			success(res) {
				toast({
					title: "购买成功",
					icon: "success"
				}).then(res => {
					resolve({type:'success',msg:res})
				})
			},
			fail(res) {
				if (res.errMsg !== 'requestPayment:fail cancel') { //如果失败原因是(非用户取消的正常失败事件)为真
					model({
						title: '系统错误',
						content: res.errMsg,
						showCancel: false
					}).then(res => {
						reject({type:'error',msg:res})
					})
				} else { //用户正常取消
					model({
						content: '用户取消购买支付',
						showCancel: false
					}).then(res => {
						resolve({type:'cancel',msg:res})
					})
				}
			}
		})
	});
}

module.exports = {
	downloadFile,
	singleImage,
	muchImages,
	makePhoneCall,
	gxgConfirm,
	toast,
	model,
	wxpay
}
