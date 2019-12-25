<template>
	<view class="container">
		<view class="clothe-infor">
			<order-infor :order='orderInformation'></order-infor>
		</view>
		<view class="order-infor">
			<view class="todo-clonum">
				<view class="clonum-left title-font">退款方式</view>
				<view class="clonum-right tip-font">退货退款</view>
			</view>
			<view class="todo-clonum">
				<view class="clonum-left title-font">退款原因</view>
				<view class="clonum-right tip-font">质量问题</view>
			</view>
			<view class="todo-clonum">
				<view class="clonum-left title-font">上传凭证</view>
				<view class="clonum-tip tip-font">可上传3张图片</view>
			</view>
			<view class="phone-list">
				<view class='photo-swiper'>
					<view class='photo-item' v-for="(item,index) in photoList" :key="index">
						<image v-if="item._url" :src="item._url" class="photo-clonum" mode="aspectFill" />
						<view v-if="!item._url" :data-index="index" @click='uploadImage' class='photo-clonum'><i class='iconfont iconpaizhao'></i></view>
					</view>
				</view>
			</view>
		</view>
		<button class="start-todo primary-cus-big-button" @clickBtn='startTodo'>提交</button>
	</view>
</template>

<script>

	import { singleImage } from '@/config/package.js'
	import OrderInfor from '@/components/OrderInfor'
	
	
	export default {
		data() {
			return {
				photoList: [{
						id: '',
						_path: '',
						_url: '',
					},
					{
						id: '',
						_path: '',
						_url: '',
					},
					{
						id: '',
						_path: '',
						_url: '',
					},
				],
			}
		},
		computed: {
			
		},
		methods: {
			startTodo: function() {
				let imgId = ''
				this.photoList.forEach(item=>{
					item.id && (imgId += item.id)
				})
				getAlterSale({orderid:this.orderInformation.id,img:imgId}).then(res => {
					uni.navigateTo({
						url: `${ORDER_STATUS}?id=${this.orderInformation.id}`
					})
				})
			},
			 uploadImage: function (e) {
			    singleImage({
			      fn: (res) => {
					  const resData = JSON.parse(res.data)
			        this.photoList[e.currentTarget.dataset.index].id = resData.data.id
					this.photoList[e.currentTarget.dataset.index]._url = resData.data._url
					this.photoList[e.currentTarget.dataset.index]._path = resData.data._path
			      },
			      needAlbum: true
			    })
			  },
		},
		components: {
			OrderInfor
		}
	}
</script>

<style lang="scss" scoped>
	.order-infor {
		width: 100%;
		height: calc(100% - 360upx);
		border-top: 4upx solid #dcdcdc;
		border-top-left-radius: 150upx;
		border-top-right-radius: 150upx;
		box-shadow: 0 0 1upx 1upx rgba(0, 0, 0, 0.1);
		padding-top: 22upx;

		.todo-clonum {
			width: 82%;
			margin-left: 9%;
			margin-top: 22upx;
			height: 80upx;
			line-height: 80upx;
			border: 1upx solid #dcdcdc;
			border-radius: 10upx;
			display: flex;
			justify-content: space-between;

			.clonum-left {
				margin-left: 22upx;
				color: #333;
			}

			.clonum-right {
				margin-right: 22upx;
				color: #333;
			}

			.clonum-tip {
				margin-right: 200upx;
			}
		}
	}
	.photo-swiper {
	  height: 226upx;
	  width:100%;
	  display:flex;
	  flex-wrap: wrap;
	}
	.photo-clonum {
	  width: 226upx;
	  height: 226upx;
	  background: #dcdcdc;
	  margin-top: 22upx;
	  border-radius: 10upx;
	}
	.photo-item {
	  height: 100%;
	  width: 226upx;
	  margin-top:12upx;
	  margin-left: 18upx;
	  text-align: center;
	  color: #333;
	}
	.photo-clonum i{
	  color:#b9b9cf;
	  font-size:64upx;
	  line-height:226upx;
	}
</style>
