function validate()
        {
            var input=document.getElementById("input");
            var emailcheck=document.getElementById("email").value;
            var regx =/^[a-zA-Z0-9.! #$%&'+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            var text =/^[a-z0-9]+$/i;
            if(input.value.trim()=="")
            {
                alert("No Blank Values Allowed!");
                return false;
            }
            if(!text.test(input.value))
            {
                alert("Not A Validate Alphanumeric Input!");
                return false;
            }
            if(input.value.trim().length<6 || input.value.trim().length>8)
            {
                alert("Length Of The TextInput Should Be From 6 to 8!");
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