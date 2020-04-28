
	    $.ajax({
			type: "GET",
            url: "php/DataBaseCarsInfos.php",
			success: function(data) {
        	    data = eval(data);
				$.each(data, function(i, v) {
                    let str="";
                    str=str+"<li class='list-group-item'>"+"车型："+v[1]+
                        "<br/>"+
                        "指导价："+v[2]+
                        "<br/>"+
                        "<a href='php/DataBaseCarsdel.php?del1="+v[0]+"' class='btn btn-danger btn-sm'>"+"删除车型"+"</a>"+
                        "&nbsp;"+
                        "<a href='carsup.html?id="+v[0]+"&name="+v[1]+"&price="+v[2]+"' class='btn btn-info btn-sm'>"+"修改车型"+"</a>"+
                        "</li>";
                    $("#cars").append(str);
                });
            }
        });
