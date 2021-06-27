<?php
	$servername ="localhost";
	$username ="root";
	$password ="nadun1459@";
	$db = "DrivePro";


	//Database Connection
	$conn = new mysqli($servername, $username, $password, $db);

	//check connection 

	if($conn->connect_error)
	{
		die("connection failed: ".$conn->connect_error);
	}
	else{
		echo"Connected Successfull";
	}
	
?>
