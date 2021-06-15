async function sayHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random()
            if (number < 0.5)
            {
                console.log("Hello");
                resolve(number);
            } else {
                console.log("I won't say it");
                reject();
            }
        }, 1000)
    })
}

async function main() {
    try {
        const number = await sayHello();
        console.log(`Number is ${number}`);
    } catch (error) {
        console.log("Ok, then. I give up.");
    }
    console.log("World");
}

main();

// function sayHello() {
//     console.log("Hello");
// }

// await setTimeout(sayHello, 1000)


myPromise
    .then(result => result.json())
    .then(json => console.log(JSON.stringify(json, null, 2)))
    .catch(e => console.log(e))
