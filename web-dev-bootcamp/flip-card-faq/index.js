function flip(event){
  var element = event.currentTarget; //gives the element that you clicked on
  if (element.className == "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
  }
