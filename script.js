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
    drawcont(35, 35, canvas.width*0.5-10, canvas.height-150-30, 10, 15, '#b17f49', '#db9d5a');
    drawcont(canvas.width*0.5+10, 35, canvas.width-35, canvas.height-150-30, 10, 15, '#b17f49', '#db9d5a');

    drawcont(canvas.width*0.5-585, canvas.height-35, canvas.width*0.5+585, canvas.height-165, 10, 15, '#b17f49', '#db9d5a');

    //  the petal containers
    drawcont(canvas.width*0.5-10-460, canvas.height-50, canvas.width*0.5-10-560, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5-10-345, canvas.height-50, canvas.width*0.5-10-445, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5-10-230, canvas.height-50, canvas.width*0.5-10-330, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5-10-115, canvas.height-50, canvas.width*0.5-10-215, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5-10, canvas.height-50, canvas.width*0.5-10-100, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5+10, canvas.height-50, canvas.width*0.5+10+100, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5+10+115, canvas.height-50, canvas.width*0.5+10+215, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5+10+230, canvas.height-50, canvas.width*0.5+10+330, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5+10+345, canvas.height-50, canvas.width*0.5+10+445, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
    drawcont(canvas.width*0.5+10+460, canvas.height-50, canvas.width*0.5+10+560, canvas.height-150, 10, 15, '#53A4A8', '#62C1C6');
};

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});
draw();



/*
the plan


draw the 10 boxes as a fixed size pixel and all
and then just center it and wrap around a rect
then pray it looks good and move alone

uwu

radiant colours:
'#B63888', '#F34BB5'

i have colors online at 
https://www.pixilart.com/palettes/florr-rarities-91521

*/
