<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/table.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/rental.css">
    <link rel="stylesheet" href="css/rental.css">
</head>


<body style="background-color: #E1B68D;">
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
            <div class="div-table-col" style="border: none;">
                <form action="./action/contactUs.php" method="POST" style="padding-right:8%;border: none;">
                    <div class="pl-20 pl-10" style="border: none;">
                        <br />
                        <h1 style="font-size: 45px;" class="text-dark ">HELLO! <span class="text-decoration-undeline text-dark">DRIVE Pro<br style="line-height: 0px;" /></span><span class="fw-normal" style="font-size: 25px; letter-spacing:26px; line-height:0px;">CONTACT US</span></h1>
                        <br /><br /><br />
                        <div>
                            <span class="text-label">Full Name</span>
                            <input name="fullName" style="background-color: white;" type="text" required>
                        </div>
                        <div style="padding-top:6%">
                            <span class="text-label">Telephone Number</span>
                            <input name="tel" maxlength="10" oninput="validtel()" id="tel" style="background-color: white;" type="text" required>
                            <small id="telStatus"></small>
                        </div>
                        <div style="padding-top:6%">
                            <span for="psw" class="text-label">Message</span><br />
                            <textarea name="Message" rows="13" style=" width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; margin-top: 6px; margin-bottom: 16px; resize: vertical;"></textarea>
                        </div>
                        <div style="text-align: end; padding-top:5%;">
                            <input type="submit" class="btn-cuntactUs" value="submit" name="submit" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="div-table-col">
                <img src="https://i.imgur.com/AlubETR.jpg" width="100%" />
            </div>
        </div>
        <div style="background-color: #806C59;">
            <table style="width:100%; text-align:center;padding-top:1%;padding-bottom:1%">
                <tr>
                    <td><span><i class="bi bi-house" style="font-size:40px;color:whitesmoke;"></i><span style="color:whitesmoke; font-size:18px;">&nbsp;&nbsp;34, Galle, Sri Lanka</span></span></td>
                    <td><span><i class="bi bi-telephone" style="font-size:40px;color:whitesmoke;"></i><span style="color:whitesmoke; font-size:18px;">&nbsp;&nbsp;+94 71 1011 809</span></span></td>
                    <td><span><i class="bi bi-envelope" style="font-size:40px;color:whitesmoke;"></i><span style="color:whitesmoke; font-size:18px;">&nbsp;&nbsp;gocabs@gmail.com</span></span></td>
                </tr>
            </table>
            <div class="bg-white" style="margin: 0%; padding:0% 0% 5% 0%; ">
                <div style="padding: 5% 13% 0% 13%;">
                    <h2 style="text-align: center;">Your Sent Messages</h2>
                    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for Message..">

                    <table id="myTable">
                        <tr class="header">
                            <th style="width:10%;">ID</th>
                            <th style="width:50%;">Message</th>
                            <th style="width:30%;">Sent Date</th>
                            <th style="width:10%;">Action</th>
                        </tr>
                        <?php

                        $uname = $_COOKIE["cookie_uname"];
                        #echo $uname;
                        include './dbConnetion.php';
                        $sql = "select * from contactus where userName='$uname'";
                        $result = $conn->query($sql);
                        if ($result->num_rows > 0) {
                            // output data of each row
                            while ($row = $result->fetch_assoc()) {
                                $productId = $row["id"];
                        ?>
                                <tr>
                                    <td><?php echo $row["id"]; ?></td>
                                    <td><?php echo $row["Message"]; ?></td>
                                    <td><?php echo $row["timeStamp"]; ?></td>
                                    <td>
                                        <a href="./action/deleteAction.php?id=<?php echo $row["id"];  ?>">
                                            <i class="bi bi-archive-fill" style="color:red;"></i>
                                        </a>
                                        <a href="editMessage.php?id=<?php echo $row["id"];  ?>">
                                            <i class="bi bi-pencil-square" style="color:green;"></i>
                                        </a>
                                    </td>
                                </tr>
                        <?php
                            }
                        } else {
                        }
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <script>
        function myFunction() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    </script>
    <script>
        function validtel() {
            var tel = document.getElementById("tel").value;

            if ((tel.length) == 10) {
                document.getElementById("telStatus").innerHTML = '';
            } else {
                document.getElementById("telStatus").innerHTML = 'Invalid Telephone Number';
            }
        }
    </script>
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