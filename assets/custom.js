console.log('work');
window.onload=function(){
    var mb = document.getElementById("myBtn");
    mb.addEventListener("click", handler);
    mb.addEventListener("click", handler2);
}


function handler() {
    console.log('handler')
}

function handler2() {
    console.log('handler2')
}