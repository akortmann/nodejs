<?php

    if(isset($_POST['submit'])){

        if(trim($_POST['name']) != "" && $_POST['penisSize'] != ""){
            $msg = $_POST['name']." hat einen ".$_POST['penisSize']." Penis!";
        }else{
            $msg = "Pimmel.. gib was ein!";
        }

    }else{
        $msg = "";
    }

    $content = '
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>KillerApp</title>
</head>
<body>
<div class="notice">'.$msg.'</div>
<form action="index.php?submit=true" method="POST">
    <input type="text" name="name" value="" placeholder="Name.."/>
    <input type="text" name="penisSize" value="" placeholder="Penis-Size in cm .. e.g. 36"/>
    <input type="submit" value="hau raus!" />
</form>
</body>
</html>';

echo $content;
die();