class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {this.currentTime++},10);
    setInterval(() => {if(typeof printTimeCallback === 'function') printTimeCallback()},10);
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime/100) % 60;

  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value.toString().length == 2) return value.toString();
    return "0" + value.toString();
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minuts = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minuts}:${seconds}:${centiseconds}`;
  }
}
