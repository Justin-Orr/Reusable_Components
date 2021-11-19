var first_slide = document.getElementById("first");

var r1 = document.getElementById("radio1").addEventListener("click", function (){
  console.log("Button 1 pressed");
  first_slide.style.transition = "margin-left 1.5s"
  first_slide.style.marginLeft = "0%";
});

var r2 = document.getElementById("radio2").addEventListener("click", function (){
  console.log("Button 2 pressed");
  first_slide.style.transition = "margin-left 1.5s"
  first_slide.style.marginLeft = "-100%";
});

var r3 = document.getElementById("radio3").addEventListener("click", function (){
  console.log("Button 3 pressed");
  first_slide.style.transition = "margin-left 1.5s"
  first_slide.style.marginLeft = "-200%";
});

var r4 = document.getElementById("radio4").addEventListener("click", function (){
  console.log("Button 4 pressed");
  first_slide.style.transition = "margin-left 1.5s"
  first_slide.style.marginLeft = "-300%";
});