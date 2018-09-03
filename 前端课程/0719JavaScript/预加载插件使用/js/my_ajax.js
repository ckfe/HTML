function my_ajax(Url,type,callback){
	var  xhr = new XMLHttpRequest();
	xhr.open(type,Url),
	xhr.send();
	xhr.addEventListener("readystatechange",function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var res = JSON.parse(xhr.responseText);
				callback(res);
			}
		}
	})
}
