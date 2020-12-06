function draw() {
  var ctx = document.getElementById('tutorial').getContext('2d');
  var img = new Image();
  img.src = 'images/really.png';
  img.onload = function () {
    ctx.drawImage(img, 0, 0, 900, 900);
    ctx.font = '72px serif';
    ctx.fillText('まぢ？', 50, 100);
  };
}
