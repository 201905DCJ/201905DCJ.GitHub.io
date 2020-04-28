<?php

	header("Content-Type: text/html;charset=utf-8");

	$CarsName=$_GET["CarsName"];
	$CarsPrice=$_GET["CarsPrice"];

	include 'DataBaseMain.php';
	$conn = new mysqli($servername, $username, $password,$db_name);

	$sql1 = "CREATE TABLE yiyouche.Cars (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	cars_name VARCHAR(255),
	cars_price VARCHAR(50),
	reg_date TIMESTAMP
	)";
 
	if ($conn->query($sql1) === TRUE) {
		echo "Table  created successfully";
	} 
	
	$sql="use yiyouche";
	
	if($conn->query($sql)==TRUE){
		$sql2 = "INSERT INTO Cars (cars_name,cars_price)
		VALUES ('$CarsName','$CarsPrice')";
  
		if ($conn->query($sql2) === TRUE) {
			Header("Location: ../CarsName.html");
		} else {
			echo "Error: " . $sql2 . "<br>" . $conn->error;
		}		
	}
	
	$conn->close();
	
?>
