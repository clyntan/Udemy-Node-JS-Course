console.log('Starting app...');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('2nd Timeout');
}, 0);

console.log('Finishing up');