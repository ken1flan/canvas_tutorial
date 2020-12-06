function draw() {
  var canvas = document.getElementById('tutorial');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  } else {
    // TODO: canvas非対応の場合の代替コンテンツの処理
  }
}
