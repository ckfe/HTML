function XuanXiang(el){
	this.El = document.querySelector(el);
	this.ali = this.El.querySelectorAll("li");
	this.cont = this.El.querySelectorAll(".con div");
	this.leng = this.ali.length;
	XuanXiang.prototype.init = function(){
		var that = this;
		for(var i=0;i<this.leng;i++){
				(function(k){
					that.ali[k].addEventListener("click",function(){
						for(var j=0;j<that.leng;j++){
							that.cont[j].style.display = "none";
						}
						that.cont[k].style.display = "block";
					})
				})(i)
			}
	}
}
