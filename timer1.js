const seconds = process.argv.slice(2);
for (const second of seconds) {
  if (second < 0 || isNaN(second)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\u0007');
  }, second * 1000);
}
