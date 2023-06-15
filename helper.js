function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  module.exports.isValidDate = (day, month, year) => {
    if (year < 1 || year > 9999) {
        return false;
      }
    
      if (month < 1 || month > 12) {
        return false;
      }
    
      if (day < 1) {
        return false;
      }
    
      if (month === 2) {
        if (isLeapYear(year)) {
          return day <= 29;
        } else {
          return day <= 28;
        }
      }
    
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return day <= daysInMonth[month - 1];
  };