import {
	request
} from '@/config/http.js';
import {
	GET_ORDER_DETAIL,
	GET_ORDER_BUTTON,
	DELETE_ORDER,
	ORDER_DELIVERY
} from '@/config/api.js';
import {formatGender,formatOrderState} from '@/config/filter.js';
import {time} from '@/utils/util.js';
import regeneratorRuntime from '@/utils/regenerator-runtime/runtime.js';

export async function getOrderDetail(id) {
	let info = await request({
		url: GET_ORDER_DETAIL,
		data: {
			orderid: id
		}
	})
	let item = info.list[0];
	let buttons = await request({
		url: GET_ORDER_BUTTON,
		data: {state: item.state}
	})
	return {
		id: item.orderid,
		name: item.modelName,
		modelMoney: item.modelMoney,
		userName: item.name,
		address: item.address,
		phone: item.phone,
		status: formatOrderState(item.state),
		showBtn: buttons.list.map(item => item.id),
		orderId: item.orderid,
		deliveryId: item.awb||'暂无',
		createTime: time(item.lastdate),
		payTime: time(item.lastdate),
		typeName: item.typeName,
		sexName: formatGender(item.sexName),
		sexValue: item.sexName,
		sizeName: item.sizeName,
		counts: 1,
		resultList: [{
				url:item.zmodelurl,
				localtion: 'positive',
				patternUrl: item.thzurl
			},
			{
				url:item.fimg,
				localtion: 'negative',
				patternUrl: item.thfurl
			}
		],
		canYouPay: item.cisdelete==0 && item.misdelete==0 && item.visdelete==0
	}
}

/**
 * 删除订单
 */
export function deleteOrder(id,showLoading) {
	return request({
		method: 'POST',
		url: DELETE_ORDER,
		data: {orderid:id}
	})
}

/*确认收货*/
export function orderDelivery(id){
	return request({
		method: 'POST',
		url: ORDER_DELIVERY,
		data: {
			orderid: id
		}
	})
}