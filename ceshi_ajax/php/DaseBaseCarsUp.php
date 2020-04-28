<?php

	$id=$_GET['id'];
	$name=$_GET['name'];
	$price=$_GET['price'];

	include_once 'DataBaseMain.php';
	$conn = new mysqli($servername, $username, $password, $dbname);
	// 检测连接
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} 
 
    $sql="use yiyouche";

    $conn->query($sql);
    
    $sql1 = "UPDATE Cars SET cars_name='$name',cars_price='$price'  WHERE id='$id'";
 
	if($conn->query($sql1)==TRUE){
		$sql2 = "SELECT * FROM Cars";//sql查询语句

		$result = $conn->query($sql2);//获得查询结果

		$ajax=$result->fetch_all();

        echo json_encode($ajax);
	}
 
    $conn->close();
    
    Header("Location: ../Carsinfo.html");
	
?>
