 // To get the current Time stamp

currentTimeStamp = (): number => {
    return Math.round((new Date().getTime()) / 1000);
  }

// to calculate exact age from a YYYY-MM-DD format
type DateOfBirth = string; // Assuming Date of Birth is a string in "YYYY-MM-DD" format

interface Age {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateExactAge(dob: DateOfBirth): Age {
  const today = new Date();
  const birthDate = new Date(dob);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  let hours = today.getHours() - birthDate.getHours();
  let minutes = today.getMinutes() - birthDate.getMinutes();
  let seconds = today.getSeconds() - birthDate.getSeconds();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
    const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days = daysInLastMonth - lastMonth.getDate() + today.getDate();
    months--;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

  return { years, months, days, hours, minutes, seconds };
}

const dob = '1990-01-30';
const exactAge = calculateExactAge(dob);
console.log(`Exact Age: ${exactAge.years} years, ${exactAge.months} months, ${exactAge.days} days, ${exactAge.hours} hours, ${exactAge.minutes} minutes, ${exactAge.seconds} seconds`);
