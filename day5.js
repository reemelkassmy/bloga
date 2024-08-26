function login()
{
    event.preventDefault();
    var user =document.getElementById('username');
    var pass = document.getElementById('password');
    if (user.value.length<7){
        user.style.border="2px red solid";

        
        return;
    }
    else{
        user.style.border="2px  green solid"

    }
    localStorage.setItem('user',JSON.stringify({username:user.value,password:pass .value}));



                // the same

//     localStorage.setItem('username',user.value);
// localStorage.setItem('password',pass .value);
}


