function draw(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      star += "-";
    }
    for (let k = 1; k <= i; k++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
}

draw(2);
draw(3);
draw(4);
