import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    
    const formData = {
        delay: event.target.elements.delay.value,
        state: event.target.elements.state.value
    };
    
    createPromise(formData)
        .then(data => iziToast.success({ message: data, position: "topRight" }))
        .catch(error => iziToast.error({ message: error, position: 'topRight' }));
    form.reset();
};

function createPromise({ delay, state }) {
    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            }
            else {
                reject(`Rejected promise on ${delay}ms`);
            }
        }, delay);
    });
    return newPromise;
}
