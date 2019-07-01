<template>
	<view class="hot">
		<movie-item @preViewImg="preViewImg" v-for="(item,index) in hotList" :key="index" :item="item"></movie-item>
	</view>
</template>

<script>
	import movieItem from "../movieItem/movieItem.vue";
	import ApiConfig from "../../config/ApiConfig.js";
	export default {
		data() {
			return {
				hotList:[],
				hotImageList:[]
			};
		},
		async created(){ 
			uni.showLoading({
				title:"正在加载"
			})
			try{
				let hotList=await this.getHotList();
				let imgWidth=uni.getSystemInfoSync().windowWidth;
				let imgHeight=imgWidth/128*180;
				this.hotList=hotList.movieList.map(item=>{
					item.img=item.img.replace("w.h","128.180");
					this.hotImageList.push(item.img.replace("128.180",imgWidth+"."+imgHeight));
					item.preViewSrc=item.img.replace("128.180",imgWidth+"."+imgHeight);
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
			getHotList(){
				return new Promise((resolve,reject)=>{
					uni.request({
						url:`${ApiConfig.baseUrl}/ajax/movieOnInfoList`,
						success: (res) => {
							resolve(res.data);
						},
						fail: (err) => {
							reject(err);
						}
					})
				})
			},
			preViewImg(img){
				uni.previewImage({
					urls:this.hotImageList,
					current:img
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
	

</style>
