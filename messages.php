<?php

	require("db.php");

	$result = mysql_query('SELECT * FROM messages ORDER BY ID');

	if (!$result){
		die("NOOOO".mysql_error());
	} 

	$messages = array();

	while ($row = mysql_fetch_assoc($result)){
		//echo $row['Message']."<br>";
		$messages[] = $row;
	}

	echo json_encode($messages);

	mysql_close($db);

?>