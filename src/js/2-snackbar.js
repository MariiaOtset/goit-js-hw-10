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
    const { delay, state } = formData;
    
    createPromise(state === 'fulfilled', delay)
        .then((delay) => {
            iziToast.success({ message: `Fulfilled promise in ${delay}ms`, position: "topRight" });
        })
        .catch((delay) => {
            iziToast.error({ message: `Rejected promise in ${delay}ms`, position: 'topRight' })
        });
            form.reset();
};

 function createPromise(isFulfilled, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) {
          resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
