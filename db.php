<?php
	//connect to database (quick & dirty - better practice is to use variables instead of hard-coding)
	$db = mysql_connect("localhost", "root", "root");

	if (!$db){
		die('Could not connect');
	} else {
		mysql_select_db("tweetbox", $db);
	}

	//echo "Connection success!";


?>