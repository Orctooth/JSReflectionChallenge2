"use strict";var picsumID,url,rando,mainImage=document.getElementById("image"),imgSwitch=document.getElementById("img-switch");function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ValidateEmail(e){return!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)||(alert("Please enter a valid email address"),!1)}function switchImage(e){document.getElementById("image").src=e}function generateImage(){axios.get("https://picsum.photos/200").then((function(e){console.log(e.headers["picsum-id"]),mainImage.src="https://picsum.photos/200",mainImage.style.opacity=1})).catch((function(e){alert(e),mainImage.src="img\romson-preechawit-Vy2cHqm0mCs-unsplash.jpg"}))}document.addEventListener("DOMContentLoaded",(function(){console.log("first image"),generateImage()})),document.getElementById("img-switch").addEventListener("click",(function(){generateImage()}));var EmailPic=function(){function e(e,t){this.email=e,this.pic=t}return e},profiles=[],profileDivs=[];document.getElementById("submit").addEventListener("click",(function(){var e=document.getElementById("email").value;if(!1!==ValidateEmail(e)){for(var t=document.getElementById("image").src,n=0;n<profiles.length;n++)if(e===profiles[n].email){var i=document.createElement("img");return i.src=t,document.getElementById("submissions").querySelectorAll("div")[n].append(i),void generateImage()}var a=new EmailPic(e,t);profiles.push(a);var m=document.createElement("div"),c=document.createElement("h3"),s=document.createElement("img");s.src=t,c.innerHTML=e,m.append(c),m.append(s),document.querySelector("#submissions").append(m),profileDivs.push(m),generateImage()}}));