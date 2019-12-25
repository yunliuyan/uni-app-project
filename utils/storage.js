/**
 * 对uni.setStorage()和uni.setStorageSync()的封装
 * @param {string} key - 本地缓存中的指定的key
 * @param {string|Object} data - 需要存储的内容
 * @param {boolean} isSync - 是否同步设置缓存
 * @return {void|Promise} 
 */
function setStorage(key = '', data = {}, isSync = true) {
  if(isSync) {
    return uni.setStorageSync(key, data)
  } else {
    return new Promise((resolve, reject) => {
      uni.setStorage({
        key,
        data,
        success: function() {
          resolve();
        },
        fail(res) {
          reject();
        }
      })
    })
  }
}

/**
 * 对uni.getStorage()和uni.getStorageSync()的封装
 * @param {string} key - 本地缓存中指定的key
 * @param {boolean} isSync - 是否同步获取缓存 
 * @return {string|Promise}
 */
function getStorage(key = '', isSync = true) {
  if (isSync) {
    return uni.getStorageSync(key)
  } else {
    return new Promise((resolve, reject) => {
      uni.getStorage({
        key,
        success(res) { resolve(res.data) },
        fail(res) { reject(res) }
      })
    })
  }
}


/**
 * 对uni.removeStorage()和uni.removeStorageSync()的封装
 * @param {string} key - 本地缓存中指定的key
 * @param {boolean} isSync - 是否同步移除指定的缓存
 * @return {void|Promise} 
 */
function removeStorage(key = '', isSync = true) {
  if (isSync) {
    return uni.removeStorageSync(key)
  } else {
    return new Promise((resolve, reject) => {
      uni.removeStorage({
        key,
        success() { resolve() },
        fail(res) { reject() }
      })
    })
  }
}

/**
 * 对uni.clearStorage()和uni.clearStorageSync()的封装
 * @param {boolean} isSync - 是否同步清除缓存
 * @return {void|Promise} 
 */
function clearStorage(isSync = true) {
  if (isSync) {
    uni.clearStorageSync()
  } else {
    return new Promise((resolve, reject) => {
      uni.clearStorage({
        success() { resolve() },
        fail(res) { reject(res) }
      })
    })
  }
}

/**
 * 对uni.getStorageInfo()和uni.getStorageInfoSync()的封装
 * @param {boolean} isSync - 是否同步获取缓存的信息
 * @return {Object|Promise} 
 */
function getStorageInfo(isSync = true) {
  if (isSync) {
    return uni.getStorageInfoSync()
  } else {
    return new Promise((resolve, reject) => {
      uni.getStorageInfo({
        success(res) { resolve(res) },
        fail(res) { reject(res) }
      })
    })
  }
}

module.exports = {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage,
  getStorageInfo
}