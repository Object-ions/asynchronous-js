const intervalID = setInterval(countTime, 1000);

function countTime() {
    const now = new Date(Date.now());

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');  // Months are 0-11, so +1 and pad with a zero if necessary
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const humanReadableTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    console.log(humanReadableTimestamp);  // Outputs: YYYY-MM-DD HH:MM:SS
    
}

// Stop the interval
function stopChage() {
    clearInterval(intervalID);
}

// Event listeners
document.getElementById('cancel').addEventListener('click', stopChage);