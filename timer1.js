const seconds = process.argv.slice(2); // Takes in the command line arguments minus the first two calls which are *Node* & *fileName.js*

for (const second of seconds) { // to loop through each of the sliced command line arguments
  if (second < 0 || isNaN(second)) {  // To check if the argument is negative or Not a number and to skip if so
    continue;
  }
  setTimeout(() => { // To sound the alarm at the value of each number that is given as an argument in milliseconds
    process.stdout.write('\u0007');
  }, second * 1000); // Multipy by 1000 To make sure that the number is in miliseconds
}
