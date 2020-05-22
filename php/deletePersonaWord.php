<?php 

	header('Content-Type: text/html; charset=utf-8');

	$con = new mysqli('localhost','root','','pictionary');

	$word = $_POST['word'];

	$newWord = utf8_decode($word);

	$queryLink = "DELETE FROM persona WHERE palabra ='$newWord'";
	$res = $con->query($queryLink);

	if ($res)
	{
		echo "DELETE exitoso";
	}
	else
	{
		echo "DELETE fallido";
	}

	$con->close();

 ?>