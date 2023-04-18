
let circleNumber = 1;   //Variable for individual id on circles

//ONCLICK LISTENER - MAIN FUNCTION
window.addEventListener('click', (event) => {   
    //get mouse position
    let xMousePos=event.clientX;
    let yMousePos=event.clientY;
    //constant circle number for removal
    const circleConstant = circleNumber;  
  
    createCircle(xMousePos,yMousePos,randomColor());
  
    deleteCircle(circleConstant);
});


//SECONDARY FUNCTIONS
let createCircle = (x,y,color) => {
    const circleCanvas = document.getElementById("main");   //div where we prepend de circles
    
    let circleDiv = document.createElement("div");

    //id & class
    circleDiv.id=`new-circle-${circleNumber}`;
    circleDiv.classList.add("new-circle");
    
    //position
    circleDiv.style.left=`${x}px`;
    circleDiv.style.top=`${y}px`;

    //style
    circleDiv.style.border=`${color} 5px solid`;
    circleDiv.style.width=0;
    circleDiv.style.height=0;

    circleNumber++ //set circkleNumber for next circle individual id

    circleCanvas.prepend(circleDiv);  //add div to canvas
}

let deleteCircle = (idNumber) => {
    setTimeout(function(){
        document.getElementById(`new-circle-${idNumber}`).remove();
    },800)
}

let randomColor = () => {
    const colorArr = ["#5feaa3","#f45b69", "#7bafff", "#FEE440"];
    let random = Math.round((Math.random() * 10));

    if (random===10) {random=9;}

    switch(random) {
        case 0:
            case 1:
            case 2:
                return colorArr[0];
        case 3:
            case 4:
            case 5:
                return colorArr[1];
        case 6:
            case 7:
                return colorArr[2];
        case 8:
            case 9:
                return colorArr[3];
    }
          
          
    }


