let sec = 0;


function start() {
    time = setInterval(function () {
        sec++
        let watch = document.getElementById('watch');
        watch.innerHTML = '0' + sec;
        if(sec>=10){
            watch.innerHTML = sec;
        };
    }, 1000);
}

function pause() {
    clearInterval(time);
}

function restart() {
    sec = 0;
    document.getElementById('watch').innerText = '00';
}
