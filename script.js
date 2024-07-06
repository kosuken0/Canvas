const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);
function drawcont(x, y, width, height, borderw, round, bordercol, fillcol){
    ctx.strokeStyle = bordercol;
    ctx.fillStyle = fillcol;
    ctx.lineWidth = borderw;
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, [round]);
    ctx.fill();
    ctx.stroke();
}
function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawcont(20, 20, canvas.width-40, canvas.height-40, 10, 15, '#B17F49', '#DB9D5A');
    drawcont(35, 35, canvas.width*0.5-45, canvas.height*0.75-45, 10, 15, '#b17f49', '#db9d5a');
    drawcont(canvas.width*0.5+10, 35, canvas.width*0.5-45, canvas.height*0.75-45, 10, 15, '#b17f49', '#db9d5a');
    drawcont(35, canvas.height*0.75+10, canvas.width-70, canvas.height*0.25-45, 10, 15, '#b17f49', '#db9d5a');
};
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});
draw();
