<?php

$last_name = $_POST['last-name'];
$first_name = $_POST['first-name'];
$mid_initial = $_POST['mid-initial'];
$studnumber = $_POST['stud-number']; 
$year_level = $_POST['year-level'];
$birthday = $_POST['birthday'];
$mobnumber = $_POST['mobile-num']; 
$email = $_POST['ue-email'];
$username = $_POST['user-name'];
$password = $_POST['pssword']; 
$passwordRepeat = $_POST['passwordrepeat']; 


	if ($password == $passwordRepeat ) {
		insertRecord($last_name,$first_name,$mid_initial,$studnumber,$year_level,$birthday,$mobnumber,$email,$username,$password);
	}

	else {
		echo '<script>
  				alert("Passwrod Mismatch!");
					</script>';

		echo '<script>
				window.history.go(-1);
					</script>';
		}



function insertRecord($last_name,$first_name,$mid_initial,$studnumber,$year_level,$birthday,$mobnumber,$email,$username,$password) {
 try {
 require 'openDB.php';
     
  $sql = "INSERT INTO databasae2 (lastName, firstName, middleInitial, studNumber, YearLevel, Birthday, Mobile, Email, Username, Password) VALUES (?,?,?,?,?,?,?,?,?,?)";
     
     
  // use exec() because no results are returned 
     $conn->prepare($sql)->execute([$last_name,$first_name,$mid_initial,$studnumber,$year_level,$birthday,$mobnumber,$email,$username,$password]);

  echo '<script>
  				alert("Congratulations, you are now registered!");
					</script>';
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
}

?>