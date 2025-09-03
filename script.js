//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    const initialPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1,2,3,4])
        }, 3000);
    })

    initialPromise.then((arr) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const evens = arr.filter((n) => n % 2 === 0)
                outputDiv.textContent = evens
                resolve(evens)
            }, 1000)
        })
    }).then((evens) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubled = evens.map((n) => n * 2)
                outputDiv.textContent = doubled;
                resolve(doubled) 
            }, 2000);
        })
    }).catch((err) => {
        outputDiv.textContent = `Error ${err}`
    })
})