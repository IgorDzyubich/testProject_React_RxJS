import * as Rx from 'rxjs';

let interval
let secCount = 0
let minCount = 0
let hourCount = 0

const innerValue = (value) => {
  return value < 10 ? `0${value}` : value
}

const checkValue = (secValue, minValue, hourValue) => {
  if (secValue > 59) {
    minCount++
    secCount = 0
  }
  if (minValue > 59) {
    hourCount++
    minCount = 0
  }
  if (hourValue > 59) {
    hourCount = 0
  }
}

const startFunc = () => {
      document.querySelector('.sec').innerHTML = innerValue(secCount)
      document.querySelector('.min').innerHTML = innerValue(minCount)
      document.querySelector('.hour').innerHTML = innerValue(hourCount)
      checkValue(secCount, minCount, hourCount)
      secCount++
}

const observable = new Rx.Observable(function subscribe(subscriber) {
  interval = setInterval(() => {
    subscriber.next(secCount)
  }, 1000);
})

const start = (e) => {
  observable.subscribe(startFunc)
}

const stop = () => {
  clearInterval(interval)
  reset()
}

const clear = () => {
  clearInterval(interval)
}

const wait = (e) => {
  e.target.addEventListener('click', clear)
  setTimeout(() => {
    e.target.removeEventListener('click', clear)
  }, 300)
}

const reset = () => {
  secCount = 0
  minCount = 0
  hourCount = 0
  document.querySelector('.sec').innerHTML = innerValue(secCount)
  document.querySelector('.min').innerHTML = innerValue(minCount)
  document.querySelector('.hour').innerHTML = innerValue(hourCount)
}

export {wait, start, stop, reset}