import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		cityName:"未定义",
		
		//更新进度条
		showDownloadMask:false,
		hasDownload:0
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setCityName(state,cityName){
			state.cityName=cityName;
		},
		setShowDownloadMask(state,v){
			state.showDownloadMask=v;
		},
		sethasDownload(state,v){
			state.hasDownload=v;
		}
		
	},
	actions: {
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		},
		setCityName({commit},cityName){
			commit("setCityName",cityName);
		},
		setShowDownloadMask({commit},v){
			commit("setShowDownloadMask",v);
		},
		sethasDownload({commit},v){
			commit("sethasDownload",v);
		}
		
	}
})

export default store
