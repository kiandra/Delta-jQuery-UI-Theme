/*global $, Modernizr, jQuery*/

$(function() {

	"use strict";

	Modernizr.addTest("macosx", function () {
		var strIndex = navigator.userAgent.toLowerCase().indexOf("mac");
		return (strIndex > -1);
	});

	// PRELOAD DARK BG + MODAL CLOSE
	$.imgpreload(['img/dark_wall.png', 'theme/images/modalClose.png']);

	// GENERIC JQUERY UI SETUP
	$("button, :button, :submit").button();
	$("#radio").buttonset();
	$("#colourMode").toggleSwitch({
		highlight: true,
		width: 25,
		change: function() {
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



	// MODAL DETECTION
	var restoreTest = ($("html").hasClass("macosx")) ? "macosx" : "no-macosx";
	var showModal = function(title) {
		$('<div />')
			.text("My close button position and button order is determined by the operating system I am being displayed in.")
			.appendTo("body")
			.dialog({
				title: title,
				modal: true,
				width: 400,
				hide: "fade",
				show: "fade",
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


	// GRAPHIC EQ
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

	// AUTOCOMPLETE EXAMPLE
	var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $(".autocomplete").autocomplete({
        source: availableTags
    });


    // PROGRESS BAR EXAMPLE
    $("#progressbar").progressbar({
        value: 37
    }).width(300);

});