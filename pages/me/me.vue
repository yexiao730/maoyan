<template>
	<view>
		<view class="userInfoBox">
			<view class="left">
				<image :src="userInfo.avatarUrl" mode="widthFix" class="user_photo"></image>
			</view>
			<view class="right">
				<view class="nickName">{{userInfo.nickName}}</view>
				<view class="addr">China·Hubei·Wuhan</view>
			</view>
			<image :src="userInfo.avatarUrl" class="bgImg"></image>
		</view>
		<view class="view-item-list">
			<view class="view-item" @tap="showSaveCollection">收藏记录</view>
			<view class="view-item" @tap="getSysInfo">系统信息</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				saveCollection: [],
				userInfo: {
					avatarUrl: "../../static/user_photo.jpg",
					nickName: "用户昵称"
				}
			};
		},

		onLoad() {
			/*
			uni.reLaunch({
				url:"/pages/loginSys/loginSys"
			});
			*/


		},

		methods: {
			clearStorage() {
				uni.clearStorageSync();
			},
			getSysInfo() {
				uni.navigateTo({
					url: "/pages/appVersion/appVersion"
				});
			},
			showSaveCollection() {
				uni.navigateTo({
					url: "/pages/saveCollection/saveCollection"
				});
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

	.userInfoBox {
		overflow: hidden;
		position: relative;
		@include flexbox();
		padding: 10upx;
		.left {
			width: 120upx;
			>.user_photo {
				width: 120upx;
				height: 120upx;
				display: block;
			}
		}

		.right {
			flex: 1;

			@include flexbox(column) {
				justify-content: space-around;
			}

			.nickName {
				font-size: 28upx;
			}

			.addr {
				font-size: 24upx;
				color: gray;
			}

			margin-left:10upx;
		}

		.bgImg {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0px;
			top: 0px;
			filter: blur(60upx);
			z-index: -1;
		}
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
			height: 80upx;
			border-bottom: 1px solid lightgray;

			@include flexbox() {
				align-items: center;
			}
		}
	}
</style>
