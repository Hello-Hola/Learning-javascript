
// race

function countDown(){
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

countDown();

countDown();

// log no 42 and invoke

function start(){
    console.log(42)
}
start()