setTimeout(() => {
    console.log('Hello from callback');
}, 2000); // even if we change it to 0 sec it will still be executed second, the reason is bc its added to the 'rtask que'

console.log('Hello from Global Scope');