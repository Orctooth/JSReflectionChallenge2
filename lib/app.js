"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$("#email").submit(function (e) {
  e.preventDefault();
});

function ValidateEmail(inputText) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)) {
    return true;
  }

  alert("Please enter a valid email address");
  return false;
}

var rando;
var retrieve; //function that is called back to create new url when user
//clicks new image button

function switchImage() {
  rando = Math.floor(Math.random() * 1000) + 1;
  var newURL = "https://picsum.photos/id/".concat(rando, "/200");
  document.getElementById('image').src = newURL;
  return newURL;
}

function generateImage() {
  var imgReq = new XMLHttpRequest();
  imgReq.open("GET", newURL);
  var myPromise = new Promise(function (myResolve, myReject) {
    switchImage();
    setTimeout(function () {
      if (newURL) {
        myResolve('image retrieved');
      } else {
        myReject('image not retrieved');
      }
    }, 1000); //myReject( alert('image request failed please try again'));  // when error
  });
  myPromise.then(function (value) {
    switchImage();
  }).catch(function (error) {
    alert('image request failed please try again');
  });
} //async image randomiser


document.getElementById('img-switch').addEventListener('click', function () {
  generateImage();
});

var EmailPic = function EmailPic(email, pic) {
  _classCallCheck(this, EmailPic);

  this.email = email;
  this.pic = pic;
};

var profiles = [];
var profileDivs = [];

function submission() {
  var newEmail = document.getElementById("email").value;

  if (ValidateEmail(newEmail) === false) {
    return;
  }

  var newPic = document.getElementById("image").src;

  for (var i = 0; i < profiles.length; i++) {
    if (newEmail === profiles[i].email) {
      var img2 = document.createElement("img");
      img2.src = newPic;
      var x = document.getElementById('submissions').querySelectorAll("div");
      x[i].append(img2);
      generateImage();
      return;
    }
  }

  var emailPic = new EmailPic(newEmail, newPic);
  profiles.push(emailPic);
  var div = document.createElement("div");
  var h3 = document.createElement("h3");
  var img = document.createElement("img");
  img.src = newPic;
  h3.innerHTML = newEmail;
  div.append(h3);
  div.append(img);
  document.querySelector('#submissions').append(div);
  profileDivs.push(div);
  generateImage();
} //recieves user email input


document.getElementById('submit').addEventListener('click', function () {
  submission();
});