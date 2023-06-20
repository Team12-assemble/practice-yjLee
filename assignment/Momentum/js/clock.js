const clock = document.getElementById("clock");

const display = (time) => {
  return time < 10 ? `0${time}` : time;
};
const getCurrentTime = () => {
  const date = new Date();
  clock.innerHTML =
    display(date.getHours()) +
    ":" +
    display(date.getMinutes()) +
    ":" +
    display(date.getSeconds());
};

getCurrentTime();
setInterval(getCurrentTime, 1000);
