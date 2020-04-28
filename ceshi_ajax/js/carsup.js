window.onload=function(){
    $(function() {
        var url = document.location.toString();//获取url地址
        var urlParmStr = url.slice(url.indexOf('?')+1);//获取问号后所有的字符串
        var arr = urlParmStr.split('&');//通过&符号将字符串分割转成数组
        console.log(arr);
        var courseId = arr[0].split("=")[1];//获取数组中第一个参数
        console.log(courseId);
        var unit_title=arr[1].split("=")[1];//第二个参数
        console.log(unit_title);
        var unit_title1=arr[2].split("=")[1];//第三个参数
        courseId=decodeURI(courseId);//转码将解码方式unscape换为decodeURI，将中文参数获取
        unit_title=decodeURI(unit_title);
        console.log(unit_title);
        unit_title1=decodeURI(unit_title1);
        console.log(unit_title1);
        document.getElementById("id").setAttribute('value',courseId);
        document.getElementById("name").setAttribute('value',unit_title);
        document.getElementById("price").setAttribute('value',unit_title1);
    });
}