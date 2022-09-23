window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
	  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
	    document.getElementsByClassName("mini-navbar")[0].style.top = "0";
	  } else {
	    document.getElementsByClassName("mini-navbar")[0].style.top = "-60px";
	  }
	}

window.onload = function() {
	document.getElementsByClassName("menu-icon")[0].addEventListener('click', function (e) {
		document.getElementsByClassName("mini-navbar")[0].classList.toggle("expand");
	});
};