'use strict';

const numberofnews = +prompt("Siz qancha yangilik ko'rdingiz?");

const personalofnewsDB = {
    count: numberofnews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
};

for(let i=0; i<2; i++) {
    const a = prompt("Oxirgi ko'rgan yangiliklaringizdan biri?"),
          b = prompt("unga neci baxo berasiz?");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalofnewsDB.news[a] = b;
        console.log("tayyor");
    }
    else {
        console.log("error")
        i--;
    }
}

if (personalofnewsDB.count < 10) {
    console.log("Слишком меньше");
} else if (personalofnewsDB.count >= 10 && personalofnewsDB.count <= 30) {
    console.log("You are classic");
} else if (personalofnewsDB.count >=30) {
    console.log("Prosta Super");
} else {
    console.log("Error");
}

console.log(personalofnewsDB);


