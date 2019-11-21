function cycleImageSource() {
  
  var image = document.getElementById("variableImageSource");;
  
  // Math.random returns a number between 0 and 1
  // set a random width and height for placekitten
  var width = Math.floor(100 + (Math.random() * 200));
  var height = Math.floor(100 + (Math.random() * 200));
  
  image.src = "https://placekitten.com/"+width+"/"+height+"/";
  
}