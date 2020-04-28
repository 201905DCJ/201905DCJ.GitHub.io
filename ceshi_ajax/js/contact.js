window.onload=function(){
	$(function() {
		$.ajax({
			type: "GET",
			url: "php/DataBaseCarsInfos.php",
			success: function(data) {
				console.log(eval(data));
				data = eval(data);
				$.each(data, function(i, v) {
					console.log(v[1]);
					let str = "<option>" + v[1] + " "+"指导价："+v[2]+"</option>";
					$("#select1").append(str);
				});
			}
		});
	});
}