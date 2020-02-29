let init=(function(){
	 
	let f=0;
	
	
	let _CheckBrowser=()=>{
		if(window.localStorage){
			alert('此浏览器支持localStorage');
			f=1;
			localStorage.setItem("f",f);
		}else{
			alert('此浏览器不支持localStorage,请换用Chrome浏览器');
		}
	}
	
	
	let  setLocalStorage=(str)=>{
			localStorage.setItem("paw",str);
		}
	
	
	let  getLocalStorage=()=>{
			return localStorage.getItem("paw");
		}
	
	
	let _autoSend=()=>{
			let paw=getLocalStorage();
			console.log(paw);
	}
	
	
	let _Btn=()=>{
		let btns=document.getElementsByTagName("input");
		let pawtext=document.getElementById('password');
		let btnsL=btns.length;
		let pawstr="请输入正确密码";
		pawtext.innerHTML=pawstr;
		for(let i=0;i<btnsL;i++){
			pawstr="";
			btns[i].addEventListener("click",function(e){
				if(e.target.value=="CLR"){
					pawstr="";
					pawtext.innerHTML=pawstr; 
				}else if(e.target.value=="OK"){
					pawstr="数据已发送";
					pawtext.innerHTML=pawstr;
					setLocalStorage("123456");
				}else if(e.target.value=="F1"){
					pawstr="请修改密码";
					pawtext.innerHTML=pawstr;
					pawstr="";
				}else{
					pawstr+=e.target.value;
					pawtext.innerHTML=pawstr;					
				}
			})
		}
	}
	
	
	let _init=()=>{
		let paw="";
		if(localStorage.getItem("f")!=1){
			_CheckBrowser();
		}else{
			if(confirm("你要使用自动发送功能吗？")){
				_autoSend();
			}else{
				localStorage.removeItem("paw");
				console.log("密码已经删除");
			}
		}
		_Btn();
	}
	
	
	return _init;

	
}())