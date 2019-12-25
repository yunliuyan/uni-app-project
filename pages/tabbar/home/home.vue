<template>
	<scroll-view scroll-y class='container'>
		<view class="home-top">
			<yld-top></yld-top>
		</view>
		<view class="swiper-img">
			<swiper-img :imgList='imgList' :heightNum='400'></swiper-img>
		</view>
		<view class="hot-tip">
			<yld-hot :valueList='tipList'></yld-hot>
		</view>
		<yld-nav :navList='todoNav'></yld-nav>
		<view class="bottom-show">
			<image :src="demoImg" mode="widthFix"></image>
		</view>
	</scroll-view>
</template>

<script>
	//引用组件
	import YldTop from './components/YldTop.vue'
	import SwiperImg from '../../../components/SwiperImg.vue'
	import YldHot from './components/YldHot.vue'
	import YldNav from './components/YldNav.vue'
	//引用图片
	import {
		HOME_DEMO,
	} from '@/config/image.js'
	export default {
		data() {
			return {
				todoNav: [{
						id: 1,
						name: '邀请有礼',
						icon: 'icontuijian',
						path: ''
					},
					{
						id: 2,
						name: '约量房',
						icon: 'icontuijian',
						path: ''
					},
					{
						id: 3,
						name: '好店入驻',
						icon: 'icontuijian',
						path: ''
					},
					{
						id: 4,
						name: '签到有礼',
						icon: 'icontuijian',
						path: ''
					},
					{
						id: 5,
						name: '分期商城',
						icon: 'icontuijian',
						path: ''
					},
					{
						id: 6,
						name: '家装垫资',
						icon: 'icontuijian',
						path: ''
					},
					{
						id: 7,
						name: '分期包',
						icon: 'icontuijian',
						path: ''
					},
					{
						id: 8,
						name: '装修分期',
						icon: 'icontuijian',
						path: ''
					},
				],
				imgList: [
					{
						id: 1,
						path: 'https://cdn.in-deco.com/wp-content/uploads/2019/03/%E5%A4%B4%E5%9B%BE-19.jpg?imageView2/1/w/522/h/261',
						route: '',
					},
					{
						id: 2,
						path: 'https://cdn.in-deco.com/wp-content/uploads/2019/03/%E5%A4%B4%E5%9B%BE-4.jpg?imageView2/1/w/522/h/261',
						route: ''
					},
					{
						id: 3,
						path: 'https://cdn.in-deco.com/wp-content/uploads/2019/03/%E5%A4%B4%E5%9B%BE-5.jpg?imageView2/1/w/522/h/261',
						route: ''
					}
				],
				tipList: ['非客双汇活动商品时间2019/12/19-2020/03/20', '非客双汇活动商品时间2019/12/19-2020/03/20', '非客双汇活动商品时间2019/12/19-2020/03/20'],
				demoImg: HOME_DEMO,
			};
		},
		components: {
			YldTop,
			SwiperImg,
			YldNav,
			YldHot,
		},
		onLoad() {
			// #ifdef H5
			if(getApp().canIuse()){
				
			}
			// #endif
			// #ifdef MP-WEIXIN
			if(getApp().$vm.canIuse()){
				
			}
			// #endif
		},
		methods: {}
	};
</script>

<style scoped>
	.home-top {
		width: 100%;
		height: 70rpx;
		margin-top: 26rpx;
	}
	.swiper-img {
		margin-top: 16upx;
	}
	.bottom-show {
		width: 100%;
		margin-top: 45rpx;
	}
	.bottom-show image {
		width: 100%;
	}
</style>
