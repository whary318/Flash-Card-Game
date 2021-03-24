<?php
    $user = "WaelAlghamdi";
    $pword = "w12345w";
    $dbase = "AnimalGame";
    $table = "images";
    $mydb = new mysqli('localhost', $user, $pword, $dbase);
    if ($mydb->connect_error) {
      die( "Failed to connect to MySQL: " . $mydb->connect_error);
    }
    $target = $_GET['row'];
    $query = "SELECT Name, Link FROM $table WHERE id = $target";
    if ($result = $mydb->query($query)) {
      $row = $result->fetch_assoc();
      $reply = $row["Name"] . "," . $row["Link"];
      print ($reply);
    } else {
      print ("query error,");
    }
    $mydb->close();
?>
