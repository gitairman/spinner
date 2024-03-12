const symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

let delay = 700;
setInterval(() => {
  delay = 100;
  for (const symbol of symbols) {
    setTimeout(() => {
      process.stdout.write(symbol);
    }, delay);
    delay += 200;
  }
}, delay);
