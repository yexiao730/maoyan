<template>
	<web-view :src="buyTicketUrl"></web-view>
</template>
<script>
	export default {
		name:"buyTicket",
		data(){
			return {
				buyTicketUrl:""
			}
		}, 
		onLoad(options){
			let id=options.id;
			this.buyTicketUrl=`http://m.maoyan.com/cinema/movie/${id}?$from=canary#`;
		}
	}
</script>