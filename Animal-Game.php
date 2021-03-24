<?php 
    session_start();
    if(!isset($_SESSION["score"]))
        $_SESSION["score"] = 0;
    if(!isset($_SESSION["outOf"]))
        $_SESSION["outOf"] = 0;
?>

<!DOCTYPE html>
<html>

    <head>
        <style>
            h1, h2 {
            text-align: center;
            }

            img {
            height: 300px;
            }

            div {
            text-align: center;
            padding: 10px;
            }

            input {
            margin: 5px;
            }

            .correct {
            border-color: green;
            }

            .wrong {
            border-color: red;
            }
        </style>
        <script src="script.js"></script>
    </head>

<body>
    <?php
        $user = "WaelAlghamdi";
        $pword = "w12345w";
        $dbase = "animalgame";
        $table = "images";

        print ("  <h1>$table</h1>\n");
        print ("  <div>\n");
        $mydb = new mysqli('localhost', $user, $pword, $dbase);
        if ($mydb->connect_error) {
            die( "Failed to connect to MySQL: " . $mydb->connect_error);
        }
        $query = "SELECT Name, Link FROM $table ORDER BY rand() LIMIT 4;";
        $result = $mydb->query($query);
        $mydb->close();
        $row = $result->fetch_assoc();
        print ("    <img id=\"picture\" src=\"$row[Link]\">\n");
        $correct_name = $row["Name"];
        print ("  </div>\n");
        print ("  <form action=\"Animal-Game.php\" method=\"post\">\n");
        print ("    <div>\n");
        print ("      <input name = \"choices\" class=\"\" type=\"button\" value=\"$correct_name\" onclick=\"buttonClicked(this)\">\n");
        while ($row = $result->fetch_assoc()) {
            print ("      <input name = \"choices\" class=\"\" type=\"button\" value=\"$row[Name]\" onclick=\"buttonClicked(this)\">\n");
        }
        print ("<script>\n");
        print ("  answer = \"$correct_name\";\nswitchAnswers();\n");
        print ("</script>\n </div>");
    ?>

    <div>
        <input id="show" type="button" value="Answer" onClick="showHint()">
        <?php
            print("<span id=\"score\" name=\"score\">".$_SESSION["score"]."</span> / <span id=\"outOf\">".$_SESSION["outOf"]."</span>");
            $_SESSION["outOf"]++;
        ?>
        <input id="next" type="button" value="Next" onClick="location.reload()">
    </div>
    </form>
    
    <h2 id="hint"></h1>
</body>

</html>

