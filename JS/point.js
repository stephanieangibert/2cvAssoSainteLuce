let points=document.querySelectorAll(".point");


function changecouleur() {
    let i=0;
    if (points[i].style.color="black")
    points[i].style.color="red";
    else
    points[i].style.color="black";
    i=i+1;
}
setInterval(changecouleur, 300);