<?php require_once ('connection.php'); ?>

<?php
	if(isset($_POST['sbmtbtn'])){
		$userName = $_POST['customer-name'];
		$userEmail =$_POST['customer-email'];
		$comment = $_POST['customer-comment'];

		$sqlhelp = "INSERT INTO support values('','$userName','$userEmail','$comment')";

		$resulthelp = mysqli_query($conn,$sqlhelp);

		if($resulthelp){
              header("Location:help & support.php");
            }
        else{
            echo"<script>alert('Record Not Saved)</script>";
        }
	}

	mysqli_close($conn);
?>