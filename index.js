// const clockDisplay = document.getElementsByClassName('clock')[0];
const hourDisplay = document.getElementsByClassName("hour")[0];
const minuteDisplay = document.getElementsByClassName("minute")[0];
const secondDisplay = document.getElementsByClassName("second")[0];
const ampmDisplay = document.getElementsByClassName("ampm")[0];
// const nowWhatDisplay = document.getElementById("now-what");
// const wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

function updateClock() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let ampm = "ampminjs";

  // adding extra 0 before one char time
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  // filter ampm
  if (hour < 12) {
    ampm = "AM";

    // when hour is 0 or midnight
    if (hour == 0) {
      hour = 12;
    }
    // when hour is 0 or midnight
    if (hour == 0) {
      hour = 12;
    }
  } else if (hour == 12) {
    ampm = "PM";
  } else {
    hour = eval(`${hour} - 12`);
    ampm = "PM";
  }

  // Display Time in HTML
  hourDisplay.innerText = `${hour}`;
  minuteDisplay.innerText = `${minute}`;
  secondDisplay.innerText = `${second}`;
  ampmDisplay.innerText = `${ampm}`;
}

// Updating time with 1 second interval
setInterval(() => {
  updateClock();
}, 1000);

// wakeUpTimeSelector.addEventListener("change", () => {
//   const hour = new Date().getHours();

//   let selectedTime = wakeUpTimeSelector.value;

//   if (selectedTime == 0 && hour >= 0 && hour < 6) {
//     nowWhatDisplay.innerText = "Shala Ghuma";
//   } else if (selectedTime == 6 && hour >= 6 && hour < 12) {
//     nowWhatDisplay.innerText = "Shala Bajare giye Kena kata kor";
//   } else if (selectedTime == 12 && hour >= 12 && hour < 18) {
//     nowWhatDisplay.innerText = "Khela korte jabi ki na bol";
//   } else if (selectedTime == 18 && hour >= 18 && hour <= 23) {
//     nowWhatDisplay.innerText = "Boi niye boi, na hole khobor ache";
//   } else if (selectedTime == -1) {
//     nowWhatDisplay.innerText = "Select an Option";
//   }
// });
