function validateForm(){
var r=true;
var name=document.getElementById('fname').value;
var uname=document.getElementById('uname').value;
var p=document.getElementById('password').value;
var c=document.getElementById('password2').value;
var patten1=/^[A-Za-z]+$/;

//name only letter
if(!(x.match(patten1)))
{ document.getElementById('m1').innerHTML="only letter is allowed";
document.getElementById('name').style.borderColor='red';
    r=false;
}
else
{ document.getElementById('m1').innerHTML=" ";
    document.getElementById('name').style.borderColor='black';
}
//Uname not empty
if ((uname== " ") || (uname===""))
{document.getElementById('m2').innerHTML="password must be filled out";
document.getElementById('uname').style.borderColor='red';
r=false;
}
else
{ document.getElementById('m1').innerHTML=" ";
    document.getElementById('name').style.borderColor='black';
}
//pass not same uname
if(p=="")
{
document.getElementById('m3').innerHTML="password must be filled out";
document.getElementById('password').style.borderColor='red';
r=false;}

else if(uname==p)
{ document.getElementById('m3').innerHTML="your password must not be the same of your username";
   r=false;
}
//pass 6-10 length
else if( (password.length<6)||(password>10))
{document.getElementById('m3').innerHTML="password should be 6-10lebgth";
r=false;}

//pass ssmall-capital
else if(!(password.match(patten1)))
{document.getElementById('m3').innerHTML="password should at lest one small letter and one capital letter and one digit";
r=false;}
else
{
document.getElementById('m3').innerHTML=" ";
document.getElementById('password').style.borderColor='black';}

//cpass = pass
if(password2!=password)
{
    document.getElementById('m4').innerHTML="your password does not match";
    r=false;
}
return r;
}