let myCanvas = document.getElementById("myCanvas")
let ctx = myCanvas.getContext("2d")
ctx.fillRect(100,100,100,100)


ctx.strokeRect(100,300,100,100)

// window.onload = function (){
//     let myCanvas = document.getElementById("myCanvas")
//     let ctx = myCanvas.getContext("2d")

//     myCanvas.addEventListener("mousemove", function(e){
//         let x = e.clientX, y = e.clientY

//     })
// }

function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    let coords = "X: " + x + ", Y: " + y;
    document.getElementById("mouseLocation").innerText = coords;
    console.log(coords);
  }
  function clearCoor() {
    document.getElementById("clear").innerHTML = "";
  }

  
  
    document.getElementById("draw-button").addEventListener("click",() =>{
      for (i =0; i < 3; i++)
      alert("OOOPS!! You clicked out of range...")


    })