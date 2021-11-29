function validate()
        {
            var firstname=document.getElementById("firstname");
            var address=document.getElementById("address");
            var zipcode=document.getElementById("code");
            var username=document.getElementById("uname");
            var emailcheck=document.getElementById("email").value;
            var regx =/^[a-zA-Z0-9.! #$%&'+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            var text =/^[a-zA-Z]+$/;
            var text1 =/^[a-zA-Z]{3}[a-zA-Z0-9]+$/;
            var text2 =/^[0-9]{6}$/;
            if(firstname.value.trim()==""||address.value.trim()==""||username.value.trim()==""||zipcode.value.trim()==""||email.value.trim()=="")
            {
                alert("No Blank Values Allowed!");
                return false;
            }
            if(!text.test(firstname.value))
            {
                alert("Only Alphabets Are Allowed In First Name!");
                return false;
            }
            if(!text2.test(zipcode.value))
            {
                alert("Only 6-Digit Number Is Allowed In Zip Code!");
                return false;
            }
            if(!text1.test(username.value))
            {
                alert("Only Alphabets,Numbers Are Allowed In Username And First 3 Letters Should Be Alphabets!");
                return false;
            }
            if(username.value.trim().length<6||username.value.trim().length>8)
            {
                alert("Username Should Contain Values From 6 to 8!");
                return false;
            }
             if(!regx.test(emailcheck))
            {
                alert("Invalid Email!");
                return false;
            }
           else
            {
                return true;
            }
        }