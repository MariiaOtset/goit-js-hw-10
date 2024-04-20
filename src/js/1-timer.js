import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const input = document.querySelector('input[id="datetime-picker"]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
const button = document.querySelector("button");
button.addEventListener("click", onClick);
button.disabled = true;

let userSelectedDate;
let currentTime = "";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];
      
      if (userSelectedDate.getTime() <= Date.now()) {
          button.disabled = true;
          iziToast.error({
              title: "Error",
              message: "Please choose a date in the future",
          });
} else {
    button.disabled = false;
}},
};

flatpickr('#datetime-picker', options);

function onClick(event) {
    if (userSelectedDate && currentTime === "") {
        button.disabled = true;
        const timerInterval = setInterval(() => {
            currentTime = userSelectedDate.getTime() - Date.now();
            let result = convertMs(currentTime);
            days.textContent = addLeadingZero(result.days);
            hours.textContent = addLeadingZero(result.hours);
            minutes.textContent = addLeadingZero(result.minutes);
            seconds.textContent = addLeadingZero(result.seconds);
            if (currentTime < 1000) {
                clearInterval(timerInterval);
        }
    }, 1000);
    } else {
        button.disabled = true;
   }
};


function addLeadingZero(value) {
  if (value <= 9) {
    return String(value).padStart(2, '0');
  }
  return value;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}