window.onload = function() {
		$(function() {
			$('#myTab li:eq(1) a').tab('show');
		});	
		$(function() {
			$.ajax({
					type: "GET", 
					url: "php/DataBaseCarsInfos.php",
					success: function(data) {
					console.log(eval(data));
					data = eval(data);
					$.each(data, function(i, v) {
					console.log(v);
					let str = "<option>" + v[1] + " "+"指导价："+v[2]+"</option>";
					$("#select").append(str);
				});
			}
		});
	});
}