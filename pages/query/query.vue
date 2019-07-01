<template>
	<view class="query">
		<view class="searchBox">
			<view class="inputBox">
				<input type="text" class="txtQuery" placeholder="搜电影、搜影院">
				<span class="search">&#xe621;</span>
			</view>
			<view class="inputCtl" @tap.stop="goBack">取消</view>
		</view>
	</view>
</template>

<script>
	//查询
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/common.scss";
	.query{
		background-color: #f5f5f5;
		height: 100%;
	}
.searchBox{
	@include flexbox();
	overflow: hidden;
	.inputBox{
		flex:1;
		box-sizing:border-box;
		padding:10upx ;
		position:relative;
		@include flexbox();
		align-items:center;
		.txtQuery{
			width:100%;
			height: 60upx;
			border:1px solid lightgray;
			border-radius:10upx;
			box-sizing:border-box;
			padding-left:50upx;
			font-size:24upx;
			background-color: white;
		}
		.search{
			font-family: "iconfont";
			position: absolute;
			left:10px;
		}
	}
	.inputCtl{
		width: 100upx;
		color: $primaryColor;
		font-size: 28upx;
		@include flexbox();
		justify-content:center;
		align-items:center;
	}
}
</style>
