const user = {
    name : "krishna",
    course : "BCA",
    Phoneno : 9580020611,
    isLoggedIn : true,
    email : "kishna@gmail.com"

    
}

//console.log(user);

user.isEmailAttached = true;

//console.log(user);

user.greet = () => console.log("hello pgl");



//console.log(user.greet());


///for loop

for ( let n in user){
    console.log(n , user[n]);
}



