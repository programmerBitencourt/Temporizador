var sec = 0;


function start() {
    time = setInterval(function () {
        sec++
        document.getElementById('watch').innerHTML = '0' + sec;
        if(sec>=10){
            document.getElementById('watch').innerText = sec
        };w
    }, 1000);
}

function pause() {
    clearInterval(time);
}

function restart() {
    sec = 0;
    document.getElementById('watch').innerText = '00';
}
