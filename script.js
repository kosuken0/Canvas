const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);
function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#DB9D5A';
    ctx.strokeStyle = '#B17F49';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.roundRect(20, 20, canvas.width - 40, canvas.height - 40, [15]);
    ctx.fill();
    ctx.stroke();
};
function drawcont(x, y, w, h, r){
    ctx.fillStyle = '#DB9D5A';
    ctx.strokeStyle = '#B17F49';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, [r]);
    ctx.fill();
    ctx.stroke();
}
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});
drawcont(20, 20, canvas.width-40, canvas.height-40, 15)