<?php
	if ($_SERVER['REQUEST_METHOD'] === 'POST'){
		$messages = strip_tags($_POST["Messages"]);

		require("db.php");

		mysql_query("START TRANSACTION");
		mysql_query("INSERT INTO messages (Messages) VALUES ('$messages')");
		mysql_query("COMMIT");

		mysql_close($db);
	}

