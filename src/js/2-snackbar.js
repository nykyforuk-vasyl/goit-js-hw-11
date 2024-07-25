import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    const delayInput = document.querySelector('input[name="delay"]');
    const stateInput = document.querySelector('input[name="state"]:checked');
    
    const delay = Number(delayInput.value);
    const state = stateInput.value;

    createPromise(delay, state)
    .then((delay) => {
    iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        });
    })
    .catch((delay) => {
    iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        });
    });
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (state === 'fulfilled') {
        resolve(delay);
    } else {
        reject(delay);
    }
    }, delay);
    });
}