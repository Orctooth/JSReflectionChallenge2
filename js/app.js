function ValidateEmail(inputText){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)){
    return (true)
    }
    alert("Please enter a valid email address")
    return (false)
}




//function that is called back to create new url when user
//clicks new image button
function switchImage(newURL) {
    document.getElementById('image').src= newURL; 
}
let rando;

function generateImage(){
    let myPromise = new Promise(function(myResolve, myReject) {
        myResolve(); // when successful
        myReject();  // when error
    });
    
    myPromise.then(
        function(value) {
            rando = (Math.floor(Math.random() * 1000)+ 1).toString();
            let newURL = 'https://picsum.photos/id/' + rando + '/'+'200';
             switchImage(newURL);
            },
        function(error) { alert('image request failed please try again')}
    );
}


//async image randomiser
document.getElementById('img-switch').addEventListener('click', () =>{
    generateImage();
});

class EmailPic{
    constructor(email, pic){
        this.email = email;
        this.pic = pic;
    }
    
}

let profiles= [];
let profileDivs =[];
//recieves user email input
document.getElementById('submit').addEventListener('click', () =>{
    
    let newEmail= document.getElementById("email").value;
    if(ValidateEmail(newEmail)===false){
        return;
    }
    let newPic= document.getElementById("image").src;

    for(let i = 0; i < profiles.length; i++){
        if(newEmail === profiles[i].email){
            let img2 = document.createElement("img");
            img2.src = newPic;
            let x = document.getElementById('submissions').querySelectorAll("div");
            x[i].append(img2);
            generateImage();
            return;
        }
    }

    let emailPic = new EmailPic(newEmail, newPic);
    profiles.push(emailPic);

    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    img.src = newPic;
    h3.innerHTML = newEmail;
    div.append(h3);
    div.append(img);
    
    document.querySelector('#submissions').append(div);
    profileDivs.push(div);
    

    generateImage();
});