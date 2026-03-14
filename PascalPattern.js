const TOTAL_ROWS = 5;

function printInvertedPascal(n) {
  let output = "";

  for (let i = n; i >= 1; i--) {
    for (let s = 0; s < n - i; s++) {
      output += " ";
    }

    let value = 1;
    for (let j = 1; j <= i; j++) {
      output += value + " ";
      value = value * (i - j) / j;
    }
    output += "\n";
  }

  process.stdout.write(output);
}

printInvertedPascal(TOTAL_ROWS);
