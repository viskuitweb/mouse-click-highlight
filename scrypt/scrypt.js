
let circleNumber = 1;   //Variable for individual id on circles

//ONCLICK LISTENER - MAIN FUNCTION
window.addEventListener('click', (event) => {   
    //get mouse position
    let xMousePos=event.clientX;
    let yMousePos=event.clientY;
    //constant circle number for removal
    const circleConstant = circleNumber;  
  
    createCircle(xMousePos,yMousePos,randomColor(),randomSize());
  
    deleteCircle(circleConstant);
});


//SECONDARY FUNCTIONS
let createCircle = (x,y,color,size) => {
    const circleCanvas = document.getElementById("main");   //div where we prepend de circles
    
    let circleDiv = document.createElement("div");

    //id & class
    circleDiv.id=`new-circle-${circleNumber}`;
    circleDiv.classList.add("new-circle");
    
    //position
    circleDiv.style.left=`${x}px`;
    circleDiv.style.top=`${y}px`;

    //style
    circleDiv.style.backgroundColor=color;
    circleDiv.style.width=size;
    circleDiv.style.height=size;

    circleNumber++ //set circkleNumber for next circle individual id

    circleCanvas.prepend(circleDiv);  //add div to canvas
}

let deleteCircle = (idNumber) => {
    setTimeout(function(){
        document.getElementById(`new-circle-${idNumber}`).remove();
    },1000)
}

let randomColor = () => {
    const colorArr = ["#5feaa3","#f45b69", "#7bafff"];
    const random = Math.trunc(Math.random() * 10); //random number w/o decimelas

    switch (random) {
      case 0:
      case 1:
      case 2:
      case 3:
          return colorArr[0];
          
      case 4:
      case 5:
      case 6:
          return colorArr[1];
          
      case 7:
      case 8:
      case 9:
          return colorArr[2];
          
    }
}

let randomSize = () => {
    const sizeArr = ["10px","20px","40px", "60px", "80px"];
    const random = Math.trunc((Math.random() * 10)/2); //divided by 2 to have 0-4 results

    return sizeArr[random]
}