let exit = true;
let result = 1;

function* generator() {
    while(exit) {
        yield (result += Number(prompt("Previous result: " + result + ". Enter a new number:")));
        if (result > 1000)
            result = 1;
        if (isNaN(result)) {
            console.error("Invalid number!");
            exit = false
        }
    }
}

for(let g of generator()){}