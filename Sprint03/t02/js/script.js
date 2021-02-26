class Timer {
    constructor( title, delay, stopCount){
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }
    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay }, stopCount=${this.stopCount})`);
        this.stopCount--;
    }
    tick() {
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`);
        this.stopCount--;
    }

    stop() {
        console.log(`Timer ${this.title} stopped`);
    }
}

function runTimer(id, delay, counter) {
    let timer = new Timer(id, delay, counter);

    let timeId = setInterval(tick, timer.delay);
    timer.start();
    function tick() {
        timer.tick();
        if (timer.stopCount === -1) {
            timer.stop();
            clearInterval(timeId);
        }
    }
}

runTimer("Bleep", 1000, 5);
/*Console output:Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped*/