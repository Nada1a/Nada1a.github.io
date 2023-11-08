<html>
    <body>
        <?php
        $x=$_POST["x"];
        $y=$_POST["y"];
        ?>
        <h3>
            Hello, <?php echo $_POST["x"]; ?>
            <br>
            your comment: <?php echo $_POST["y"]; ?>
            <br>
            the number of charcter in your comment:<?php echo strlen($y);?>
</h3>
</body>
</html>