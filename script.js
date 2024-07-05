const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

ctx.fillStyle = '#B17F49';
ctx.strokeStyle = '#DB9D5A';
ctx.lineWidth = 15;
ctx.beginPath();
ctx.roundRect(10, 10, 100, 150, [15]);
ctx.fillRect(10, 10, 100, 150);
ctx.stroke();
