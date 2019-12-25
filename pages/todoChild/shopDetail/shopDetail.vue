<template>
	<scroll-view scroll-y class="container">
		<view class="shop-swiper">
			<swiper-img :imgList='imgList' :heightNum='500' :autoplay='autoplay'></swiper-img>
		</view>
		<view class="shop-infor">
			<yld-infor :infor='infor'></yld-infor>
		</view>
		<view class="shop-detail">
			<yld-detail></yld-detail>
		</view>
		<view class="recommend-shop">
			<yld-recommend></yld-recommend>
		</view>
		<view class="fixed-document primary-cus-button" @click="buyShop">立即兑换</view>
	</scroll-view>
</template>

<script>
	//加载组件
	import SwiperImg from '../../../components/SwiperImg.vue'
	import YldInfor from './components/YldInfor.vue'
	import YldDetail from './components/YldDetail.vue'
	import YldRecommend from './components/YldRecommend.vue'
	import {
		WRITE_ORDER
	} from '@/config/router.js'
	export default {
		data() {
			return {
				autoplay: false,
				imgList: [
					{
						id: 1,
						path: 'http://img4.imgtn.bdimg.com/it/u=3640159253,114824855&fm=26&gp=0.jpg',
					},
					{
						id: 2,
						path: 'http://img3.imgtn.bdimg.com/it/u=38403952,1485618035&fm=26&gp=0.jpg',
					},
					{
						id: 3,
						path: 'http://img5.imgtn.bdimg.com/it/u=3423352354,2285183075&fm=26&gp=0.jpg',
					}
				],
				infor: {
					id: 1,
					name: 'Chanel 劳力士手表钛合金',
					originalPrice: '25000',
					price: '2000',
					showImgUrl:'http://img3.imgtn.bdimg.com/it/u=38403952,1485618035&fm=26&gp=0.jpg',
					count: 66, 
					buyCounts: 33,
				}
			};
		},
		components:{
			SwiperImg,
			YldInfor,
			YldDetail,
			YldRecommend
		},
		methods:{
			buyShop:function(){
				uni.navigateTo({
					url: WRITE_ORDER
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.shop-detail {
		margin-top: 30upx;
		background: #fff;
		height: calc( 100% - 840upx);
	}
	.fixed-document {
		position: fixed;
		bottom: 0;
	}
	.recommend-shop {
		margin-top: 30upx;
	}
</style>
