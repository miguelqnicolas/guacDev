const container = document.querySelector('.counter');
const buttonsDiv = document.querySelector('.buttons');
const secInput = document.getElementById('seconds');

var seconds;
var remseconds;
var minutes;
var toCount = false;

function toSubmit() {
    display('start');
    remove('seconds');
    remove('ok');
    seconds = Number(secInput.value);
    counting();
}

function display(e) {
    document.getElementById(e).style.display = 'block';
}

function remove(e) {
    document.getElementById(e).style.display = 'none';
}

function check(stat) {
    toCount = stat.value;
    if (stat.id == 'start') {
        display('stop');
        remove('start');
    } else if (stat.id === 'stop') {
        display('continue');
        remove('stop');
    } else {
        display('stop');
        remove('continue');
    }
}

function count() {
    if (seconds > 0) {
        if(toCount == true) {
            seconds--;
            remseconds = seconds % 60;
            minutes = Math.floor(seconds / 60);
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (remseconds < 10) {
                remseconds = '0' + remseconds;
            }
            container.innerHTML = minutes + 'm' + remseconds + 's';
        } else {
            // container.innerHTML = "Time's up!";
            buttonsDiv.style.opacity = '0';
        }
    }
}

function counting() {
    remseconds = seconds % 60;
    minutes = Math.floor(seconds / 60);
    
    // if (hours < 10) {
    //     hours =  '0' + hours;
    // }
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (remseconds < 10) {
        remseconds = "0" + remseconds;
    }
    container.innerHTML = minutes + "m" + remseconds + "s";

    // hours + 'h' +

    setInterval(count, 1000);
}