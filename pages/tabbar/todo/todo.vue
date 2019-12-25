<template>
	<scroll-view scroll-y class="container" @scrolltolower='loadGoodsList'>
		<view class="shop-swiper">
			<swiper-img :imgList='imgList' :heightNum='500'></swiper-img>
		</view>
		<view class="shop-nav">
			<yld-nav></yld-nav>
		</view>
		<view>
			<yld-shop :shopList='shopList'></yld-shop>
		</view>
	</scroll-view>
</template>

<script>
	//加载组件
	import SwiperImg from '../../../components/SwiperImg.vue'
	import YldNav from './components/YldNav.vue'
	import YldShop from './components/YldShop.vue'
	import {
		getGoodsList
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				query: {
					name: '',
					page: 1,
					size: 6,
				},
				imgList: [
					{
						id: 1,
						path: 'http://img4.imgtn.bdimg.com/it/u=3640159253,114824855&fm=26&gp=0.jpg',
						route: '',
					},
					{
						id: 2,
						path: 'http://img3.imgtn.bdimg.com/it/u=38403952,1485618035&fm=26&gp=0.jpg',
						route: ''
					},
					{
						id: 3,
						path: 'http://img5.imgtn.bdimg.com/it/u=3423352354,2285183075&fm=26&gp=0.jpg',
						route: ''
					}
				],
				shopList: [],
			}
		},
		components: {
			SwiperImg,
			YldNav,
			YldShop,
		},
		onLoad() {
			getGoodsList(this.query).then(res=>{
				console.log(res)
				this.shopList = res.list
			})
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			//加载列表
			getList: function(){},
			//下拉刷新
			loadGoodsList: function(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
