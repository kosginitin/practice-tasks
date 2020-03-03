function login()
	{
		var uname = document.getElementById("username-field").value;
		var pwd = document.getElementById("password-field").value;
		if ( uname == "kosginitin" && pwd == "Sahithi12#"){
            
            window.open('successful1.html'); 
            
            }
            else{
                alert ("invalid user name or password");
            }
        }        
        