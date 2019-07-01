export function fmtDate(d,split="-"){
	if(typeof d==="object"&&d instanceof Date){
		let year=d.getFullYear();
		let month=d.getMonth()+1;
		let date=d.getDate();
		return [year,month,date].join(split);
	}
	else if(typeof d==="string"){
		d=new Date(d);
		let year=d.getFullYear();
		let month=d.getMonth()+1;
		let date=d.getDate();
		return [year,month,date].join(split);
	}
	else{
		return "";
	}
}