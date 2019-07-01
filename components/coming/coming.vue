<template>
	<view>
		<!--最近受期待 -->
		<view class="most-expected">
			<view class="most-expected-title">最近受期待</view>
			<scroll-view class="most-expected-scroll-view" scroll-x style="width: 100%;">
				<view class="most-expected-list" :style="{width:MostExpectedList.length*88+'px'}">
					<view class="item" v-for="(item,index) in MostExpectedList" :key="index">
						<view class="imgBox">
							<image :src="item.img" mode="widthFix"></image>
						</view>
						<view class="nm">{{item.nm}}</view>
						<view class="date">{{item.comingTitle}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="coming" style="margin-top: 10upx;">
			<movie-item @preViewImg="preViewImg" v-for="(item,index) in comingList" :key="index" :item="item">
				{{item.comingTitle}}
			</movie-item>
		</view>
	</view>
</template>

<script>
	import movieItem from "../movieItem/movieItem.vue";
	import ApiConfig from "../../config/ApiConfig";
	export default {
		data() {
			return {
				comingList:[],
				MostExpectedList:[],
				//预览图片的地址集合
				comingImageList:[]
			};
		},
		async created(){
			uni.showLoading({
				title:"正在加载"
			});
			try{
				let comingList=await this.getComingList();
				let imgWidth=uni.getSystemInfoSync().windowWidth;
				let imgHeight=imgWidth/128*180;
				this.comingList=comingList.coming.map(item=>{
					item.img=item.img.replace("w.h","128.180");
					this.comingImageList.push(item.img.replace("128.180",imgWidth+"."+imgHeight));
					item.preViewSrc=item.img.replace("128.180",imgWidth+"."+imgHeight);
					return item;
				});
				let MostExpectedList=await this.getMostExpectedList();
				this.MostExpectedList = MostExpectedList.coming.map(item=>{
					item.img=item.img.replace("w.h","128.180");
					return item;
				});
				uni.hideLoading();
				
			}catch(e){
				//TODO handle the exception
				console.log(e);
				uni.hideLoading();

			}
		},
		methods:{
			getComingList(){
				return new Promise((resolve,reject)=>{
					uni.request({
						url:`${ApiConfig.baseUrl}/ajax/comingList?ci=57&token=&limit=10`,
						success: (res) => {
							resolve(res.data);
						},
						fail: (err) => {
							reject(err);
						}
					})
				});
			},
			preViewImg(img){
				uni.previewImage({
					urls:this.comingImageList,
					current:img
					
				});
			},
			//获取最近受期待
			getMostExpectedList(){
				return new Promise((resolve,reject)=>{
					uni.request({
						url:`${ApiConfig.baseUrl}/ajax/mostExpected?ci=57&limit=10&offset=0&token=`,
						success: (res) => {
							resolve(res.data);
						},
						fail: (err) => {
							reject(err);
						}
					});
				});
			}
		},
		components:{
			movieItem
		}
	}
</script>


<style lang="scss" scoped>
	@import "../../scss/common.scss";
	.most-expected{
		.most-expected-title{
			font-size:32upx;
			margin-left:8upx;
			margin-top:10upx;
			margin-bottom:10upx;
		}
		.most-expected-list{
			@include flexbox();
			flex-wrap:nowrap;
			margin:10upx;
			.item{
				width: 180upx;
				font-size:24upx;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow:hidden;
				margin:0px 8upx;
				
				.imgBox{
					image{
						width:100%;
						display: block;
						max-height:110px;
					}
				}
				.nm{
					font-weight: bold;
				}
			}
		
		}
	}
	::-webkit-scrollbar {
		display: none;/*隐藏滚轮*/
	}
</style>
