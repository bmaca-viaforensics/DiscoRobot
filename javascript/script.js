// When eyes button is clicked, toggle laser class on brain
$(".flash").click(function() {
  $(".brain").toggleClass('laser');
});

// When color button is clicked...
$(".color").click(function() {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  
  // Generate an RGBA value from red, green, and blue
  var randomRGBA = 'rgba('+red+','+green+', '+blue+', 1)';
  
  // and change the body's background to our random color
  $("body").css("background", randomRGBA);
  // Display the RGBA value in an alert window
  //alert(randomRGBA);
});
$(".moves").click(function() {
  $("img").toggle();
});