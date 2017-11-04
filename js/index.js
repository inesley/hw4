// $("#first-read-more-text").click(function( event ) {
//   event.preventDefault();
// }
// $("#second-read-more-text").click(function( event ) {
//   event.preventDefault();
// }

// $( document ).ready(function() {
//     console.log( "ready!" );
// }

$("#first-read-more-button").click(firstReadMore);

function firstReadMore(){
 $("#first-read-more-text").slideDown();
 $("#first-read-less-button").show();
 $("#first-read-more-button").hide();
}

$("#first-read-less-button").click(firstReadLess);

function firstReadLess(){
 $("#first-read-more-text").slideUp();
 $("#first-read-less-button").hide();
 $("first-read-more-button").show();
}

$("#second-read-more-button").click(secondReadMore);

function secondReadMore(){
 $("second-read-more-text").slideDown();
 $(".read-less").show();
 $("second-read-more-button").hide();
}

function secondReadLess(){
	$("second-read-more-text").slideUp();
	$("second-read-less-button").hide();
	$("second-read-more-button").show();
}
// }); shouldnt the code end with this? its giving me a syntax error

// code is not working :(