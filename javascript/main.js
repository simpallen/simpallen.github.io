// https://codepen.io/sinisag/pen/vPEajE CREDITS TO THIS PERSON'S CODE

$(document).ready(function(){

	var lightbox = document.getElementById('lightbox');
	var lightboxClose = document.getElementById('lightbox');
	lightboxClose.onclick = function() { 
	  lightbox.style.display = "none";
	};

	document.onclick = function (e) { 
	  if (e.target.className.indexOf('pix') !== -1) {
	      var img = e.target;
	      var lightboxImg = document.getElementById("boxcontent");
	      lightbox.style.display = "block";
	      lightboxImg.src = img.src;
	   }
	};

	$(".togglebutton").click(function(){
		$(".authorbox").toggle();
	})

	var images = ['cornpoff.png', 'cornpoff1.png', 'cornpoff2.png', 'cornpoff3.png', 'cornpoff4.png'];
	$(".logo").attr( 'src', 'images/' + images[Math.floor(Math.random() * images.length)] );

	button = document.getElementById('gototop');

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
	    button.style.display = "block";
	  } else {
	    button.style.display = "none";
	  }
	}

	button.addEventListener("click", function(){
		$("html,body").animate({scrollTop:0}, "slow")
	})
});