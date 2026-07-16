const one = () => {
    return 'one';
}

const two = () => {
    setTimeout(() => {
        return 'two'; // introducing assyncrontion
    }, 3000);
}

const three = () => {
    return 'three';
}
const aggregate = () => {
    const valOne = one();
    console.log(valOne);

    const valTwo = two();
    console.log(valTwo);

    const valThree = three();
    console.log(valThree);
}

// aggregate(); // two is returned as undefined without a promise!

// -- Building a Promise
const  calculate = (a,b,c) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0 || c < 0){
                reject("No number can be negative.");
            }
            resolve(a + b + c)
        }, 3000)
    })
}
calculate(1, 2, -9).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

// --- Async/await
const add = async () => {
    const sum1 = await calculate(1, 2, 3);
    const sum2 = await calculate(sum1, 4, 5);
    return sum2;
}

add().then(result => {console.log(result)});