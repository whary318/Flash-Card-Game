
<?php session_start(); ?>
<!DOCTYPE html>
<html>
<body>
<?php
// remove all session variables
    session_unset();
    echo "Sesstion variables were reset.";
?>
</body>
</html> 