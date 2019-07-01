<template>
	<view class="view-item-out" @touchstart="touchS" @touchmove="touchM" @touchend="touchE" @tap="getDetail(item.id)"
	 @longpress="showActionSheet(item.id)">
		<view class="view-item" :style="{left:leftStyle}">
			<view class="left">
				<image :src="item.img"></image>
			</view>
			<view class="right">
				<view class="m_title">
					{{item.nm}}
				</view>
				<view class="s_time">{{item.s_time}}</view>
			</view>
		</view>
		<view class="delButton" @tap.stop="$emit('deleteSaveCollection',item.id)">删除</view>
	</view>
</template>
<script>
	export default {
		name: "saveCollectionItem",
		data() {
			return {
				startX:"",
				leftStyle:"0px"
			}
		},
		props: ["item"],
		methods: {
			getDetail(id) {
				uni.navigateTo({
					url: `/pages/mvoieDetail/movieDetail?id=${id}`
				});
			},
			showActionSheet(id) {
				uni.showActionSheet({
					itemList: ["删除记录", "全部清空"],
					success: (res) => {
						if (res.tapIndex == 0) {
							this.$emit("deleteSaveCollection",id);
						} else if (res.tapIndex == 1) {
							uni.showModal({
								title: "提示",
								content: "确定要清空记录吗",
								success: (res) => {
									if (res.confirm) {
										this.$emit("removeAllSaveCollection");
									}
								}
							})
						}
					}
				});
			},
			touchS(event) {
				if (event.touches.length == 1) {
					this.startX = event.touches[0].clientX;
				}
			},
			touchM(event) {
				if (event.touches.length == 1) {
					let moveX = event.touches[0].clientX;
					let distX = this.startX - moveX;
					if (distX <= 0) {
						this.leftStyle = "0px";
					} else if (distX > 0) {
						this.leftStyle = distX * (-1) + "px";
						if (distX >= 180) {
							this.leftStyle = 90 * (-1) + "px";
						}
					}
				}
			},
			touchE(event) {
				if (event.mp.changedTouches.length == 1) {
					let endX = event.mp.changedTouches[0].clientX;
					//触摸开始与结束，手指移动的距离
					let disX = this.startX - endX;
					//如果距离小于删除按钮的1/2，不显示删除按钮
					this.leftStyle = disX > 90 / 2 ? 90 * (-1) + "px" : "0px";
				}
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
	.view-item-out {
		position: relative;
		height: 100upx;

		.view-item {
			position: absolute;
			z-index: 2;
			background-color: white;
			width: 100%;
			font-size: 24upx;
			border-bottom: 1px solid lightgray;
			top: 0px;
			transition: all 0.3s ease;

			@include flexbox(row) {}

			.left {
				width: 100upx;
				height: 100upx;
				box-sizing: border-box;

				@include flexbox() {
					justify-content: center;
					align-items: center;
				}

				>image {
					width: 90upx;
					height: 90upx;
				}
			}

			.right {
				flex: 1;
				margin-left: 10upx;

				@include flexbox(column) {
					justify-content: space-around;
				}

				.m_title {
					font-size: 28upx;
				}

				.s_time {
					color: gray;
				}
			}
		}

		.delButton {
			position: absolute;
			height: 100%;
			width: 90px;
			background-color: #DD524D;
			color: white;
			right: 0px;
			top: 0px;

			@include flexbox() {
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>