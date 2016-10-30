<?php
	if ($_SERVER['REQUEST_METHOD'] === 'POST'){
		$messages = mysql_real_escape_string(strip_tags($_POST["Messages"])); //sanitize your inputs

		require("db.php");

		mysql_query("START TRANSACTION");
		mysql_query("INSERT INTO messages (Messages) VALUES ('$messages')");
		mysql_query("COMMIT");

		mysql_close($db);
	}

