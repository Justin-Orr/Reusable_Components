var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;

  if(counter == 1) slide_transition1();
  if(counter == 2) slide_transition2();
  if(counter == 3) slide_transition3();
  if(counter == 4) slide_transition4();

  counter++;
  if(counter > 4) {
    counter = 1;
  }
}, 5000);

var first_slide = document.getElementById("first");

var r1 = document.getElementById("radio1").addEventListener("click", slide_transition1);
var r2 = document.getElementById("radio2").addEventListener("click", slide_transition2);
var r3 = document.getElementById("radio3").addEventListener("click", slide_transition3);
var r4 = document.getElementById("radio4").addEventListener("click", slide_transition4);

var l1 = document.getElementById("rl1");
var l2 = document.getElementById("rl2");
var l3 = document.getElementById("rl3");
var l4 = document.getElementById("rl4");

function slide_transition1() {
  console.log("Button 1 pressed");
  first_slide.style.transition = "margin-left 1.5s";
  first_slide.style.marginLeft = "0%";
  select_label_1()
  counter = 1;
}

function slide_transition2() {
  console.log("Button 2 pressed");
  first_slide.style.transition = "margin-left 1.5s";
  first_slide.style.marginLeft = "-100%";
  select_label_2()
  counter = 2;
}

function slide_transition3() {
  console.log("Button 3 pressed");
  first_slide.style.transition = "margin-left 1.5s";
  first_slide.style.marginLeft = "-200%";
  select_label_3()
  counter = 3;
}

function slide_transition4() {
  console.log("Button 4 pressed");
  first_slide.style.transition = "margin-left 1.5s";
  first_slide.style.marginLeft = "-300%";
  select_label_4()
  counter = 4;
}

function select_label_1() {
  l1.style.backgroundColor = "#d04500";
  l2.style.backgroundColor = "transparent";
  l3.style.backgroundColor = "transparent";
  l4.style.backgroundColor = "transparent";
}

function select_label_2() {
  l1.style.backgroundColor = "transparent";
  l2.style.backgroundColor = "#d04500";
  l3.style.backgroundColor = "transparent";
  l4.style.backgroundColor = "transparent";
}

function select_label_3() {
  l1.style.backgroundColor = "transparent";
  l2.style.backgroundColor = "transparent";
  l3.style.backgroundColor = "#d04500";
  l4.style.backgroundColor = "transparent";
}

function select_label_4() {
  l1.style.backgroundColor = "transparent";
  l2.style.backgroundColor = "transparent";
  l3.style.backgroundColor = "transparent";
  l4.style.backgroundColor = "#d04500";
}