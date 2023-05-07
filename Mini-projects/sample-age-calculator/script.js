let dayInputElement = document.getElementById('day');
let monthInputElement = document.getElementById('month');
let yearInputElement = document.getElementById('year');
let buttonElement = document.getElementsByTagName('button')[0];

let yearSpanElement = document.getElementById('year-span');
let monthSpanElement = document.getElementById('month-span');
let daySpanElement = document.getElementById('day-span');

let validDaySpan = document.getElementById('valid-day');
let validMonthSpan = document.getElementById('valid-month');
let validYearSpan = document.getElementById('valid-year');

dayInputElement.addEventListener('change', isDayValid);
monthInputElement.addEventListener('change', isMonthValid);
yearInputElement.addEventListener('change', isYearValid);

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

function isDayValid() {
  if (parseInt(dayInputElement.value) > 31) {
    dayInputElement.style.borderColor = 'red';
    validDaySpan.style.visibility = 'visible';
  } else {
    dayInputElement.style.borderColor = 'rgb(201, 201, 201)';
    validDaySpan.style.visibility = 'hidden';
  }
}
function isMonthValid() {
  if (parseInt(monthInputElement.value) > 12) {
    monthInputElement.style.borderColor = 'red';
    validMonthSpan.style.visibility = 'visible';
  } else {
    monthInputElement.style.borderColor = 'rgb(201, 201, 201)';
    validMonthSpan.style.visibility = 'hidden';
  }
}
function isYearValid() {
  if (parseInt(yearInputElement.value) > year) {
    yearInputElement.style.borderColor = 'red';
    validYearSpan.style.visibility = 'visible';
  } else {
    yearInputElement.style.borderColor = 'rgb(201, 201, 201)';
    validYearSpan.style.visibility = 'hidden';
  }
}

buttonElement.addEventListener('click', calculate);
function calculate() {
  let currentDay = dayInputElement.value - day;
  if (currentDay < 0) {
    let surplus = day - dayInputElement.value;
    currentDay = 30 - surplus;
    month--;
  }

  let currentMonth = monthInputElement.value - month;
  if (currentMonth < 0) {
    let surplus = day - dayInputElement.value;
    currentMonth = 12 - surplus;
    year--;
  } else if ((currentMonth = 12)) {
    currentMonth = 0;
    year++;
  }
  let currentYear = year - yearInputElement.value;

  console.log(currentMonth);

  yearSpanElement.innerHTML = `${currentYear}`;
  monthSpanElement.innerHTML = `${currentMonth}`;
  daySpanElement.innerHTML = `${currentDay}`;
}
