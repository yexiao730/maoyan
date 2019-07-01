<template>
	<div style="border-bottom: 1px solid #ececec;" @tap="getDetail(item)">
		<view class="comingTitle">
			<slot></slot>
		</view>
		<view class="m-item" @longpress="showActionSheet">
			<view class="left">
				<image :src="item.img" mode="widthFix" class="m-img" @tap.stop="preViewImg(item.preViewSrc)"></image>
			</view>
			<view class="center">
				<view class="m-title">{{item.nm}}</view>
				<view class="m-sc" v-if="item.globalReleased==true">评分：<text>{{item.sc}}</text></view>
				<view class="m-sc" v-else><text>{{item.wish}}</text>想看</view>
				<view>主演: {{item.star}}</view>
				<view>{{item.showInfo}}</view>
			</view>
			<view class="right">
				<button class="btnBuy" v-if="item.globalReleased==true">购票</button>
				<button class="btnPre" v-else>预售</button>
			</view>
		</view>
	</div>
	
</template>

<script>
	
	export default {
		name:"movieItem",
		props:["item"],
		methods:{
			preViewImg(img){
				this.$emit("preViewImg",img);
			},
			showActionSheet(){
				uni.showActionSheet({
					itemList:["添加收藏","查看详细"],
					success: (res) => {
						if(res.tapIndex==0){
							let  saveCollection=uni.getStorageSync("saveCollection")||[];
							let index=saveCollection.map(s_item=>s_item.id).indexOf(this.item.id);
							let isExists = index==-1?false:true;
							if(!isExists){
								//说明之前的不存在
								saveCollection.push({...this.item,s_time:new Date().toLocaleString()});
								uni.setStorageSync("saveCollection",saveCollection);
								uni.showToast({
									title:"收藏成功"
								});
							}
							else{
								//说明已经存在了
								//saveCollection[index]={...this.item,s_time:new Date().toLocaleString()};
								uni.showToast({
									title:"您已经收藏过啦",
									icon:"none"
								});
							}
						}
						else if(res.tapIndex==1){
							uni.navigateTo({
								url:`/pages/movieDetail/movieDetail?id=${this.item.id}`
							});
						}
					}
				});
				
			},
			getDetail(item){
				uni.navigateTo({
					url:`/pages/movieDetail/movieDetail?id=${item.id}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/common.scss";
	.m-item{
		background-color:white;
		margin:15upx 8upx;
		box-sizing:border-box;
		@include flexbox();
		>.left{
			width:160upx;
			>.m-img{
				width:100%;
				display: block;
			}
		}
		>.center{
			font-size: 24upx;
			@include flexbox(column);
			justify-content:space-between;
			flex:1;
			margin:0 5upx;
			color:#666;
			overflow:hidden;
			>view{
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				
			}
			.m-title{
				font-size: 36upx;
				font-weight: bold;
				color: black;
			}
			.m-sc{
				>text{
					margin: 0px 5upx;
					font-size: 36upx;
					color: $warningColor;
				}
			}
		}
		.right{
			width:140upx;
			@include flexbox();
			justify-content:center;
			align-items:center;
			.btnBuy{
				@include flexbox();
				justify-content:center;
				align-items:center;
				width:120upx;
				height: 60upx;
				color: white;
				background-color: $primaryColor;
				font-size: 24upx;
			}
			.btnPre{
				@extend .btnBuy;
				background-color: #3c9fe6;
			}
		}
	}
	.comingTitle{
		font-size: 32upx;
		color: gray;
		margin-left: 10upx;
	}
</style>