<?php
//add to database
	

	//echo $_POST["Messages"];

	//echo json_encode($messages);

	if ($_SERVER['REQUEST_METHOD'] === 'POST'){
		$messages = strip_tags($_POST["Messages"]);

		require("db.php");

		mysqyl_query("START TRANSACTION");
		mysqyl_query("INSERT INTO messages (Messages) VALUES ('$messages')");
		mysqyl_query("COMMIT");

		mysql_close($db);
	}

?>