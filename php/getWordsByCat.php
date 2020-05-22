<?php 

	header('Content-Type: text/html; charset=utf-8');

	$con = new mysqli('localhost','root','','pictionary');

	$cat = $_POST['cat'];

	switch ($cat) {
		case 'a':
			# code...
			$query = "SELECT * FROM accion";
			break;

		case 'o':
			# code...
			$query = "SELECT * FROM objeto";
			break;

		case 'p':
			# code...
			$query = "SELECT * FROM persona";
			break;

		case 'd':
			# code...
			$query = "SELECT * FROM dificil";
			break;

		case 'e':
			# code...
			$query = "SELECT * FROM especial";
			break;
		
		default:
			# code...
			break;
	}

	$res = $con->query($query);

	$arreglo = array();

	while($wrd = $res->fetch_object()) {
		array_push($arreglo, array(
			"word"=>utf8_encode($wrd->palabra)
		));
	}

	echo json_encode($arreglo);

	$con->close();

 ?>