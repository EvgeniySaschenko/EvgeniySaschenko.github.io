<?php
	header('Access-Control-Allow-Origin: *');
	define(DB_HOST, 'dvm02.mysql.tools');
	define(DB_NAME, 'dvm02_podlogkafo');
	define(DB_CHARSET, 'utf8');
	define(DB_USER, 'dvm02_podlogkafo');
	define(DB_PASS, 'v8nlzw7d');

	$db= new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset='.DB_CHARSET, DB_USER, DB_PASS);

	function select__production(){
		global $db;
		$sql = 'SELECT
							*
						FROM production
						ORDER BY priority ASC, diameter ASC';
		$query= $db->query($sql, PDO::FETCH_ASSOC);
		return $query->fetchAll();
	}
 
 	echo json_encode( select__production() );
?>