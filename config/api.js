 const baseUrl = 'http://192.168.5.3:1001';

const auth = `${baseUrl}/wx/user`;

module.exports = {
	/** 登录 */
	LOGIN_NOWECAHT_LOGIN: `${baseUrl}/user/createToken`,
	LOGIN_WECHAT_LOGIN: `${auth}/getSessionkey`,
	LOGIN_TOKEN_REFRESH: `${auth}/refresh`,
	LOGIN_OPENID_REFRESH: `${auth}/refreshOpenId`,
	LOGIN_WECHAT_GET_USERINFO: `${auth}/getUserInfo`,
	SEND_VERIFICATION_CODE: `${baseUrl}/user/loadCode`,
	LOGIN_APP_REGISTER_LOGIN: `${auth}/register`,
	
	
	/* 积分商城 */
	LOAD_GOODS_LIST: `${baseUrl}/wx/user/loadWxGoods`, //加载积分商品
	LOAD_GOODS_DETAIL: `${baseUrl}/wx/user/loadWxuserDetails`, //查看积分商品详情
	LOAD_GOODS_EVALUATION: `${baseUrl}/wx/user/loadWxuserEvaluation`, //查看评价商品
	LOAD_GOODS_CONVERT: `${baseUrl}/wx/user/loadWxuserConvert`,//查看参与商品兑换记录
   }
