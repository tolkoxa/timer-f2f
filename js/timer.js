const timer = document.getElementById('timer');
const btn = document.getElementById('btn');
const type = document.getElementById('type');
let countPerson = 59;
let countPerehod = 20;
let count = countPerson;
let person1 = false;
let person2 = false;
let perehod = false;
let allCount = 0;
let soundPerson = new Audio();
let soundPerehod = new Audio();


function render() {
    timer.innerHTML = '01:00';
    type.innerHTML = 'Участник №1';
    let checkMp3 = soundPerson.canPlayType('audio/mp3');


    if (checkMp3 != '') {
        soundPerson.src = 'files/person.mp3';
        soundPerehod.src = 'files/perehod.mp3';
    } else {
        soundPerson.src = 'files/person.ogg';
        soundPerehod.src = 'files/perehod.mp3';
    };
}
btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    setInterval(start, 1000);
    soundPerson.play();
});

function start() {
    let noll;
    let typeStr;
    if (!person1) {
        typeStr = 'Участник №1';
    } else if (person1 && !person2) {
        typeStr = 'Участник №2';
    } else if (person1 && person2) {
        typeStr = 'Переход';

    }
    type.innerHTML = typeStr;
    (count < 10) ? noll = '0': noll = '';
    timer.innerHTML = '00:${count}';
    timer.innerHTML = `00:${noll}${count}`;
    if (count == 0 && !person1) {
        person1 = true;
        count = countPerson + 1;
        soundPerson.play();
    }
    if (count == 0 && !person2) {
        person2 = true;
        count = countPerehod + 1;
        soundPerehod.play();
    }
    if (count == 0 && !perehod) {
        person1 = false;
        person2 = false;
        perehod = false;
        count = countPerson + 1;
        allCount++;
        console.log(allCount);
        soundPerson.play();
    }
    count--;
}


window.onload = render();






// class Timer {
//     constructor() {
//         this.timer = document.getElementById('timer');
//         this.btn = document.getElementById('btn');
//         this.person1 = false;
//         this.person2 = false;
//         this.perehod = false;
//         this.count = 59;
//         this.countPerehod = 20;
//         this.addNumb;
//         this._init();
//     }

//     _init() {
//         this.render();
//         this.btn.addEventListener('click', (evt) => {
//             evt.preventDefault();
//             setInterval(this.start(this.count, this.countPerehod), 1000);
//         });
//     }

//     render() {
//         this.timer.innerHTML = '01:00';
//     }
//     start(count, perehod) {
//         (count < 10) ? this.addNumb = 0: this.addNumb = '';
//         console.log(`00:${this.addNumb}${count}`);
//         count--;

//     }
// }

// let f2f = new Timer();