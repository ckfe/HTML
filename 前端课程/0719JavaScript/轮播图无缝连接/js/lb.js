function LunBoTu(el){
	this.El = document.querySelector(el);
	this.imgBox = this.El.querySelector(".imgBox");
	this.ali = this.imgBox.querySelectorAll("li");
	this.next = this.El.querySelector(".next");
	this.pre = this.El.querySelector(".pre");
	
	this.index = 1;//初始化图片下标值
	this.isClick = true;//判断按钮是否可点击
	this.imgW = this.ali[0].offsetWidth;
	this.leng = this.ali.length;
	//功能
	LunBoTu.prototype.init = function(){
		var that = this;//保存this的指向
		this.clone1 =this.ali[0].cloneNode(true);
		this.clone2 = this.ali[this.leng-1].cloneNode(true);
		this.imgBox.appendChild(this.clone1);
		this.imgBox.insertBefore(this.clone2,this.ali[0]);
		this.imgBox.style.transform = "translateX(-"+this.index*this.imgW+"px)";//初始轮播图位置
		//移动函数
		this.move = function(){
			if(!this.imgBox.classList.contains("tran")){
				this.imgBox.classList.add("tran");
			}
			this.imgBox.style.transform = "translateX(-"+this.index*this.imgW+"px)";
		}
		
		//向左移动
		this.next.addEventListener("click",function(){
			if(that.isClick){
				that.index++;
				that.move();
				that.isClick = false;
			}
		})
		//向左移动
		this.pre.addEventListener("click",function(){
			if(that.isClick){
				that.index--;
				that.move();
				that.isClick = false;
			}
		})
		//边界判断
		this.imgBox.addEventListener("transitionend",function(){
			//左边界
			if(that.index ==that.leng+1){
				that.index = 1;
				that.imgBox.classList.remove("tran");
				that.imgBox.style.transform = "translateX(-"+that.index*that.imgW+"px)";
			}
			
			if(that.index == 0){
				that.index = that.leng;
				that.imgBox.classList.remove("tran");
				that.imgBox.style.transform = "translateX(-"+that.index*that.imgW+"px)";
			}
			that.isClick = true;
		})
	}
}
