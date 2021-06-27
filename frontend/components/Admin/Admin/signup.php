<!DOCTYPE html>
<html>
<head>
  
	<title></title>
	<link rel="stylesheet" href="css/_signup.css">
	<script src="js/myfile.js"> </script>

</head>
    
    <nav>
        <input type="checkbox" id="res-menu">
        <label for="res-menu">
            <i class="fas fa-bars" id="s1"></i>
            <i class="fas fa-times" id="s2"></i>
        </label>
        <img src="img/logo1.png" alt="Drive Pro">

        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Car List</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Sign Up</a></li>
            <li><a href="">Help & Support</a></li>
            <li>

                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?">
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>


            </li>
        </ul>
    </nav>

<header>

</header>
<body>

	<center>


		<div id="regform"><h1> Sign Up</h1></div> <br><br>
		<div class="form">
			<form>
			<div id="name">
				<h4 class="col">First Name</h4>
				<input class="firstname" type="text" name="first_name">	<br><br>

				<h4 class="col">Last Name</h4>
				<input class="lastname" type="text" name="last_name"><br><br>

				<h4 class="col">NIC Number</h4>
				<input class="NIC" type="text" name="Id_number"><br><br>

				<h4 class="col">Gender</h4>

					<label class="radio">
						<input class="radio-one" type="radio" name="">
						Male
						<span class="ckeckmark"> </span>
					</label>

					<label class="radio">
						<input class="radio-two" type="radio" name="">
						Female
						<span class="ckeckmark"> </span>
					</label><br><br>

				<h4 class="col">E-mail Address</h4>
				<input class="email" type="text" name="email_adr"><br><br>

				<h4 class="col">Phone Number</h4>
				<input class="phone" type="text" name="p_number"><br><br>


				<h4 class="col">Password</h4>
				<input class="password1" type="text" name="pass_no1"><br><br>

				<h4 class="col">Retype Password</h4>
				<input class="password2" type="text" name="pass_no2"><br><br>

				<h5>If you are already registered</h5>
				<button id="butn1">Sign in</button>


			</div>
			</form>
		</div>
	</center>

</body>
</html>