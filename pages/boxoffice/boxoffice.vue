<template>
	<view class="boxOffice">
		<view class="topInfo">
			<view class="queryData">
				{{boxInfo.queryDate}} 今天大盘：<text>{{boxInfo.splitTotalBox}}{{boxInfo.totalBoxUnitInfo}}</text>
			</view>
			<view class="refreshTips">每30分钟更新一次，可下拉手动刷新</view>
		</view>
		<view class="list">
			<view class="listTitle listItem">
				<view class="nmTitle">片名</view>
				<view class="nowBoxMoney">
					<text>实时票房</text>
					<text>(万元)</text>
				</view>
				<view>票房占比</view>
				<view>排片占比</view>
				<view>上座率</view>
			</view>
			<view class="listItem"  v-for="(item,index) in boxInfo.list" :key="index" :style="{backgroundColor:index%2==0?'#f2f2f2':'white'}">
				<view class="nmTitle">
					<view class="nm">{{item.movieName}}</view>
					<view class="showInfo">{{item.releaseInfo}} {{item.splitSumBoxInfo}}</view>
				</view>
				<view style="color: red;">{{item.boxInfo}}</view>
				<view>{{item.splitBoxRate}}</view>
				<view>{{item.showRate}}</view>
				<view>{{item.avgSeatView}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				boxInfo:{}
			};
		},
		onLoad() {
			this.getBoxInfo();
		},
		methods: {
			getBoxInfo() {
				uni.showLoading({
					title:"正在加载数据"
				});
				var boxOfficeUrl="https://www.softeem.xin/maoyanApi/box/promovie/api/box/second.json";
				uni.request({
					url:boxOfficeUrl,
					success:res=>{
						this.boxInfo=res.data.data;
						
					},
					complete: () => {
						uni.hideLoading();
					}
				})
			}
		},
		onPullDownRefresh() {
			this.getBoxInfo();
			uni.stopPullDownRefresh();
		}
	}
</script>

<style scoped lang="scss">
.topInfo{
	box-sizing: border-box;
	padding: 20upx;
	.queryData{
		font-size: 32upx;
		text{
			color: red;
		}
	}
	.refreshTips{
		margin-top: 10upx;
		color: gray;
		font-size: 24upx;
	}
}
.listTitle{
	
	background-color: rgba(255,0,0,0.6);
	color: white;
	
	
}
.listItem{
	display: flex;
	font-size: 24upx;
	padding: 10upx;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	>view:not(.nmTitle){
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.nmTitle{
		width: 200upx;
		flex-direction: column;
		text-align: center;
		.nm{
			font-weight: bold;
		}
	}
	
	.nowBoxMoney{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}

</style>
