const jokes = require("give-me-a-joke");
const colors = require("colors");
const cowsay = require("cowsay");

// jokes.getRandomDadJoke(function (joke) {
//     console.log(joke.rainbow);
// })

jokes.getRandomDadJoke(function (joke) {
    // cowsay로 joke 출력
    console.log(cowsay.say({
        text: joke.rainbow, // joke를 무지개 색으로 출력
        e: "^^", // 눈 모양 설정
        T: "U " // 혀 모양 설정
    }));
});

// "cowsay hello" 테스트 출력
console.log(cowsay.say({
    text: "Hello, world!",
    e: "oO",
    T: "U "
}));

console.log(cowsay);