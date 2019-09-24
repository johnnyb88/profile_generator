const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  rl.question('What\'s an activity you like doing ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (e.g., dinner, brunch, etc.) ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your favourite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you\'re amazing at! ', (answer7) => {
              rl.close();
              console.log(answer + " loves to " + answer2 + " and listening to " + answer3 + " while doing that. " + answer + " loves " + answer4 + " and his favorite meal at  " + answer4 + " is " + answer5 + ". " + answer + "'s favorite sport is " + answer6 + ". " + answer + "'s superpower is " + answer7 + ". ");
            });
          });
        });
      });
    });
  });
});