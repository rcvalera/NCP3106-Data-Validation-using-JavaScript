 function validateMyForm () {

    var lname = document.getElementById('lastname').value;
    var fname = document.getElementById('firstname').value;
    var mname = document.getElementById('mid').value;
    var stnum = document.getElementById('studnum').value;
    var yrlvl = document.getElementById('yearlevel').value;
    var mobnum = document.getElementById('mobileNum').value;
    var uemail = document.getElementById('emailAdd').value;
    var birthdate = document.getElementById('bday').value;
    var uname = document.getElementById('username').value;
    var pword= document.getElementById('password').value;
    var pwordrpt = document.getElementById('passwordRpt').value;
    var term = document.getElementById('checkb').value;


    var valid =1;
    var letters = /^[A-Za-z ]+$/;
    var numbers = /^[-+]?[0-9]+$/;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    var mailformat = /[@]ue.edu.ph/gi;
    var unameformat = /^[A-Za-z_-]{8,15}$/;
    var pwordformat = /^[0-9a-zA-Z]{8,20}$/;
    var stdnumbers = /^[0-9]{11}$/;
    var mobnumber = /^[-+]?[0-9]{10}$/;
    var midformat = /^[A-Za-z]{1,2}$/;
   
   
    
    

    if(lname=="" && valid==1) {
        alert('Please enter your Last Name');

        valid=0;
        

    } 


    if(!lname.match(letters) && valid==1) {
        alert('Accept letters only!');

        valid=0;
    }

    if(fname=="" && valid==1){
        alert('Please enter your First Name');

        valid=0;

    } 


    if(!fname.match(letters) && valid==1) {
        alert('Accept letters only!');

        valid=0;

    } 

    if(mname=="" && valid==1){
        alert('Please enter your Middle Initial');

        valid=0;

    } 


    if( !mname.match(midformat) && valid==1) {

        alert(' Accept letters only and Max of 2 characters only!');
        
        valid=0;


    }  


    if (stnum=="" && valid==1) {

        alert('Please enter your Student Number');

        valid=0;

    } 

    if (!stnum.match(stdnumbers) && valid==1) {
        alert('Input numbers only! Must be 11 characters long!');

        valid=0;


    }


    if(birthdate=="" && valid==1) {

        alert('Please enter your Birthdate');

        valid=0;
    }

  


    if(mobnum=="" && valid==1) {
        alert('Please enter your Mobile Number');

        valid=0;

    }  

    if(!mobnum.match(mobnumber) && valid==1) {
        alert('Accepts number only! Maximum of 10 numbers!');

        valid=0;


    } 

    if(uemail=="" && valid==1) {
        alert('Please enter your Email');

        valid=0;

    }  

    if(!uemail.match(mailformat) && valid==1) {
        alert('Please enter a valid email! Must be in the format email@ue.edu.ph');

        valid=0;

    } 


    if (uname=="" && valid==1) {
        alert('Please enter username');

        valid=0;

    }

    if (!uname.match(unameformat) && valid==1) {
        alert('Invalid username format! Must contain between 8 to 15 chracters only!');


        valid=0;
    } 


    if (pword=="" && valid==1) {
        alert('Please enter password');

        valid=0;
    }

    if (!pword.match(pwordformat)&& valid==1) {
        alert('Invalid password format! Must contain between 8 to 20 chracters only!');

        valid=0;
    }

    if (pwordrpt=="" && valid==1) {
        alert('Please re-type password');

        valid=0;
    }

    if (!pwordrpt.match(pword) && valid==1) {
        alert('Password mismatch!');
        valid=0;

    }

    if (document.getElementById('checkb').checked) {
        valid=true;
    } else {
        
        return false;
    }






    if(valid == 1) {
        return true;

    } else {
        return false;
    }
    

 }