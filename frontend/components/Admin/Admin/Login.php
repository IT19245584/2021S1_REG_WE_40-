<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/rental.css">
</head>


<body style="background-color: #fffcf7;">
    <nav>
        <input type="checkbox" id="res-menu">
        <label for="res-menu">
            <i class="fas fa-bars" id="s1"></i>
            <i class="fas fa-times" id="s2"></i>
        </label>
        <img src="img/logo1.png" alt="Drive Pro">

        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="drive proCar List.html">Car List</a></li>
            <li><a class="active" href="contactUs.php">Contact Us</a></li>
            <li><a href="signup.html">Sign In / Sign Up</a></li>
            <li><a href="help & support.html">Help & Support</a></li>
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

    <div class="div-table">
        <div class="div-table-row">
            <div class="div-table-col">
                <form action="./action/loginAction.php" method="POST" style="border: none;">
                    <div class="pl-20 pl-10" style="border: none;">
                        <br />
                        <h1 style="font-size: 45px;" class="text-dark ">HELLO! <span class="text-decoration-undeline text-yellow shadow-1 ">DRIVE Pro<br style="line-height: 0px;" /></span><span class="fw-normal" style="font-size: 25px; letter-spacing:26px; line-height:0px;">LOGIN PAGE</span></h1>
                        <br /><br /><br />
                        <div>
                            <span for="psw" class="text-label">User Name</span>
                            <input name="uname" type="text" required>
                        </div>
                        <div style="padding-top:6%">
                            <span for="psw" class="text-label">Password</span>
                            <input name="psw" type="password" required>
                        </div>
                        <div style="text-align: end; padding-top:5%;">
                            <input type="submit" class="btn-login" value="submit" name="submit" />
                        </div>

                        <p style="font-size: 15px; color:#686868;">I Have Not A Account <a class="text-decoration-none" href="signup.html"><span style="color:#f0a468;">Sign Up</span></a></p>

                    </div>
                </form>
            </div>
            <div class="div-table-col">
                <img src="https://i.imgur.com/dLHM7rY.jpeg" width="100%" />
            </div>
        </div>
    </div>
    <!-- Footer -->

    <div class="footer">

        <div class="footer_item_1">
            <h3>89,Main Street,Malabe</h3>
            <h3>011 1234567</h3>
            <h3>supportdrivepro@gmail.com</h3>
        </div>

        <img class="footer_item_2" src="img/logo1.png" alt="Drive Pro">


        <div class="footer_item_3">
            <h4>Social Media</h4>
            <div class="footer_item_3_icon">
                <img src="img/whatsapp.jpg">

                <img src="img/facebook.png">

                <img src="img/instegram.jpg">

            </div>


        </div>



    </div>
</body>

</html>