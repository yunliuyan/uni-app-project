/**
 * 储存页面路径，对应app.json的路由，用于页面跳转
 */

module.exports = {
  /**
   * 登录
   */
  AUTH: '/pages/auth/auth', //授权登录页
  
  /**
   * 首页
   * */
   HOME: '/pages/tabbar/home/home', //首页
   
   /**
	* 积分商城
	* */
	SHOP: '/pages/tabbar/todo/todo',//积分商城
	SHOP_DETAIL: '/pages/todoChild/shopDetail/shopDetail', //商品详情
	WRITE_ORDER: '/pages/todoChild/writeOrder/writeOrder', //填写订单
	ORDER_DETAIL: '/pages/todoChild/orderDetail/orderDetail', //订单详情
	ORDER_LIST: '/pages/todoChild/orderList/orderList', //兑换记录
	REFUND_ORDER: '/pages/todoChild/refundOrder/refundOrder', //退单详情
	/**
	 * 个人中心
	 * */
	MINE: '/pages/tabbar/mine/mine', //个人中心 
  
}