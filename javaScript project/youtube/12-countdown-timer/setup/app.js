const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 2, 23, 14, 2, 0)

let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 14, 6,0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
let month = futureDate.getMonth()
month = months[month]
let date = futureDate.getDate()

let days = futureDate.getDay()
days = weekdays[days]
console.log(futureDate.getDay())

giveaway.textContent = `giveaway ends on ${days} ${month} ${date} ${year} ${hours}:${minutes}am`
console.log(futureDate)


const futureTime = futureDate.getTime()
console.log(futureTime)
var remainingTimes = setInterval(function () {

  var today = new Date().getTime()
  var t = futureTime - today
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h
  let remaining = t
  let remainingDays
  let remainingHours
  let remainingMinutes
  let remainingSecs

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const minutes = 60 * 1000
  const seconds = 1000
 
  remainingDays = Math.floor(remaining / oneDay)
  remaining = remaining % oneDay
  remainingHours = Math.floor(remaining / oneHour)
  remaining = remaining % oneHour
  remainingMinutes = Math.floor(remaining / minutes)
  remaining = remaining % minutes
  remainingSecs = Math.floor(remaining / seconds)

  // console.log(remainingDays, remainingHours, remainingMinutes, remainingSecs)
  const values = [remainingDays, remainingHours, remainingMinutes, remainingSecs]

  function formate(item){
    if (item < 10){
      return (item  = `0${item}`)
    }else{
      return item
    }
  }

  items.forEach(function(item, index) {
    item.innerHTML = formate(values[index])
  })

  if(t < 0){
    clearInterval(remainingTimes)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has already expired</h4>`
  }

}, 1000)

