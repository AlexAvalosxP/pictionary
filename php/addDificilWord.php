<?php 

	header('Content-Type: text/html; charset=utf-8');

	$con = new mysqli('localhost','root','','pictionary');

	$word = $_POST['word'];

	$newWord = utf8_decode($word);

	$queryLink = "INSERT INTO dificil VALUES ('$newWord');";
	$res = $con->query($queryLink);

	if ($res)
	{
		echo "INSERT exitoso";
	}
	else
	{
		echo "INSERT fallido";
	}

	$con->close();

 ?>