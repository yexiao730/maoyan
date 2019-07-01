<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			//#ifdef APP-PLUS
			/* 5+环境锁定屏幕方向 */
			plus.screen.lockOrientation('portrait-primary'); //锁定
			/* 5+环境升级提示 */
			var server = "https://www.softeem.xin/Api/Movie/checkUpdate"; //检查更新地址
			var req = { //升级检测数据
				"appid": plus.runtime.appid,
				"version": plus.runtime.version,
				"imei": plus.device.imei
			};
			uni.request({
				url: server,
				data: req,
				success: (res) => {
					console.log("success", res);
					if (res.statusCode == 200 && res.data.isUpdate) {
						let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
						uni.showModal({ //提醒用户更新
							title: '更新提示',
							content: res.data.note ? res.data.note : '是否选择更新',
							success: (res) => {
								if (res.confirm) {
									this.$store.dispatch("setShowDownloadMask",true);
									// plus.runtime.openURL(openUrl);
									const downloadTask = uni.downloadFile({
										url:openUrl,
										success: (res) => {
											uni.showToast({
												title:'下载成功'
											});
											uni.openDocument({
												filePath:res.tempFilePath
											})
										},
										complete: () => {
											this.$store.dispatch("setShowDownloadMask",false);
										}
									});
									downloadTask.onProgressUpdate(res=>{
										this.$store.dispatch("sethasDownload",res.progress);
									});
								}
							}
						})
					}
				}
			})
			//监听穿透消息
			uni.onPush({
				provider: 'igexin',
				success: function () {
					console.log('监听透传成功');
				},
				callback: function (data) {
					console.log("接收到透传数据：" + JSON.stringify(data));
				},
				fail: (err) => {
					console.log("接口调用失败");
				}
			});
 
			//#endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 这是页面的公用css */

	page {
		background-color: #F8F8F8;
		height: 100%;
	}
	@font-face {
	  font-family: 'iconfont';  /* project id 961479 */
	  src: url('https://at.alicdn.com/t/font_961479_jvas26u3ik.eot');
	  src: url('https://at.alicdn.com/t/font_961479_jvas26u3ik.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_961479_jvas26u3ik.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_961479_jvas26u3ik.ttf') format('truetype'),
	  url('http://at.alicdn.com/t/font_961479_jvas26u3ik.svg#iconfont') format('svg');
	}
</style>

