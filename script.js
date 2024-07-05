const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);
function draw() {
    ctx.fillStyle = '#DB9D5A';
    ctx.strokeStyle = '#B17F49';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.roundRect(20, 20, canvas.width - 40, canvas.height - 40, [15]);
    ctx.fillRect(22.5, 22.5, canvas.width - 45, canvas.height - 45);
    ctx.stroke();
};
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});
draw();
