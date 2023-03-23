const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');
const name = document.querySelector('#name')
const delay = document.querySelector('#delay')

// function setAlarm() {
//   window.setTimeout(() => {
//     output.textContent = 'Wake up!';
//   }, 1000);
// }

function setAlarm(delay, person) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error('Alarm delay must not be negative')
        }
        window.setTimeout(() => {
            resolve(`Wake up!, ${person}`);
        }, delay);
    })
}

button.addEventListener('click', () => {
    setAlarm(delay.value, name.value)
        .then(message => output.textContent = message)
        .catch(error => output.textContent = `Couldn't set alarm: ${error}`)
});



async function yibu() {
    let aw = new Promise( (resolve, reject)=>{
        let index =1
        setTimeout(()=>{
            resolve('ok')
        },3000)
        if(index!==1){
            reject('er')
        }

    })
    let hh = await aw
    console.log(hh);
}

yibu()
.then((res)=>{
    console.log(res);
})
.catch((rej)=>{
console.log(rej);
})


