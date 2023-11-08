var isMouseDown = false;

//Add the mousedown listener
document.addEventListener('mousedown', function() {
  isMouseDown = true;
});

//Add the mouseup listener
document.addEventListener('mouseup', function() {
  isMouseDown = false;
});

//Add the mousemove listener
document.addEventListener('mousemove', function(e) {
  if (isMouseDown) {
    console.log(`Mouse move during drag. X: ${e.pageX}, Y: ${e.pageY}`);
  }
});

//Add the click listener
document.addEventListener('click', function(e) {
    console.log('Click', e.pageX, e.pageY);
});

//Add the scroll listener
document.addEventListener('scroll', function(e) {
    console.log('Scroll', e);
});

