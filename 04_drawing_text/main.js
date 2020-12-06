function draw() {
  var ctx = document.getElementById('tutorial').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText('Hello, world!', 10, 50);
  ctx.textAlign = 'center';
  ctx.strokeText('Hello, world!', 10, 100);
}
