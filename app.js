//http://www.html5canvastutorials.com/labs/html5-canvas-paint-application/ mad props to this tutorial for teaching me how canvas works.
var easel = $('#easel').get(0);
var ctx = easel.getContext('2d');
var painting = $('#paint').get(0);
var paint_style = getComputedStyle(painting);
easel.width = parseInt(paint_style.getPropertyValue('width'));
easel.height = parseInt(paint_style.getPropertyValue('height'));
var cursor = {x: 0, y: 0};
ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = 'rgb(0, 0, 0)';
$(easel).on('mousemove', function(e) {
  cursor.x = e.pageX - this.offsetLeft;
  cursor.y = e.pageY - this.offsetTop;
});
$('.black').on('click', function(e){
  ctx.strokeStyle = 'black';
});
$('.red').on('click', function(e){
  ctx.strokeStyle = 'red';
});
$('.blue').on('click', function(e){
  ctx.strokeStyle = 'blue';
});
$('.green').on('click', function(e){
  ctx.strokeStyle = 'green';
});
$('.clear').on('click', function(e){
  ctx.clearRect(0,0,easel.width, easel.height);
});
$('.eraser').on('click', function(e){
  ctx.strokeStyle = 'white';
});
$('#easel').on('dblclick', function(e){
  ctx.fill();
});
$(easel).on('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(cursor.x, cursor.y);
    $(easel).on('mousemove', painted);
});
$(easel).on('mouseup', function() {
    $(easel).off('mousemove', painted);
});
var painted = function() {
    ctx.lineTo(cursor.x, cursor.y);
    ctx.stroke();
};
