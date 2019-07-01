<template>
	<view>
		<view class="tips" v-if="saveCollection.length==0">暂无收藏记录</view>
		<view class="view-item-list" v-if="saveCollection.length>0">
			<save-collection-item @deleteSaveCollection="deleteSaveCollection" @removeAllSaveCollection="removeAllSaveCollection"
			 :item="item" v-for="(item,index) in saveCollection" :key="index"></save-collection-item>
		</view>
	</view>
</template>

<script>
	import saveCollectionItem from "../../components/saveCollectionItem/saveCollectionItem.vue"
	export default {
		data() {
			return {
				saveCollection: []
			};
		},
		onLoad() {
			this.saveCollection = uni.getStorageSync("saveCollection") || [];
		},
		onPullDownRefresh() {
			console.log("下拉刷新");
			this.saveCollection = uni.getStorageSync("saveCollection") || [];
			uni.showToast({
				title: "刷新完成",
				success: () => {
					uni.stopPullDownRefresh();	
				}
			});
		},
		methods: {
			deleteSaveCollection(id) {
				let index = this.saveCollection.findIndex(item => item.id = id);
				this.saveCollection.splice(index, 1);
				uni.setStorageSync("saveCollection", this.saveCollection);
				uni.showToast({
					title: "删除成功"
				});
			},
			removeAllSaveCollection() {
				this.saveCollection.splice(0); //清空数组
				uni.setStorageSync("saveCollection", this.saveCollection);
				uni.showToast({
					title: "清空成功"
				});
			}
		},
		components: {
			saveCollectionItem
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
	}

	.tips {
		height: 60upx;
		color: gray;

		@include flexbox() {
			justify-content: center;
			align-items: center;
		}
	}
</style>
