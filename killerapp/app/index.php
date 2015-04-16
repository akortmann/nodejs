<?php


    if(isset($_GET['submit'])){

        if(trim($_POST['name']) != "" && trim($_POST['penisSize'] != "")){

            $msg = '<h1>'.$_POST['name']." hat einen ".$_POST['penisSize']."cm langen Penis!</h1>";

            //set POST variables
            $url = 'http://localhost:9090/push/send/';
            $fields = array(
                'name' => urlencode($_POST['name']),
                'penisSize' => urlencode($_POST['penisSize'])
            );

            $fields_string = "";
            //url-ify the data for the POST
            foreach($fields as $key=>$value) {
                $fields_string .= $key.'='.$value.'&';
            }

            rtrim($fields_string, '&');

            //open connection
            $ch = curl_init();

            //set the url, number of POST vars, POST data
            curl_setopt($ch,CURLOPT_URL, $url);
            curl_setopt($ch,CURLOPT_POST, count($fields));
            curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);

            //execute post
            $result = curl_exec($ch);

            //close connection
            curl_close($ch);

        }else{
            $msg = "<h1>Pimmel.. gib was ein!</h1>";
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
    <script src="http://localhost:1337/socket.io/socket.io.js"></script>
<script>
    var socket = io.connect(\'http://akortmann.indermache.net:1337\');
//    socket.on(\'hello\', function(data) {
//        console.log(\'Ohh \'+data);
//    });
</script>
</head>
<body>
<div class="notice">'.$msg.'</div>
<form action="index.php?submit=true" method="POST">
    <input type="text" name="name" value="" placeholder="Name.."/>
    <input type="text" name="penisSize" value="" placeholder="Penis-Size in cm .. e.g. 36"/>
    <input type="submit" name="submit" value="hau raus!" />
</form>
</body>
</html>';

echo $content;
die();