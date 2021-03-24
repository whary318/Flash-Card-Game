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
    $query = "SELECT Name FROM $table WHERE id != $target ORDER BY rand() LIMIT 4;";
    if ($result = $mydb->query($query)) {
      $row = $result->fetch_assoc();
      $names = $row["Name"];
      while ($row = $result->fetch_assoc())
        $names .= "," . $row["Name"];
      print ($names);
    } else {
      print ("query error");
    }
    $mydb->close();
?>
