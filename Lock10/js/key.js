var PassWordStr;
var pad=""; //设置空字符串，全局
var f=0; //设置第一次检测浏览器的标志
function startLoad(){
	//console.log(localStorage.getItem("f"));
	if(localStorage.getItem("f")!=1){
		CheckBrowsers();
	}
	pad=getLocalStorage("password");  //取出存储的密码
	//是否有密码
	if(pad!=null){
		//判断对话框的状态
		if(confirm("您要使用光敏开锁吗?")==false){
			//移出存储的密码
			localStorage.removeItem("password");
			console.log("this is remove!");
			pad="";		//清空存储的密码
		}
	}
	//SocketConnect(2);   //连接第二个端口
    //document.getElementById("Camframe").src=Cam_Uri;
   	BtnV();
}
//检测浏览器是否支持localStorage
function CheckBrowsers(){
	if(window.localStorage){
 		alert("这个浏览器支持存储,可以使用光敏开锁");
 		//console.log(typeof localStorage);
 		f=1;
 		localStorage.setItem("f",f); //存储检测浏览器的值
	}else{
 		alert("这个浏览器不支持存储,请换用Chrome、Firefox浏览器,否则无法使用光敏开锁");
 		//console.log(typeof localStorage);
	}
}
/*获取按钮的值并显示在框中，设置一些按钮的功能*/
	function BtnV(){
			var strP="";
			var flag=1;  //设置ok的标志位
			var count=1; //设置计数器
			var text=document.getElementById("password"); //获取密码框
			var btn=document.getElementsByClassName("button_type1"); //获取所有的按钮
			text.innerHTML="请输入六位数的密码"; //提示字符串
			var btnLength=btn.length;
			//遍历每个按钮，并为它绑定点击事件
			for(var i=0;i<btnLength;i++){
				btn[i].addEventListener("click",function(e){
					//console.log(e.target.value);
					if(e.target.value!="OK"&&e.target.value!="CLR"&&e.target.value!="F2"&&count<=13){
						strP+=e.target.value; //按键上的值
						text.innerHTML=strP;
						count++;
					}else if(e.target.value=="CLR"){
						strP="";
						text.innerHTML=strP;
						count=1;
						document.getElementById("open").style.display="none";
					}
					//-------------------------------------
					//发送数据
					if(e.target.value=="OK"){
						SendData(strP+"\r\n");
						setLocalStorage(strP);
					}
				})
			}
		}
//-----------------------------------------------------------------------
function Connecting() //断网
{
	startLoad();
}
//---------------------------------------------------------------
//发送数据函数
function SendData(str)
{
   if(websocket2_Connected==1)    //端口2连接
   {	
      WebSocket_Send(2,str);  //端口2发送数据
   }
   else
   {
	  window.alert("提示：网络没有连接......");
   }    
}
//--------------------------------------------------------------
function onConnect(nSocket)
{
   SendData("?\r\n");        //获取端口状态	 	
}
//设置存储值
function setLocalStorage(str){
	localStorage.setItem("password",str);
}
//获得存储的值
function getLocalStorage(name){
	return localStorage.getItem(name);
}
//接收函数
function onReceive(nSocket,str)
{
	//控制台输出接收的字符串
	console.log(str);
	console.log(typeof(str));
	console.log(str.search("1")!=-1);
	
   if(str.search("1")!=-1){
   	document.getElementById("text").innerHTML="有光";
   }else{
   	document.getElementById("text").innerHTML="无光";
   }
	//有光且密码长度为6才执行
	//光敏自动发送数据
	if(str.search("1")!=-1&&pad.length==6){
		SendData(pad+"\r\n");
	}	
   if(nSocket!=2){return;}
   
   if(str.substr(0,13)=="open the door")  //判断接收的字符串
   {
	   PassWordStr="开门";
   	   document.getElementById("password").innerHTML=PassWordStr;
   	   document.getElementById("open").style.display="block";	//显示光敏开锁标志
   	   console.log(pad);
   }

   if(str.substr(0,15)=="Restore success")
   {
	   PassWordStr="恢复默认密码成功";   
   	   document.getElementById("password").innerHTML=PassWordStr;
   }
   if(str.substr(0,9)=="signal if")
   {
	   PassWordStr="修改密码成功";   
   	   document.getElementById("password").innerHTML=PassWordStr;
   	   document.getElementById("open").style.display="none";	//隐藏光敏开锁标志
   }   
}
//===============================================================