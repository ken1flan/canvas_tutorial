function draw() {
  var canvas = document.getElementById('tutorial');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect (10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect (30, 30, 50, 50);
  } else {
    // TODO: canvas非対応の場合の代替コンテンツの処理
  }
}
