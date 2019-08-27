const alarmsArr = process.argv.slice(2);

for (let item of alarmsArr) {
  setTimeout( () => process.stdout.write('\x07'), item * 1000);
}
