// let data = document.getElementsByTagName("input");
//
// document.getElementById("creatBut").addEventListener("click", () => {
//     let firstName = data[0].value;
//     let lastName = data[1].value;
//     let gender = data[2].value;
//     let age = data[3].value;
//     console.log(firstName);
//     console.log(lastName);
//     console.log(gender);
//     console.log(age);
// });
// let calories = 0;
class Human {
    calories = 0;
    constructor(firstName, lastName, gender, age, calories) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = +calories;
    }

    sleepFor() {
        massage.textContent = 'I\'m sleeping';
        massage.showModal();
        setTimeout(()=> {
            massage.close();
            massage.textContent = 'I\'m awake now';
            massage.showModal();
            setTimeout(()=> {
                massage.close();
            }, 2000)
        }, 5000)
    }

    feed() {
        if (human.calories > 500) {
            massage.textContent = 'I\'m not hungry';
            massage.showModal();
            setTimeout(() => {
                massage.close();
            }, 2000);
        }
        else {
            massage.textContent = 'Nom nom nom';
            massage.showModal();
            setTimeout(() => {
                massage.close();
                human.calories += 200;
                if (human.calories < 500) {
                    massage.textContent = 'I\'m still hungry';
                    massage.showModal();
                    setTimeout(() => {
                        massage.close();
                    }, 2000);
                }
            }, 10000);
        }
    }
}

class Superhero extends Human {
    constructor(firstName, lastName, gender, age, calories) {
        super(firstName, lastName, gender, age, calories);
    }

    fly() {
        massage.textContent = 'I\'m flying!'
        massage.showModal();
        setTimeout(()=> {
            massage.close();
        }, 10000)
    }

    flightWithEvil() {
        massage.textContent = 'Khhhh-chh... Bang-g-g-g... Evil is defeated!'
        massage.showModal();
        setTimeout(()=> {
            massage.close();
        }, 3000)
    }
}

let human = new Human('Bruce', 'Banner', 'man', 30, 517);
let hero = new Superhero('Incredible', 'Hulk', 'man', 30, 500);

const data = document.querySelector('#data');
const image = document.querySelector('#human');
const massage = document.querySelector('#massage');

function humanData() {
    image.src = './assets/images/robertBanner.png'
    data.innerHTML =`
    <button id="turning">Turn into superhero</button>
    <button id="eat">Eat</button>
    <button id="sleep">Sleep</button>
    <p>First name: ${human.firstName}</p>
    <p>Last name: ${human.lastName}</p>
    <p>Gender: ${human.gender}</p>
    <p>Age: ${human.age}</p>
    <p>Calories: <span class="calories">${human.calories}</span></p>
`
    const turning = document.querySelector('#turning');
    const eating = document.querySelector('#eat');
    const sleeping = document.querySelector('#sleep');

    sleeping.addEventListener('click', human.sleepFor)
    eating.addEventListener('click', human.feed);
    // eating.addEventListener('click', humanData);
    turning.addEventListener('click',() => {
        if (human.calories > 500) {
            heroData()
        }
        else {
            massage.textContent = 'Not enough calories to turn to superhero';
            massage.showModal();
            setTimeout(() => {massage.close();}, 2000);
        }
    });

}

humanData();

function heroData() {
    image.src = './assets/images/hulk.png'
    data.innerHTML = `
    <button id="turn">Turn into human</button>
    <button id="fly">Fly</button>
    <button id="evilFight">Fight with evil</button>
    <p>First name: ${hero.firstName}</p>
    <p>Last name: ${hero.lastName}</p>
    <p>Gender: ${hero.gender}</p>
    <p>Age: ${hero.age}</p>
    <p>Calories: <span class="calories">${hero.calories}</span></p>
`
    const turn = document.querySelector('#turn');
    const fly = document.querySelector('#fly');
    const evilFight = document.querySelector('#evilFight');

    fly.addEventListener('click', hero.fly);
    evilFight.addEventListener('click', hero.flightWithEvil);
    turn.addEventListener('click', humanData);
}

setInterval(()=> {
    human.calories--;
    document.querySelector('.calories').innerHTML = human.calories;
    human.calories < 1 ? human.calories = 1 : human.calories;
}, 290)