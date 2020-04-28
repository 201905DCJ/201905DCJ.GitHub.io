<?php

	header("Content-Type: text/html;charset=utf-8");

	$pname=$_GET["pname"];
	$pphone=$_GET["pphone"];
	$pcar=$_GET["pcar"];
	$pcity=$_GET["pcity"];

	include_once 'DataBaseMain.php';
	$conn = new mysqli($servername, $username, $password,$db_name);

	$sql = "CREATE TABLE yiyouche.MyGuests (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	pname VARCHAR(30),
	pphone VARCHAR(30),
	pcar VARCHAR(255),
	pcity VARCHAR(50),
	reg_date TIMESTAMP
	)";
 
	if ($conn->query($sql) === TRUE) {
		echo "Table MyGuests created successfully";
	}else{
		echo "field";
	}
	
	$sql="use yiyouche";
	
	if($conn->query($sql)==TRUE){
		$sql2 = "INSERT INTO MyGuests (pname,pphone,pcar,pcity)
		VALUES ('$pname','$pphone','$pcar','$pcity')";
		  
		if ($conn->query($sql2) === TRUE) {
			echo "新记录插入成功";
		} else {
			echo "Error: " . $sql2 . "<br>" . $conn->error;
		}
	}
	
	$conn->close();
	
	 Header("Location: ../Ok.html");
	
?>
