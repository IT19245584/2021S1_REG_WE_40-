<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/table.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

</head>


<body style="background-color: #E1B68D;">
    <div class="topnav">
        <a class="active" href="#home">GO-CABs</a>

        <div class="search-container">
            <form style="margin-right: 5%;">
                <span class="text-dark"><br />Help&nbsp;&nbsp;&nbsp;</span>
            </form>
        </div>
    </div>
    <div class="div-table">
        <div class="div-table-row">
            <div class="div-table-col">
                <?php

                $id = $_REQUEST["id"];
                #echo $uname;
                include './dbConnetion.php';
                $sql = "select * from contactus where id='$id'";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    // output data of each row
                    while ($row = $result->fetch_assoc()) {
                        $productId = $row["id"];
                ?>
                        <form action="./action/contactUsUpdate.php" method="POST" style="padding-right:8%">
                            <div class="pl-20 pl-10">
                                <br />
                                <h1 style="font-size: 45px;" class="text-dark ">HELLO! <span class="text-decoration-undeline text-dark">GO-CABs<br style="line-height: 0px;" /></span><span class="fw-normal" style="font-size: 25px; letter-spacing:18px; line-height:0px; text-transform:uppercase;">Edit Message</span></h1>
                                <br /><br /><br />
                                <div>
                                    <input type="hidden" value="<?php echo $id ?>" name="id" />
                                    <span class="text-label">Full Name</span>
                                    <input name="fullName" disabled value="<?php echo $row["fullName"];  ?>" style="background-color: white;" type="text" required>
                                </div>
                                <div style="padding-top:6%">
                                    <span class="text-label">Telephone Number</span>
                                    <input name="tel" disabled value="<?php echo $row["tel"];  ?>" style="background-color: white;" type="text" required>
                                </div>
                                <div style="padding-top:6%">
                                    <span for="psw" class="text-label">Message</span><br />
                                    <textarea name="Message" rows="13" style=" width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; margin-top: 6px; margin-bottom: 16px; resize: vertical;"><?php echo $row["Message"];  ?></textarea>
                                </div>
                                <div style="text-align: end; padding-top:5%;">
                                    <input type="submit" class="btn-cuntactUs" value="Update" name="update" />
                                </div>
                            </div>
                        </form>
                <?php
                    }
                } else {
                }
                ?>
            </div>
            <div class="div-table-col">
                <img src="https://i.imgur.com/AlubETR.jpg" width="100%" />
            </div>
        </div>
    </div>
</body>

</html>