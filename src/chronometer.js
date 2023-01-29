class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback){
    // ... your code goes here
    this.intervalId = setInterval(() => { this.currentTime++;},1000);
    setInterval(() => {if (typeof printTimeCallback == "function") printTimeCallback();},1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value.toString().length == 2) return value.toString();
    return "0" + value.toString()
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
   let minuts = this.computeTwoDigitNumber(this.getMinutes());
   let seconds = this.computeTwoDigitNumber(this.getSeconds());
   return `${minuts}:${seconds}`;
  }
}
