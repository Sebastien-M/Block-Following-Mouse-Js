
document.onmousemove = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log("Position :  x = " + x + "   Y = " + y);

    let box = document.querySelectorAll('.box');
    box = box[0];
    box.style.left = x - 50 + "px";
    box.style.top = y - 50 + "px";

    //colors = ["blue","green","red","yellow"];
    //col = Math.floor(Math.random() * colors.length);
    //console.log(col);
    //document.body.style.backgroundColor = colors[col];
};