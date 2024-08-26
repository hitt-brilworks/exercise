// Exercise:
// Rewrite stopwatch program used in exercise 21 using prototype inheritance

const StopWatch = {
  timer: 0,
  timerStatus: "stop",
  intervalId: null,

  start() {
    if (this.timerStatus === "start") {
      alert("Timer is already started!");
      return;
    }
    this.timerStatus = "start";
    this.intervalId = setInterval(() => {
      this.timer++;
    }, 1000);
    alert("Timer is started!");
  },
  stop() {
    if (this.timerStatus === "stop") {
      alert("Timer is not started!");
      return;
    }
    this.timerStatus = "stop";
    clearInterval(this.intervalId);
    alert("Timer is stopped!");
  },
  duration() {
    if (this.timerStatus === "stop" || this.timer === 0) {
      alert("Timer is not running!");
      return;
    }
    const hours = Math.floor(this.timer / 3600);
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer;
    alert(`Duration: ${hours} Hours ${minutes} Minutes ${seconds} Seconds`);
  },
};

const startTimer = document.getElementById("start");
const stopTimer = document.getElementById("stop");
const durationTime = document.getElementById("duration");

const obj = Object.create(StopWatch);

startTimer.addEventListener("click", () => {
  obj.start();
});

stopTimer.addEventListener("click", () => {
  obj.stop();
});

durationTime.addEventListener("click", () => {
  obj.duration();
});
