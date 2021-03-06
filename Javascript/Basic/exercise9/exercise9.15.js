function draw(n) {
  let star = "";
  let line = 2 * n - 1;
  let column = n;
  for (let i = 1; i <= line; i++) {
    for (let j = 1; j <= column; j++) {
      if (i <= n) {
        j <= i ? (star += "*") : (star += "-");
      } else {
        j <= line - i + 1 ? (star += "*") : (star += "-");
      }
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
