window.onload=function(){
	$(function() {
		$.ajax({
			type: "GET",
			url: "php/DataBaseUsers.php",
			success: function(data) {
				console.log(eval(data));
        		data = eval(data);
				$.each(data, function(i, v) {
				  let str="";
				  str=str+"<div class='panel panel-default'>"+"<div class='panel-heading'>"+"<h4 class='panel-title'>"+
				  "<a data-toggle='collapse' data-parent='#accordion' href='#collapse"+v[0]+"' style='text-decoration:none'>点击预览，再次点击折叠______时间:"+v[5]+"______客户:"+v[1]+"的信息_____所在城市:"+v[4]+"</a>"+"</h4>"+"</div>"+
				  "<div id='collapse"+v[0]+"' class='panel-collapse collapse'>"+"<div class='panel-body'>"+
          		"<ul class='list-group ' style='font-size:20px;'>"+
          		"<li class='list-group-item active'>"+"姓名："+v[1]+"</li>"+
		  		"<li class='list-group-item'>"+"联系方式："+"<a href='tel:"+v[2]+"' style='text-decoration：none;'>"+v[2]+"</a>"+
		  		"&nbsp;"+"&nbsp;"+
		  		"<span>"+"&nbsp;&nbsp;你可以直接拨打电话联系"+"</span>"+
		  		"</li>"+
          		"<li class='list-group-item'>"+"中意车型："+v[3]+"</li>"+
		  		"<li class='list-group-item'>"+"所在城市："+v[4]+"</li>"+
				  "<li class='list-group-item'>"+"时间："+v[5]+"</li>"+"</ul>"+
				  "</div>"+"</div>"+"</div>";
          		$("#user").append(str);
						});
					}
				});
			});
		}




		
        
            
        
        
    

		
        
            

        
        
        
    