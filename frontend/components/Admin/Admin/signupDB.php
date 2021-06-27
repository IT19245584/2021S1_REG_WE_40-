<?php require_once ('connection.php'); ?>

<?php
	if(isset($_POST['sbmtbtn'])){
		$firstName 	= $POST['first_name'];
		$$lastName 	= $POST['last_name'];
		$$Id_number = $POST['Id_number'];
		$gender		= $POST['c_gender'];
		$email 		= $POST['email_adr'];
		$phoneNo	= $POST['p_number'];
		$password 	= $POST['pass_no1'];
		$repassword = $POST['pass_no2'];

		$sqlreg = "INSERT INTO register values('','$firstName','$lastName','$idNumber','$gender','$email','$phoneNo','$password','$retypepassword')";

		$resultreg= mysqli_query($conn,$sqlreg);

		if($resultreg){
              header("Location:signup.php");
            }
        else{
            echo"<script>alert('Record Not Saved)</script>";
        }
	}

	mysqli_close($conn);

?>



