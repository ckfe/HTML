function sfq(el){
	this.El = document.querySelector(el);
	this.mune = document.querySelectorAll(".mune li");
	this.leng = this.mune.length;
	
	sfq.prototype.init = function(){
		var that = this;
		for(var i=0;i<this.leng;i++){
			this.mune[i].addEventListener("click",function(){
				for(var j=0;j<that.leng;j++){
					that.mune[j].children[1].style.display = "none";
					that.mune[j].children[0].style.display = "block";
					that.mune[j].style.width = "100px";
				}
				this.children[0].style.display = "none";
				this.children[1].style.display = "block";
				this.style.width = "300px";
			})
		}
	}
}
