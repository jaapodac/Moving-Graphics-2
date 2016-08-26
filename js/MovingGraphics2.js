// JavaScript Document

/* -----------+ Comment Block +-------------------
File:		MovingGraphics2.js
Author:     J. Apodaca
Date:       Mar 18, 2014
Purpose:    Play with beginning animation 
Dependedncies: None
    Input:     None
Output:        None

Example of Use: <script type="text/javascript" src="js/MovingGraphics2.js"> </script>

Special Thanks to: http://codepen.io/anon/pen/zmaye

*/

//Note: Unlike PHP scripts, we do NOT use <script> pairs with Javascript
 
 var   canvas = document.querySelector('canvas'),
         ctx = canvas.getContext('2d'),
   particles = [],
patriclesNum = 50,
           w = 500,
           h = 500,
      colors = ['#f35d4f','#f36849','#c0d988','#6ddaf1','#f1e85b'];
 
 var img=document.getElementById("rocket1");
 
canvas.width = 500;
canvas.height = 500;
canvas.style.left = (window.innerWidth - 500)/2+'px';


if(window.innerHeight>500)
canvas.style.top = (window.innerHeight - 500)/2+'px';
  
function Factory(){  
  this.x =  Math.round( Math.random() * w);
  this.y =  Math.round( Math.random() * h);
  this.rad = Math.round( Math.random() * 1) + 1;
  this.rgba = colors[ Math.round( Math.random() * 3) ];
  this.vx = Math.round( Math.random() * 3) - 1.5;
  this.vy = Math.round( Math.random() * 3) - 1.5;
}
   
function draw(){
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  ctx.font="20px Georgia";
  ctx.strokeText("Rockets",10,50);
  ctx.drawImage(img,10,60,40,40); //Scaling using the second set of numbers.
  
  for(var i = 0;i < patriclesNum; i++){
    var temp = particles[i];
    var factor = 1;
     
    for(var j = 0; j<patriclesNum; j++){
      
       var temp2 = particles[j];
       ctx.linewidth = 0.5;
       ctx.drawImage(img,temp.x,temp.y,40,40);
      

    }
    

    temp.x += temp.vx;
    temp.y += temp.vy;
    
    if(temp.x > w)temp.x = 0;
    if(temp.x < 0)temp.x = w;
    if(temp.y > h)temp.y = 0;
    if(temp.y < 0)temp.y = h;
  }
}

function findDistance(p1,p2){  
  return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

(function init(){
  for(var i = 0; i < patriclesNum; i++){
    particles.push(new Factory);
  }
})();

(function loop(){
  draw();
  requestAnimFrame(loop);
})();


