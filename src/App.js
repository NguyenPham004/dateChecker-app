import './App.css';
import React, {useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

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

function isValidDate(day, month, year) {
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
}

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showResult, setShowResult] = useState(false);
  // const [isValidDay, setIsValidDay] = useState(true);
  // const [isValidMonth, setIsValidMonth] = useState(true);
  // const [isValidYear, setIsValidYear] = useState(true);

  const handleCheckValidity = () => {
    if (day === '' && month === '' && year === '') {
      setErrorMessage('Please enter a complete date.')
      setShowResult(true);
      return;
    }

    if (day === '') {
      setErrorMessage('Please enter a complete day.');
      setIsValid(false);
      setShowResult(true);
      return;
    }

    if (month === '') {
      setErrorMessage('Please enter a complete month.');
      setIsValid(false);
      setShowResult(true);
      return;
    }

    if (year === '') {
      setErrorMessage('Please enter a complete year.');
      setIsValid(false);
      setShowResult(true);
      return;
    }

    const isValid = isValidDate(parseInt(day), parseInt(month), parseInt(year));
    setIsValid(isValid);
    setShowResult(true);
  };

  const handleClear = () => {
    setDay('');
    setMonth('');
    setYear('');
    setIsValid(null);
    setShowResult(false);
    setErrorMessage('');
  };

  return (
    <div className='form-box'>
      <form className='form'>
        <span className='title'>Date Time Checker</span>
        <div className='form-container'>
            <input type="text" value={day} placeholder='Day' onChange={(e) => setDay(e.target.value)} />
        </div>

        <div className='form-container'>            
            <input type="text" value={month} placeholder='Month' onChange={(e)  => setMonth(e.target.value)} />
        </div>

        <div className='form-container'>
            <input type="text" value={year} placeholder='Year' onChange={(e)  => setYear(e.target.value)} />
        </div>
        <div>
          <button type='button' onClick={handleCheckValidity} >Check</button>
          <button type='button' onClick={handleClear} >Clear</button>
        </div>
          <div className='form-container'>
          {/* {showResult && (
            <p>{isValid ? `The date is ${day}/${month}/${year}.` : 'The date is invalid.'}</p>
          )} */}
          {showResult && (
            <p>
              {isValid ? `The date is valid.` 
              : errorMessage || 'The date is invalid.'}
            </p>  
          )}
          </div>
      </form>
    </div>
  );
}

export default App;

