$(".js-sticknav").waypoint(function(direction){

	if (direction=="down") {
		$("nav").addClass("sticky");

	} else{
			$("nav").removeClass("sticky");
	}
});
$(document).ready(function(){
	$(".navbar-toggler").click(function(){
		$(".navbar-toggler i").toggle();
	});
});
