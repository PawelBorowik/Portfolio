const laska = document.querySelector(".img1");
const squere = document.querySelector(".img2");
const aero = document.querySelector(".img3")

let moving = false;


let visible = 0;
let insertDivX;
let insertDivY;



laska.addEventListener("mousedown", initialClick, false)

squere.addEventListener("mousedown", initialClick, false);

aero.addEventListener("mousedown", initialClick, false);







function move(e) {



    let newX = e.clientX - insertDivX;
    var newY = e.clientY - insertDivY;

    img.style.left = newX + "px";
    img.style.top = newY + "px";
    img.style.zIndex = visible++;


}

function initialClick(e) {
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);

    if (moving) {
        document.removeEventListener("mousemove", move);
        moving = !moving;
        return;
    }

    moving = !moving;
    img = this;


    document.addEventListener("mousemove", move, false);

}
var modal = document.getElementById('myModal');


const modalImg = document.getElementById("img01");


function openModal(e) {
    modal.style.display = "block";
    modal.style.zIndex = visible++;
    modalImg.src = this.src;
    document.removeEventListener("mousemove", move);
}
laska.addEventListener("dblclick", openModal);
aero.addEventListener("dblclick", openModal);
squere.addEventListener("dblclick", openModal);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}