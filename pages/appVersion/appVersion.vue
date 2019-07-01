<template>
	<view>
		<view class="view-item-list">
			<view class="view-item">手机品牌：{{systemInfo.brand}}</view>
			<view class="view-item">手机型号：{{systemInfo.model}}</view>
			<view class="view-item">软件版本：{{systemInfo.version}}</view>
			<view class="view-item">手机平台：{{systemInfo.platform}}</view>
			<view class="view-item">操作系统：{{systemInfo.system}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				systemInfo: {}
			};
		},
		onLoad() {
			try {
				const res = uni.getSystemInfoSync();
				this.systemInfo = res;
			} catch (e) {
				//TODO handle the exception
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin flexbox($dir:row) {
		display: flex;
		flex-direction: $dir;
		@content;
	}

	.view-item-list {
		background-color: white;
		@include flexbox(column);
		box-sizing: border-box;
		padding: 0px 20upx;
		margin: 20upx 0px;
		overflow: hidden;

		.view-item {
			font-size: 24upx;
			height: 60upx;
			border-bottom: 1px solid lightgray;

			@include flexbox() {
				align-items: center;
			}
		}
	}
</style>
