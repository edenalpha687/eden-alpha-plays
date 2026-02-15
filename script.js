const canvas=document.createElement("canvas");
document.body.appendChild(canvas);

const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function lightning(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle="rgba(0,150,255,.4)";
ctx.beginPath();

let x=Math.random()*canvas.width;
let y=0;

ctx.moveTo(x,y);

for(let i=0;i<20;i++){
x+=Math.random()*40-20;
y+=canvas.height/20;
ctx.lineTo(x,y);
}

ctx.stroke();
}

setInterval(lightning,1500);
