<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="UTF-8">
		<title>KillerApp</title>
		<script src="http://akortmann.indermache.net:1337/socket.io/socket.io.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script>
			var socket = io.connect('http://akortmann.indermache.net:1337');
			socket.on('push', function (data) {
				console.log(data);

				var color = 'black';
				if($('#name').val() == data.name){
					color = 'red';
				}else{
					color = 'blue';
				}

				var chatNode = '<b style="color: '+color+';"><i>'+data.name+' schreibt:</i></b> '+data.msg+'<br/>';
				$('#msgContainer').append(chatNode);

			});

			$(document).ready(function () {
				$('#submit').click(function (e) {
					var name = $('#name').val();
					var msg = $('#msg').val();
					$.post( "send.php", { name: name, msg: msg } );
				});
			});
		</script>

	</head>
	<body style="width: 100%">
		<div style="width: 500px; padding: 50px; margin: 50px auto; border: 1px solid #cecece;">
			<h1>Checker Chat</h1>
			<div id="msgContainer" style="width: 480px; height: 300px; border: 1px solid #cecece; overflow-y: scroll; padding: 10px; margin-bottom: 50px;"></div>

			<label>Name</label><br/>
			<input type="text" id="name" name="name" value="" placeholder="Name.."/><br/><br/>

			<label>Nachricht</label><br/>
			<textarea name="msg" id="msg" style="width: 500px; height: 130px;"></textarea><br/><br/>

			<button id="submit">hau raus!</button>
		</div>
	</body>
</html>