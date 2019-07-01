<template>
	<view class="movieDetail" v-if="isReady">
		<view class="detailBox">
			<image :src="detailMovie.img" class="maskImage"></image>
			<view class="left">
				<image class="movieImg" :src="detailMovie.img" mode="widthFix"></image>
				<image @click="showPlayVideo" src="../../static/play.png" mode="widthFix" class="playVideoImage"></image>
			</view>
			<view class="center">
				<view class="m_title">{{detailMovie.nm}}</view>
				<view class="m_sc"><text v-if="detailMovie.sc!=0">{{detailMovie.sc}}</text>({{detailMovie.wish}}想看)</view>
				<view class="">{{detailMovie.cat}}</view>
				<view class="">{{detailMovie.fra}}/{{detailMovie.dur}}分钟</view>
				<view class="">{{detailMovie.pubDesc}}</view>
			</view>
			<view class="right">
				<image src="../../static/right.png" mode="widthFix"></image>
			</view>
		</view>
		<!--购票 -->
		<view class="buy-view">
			<view class="buy-view-btn" @click="toBuyTicket(detailMovie.id)">特惠购票</view>
		</view>
		<!--电影简介-->
		<view class="dra" :class="{slideHide:slideHide}">
			{{detailMovie.dra}}
		</view>
		<view @click="slideHide=!slideHide" class="slideUpDown">
			<image src="../../static/down.png" mode="widthFix" v-if="slideHide==true"></image>
			<image src="../../static/up.png" mode="widthFix" v-if="slideHide==false"></image>
		</view>
		<!--显示视频-->
		<view class="view-video" v-if="isShowVideo" @tap="stopVideo">
			<!-- #ifdef MP-WEIXIN -->
			<video @play="playingVideo" @pause="isShowCoverView=true" @ended="isShowCoverView=true" id="vd" :src="detailMovie.videourl"
			 style="width: 100%;" @tap.stop="" :show-center-play-btn="false">
				<cover-view v-if="isShowCoverView" style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;">
					<cover-image id="playVideoImg" @tap.stop="playVideo" src="../../static/play.png" class="playVideoImg"></cover-image>
					<cover-image id="shareWeChat" src="../../static/wechat.png" class="playVideoImg"></cover-image>
				</cover-view>
			</video>
			<!-- #endif -->
			<!-- #ifndef APP-PLUS -->
			<video @play="playingVideo" id="vd" :src="detailMovie.videourl" style="width: 100%;" @tap.stop=""></video>
			<!-- #endif -->
			
		</view>
	</view>
</template>

<script>
	export default {
		name: "mmovieDetail",
		data() {
			return {
				id:"",
				isReady: false,
				isShowVideo: false,
				isShowCoverView: true,
				detailMovie: {},
				isRequestPermission: false, //是否询问已授权非wifi播放视频
				slideHide: true //是否展开最下面部分
			}
		},
		onLoad(options) {
			this.id = options.id;
			//http://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=42964
			this.getDetail(this.id);
		},
		onBackPress() {
			if (this.isShowVideo) {
				this.isShowVideo = false;
				return true;
			}
		},
		onPullDownRefresh() {
			this.getDetail(this.detailMovie.id);
			uni.showToast({
				title: "刷新完成",
				success: () => {
					uni.stopPullDownRefresh();
				}
			});
		},
		methods: {
			getDetail(id) {
				this.isReady = false;
				uni.showLoading({
					title: '正在加载'
				});
				uni.request({
					method: 'get',
					url: `https://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=${id}`,
					success: (res) => {
						res.data.detailMovie.img = res.data.detailMovie.img.replace("w.h", "128.180");
						this.detailMovie = res.data.detailMovie;
						uni.setNavigationBarTitle({
							title: this.detailMovie.nm
						})
						this.isReady = true;
					},
					complete: () => {
						uni.hideLoading();
					}
				})
			},
			//显示背景遮罩
			showPlayVideo() {
				this.isShowVideo = true;
			},
			//停止音乐
			stopVideo() {
				uni.createVideoContext("vd", this).pause();
				this.isShowVideo = false;
			},
			//点击播放音乐的按钮标
			playVideo(event) {
				uni.createVideoContext("vd", this).play();
			},
			//音乐正在播放
			playingVideo() {
				uni.getNetworkType({
					success: res => {
						if (res.networkType != "wifi") {
							//非WIFI环境 查看是否有授权
							if (this.isRequestPermission == false) {
								//没有授权
								uni.createVideoContext("vd", this).pause();

								uni.showModal({
									title: "提示",
									content: "当前设备未连接wifi，是否继续播放",
									confirmText: "我是土豪",
									cancelText: "算了",
									success: (res) => {
										if (res.confirm) {
											this.isRequestPermission = true; //授权播放，记录状态，下次不再询问
											this.isShowCoverView = false;
											uni.createVideoContext("vd", this).play();
										}

									}
								})
							} else {
								//已经授权 直接播放视频
								this.isShowCoverView = false;
								uni.createVideoContext("vd", this).play();
							}
						} else {
							//WIFI环境，直接播放视频 
							uni.createVideoContext("vd", this).play();
						}
					}
				});
			},
			toBuyTicket(id) {
				uni.navigateTo({
					url: `/pages/buyTicket/buyTicket?id=${id}`
				});
			}
		},
		onNavigationBarButtonTap(event){
			if(event.index==0){
				//收藏
				let  saveCollection=uni.getStorageSync("saveCollection")||[];
				let index=saveCollection.map(s_item=>s_item.id).indexOf(this.id)
				let isExists = index==-1?false:true;
				if(!isExists){
					//说明之前的不存在
					saveCollection.push({...this.detailMovie,s_time:new Date().toLocaleString()});
				}
				else{
					//说明已经存在了
					//saveCollection[index]={...this.detailMovie,s_time:new Date().toLocaleString()};
					uni.showToast({
						title:"您已经收藏过啦",
						icon:"none"
					});
				}
				uni.setStorageSync("saveCollection",saveCollection);
				uni.showToast({
					title:"收藏成功"
				});
			}
		}

	}
</script>

<style lang="scss" scoped>
	@mixin flexbox($dir:row) {
		display: flex;
		flex-direction: $dir;
		width: 100%;
		@content;
	}

	$primaryColor:#e54847;

	page {
		background-color: #f4f4f4;
	}

	.detailBox {
		font-size: 24upx;
		position: relative;
		@include flexbox();
		box-sizing: border-box;
		padding: 15upx;
		overflow: hidden;
		color: white;
		.maskImage{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0px;
			top: 0px;
			z-index: 0;
			filter: blur(32upx);
		}
		.left {
			width: 180upx;
			position: relative;

			>.movieImg {
				width: 100%;
				display: block;
			}

			>.playVideoImage {
				position: absolute;
				width: 60upx;
				height: 60upx;
				right: 10upx;
				bottom: 10upx;
				display: block;
				background-color: rgba(0, 0, 0, 0.8);
				border-radius: 30upx;
			}
		}

		.center {
			flex: 1;
			position: relative;
			@include flexbox(column) {
				justify-content: space-between;
			}
			;
			box-sizing: border-box;
			padding: 0px 5px;

			.m_title {
				font-size: 38upx;
				font-weight: bold;
			}

			.m_sc>text {
				color: orange;
				font-size: 36upx;
				font-weight: bold;
				margin-right: 3px;
			}

		}

		.right {
			width: 100upx;
			display: flex;
			justify-content: center;
			align-items: center;
			>image {
				width: 32upx;
				display: block;
			}
		}
	}

	.view-video {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 0px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.8);

		.playVideoImg {
			width: 80upx;
			height: 80upx;
			border-radius: 40upx;
			margin-right: 20upx;
			display: inline-block;
		}
	}

	.dra {
		text-indent: 2em;
		font-size: 24upx;
		line-height: 1.5;
		box-sizing: border-box;
		padding: 20upx;
		background-color: white;

		&.slideHide {
			max-height: 95upx !important;
			overflow: hidden;
		}


	}

	.slideUpDown {
		@include flexbox() {
			justify-content: center;
			align-items: center;
			height: 40upx;
		}

		;

		>image {
			width: 36upx;
			height: 36upx;
			display: block;
		}

		background-color:white;
		border-bottom: 1px solid lightgray;
	}

	.buy-view {
		box-sizing: border-box;
		padding: 20upx;

		@include flexbox() {
			justify-content: center;
		}

		;

		.buy-view-btn {
			width: 100%;
			height: 70upx;
			background-color: $primaryColor;
			color: white;
			font-size: 28upx;
			border-radius: 10upx;

			@include flexbox() {
				justify-content: center;
				align-items: center;
			}

			;
		}
	}
</style>
