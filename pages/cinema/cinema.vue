<template>
	<view class="cinamal">
		<view class="search">
			<view class="cityName" @tap="showCityListView=true">{{cityName}}
				<view class="city-entry-arrow"></view>
			</view>
			<view class="searchView">
				<input type="text" v-model="txtSearch" class="txtSearch" placeholder="请输入搜索内容" />
			</view>
		</view>
		<view class="topNav">
			<view>全城<view class="city-entry-arrow"></view>
			</view>
			<view>品牌<view class="city-entry-arrow"></view>
			</view>
			<view>特色<view class="city-entry-arrow"></view>
			</view>
		</view>
		<scroll-view scroll-y style="flex: 1;width: 100%;overflow-y: auto;">
			<view class="cinemalList" v-if="!showCityListView">
				<view class="cinemal-item" v-for="(c_item,index) in cinemas" :key="index">
					<view class="cinemal-name">
						{{c_item.nm}}
						<view class="price">
							<text>{{c_item.sellPrice}}</text>元起
						</view>
					</view>
					<view class="cinemal-addr">
						<view style="flex: 1;">{{c_item.addr}}</view>
						<view style="width: 150upx; text-align: right;">{{c_item.distance}}</view>
					</view>
					<view class="label-block">
						<view class="allowRefund" v-if="c_item.tag.allowRefund==1">退</view>
						<view class="endorse" v-if="c_item.tag.endorse==1">改签</view>
						<view class="snack" v-if="c_item.tag.snack==1">小吃</view>
						<view class="vipTag" v-if="c_item.tag.vipTag">折扣卡</view>
						<template v-if="c_item.tag.hallType">
							<view class="hallType" v-for="(h_item,h_index) in c_item.tag.hallType" :key="h_index">{{h_item}}</view>
						</template>
					</view>
					<view class="discount-block" v-if="c_item.promotion.cardPromotionTag">
						<view class="discount-block-image-view">
							<image src="../../static/img/card.png" mode="widthFix"></image>
						</view>
						<view class="discount-block-text">{{c_item.promotion.cardPromotionTag}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!--显示所有城市 -->
		<city-list-view :cityName="cityName" @chooseCityName="chooseCityName" v-if="showCityListView"></city-list-view>
	</view>
</template>

<script>
	import cityList from "../../config/cityList.json";
	import bmap from "../../config/bmap-wx.min.js";
	import {
		mapState,
		mapActions
	} from "vuex";
	import {
		fmtDate
	} from "../../utils/fmtDateTime.js";
	import cityListView from "../../components/cityListView/cityListView.vue";
	export default {
		data() {
			return {
				cityIndex: -1,
				txtSearch: "",
				cinemas: [],
				filtercinemas: {},
				showCityListView: false
			};
		},
		computed:{
			...mapState(["cityName"])
		},
		onLoad(options) {
			//#ifndef H5
			let BMap = new bmap.BMapWX({
				ak: 'f8nCGsELLDD60lnZiZmiI4ByPrtW9Cp0'
			});
			BMap.weather({
				fail: (err) => {
					console.log(JSON.stringify(err));
					this.setCityName("武汉");
					
					this.cityIndex = cityList.findIndex((item) => {
						return item.nm == this.cityName;
					});
					this.getCinemaList();
				},
				success: (res) => {
					let cityName = res.originalData.results[0].currentCity.replace("市","");
					if(cityName=="全国"){
						cityName="北京";
					}
					this.setCityName(cityName);
					
					this.cityIndex = cityList.findIndex((item) => {
						return item.nm == this.cityName;
					});
					this.getCinemaList();

				}
			});
			//#endif
			
			//#ifdef H5
			// 百度地图API功能
			var myCity = new BMap.LocalCity();
			
			myCity.get((result)=>{
				let cityName = result.name.replace("市","");
				if(cityName=="全国"){
					cityName="北京";
				}
				this.setCityName(cityName);
				
				this.cityIndex = cityList.findIndex((item) => {
					return item.nm == this.cityName;
				});
				
				this.getCinemaList();
			});
			//#endif
		},
		onBackPress() {
			if (this.showCityListView) {
				this.showCityListView = false;
				return true; //不执行默认的返回
			}
		},
		onHide() {
			this.showCityListView=false;
		},
		watch: {
			//监控cityName的变化
			cityName: function(newValue) {
				this.$store.dispatch("setCityName", this.cityName);
			}
		},
		methods: {
			...mapActions(["setCityName"]),
			getCinemaList() {
				uni.showLoading({
					title: '正在加载'
				});
				uni.request({
					url: `https://www.softeem.xin/maoyanApi/ajax/cinemaList`,
					method: "get",
					data: {
						day: fmtDate(new Date()),
						cityId: cityList[this.cityIndex].id,
						updateShowDay: true,
						limit: 20
					},
					success: (res) => {
						this.cinemas = res.data.cinemas;
					},
					complete: () => {
						uni.hideLoading();
					}
				});
			},
			chooseCityName(cityNameItem) {
				// this.cityName = cityNameItem.nm;
				this.setCityName(cityNameItem.nm);
				this.cityIndex = cityList.findIndex((item) => {
					return item.nm == this.cityName;
				});
				this.showCityListView = false;
				this.getCinemaList(); //重新获取电影院列表
			}
		},
		components: {
			cityListView
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
	.cinamal{
		@include flexbox(column);
		height: 100%;
	}
	.search {
		@include flexbox();
		height: 80upx;
		font-size: 28upx;
		color: black;
		background-color: #f5f5f5;
		width: 100%;
		>.cityName {
			@include flexbox() {
				width: 200upx;
				height: 100%;
				justify-content: center;
				align-items: center;
			}
		}
		.searchView {
			flex: 1;
			@include flexbox() {
				justify-content: center;
				align-items: center;
			}
			>.txtSearch {
				border: 3upx solid #e6e6e6;
				width: 90%;
				background-color: #ececec;
				border-radius: 5px;
				box-sizing: border-box;
				padding: 0px 10upx;
			}
		}
	}
	.city-entry-arrow {
		width: 0px;
		height: 0px;
		border: 8upx solid #b0b0b0;
		border-left-color: transparent;
		border-right-color: transparent;
		border-bottom-color: transparent;
		margin-left: 4upx;
		margin-top: 10upx;
	}
	.topNav {
		@include flexbox() {
			align-items: center;
			height: 80upx;
			border-bottom: 1px solid #EFEFF4;
		}
		width:100%;
		>view {
			flex: 1;
			font-size: 24upx;
			@include flexbox() {
				height: 60upx;
				justify-content: center;
				align-items: center;
			}
		}
		>view+view {
			border-left: 1px solid #EFEFF4;
		}
	}
	.cinemalList {
		box-sizing: border-box;
		padding: 0px 10upx;
		.cinemal-item {
			>view {
				padding: 5upx 0px;
			}
			font-size: 24upx;
			color: gray;
			border-bottom: 1px solid #EFEFF4;
			padding: 15upx 0px;
			.cinemal-name {
				font-size: 28upx;
				color: black;

				@include flexbox() {
					align-items: flex-end;
				}
				>view {
					color: $primaryColor;
					>text {
						font-size: 36upx;
						margin: 0px 15upx;
					}
				}
			}
			.cinemal-addr {
				@include flexbox() {
					justify-content: space-between;
					align-items: center;
				}
			}
			.label-block {
				display: flex;
				height: 34upx;
				align-items: center;
				>view {
					position: relative;
					padding: 0px 6upx;
					height: 30upx;
					display: flex;
					align-items: center;
					font-size: 20upx;
					border-radius: 2px;
				}
				>view+view {
					margin-left: 5px;
				}
				.allowRefund {
					color: #589daf;
					border: 1px solid #589daf;
				}
				.endorse {
					@extend .allowRefund;
				}
				.hallType {
					@extend .allowRefund;
				}
				.snack {
					color: #f90;
					border: 1px solid #f90;
				}
				.vipTag {
					@extend .snack;
				}
			}
			.discount-block {
				@include flexbox() {
					align-items: center;
					height: 34upx;
				}
				.discount-block-image-view {
					width: 30upx;
					height: 28upx;
					>image {
						width: 30upx;
						height: 28upx;
						display: block;
					}
				}
				.discount-block-text {
					font-sise: 24upx;
					color: gray;
					margin-left: 10upx;
				}
			}
		}
	}
</style>
