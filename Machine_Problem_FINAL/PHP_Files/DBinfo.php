<?php
	require "DBconnect.php";
		if(isset($_POST['submit'])){
			$usernmame = $_POST['user-name'];
			$password = $_POST['psw'];
			
			$con = config::connect();
			$query = "SELECT * FROM databasae2 WHERE Username = :username AND Password = :password";
			$statement = $con -> prepare($query);
			$statement -> execute(
				array(
				'username' => $_POST['user-name'],
				'password' => $_POST['psw']
				)
		);
	if ($count > 0){
	$count = $statement -> rowCount();
		header('location:SuccessPage.html');
	} 
	else {
		echo '<script>
				alert("Invalid Username/Password. Please Try Again.");
			</script>';

		echo '<script>
				window.history.go(-1);
			</script>';
		}
	}
?>