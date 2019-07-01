<template>
	<view class="movie">
		<!-- 下载更新的时候使用 -->
		<view class="mast" v-if="showDownloadMask">
			<progress class="downloadProgress" :show-info="true" :percent="hasDownload"></progress>
		</view>
		<view class="topNav">
			<view class="location" @tap="showCityListView=true">{{cityName}}<text>&#xe607;</text></view>
			<view class="topNavItem" :class="{active:pageType==0}" @tap="pageType=0">正在热映</view>
			<view class="topNavItem" :class="{active:pageType==1}" @tap="pageType=1">即将上映</view>
			<view class="search" @tap="toQuery()"><text>&#xe621;</text></view>
		</view>
		<view class="border-bottom">
			<view class="border-bottom-bar" :class="{active:pageType==1}"></view>
		</view>
		<view class="swiperContent">
			<!-- #ifdef APP-PLUS-->
				<swiper style="width: 100%;" :style="{height:swiperHeight}" :current="pageType" @change="movieSwiperChange">
			<!-- #endif-->
			<!--#ifndef APP-PLUS-->
			<swiper style="height: 100%;width: 100%;" :current="pageType" @change="movieSwiperChange">
			<!-- #endif-->
				<swiper-item>
					<scroll-view scroll-y style="height: 100%;">
						<hot></hot>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y style="height: 100%;">
						<coming></coming>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
		
		<!--显示所有城市 -->
		<city-list-view :cityName="cityName" @chooseCityName="chooseCityName" v-if="showCityListView"></city-list-view>
	</view>
</template>

<script>
	import hot from "../../components/hot/hot.vue";
	import coming from "../../components/coming/coming.vue";
	import cityListView from "../../components/cityListView/cityListView.vue";
	
	import cityList from "../../config/cityList.json";
	import bmap from "../../config/bmap-wx.min.js";
	import {mapState,mapActions} from "vuex";
	export default {
		data() {
			return {
				pageType: 0,
				showComing: false,
				cityIndex: -1,
				showCityListView:false,
				swiperHeight:"0px"
			};
		},
		computed: {
			...mapState(["cityName", "showDownloadMask", "hasDownload"])
		},
		onLoad(options) {
			
			//#ifndef H5
			let BMap = new bmap.BMapWX({
				ak: 'f8nCGsELLDD60lnZiZmiI4ByPrtW9Cp0'
			});
			BMap.weather({
				fail: (err) => {
					console.log(err);
					this.setCityName("武汉");
					this.cityIndex = cityList.findIndex((item) => {
						return item.nm == this.cityName;
					});
				}, 
				success: (res) => {
					let cityName = res.originalData.results[0].currentCity.replace("市","");
					this.setCityName(cityName);
					
					this.cityIndex = cityList.findIndex((item) => {
						return item.nm == this.cityName;
					});
				}
			});
			//#endif
			
			//#ifdef H5
			// 百度地图API功能
			let myCity = new BMap.LocalCity();
			myCity.get((result)=>{
				let cityName = result.name.replace("市","");
				this.setCityName(cityName);
				this.cityIndex = cityList.findIndex((item) => {
					return item.nm == this.cityName;
				});
			});
			//#endif
		},
		onReady(){
			/*解决APP下面swiper高度不能设置为100%的bug*/
			uni.createSelectorQuery().select(".swiperContent").fields({
				size:true
			},data=>{
				this.swiperHeight=data.height+"px";
				console.log(this.swiperHeight);
			}).exec();
			
		},
		onHide() {
			this.showCityListView=false;
		},
		methods: {
			...mapActions(["setCityName"]),
			movieSwiperChange(event){
				this.pageType=event.detail.current;
			},
			toQuery(){
				uni.navigateTo({
					url:"/pages/query/query"
				});
			},
			chooseCityName(cityNameItem) {
				this.setCityName(cityNameItem.nm);
				this.cityIndex = cityList.findIndex((item) => {
					return item.nm == this.cityName;
				});
				this.showCityListView = false;
			}
		},
		components: {
			hot,coming,cityListView
		}
	}
</script>

<style scoped lang="scss">
	@import "../../scss/common.scss";
	.movie{
		display: flex;
		flex-direction: column;
		height:100%;
		width: 100%;
		.topNav{
			@include flexbox();
			width:100%;
			.location{
				width:150upx;
				font-size: 28upx;
				@include flexbox();
				height:80upx;
				justify-content:center;
				align-items:center;
				color:gray;
				>text{
					font-family: "iconfont";
					font-size:24upx ;
				}
			}
			.search{
				@extend .location;
				>text{
					font-size: 50upx;
					color: $primaryColor;
					font-weight: bold;
				}
			}
			>.topNavItem{
				height:80upx;
				flex:1;
				@include flexbox();
				justify-content:center;
				align-items:center;
				font-size:28upx;
				&.active{
					color:$primaryColor;
				}
			}
		}
		.border-bottom{
			width: 100%;
			height: 4upx;
			background-color: lightgray;
			box-sizing: border-box;
			padding: 0px 120upx;
			.border-bottom-bar{
				width:50%;
				height:100%;
				background-color:$primaryColor;
				transform: translateX(0);
				transition: all 0.2s linear;
				&.active{
					transform: translateX(100%);
				}
			}
		}
		.swiperContent{
			flex: 1;
			overflow-y: auto;
		}
	}
</style>
