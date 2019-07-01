<template>
	<scroll-view class="cityListView" scroll-y="true" scroll-x="false" :scroll-into-view="currentPyIndex">
		<view class="cityListView-item" @tap="chooseCity({nm:cityName})">当前定位城市：<text style="font-weight: bold;">{{cityName}}</text></view>
		<view v-for="(item,index) in pyIndexList" :key="index">
			<view style="color: red;font-weight: bold;" :id="item.pyIndex">{{item.pyIndex}}</view>
			<view class="cityListView-item" v-for="(s_item,s_index) in item.subItems" :key="s_index" @tap="chooseCity(s_item)"  :data-cityid="s_item.id" :data-citypy="s_item.py">{{s_item.nm}}</view>
		</view>
		<!--右边的拼音索引条 -->
		<view class="pyIndexListView">
			<view :class="{active:currentPyIndex==item.pyIndex}" @click="changePyIndex(item.pyIndex)" class="pyIndexListView-item" v-for="(item,index) in pyIndexList" :key="index">{{item.pyIndex}}</view>
		</view>
	</scroll-view>
</template>

<script>
	import cityList from "../../config/cityList.json";
	export default {
		name:"citylist-view",
		data() {
			return {
				cityList:[],
				pyIndexList:[],
				currentPyIndex:"a"
			};
		},
		props:["cityName"],
		created() {
			uni.showLoading({
				title:"正在加载"
			});
			this.cityList=cityList.sort((v1,v2)=>{
				if(v1.py<v2.py){
					return -1;
				}
				else if(v1.py>v2.py){
					return 1;
				}
				else {
					return 0;
				}
			});
			this.pyIndexList=this.formatCityList();
			uni.hideLoading();
			
		},
		methods:{
			chooseCity(item){
				this.$emit("chooseCityName",item);
				this.$destroy();
			},
			formatCityList(){
				let s=new Set(
				this.cityList.map((item,index,a)=>{
					return item.py.substr(0,1);
				}));
				let arr=Array.from(s);
				let pyIndexList=[];
				arr.map((item,index,a)=>{
					pyIndexList.push({
						pyIndex:item,
						subItems:[]
					});
				});
				for(let i=0;i<this.cityList.length;i++){
					for(let j=0;j<pyIndexList.length;j++){
						if(this.cityList[i].py.substr(0,1)==pyIndexList[j].pyIndex){
							pyIndexList[j].subItems.push(this.cityList[i]);
						}
					}
				}
				return pyIndexList;
			},
			changePyIndex(pyIndex){
				this.currentPyIndex=pyIndex;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin flexbox($dir:row){
		display: flex;
		flex-direction: $dir;
		width: 100%;
		@content;
	}
	$primaryColor:#e54847;
	.cityListView{
		position: fixed;
		left: 0px;
		top: var(--window-top);
		width: 100%;
		bottom: var(--window-bottom);
		overflow: auto;
		background-color: white;
		z-index: 1;
		font-size: 28upx;
		box-sizing: border-box;
		padding: 0px 20upx 0px 40upx;
		background-color:#f5f5f5;
		.cityListView-item{
			@include flexbox(){
				height: 80upx;
				align-items: center;
			};
			border-bottom: 1px solid #c8c7cc;
		}
	}
	.hr{
		height: 1px;
		width: 100%;
		background-color: gray;
	}
	.pyIndexListView{
		position: fixed;
		width: 40upx;
		right: 10upx;
		top: 100upx;
		bottom: 100px;
		background-color: lightgray;
		color: gray;
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius:35upx;
		.pyIndexListView-item{
			margin: 0px 6upx;
			cursor: pointer;
			&.active{
				color: $primaryColor;
			}
		}
	}
</style>
