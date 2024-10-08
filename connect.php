<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database= "86hospital";

        $conn = mysqli_connect($servername, $username, $password, $database);
    
        if(!$conn){
            die ("failed to connect to database" . mysqli_connect_error());
        }
        echo "connected to databse successfully";
    ?>
</body>
</html>