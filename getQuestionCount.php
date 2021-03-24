<?php
    $user = "WaelAlghamdi";
    $pword = "w12345w";
    $dbase = "AnimalGame";
    $table = "images";
    $mydb = new mysqli('localhost', $user, $pword, $dbase);
    if ($mydb->connect_error) {
      die( "Failed to connect to MySQL: " . $mydb->connect_error);
    }
    // $query = "SELECT name FROM $table ORDER BY rand() LIMIT 1;";
    $query = "SELECT count(*) AS count FROM $table;";
    $result = $mydb->query($query);
    $mydb->close();
    $row = $result->fetch_assoc();
    $count = $row["count"];
    print ($count);
?>
