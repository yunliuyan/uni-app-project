
const { getStorage } = require('../utils/storage.js')
/**
 * 常用的变量(appId,appSecret,reg等)
 */

module.exports = {
  APP_ID: 'wx7a78cb1fe088222c',
  APP_SECRET: '28819d103b03e96501c04cf837d63777',
  
  //上传上传图片路径
  uploadImageUrl: `https://gxgbasic.gxggroup.cn:6303/ftp/upload?token=${getStorage('tempToken')}`,
  
  
}