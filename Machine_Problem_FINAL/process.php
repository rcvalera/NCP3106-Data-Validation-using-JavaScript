<?php
	require "DBconnect.php";
		if(isset($_POST['register'])){
			$usernmame = $_POST['user-name'];
			$password = $_POST['password'];
			
			$con = config::connect();
			$query = "SELECT * FROM databasae2 WHERE Username = :username AND Password = :password";
			$statement = $con -> prepare($query);
			$statement -> execute(
				array(
				'username' => $_POST['user-name'],
				'password' => $_POST['password']
				)
		);
	$count = $statement -> rowCount();
	if ($count > 0){
		header('location:new.html');
	} 
	else {
		echo '<script>
			alert("wrong Username/Password. Please Try Again Later.");
			windows.history.go(-1);
			</script>';
		}
	}
?>