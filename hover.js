var textbutton=document.querySelector(".btn");
textbutton.addEventListener("mouseover",firstFunction);
textbutton.addEventListener("click",secondFuction);
textbutton.addEventListener("mouseout",thirdFunction);

function firstFunction(){
    document.querySelector("#content").innerHTML+="Mouse in <br>"
}

function secondFuction(){
    document.querySelector("#content").innerHTML+="clicked <br>"
}

function thirdFunction(){
    document.querySelector("#content").innerHTML+="Mouse out <br>"
}

