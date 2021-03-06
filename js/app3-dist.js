/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
 // import "@babel/polyfill";
// import "core-js/stable";
// import "regenerator-runtime/runtime";

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var picsumID;
var url;
var mainImage = document.getElementById('image');
var imgSwitch = document.getElementById('img-switch');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function ValidateEmail(inputText) {
  if (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(document.getElementById("email").value)) {
    return true;
  }

  alert("Please enter a valid email address");
  return false;
} //function that is called back to create new url when user
//clicks new image button


function switchImage(newURL) {
  document.getElementById('image').src = newURL;
}

var rando;

function generateImage() {
  axios.get('https://picsum.photos/200').then(function (response) {
    picsumID = response.headers['picsum-id'];
    console.log(picsumID);
    url = 'https://picsum.photos/id/' + picsumID + '/200';
    mainImage.src = url;
    console.log(url);
  })["catch"](function (error) {
    alert(error);
  });
} // function generateImage() {
//   axios.get("https://picsum.photos/200").then(function (response) {
//     console.log(response.headers['picsum-id']);
//     mainImage.src = "https://picsum.photos/200";
//     mainImage.style.opacity = 1;
//   }).catch(function (error) {
//     alert(error);
//     mainImage.src = "img\romson-preechawit-Vy2cHqm0mCs-unsplash.jpg";
//     mainImage.style.opacity = 1;
//   });
// } //async image randomiser


document.addEventListener('DOMContentLoaded', function () {
  console.log('first image');
  generateImage();
});
document.getElementById('img-switch').addEventListener('click', function () {
  generateImage();
}); // var EmailPic = (function (){
//   function EmailPic(email, pic) {
//     //_classCallCheck(this, EmailPic);
//     this.email = email;
//     this.pic = pic;
//   }
//   return EmailPic;
// });

var EmailPic = function EmailPic(email, pic) {
  _classCallCheck2(this, EmailPic);

  this.email = email;
  this.pic = pic;
};

var profiles = [];
var profileDivs = []; //recieves user email input

document.getElementById('submit').addEventListener('click', function () {
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
});
/******/ })()
;