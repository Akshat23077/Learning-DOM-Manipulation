let h=document.querySelector("h1");

window.addEventListener("keydown",function(dets){
    if(dets.key===" ") {
        h.textContent="Space";
    }
    else {
        h.textContent=dets.key;
    }
    
})
