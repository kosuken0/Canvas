const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.Pi * 2);
ctx.stroke();
ctx.fillRect(10, 20, 150, 50);