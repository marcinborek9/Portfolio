$(document).ready(function() {
  $(window).scroll(function () {
   
    if ($(window).scrollTop() > 840) {
      $('#nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 841) {
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });

function hamburger() {
$('.hamburger').on('click', function(e) {
  e.preventDefault();
  $('.main-nav').toggleClass('menu-mobile');
});
}
hamburger();

var config = {
  apiKey: "AIzaSyDATRJDfiy3jHoso0tR-WRk628o5zGxdWU",
  authDomain: "portfolio-contact-43441.firebaseapp.com",
  databaseURL: "https://portfolio-contact-43441.firebaseio.com",
  projectId: "portfolio-contact-43441",
  storageBucket: "portfolio-contact-43441.appspot.com",
  messagingSenderId: "433822968354"
};
firebase.initializeApp(config);
let messagesRef = firebase.database().ref('messages');

function validateName(name) {
  var nm = /^[a-zA-Z0-9]{3,15}$/;
  return nm.test(name);
}
function validate() {
  $("#nameResult").text("");
  var name = $("#name").val();
  if (validateName(name)) {
    $("#name").css("color", "green");
  } else {
    $("#name").css("color", "red");
    return false;
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validate1() {
  $("#email").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#email").css("color", "green");
  } else {
    $("#email").css("color", "red");
    return false;
  }
}

function validatePhone(phone) {
  var phoneno = /^(?:\(?\+?48)?(?:[-\.\(\)\s]*(\d)){9}\)?$/;
  return phoneno.test(phone);
}
function validate2() {
  $("#phone").text("");
  var phone = $("#phone").val();
  if (validatePhone(phone)) {
    $("#phone").css("color", "green");
  } else {
    $("#phone").css("color", "red");
    return false;
  }
}

function validateMessage(messages) {
  var msg = /^[A-Za-z0-9 _]*[A-Za-z0-9 ,][A-Za-z0-9 .]*$/;
  return msg.test(messages);
}

function validate3() {
  $("#message").text("");
  var messages = $("#message").val();
  if (validateMessage(messages)) {
    $("#message").css("color", "green");
  } else {
    $("#message").css("color", "red");
    return false;
  }
}
$("#validate").bind("click", validate);
$("#validate").bind("click", validate1);
$("#validate").bind("click", validate2);
$("#validate").bind("click", validate3);

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  let name = getInputVal('name');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let message = getInputVal('message');

  saveMessage(name, email, phone, message);
  document.querySelector('.alert').style.display = 'block';

  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
  document.getElementById('contactForm').reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, phone, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});