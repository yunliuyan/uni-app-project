<template>
	<view class='shop-bottom'>
		<view class='shop-nav'>
			<view :class='[navIndex === index?"primary-theme-color border-active shop-clonum" :" shop-clonum title-font"]' v-for="(item,index) in navList"
			 :key="index" @click='changeType' :data-index="index">
				{{item.name}}
			</view>
		</view>
		<view class='shop-content'>
			<swiper @change='changeType' :current="navIndex" class='shop-swiper'>
				<block v-for="(item,index) in navList" :key="index">
					<swiper-item>
						<scroll-view scroll-y class='content-list'>
							<view v-if="navIndex === 0" class='shop-desc'>
								<image mode="aspectFill" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1986113714,2884501060&fm=26&gp=0.jpg"></image>
								<image mode="aspectFill" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1481515712,526771903&fm=26&gp=0.jpg"></image>
							</view>
							<view v-if="navIndex === 1" class="eval-list">
								<view class='clonum-content'>
									<view class='eval-clonum tip-font'>
										<view class='user-name'>小苏苏</view>
										<view class='user-star'>
											<i v-for="(item,index) in 5" :key="index" :class='["iconfont","iconxing",index<4?"primary-theme-color":""]'></i>
										</view>
										<view class='eval-date'>2019-06-03</view>
									</view>
									<view class='eval-content title-font'>设计古风，落落大方，绿竹猗猗，有匪君子，如切如磋，如琢如磨。</view>
								</view>
								<view class='clonum-content'>
									<view class='eval-clonum tip-font'>
										<view class='user-name'>君子兰</view>
										<view class='user-star'>
											<i v-for="(item,index) in 5" :key="index" :class='["iconfont","iconxing",index<3?"primary-theme-color":""]'></i>
										</view>
										<view class='eval-date'>2019-06-03</view>
									</view>
									<view class='eval-content content-font'>设计古风，落落大方，绿竹猗猗，有匪君子.</view>
								</view>
							</view>
							<view v-if="navIndex === 2" class="eval-list">
								<view class='clonum-content'>
									<view class='eval-clonum content-font'>
										<view class="user-avartar">
											<image src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912113785,1587702892&fm=26&gp=0.jpg"></image>
										</view>
										<view class='user-name buy-clonum'>小苏苏</view>
										<view class='eval-date buy-clonum'>2019-06-03</view>
									</view>
								</view>
								<view class='clonum-content'>
									<view class='eval-clonum content-font'>
										<view class="user-avartar">
											<image src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912113785,1587702892&fm=26&gp=0.jpg"></image>
										</view>
										<view class='user-name buy-clonum'>知定</view>
										<view class='eval-date buy-clonum'>2019-06-03</view>
									</view>
								</view>
								<view class='clonum-content'>
									<view class='eval-clonum content-font'>
										<view class="user-avartar">
											<image src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912113785,1587702892&fm=26&gp=0.jpg"></image>
										</view>
										<view class='user-name buy-clonum'>云流烟</view>
										<view class='eval-date buy-clonum'>2019-06-03</view>
									</view>
								</view>
							</view>
							<view class='white-height'></view>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
						id: 1,
						name: '商品详情'
					},
					{
						id: 2,
						name: '用户评价'
					},
					{
						id: 3,
						name: '参与记录'
					}
				],
				navIndex: 0,
			}
		},
		methods: {
			//改变导航类
			changeType: function(e) {
				this.navIndex = (e.currentTarget.dataset.index || e.detail.current) || 0
			},
		}
	}
</script>

<style scoped>
	.shop-content {
		height: 90%;
	}

	.shop-bottom .shop-swiper {
		height: 100%;
	}

	.shop-bottom .content-list {
		height: 100%;
	}

	.shop-nav {
		display: flex;
		justify-content: space-around;
		height: 60upx;
		line-height: 60upx;
	}

	.shop-nav .shop-clonum {
		font-size: 30upx;
	}

	.shop-bottom {
		width: 100%;
		height: 100%;
	}

	.shop-desc {
		width: 100%;
		margin-top: 20upx;
	}

	.shop-desc image {
		width: 100%;
	}

	.eval-list .eval-title {
		padding-left: 14upx;
		height: 50upx;
		margin-top: 14upx;
	}

	.eval-list .clonum-content {
		width: 96%;
		margin-left: 2%;
		border-bottom: 1upx solid #ddd;
	}

	.eval-list .eval-clonum {
		display: flex;
		justify-content: space-between;
		margin-top: 16upx;
	}

	.eval-clonum .user-star {
		display: flex;
	}

	.eval-clonum .user-star i:not(:first-child) {
		position: relative;
		margin-left: 6upx;
	}

	.eval-list .eval-content {
		font-size: 28upx;
		line-height: 48upx;
		margin: 12upx 0;
	}
	.user-avartar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin: 0 3% 20rpx;
	}
	.user-avartar image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.buy-clonum {
		line-height: 120upx;
	}
	.white-height {
		width: 100%;
		height: 120upx;
	}
</style>
