//Twitter Widget
!function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');

//Map plugin
var map;
function initMap() {
  var myLatLong = {lat: 42.3551128, lng: -71.0655822};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLong,
    zoom: 14
  });

  var marker = new google.maps.Marker({
    position: myLatLong,
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: "HI"
  });
}

$(document).ready(function(){
	//Tooltips
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	//Smooth scrolling
	var $root = $('html, body');
        $('.navbar-nav a').click(function() {
          var href = $.attr(this, 'href');
          $root.animate({
            scrollTop: $(href).offset().top
          }, 500, function () {
            window.location.hash = href;
          });
          return false;
        });

  //Stellar
  $.stellar({
    verticalOffset: 30
  });


  //Changing color of textbox
  $(".textbox").css("background-color", "#add8e6");

  //Character count in .message-box
  $(".message-box").on("keyup", function(){
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#charCount").html(charCount);
    if ($(".message-box").val() == ""){
      $(".message-box").css("border", "2px solid red");
    }
    else{
      $(".message-box").css("border", "none");
      //Appending text to DOM
      $("button").on("click", function(){
        console.log("clicked");
        var comment = $(".message-box").val();
        console.log(comment);
        $("#visible-comment").html(comment);
        $(".message-box").hide();
        return false;
      });
    }
  });


  $(".work-img").mouseenter( function() {
    $(".info", this).show()
  }).mouseleave( function() {
    $(".info", this).hide()
  });

  images = $("#workrow img");
  for (var i = 0; i < images.length; ++i){
    if (i % 2 === 0){
      $(images[i]).css("border", "solid 2px red");
    }
    else{
      $(images[i]).css("border", "solid 5px blue");
    }
  }

  //Calculator
  var numbers = "";
  $(".calculator-btn").on("click", function(){
        val = $(this).val();
        if (val === "c"){
          numbers = "";
          console.log(numbers);
          $("#calculator-output").html(numbers);
          return false
        }
        if (val === "="){
          answer = eval(numbers);
          $("#calculator-output").html(answer);
          numbers = answer;
          numbers = numbers.toString();
          return false
        }
        numbers = numbers.concat(val);
        $("#calculator-output").html(numbers);
        return false;
  });
});

