const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);
function draw() {
    ctx.fillStyle = '#B17F49';
    ctx.strokeStyle = '#DB9D5A';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.roundRect(10, 10, canvas.width-20, canvas.height-20, [15]);
    ctx.fillRect(10, 10, canvas.width-20, canvas.height-20);
    ctx.stroke();
};
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});
draw();