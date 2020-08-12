// $("h1").addClass("big-title margin-50");

// $("h1").text("Bye");

// $("button").text("change button");



// //EVENT LISTENERS:

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// })


// //CHANGE ON CLICK

// $("button").click(function() {
//     $("h1").css("color", "pink")
// })


//PRESSED KEY ON KEYBOARD GETS SHOWN ON H1

$(document).keypress(function(event) {
    $("h1").text(event.key);
})


// //
// $("h1").on("mouseenter", function() {
//     $("h1").css("color", "pink");
// })


// //ADD AN ELEMENT IN JS
// $("h1").before("<button>New</button>");

// $("h1").after("<button>New</button>");

// $("h1").prepend("<button>New</button>");

// $("h1").append("<button>New</button>");


//ANIMATE
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})