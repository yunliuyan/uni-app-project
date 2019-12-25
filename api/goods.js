import {
	request
} from '@/config/http.js';

import {
	LOAD_GOODS_LIST,
	LOAD_GOODS_DETAIL,
	LOAD_GOODS_EVALUATION,
	LOAD_GOODS_CONVERT
} from '@/config/api.js'

//加载积分商品
export function getGoodsList(data){
	const { name, page, size } = data
	return request({
		url: `${LOAD_GOODS_LIST}?name=${name}&page=${page}&size=${size}`,
		showSuccessToast: true,
	})
}

//查看积分商品详情
export function getGoodsDetail(data){
	const { id } = data
	return request({
		url: `${LOAD_GOODS_DETAIL}?id=${id}`,
		showSuccessToast: true,
	})
}

//查看积分商品评价
export function getGoodsEvaluation(data){
	const { id, page, size } = data
	return request({
		url: `${LOAD_GOODS_EVALUATION}?id=${id}&page=${page}&size=${size}`,
		showSuccessToast: true,
	})
}

//查看参与商品兑换记录
export function getGoodsConvert(data){
	const { id, page, size } = data
	return request({
		url: `${LOAD_GOODS_CONVERT}?id=${id}&page=${page}&size=${size}`,
		showSuccessToast: true,
	})
}
