const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);
function drawcont(x, y, x2, y2, borderw, round, bordercol, fillcol){
    ctx.strokeStyle = bordercol;
    ctx.fillStyle = fillcol;
    ctx.lineWidth = borderw;
    ctx.beginPath();
    ctx.roundRect(x, y, x2-x, y2-y, [round]);
    ctx.fill();
    ctx.stroke();
};
function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawcont(x, y, x2, y2, borderw, round, bordercol, fillcol);
    drawcont(20, 20, canvas.width-20, canvas.height-20, 10, 15, '#B17F49', '#DB9D5A');
    drawcont(35, 35, canvas.width*0.5-10, canvas.height-35, 10, 15, '#b17f49', '#db9d5a');
    drawcont(canvas.width*0.5+10, 35, canvas.width-35, canvas.height-35, 10, 15, '#b17f49', '#db9d5a');
    
};
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});
draw();
