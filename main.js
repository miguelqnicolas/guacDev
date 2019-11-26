const counter = document.querySelector('.counter');
const secInput = document.querySelector('#seconds');

let seconds;
let remseconds;
let minutes;
let toCount = false;

// taking input
const toSubmit = () => {
    seconds = secInput.value;
    remove('seconds');
    remove('ok');
    display('start');
    counting();
};

// button's id is passed through, and that button is now showing
const display = item => {
    document.querySelector(`#${item}`).style.display = 'block';
};

// button's id passed through, and now that button is removed
const remove = item => {
    document.querySelector(`#${item}`).style.display = 'none';
};

// storing input value in toCount and displaying buttons as need be depending on the id of the input value
const check = item => {
    toCount = item.value;
    
    if (item.id === 'start') {
        display('stop');
        remove('start');
    } else if (item.id === 'stop') {
        display('continue');
        remove('stop');
    } else {
        display('stop');
        remove('continue');
    };
};

// function that actually counts
const count = () => {
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
            
            counter.textContent = minutes + 'm' + remseconds + 's';
        };
    };
};

// parses input and calls count function
const counting = () => {
    remseconds = seconds % 60;
    minutes = Math.floor(seconds / 60);
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (remseconds < 10) {
        remseconds = '0' + remseconds;
    }
    
    counter.textContent = minutes + 'm' + remseconds + 's';

    setInterval(count, 1000);
};