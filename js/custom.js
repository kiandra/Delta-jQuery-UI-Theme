Modernizr.addTest("macosx", function () {
    var strIndex = navigator.userAgent.toLowerCase().indexOf("mac");
    return (strIndex > -1);
});

$(function() {

	$("button, :button, :submit").button();

	$("#radio").buttonset();

	$("#colourMode").toggleSwitch({
		highlight: true,
		width: 25,
		change: function(e) {
			$("body").removeClass().addClass($("#colourMode").val().toLowerCase());
		}
	});


	$(".demo select").each(function(i,item) {
		$(item).toggleSwitch({
			highlight: $(item).data("highlight"),
			width: 25
		});
	});

	var today = $.datepicker.formatDate('dd-mm-yy', new Date());
	$(".datepicker").val(today).datepicker();

	$("#tabs").tabs();

	var restoreTest = ($("html").hasClass("macosx")) ? "macosx" : "no-macosx";

	var showModal = function(title) {
		$('<div />')
			.text("My close button position and button order is determined by the operating system I am being displayed in.")
			.appendTo("body")
			.dialog({
				title: title,
				modal: true,
				width: 400,
				buttons: {
					"OK": function() {
						$(this).dialog("close");
					},
					"Cancel": function() {
						$(this).dialog("close");
					}
				}
			});
	};

	$(".modalMac").on("click", function(e) {
		$("html").removeClass("no-macosx").addClass("macosx");
		showModal("Mac Modal");
		e.preventDefault();
	});

	$(".modalWindows").on("click", function(e) {
		$("html").removeClass("macosx").addClass("no-macosx");
		showModal("Windows Modal");
		e.preventDefault();
	});

	$(".modalAuto").on("click", function(e) {
		$("html").removeClass("no-macosx").removeClass("macosx").addClass(restoreTest);
		showModal("Auto Detected");
		e.preventDefault();
	});

	// setup graphic EQ
	$( "#eq > span" ).each(function() {
		// read initial values from markup and remove that
		var value = parseInt( $( this ).text(), 10 );
		$( this ).empty().slider({
			value: value,
			range: "min",
			animate: true,
			orientation: "vertical"
		});
	});

});