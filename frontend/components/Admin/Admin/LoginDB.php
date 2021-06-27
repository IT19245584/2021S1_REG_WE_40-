<?php require_once ('connection.php'); ?>

<?php
	if(isset($_POST['sbmtbtn'])){
		$userName = $_POST['customer-name'];
		$password = $_post['password'];

		$sqllogin = "INSERT INTO support values('$userName','$password')";

		$resultlogin = mysqli_query($conn,$sqllogin);

		if($resultlogin){
              header("Location:Login.php");
            }
        else{
            echo"<script>alert('Record Not Saved)</script>";
        }
	}

	mysqli_close($conn);
?>