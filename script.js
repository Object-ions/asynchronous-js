// setTimeout(changeText, 2000);
// even if we change it to 0 sec it will still be executed second, the reason is bc its added to the 'rtask que'


function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled');
});