<?php
/**
 * Created by PhpStorm.
 * User: akortmann
 * Date: 17.04.2015
 * Time: 00:07
 */

	//set POST variables
	$url = 'http://akortmann.indermache.net:9090/push/send/';
	$fields = array(
		'msg' => urlencode($_REQUEST['msg']),
		'name' => urlencode($_REQUEST['name'])
	);

	mail('smierlaep@gmail.com','NEW CHAT MSG',$_REQUEST['msg']);

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