<template>
	<view>
		<view>这是登陆页</view>
	</view>
</template>

<script>
	export default {
		name:"loginSys",
		data() {
			return {
				
			};
		},
		onLoad(){
			
		},
		onBackPress(){
			uni.switchTab({
				url:"/pages/movie/movie",
				complete() {
					uni.hideToast();
				}
			});
			return true;
		}
	}
</script>

<style>

</style>
