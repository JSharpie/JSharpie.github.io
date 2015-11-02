var easel = $('#easel').get(0);
var ctx = easel.getContext('2d');

var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);
easel.width = parseInt(paint_style.getPropertyValue('width'));
easel.height = parseInt(paint_style.getPropertyValue('height'));

var cursor = {x: 0, y: 0};

$(easel).on('mousemove', function(e) {
  cursor.x = e.pageX - this.offsetLeft;
  cursor.y = e.pageY - this.offsetTop;
});

ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00CC99';

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
