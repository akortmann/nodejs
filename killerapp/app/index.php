<?php


    if(isset($_GET['submit'])){

        if(trim($_POST['name']) != ""){

            $msg = $_POST['name']." schreibt: ".$_POST['nachricht'];

            //set POST variables
            $url = 'http://akortmann@indermache.net:9090/push/send/';
            $fields = array(
                'msg' => urlencode($msg)
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
            $msg = "";
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
    <script src="http://akortmann.indermache.net:1337/socket.io/socket.io.js"></script>
    <script src="http://akortmann.indermache.net:1337/socket.io/socket.io.js"></script>
<script>
    var socket = io.connect(\'http://akortmann.indermache.net:1337\');
    socket.on(\'push\', function(data) {
        console.log(data);
        var textnode = document.createTextNode(data.msg);
        document.getElementById("msgContainer").appendChild(textnode);
    });

</script>
</head>
<body>
<div id="msgContainer" style="width: 800px; height: 500px; border: 1px solid #000; overflow: scroll"></div>
<form action="index.php?submit=true" method="POST">
    <input type="text" name="name" value="" placeholder="Name.."/>
    <textarea name="nachricht"></textarea>
    <input type="submit" name="submit" value="hau raus!" />
</form>
</body>
</html>';

echo $content;
die();