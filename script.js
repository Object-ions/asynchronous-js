// const intervalID = setInterval(countTime, 1000);

// function countTime() {
//     const now = new Date(Date.now());

//     const year = now.getFullYear();
//     const month = String(now.getMonth() + 1).padStart(2, '0');  // Months are 0-11, so +1 and pad with a zero if necessary
//     const day = String(now.getDate()).padStart(2, '0');
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
    
//     const humanReadableTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
//     console.log(humanReadableTimestamp);  // Outputs: YYYY-MM-DD HH:MM:SS
    
// }

let intervalID;

function startChage() {
    console.log('Starting interval');
    if (!intervalID) {
        intervalID = setInterval(changeColor, 1000);
    }
}


// Stop the interval
function stopChage() {
    console.log('Stopping interval');
    clearInterval(intervalID);
}

function changeColor() {
    if (document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

// Event listeners
document.getElementById('start').addEventListener('click', startChage);
document.getElementById('cancel').addEventListener('click', stopChage);