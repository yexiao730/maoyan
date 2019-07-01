 const request = {
	get(url,header={}){
		return new Promise((resolve,reject)=>{
			uni.request({
				method:"GET",
				url:url,
				header:header,
				success: (res) => {
					resolve(res);
				},
				fail:(err)=> {
					reject(err);
				}
			})
		})
	},
	post(url,data,header={}){
		return new Promise((resolve,reject)=>{
			uni.request({
				method:"POST",
				url:url,
				data:data,
				header:header,
				success: (res) => {
					resolve(res);
				},
				fail: (err) => {
					reject(err);
				}
			})
		})
	}
}

export default request;