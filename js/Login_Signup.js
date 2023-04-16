
        const signup=document.getElementById('signup');
        signup.addEventListener("click",mysignup);
       
        function mysignup(){
            var name=document.getElementById('signname').value;
            var email=document.getElementById('signemail').value;
            var number=document.getElementById('signnumber').value;
            var password=document.getElementById('signpassword').value;
            var con_password=document.getElementById('signconfirm_password').value;
            if(name!="" && email!="" && number!="" && password!="" && con_password!=""){
                   if(password!=con_password){
                    window.location.assign('Signup.html');
                    alert("Password Didn't Match");
                    
                   }
                   else{
                    window.location.assign('login.html');
                    alert("Signup Successfulyy!!! Now you can Login");
                    
                   }
            }
        }

        const student=document.getElementById('students');
        const admin=document.getElementById('admin');
        student.addEventListener("click",mylogin1);
        function mylogin1(){
            var user1=document.getElementById("name").value;
            var password1=document.getElementById("password").value;
            if(user1=="user@gmail.com" && password1=="user1234"){ 
                window.location.assign('home.html');
                alert("login Succssesfully");
            }
            else{
                window.location.assign('login.html')
                alert("Invalid User or password");
                
            }
        }
        admin.addEventListener("click",mylogin);
        function mylogin(){
            var user=document.getElementById('name').value;
            var password=document.getElementById('password').value;
            
            
            if(user=="admin@gmail.com" && password=="admin1234"){
                
                
                window.location.assign('Admin.html');
                alert("login Succssesfully");
                
            }
            else{
                window.location.assign('login.html');
                alert("Invalid User or password");
                
            }
        }