let modebtn = document.createElement("button");
modebtn.innerText = "change mode";


document.querySelector("body").prepend(modebtn);

let currentmode = "light";

modebtn.addEventListener("click",()=>{
    // console.log("you are trying change mode");
    if(currentmode ==="light"){
       // currentmode = true;
      currentmode = "dark";
      document.querySelector("body").style.backgroundColor = "black";
       
    }
    else {
         currentmode ="light";
        //currentmode = false;
        document.querySelector("body").style.backgroundColor = "white";
        
    }
    console.log(currentmode);
})
