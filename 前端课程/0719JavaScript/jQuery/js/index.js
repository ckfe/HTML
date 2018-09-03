//增删改查
//增加条目
var id = 0;
$(".add").on("click",function(){
	var name = $(".userName").val();
	var age = $(".age").val();
	var gen = $(".gender").val();
	id++;
	var tr = `
			<tr>
				<td>${id}</td>
				<td><input class="check" type="checkbox" /></td>
				<td>${name}</td>
				<td>${age}</td>
				<td>${gen}</td>
				<td><input class="del" type="button" value="删除"/></td>
			</tr>
			`;
	$("table").append(tr);
})
//删除
$("table").on("click",".del",function(){
	$(this).parents("tr").detach();
})
//删除选中的条目

$(".delSel").on("click",function(){
	$(".check").each(function(item,index){
		if($(this).prop("checked")){
			$(this).parents("tr").detach();
		}
	})
})
//全选
$(".allCheck").on("change",function(){
	if($(this).prop("checked")){
		$(".check").prop("checked",true);
	}else{
		$(".check").prop("checked",false);
	}
})
//反选
$("table").on("click",".check",function(){
	var arr = [];
	$(".check").each(function(index,item){
		if($(item).prop("checked")){
			arr.push(item);
		}
		if(arr.length == $(".check").length){
			$(".allCheck").prop("checked",true);
		}else{
			$(".allCheck").prop("checked",false);
		}
	})
})
//根据年龄排序
$(".order").on("click",function(){
	var allAge = $("td:nth-child(4)");
	var arr = allAge.sort(function(a,b){
		return $(a).text() - $(b).text();
	})
	$(arr).each(function(index,item){
		$("table").append($(item).parents("tr"));
	})
})


