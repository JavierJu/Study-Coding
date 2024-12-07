const franc = require("franc");
const langs = require("langs");
const colors = require("colors");


const input = process.argv[2];
const langCode = franc(input);
console.log(langCode);
console.log(langs.has("3", "kor"));
console.log(langs.has("3", "fuf"));


if (langCode === 'und' || langCode === 'sco') {
    console.log('Please input more letters as 10 or more!'.red)
} else {
    const langName = langs.where("3", langCode);
    console.log(`Our best guess is : ${langName.name}`.green);
}





